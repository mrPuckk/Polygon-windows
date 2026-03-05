"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
type CustomerTag =
  | "thermal"
  | "sound"
  | "architecture"
  | "budget"
  | "daylight"
  | "slim_profile";
type GlazingType = "IGU" | "laminated";
type LanguagePreference = "native_english" | "english" | "chinese" | "vietnamese";

type ProfileOption = {
  id: string;
  name: string;
  description: string;
  focusScores: Partial<Record<CustomerTag, number>>;
  windowPrice: number;
  doorPrice: number;
};

type ProfileWithPricing = ProfileOption & {
  totalWindowsPrice: number;
  totalDoorsPrice: number;
  totalPrice: number;
  focusTagLabel: string;
  focusTagTone: "best" | "enhanced" | "standard";
};

type SectionId = "projectDetails" | "projectSize" | "priorities" | "quotation";
type SectionState = "active" | "completed" | "inactive";

type SectionCardProps = {
  state: SectionState;
  children: ReactNode;
};

function SectionCard({ state, children }: SectionCardProps) {
  const base =
    "relative rounded-md border transition-all duration-300 ease-out transform focus-within:ring-1 focus-within:ring-accent/60";

  const stateClasses =
    state === "active"
      ? "border-accent bg-background shadow-lg shadow-accent/10 scale-[1.01]"
      : state === "completed"
      ? "border-border/70 bg-background scale-[0.995] opacity-95"
      : "border-border/60 bg-secondary/20 scale-[0.99] opacity-80";

  const cursor =
    state === "inactive" || state === "completed"
      ? "cursor-pointer hover:border-accent/60 hover:opacity-100"
      : "";

  return (
    <section
      className={`${base} ${stateClasses} ${cursor}`}
      aria-current={state === "active" ? "step" : undefined}
      aria-disabled={state === "inactive" ? true : undefined}
    >
      {state === "completed" && (
        <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-800">
          <span
            className="inline-block h-3 w-3 rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          <span>Completed</span>
        </div>
      )}
      {state === "inactive" && (
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground/80">
          Locked
        </span>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}

const FOCUS_LABELS: Record<CustomerTag, string> = {
  thermal: "Thermal comfort",
  sound: "Acoustic comfort",
  architecture: "Architecture / aesthetics",
  budget: "Budget",
  daylight: "Natural light",
  slim_profile: "Slim profiles / views",
};

const GLAZING_LABELS: Record<GlazingType, string> = {
  IGU: "IGU (double glazing)",
  laminated: "Laminated",
};

const LANGUAGE_LABELS: Record<LanguagePreference, string> = {
  native_english: "Native English",
  english: "English",
  chinese: "Chinese",
  vietnamese: "Vietnamese",
};

const GLAZING_MULTIPLIER: Record<GlazingType, number> = {
  IGU: 1,
  laminated: 1.15,
};

const SALES_EMAIL = "sales@polygonwindows.com.au";
const SALES_PHONE = "+61 0413486630";
const PROJECT_DETAILS_STORAGE_KEY = "polygon_project_details_v1";

const PROFILE_OPTIONS: ProfileOption[] = [
  {
    id: "quietline-plus",
    name: "QuietLine Plus",
    description:
      "High acoustic performance for busy and urban sites.",
    focusScores: {
      sound: 3,
      thermal: 2,
      architecture: 2,
      budget: 1,
      daylight: 1,
      slim_profile: 1,
    },
    windowPrice: 2100,
    doorPrice: 2800,
  },
  {
    id: "thermaglide-thermo",
    name: "ThermaGlide Thermo",
    description:
      "Balanced thermal and acoustic performance for most homes.",
    focusScores: {
      thermal: 3,
      sound: 2,
      architecture: 2,
      budget: 2,
      daylight: 2,
      slim_profile: 2,
    },
    windowPrice: 1850,
    doorPrice: 2550,
  },
  {
    id: "essential-line",
    name: "Essential Line",
    description:
      "Simple, cost-efficient system that meets code.",
    focusScores: {
      budget: 3,
      thermal: 1,
      sound: 1,
      architecture: 1,
      daylight: 1,
      slim_profile: 1,
    },
    windowPrice: 1450,
    doorPrice: 2100,
  },
  {
    id: "slim-profile",
    name: "Slim Profile",
    description: "Minimal sightlines with a slim aluminium frame.",
    focusScores: {
      thermal: 2,
      sound: 1,
      architecture: 2,
      budget: 2,
      daylight: 2,
      slim_profile: 3,
    },
    windowPrice: 1950,
    doorPrice: 2650,
  },
];

export function PriceEstimator() {
  const [windows, setWindows] = useState<number | "">("");
  const [doors, setDoors] = useState<number | "">("");
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("NSW");
  const [selectedTags, setSelectedTags] = useState<CustomerTag[]>(["thermal"]);
  const [glazing, setGlazing] = useState<GlazingType>("IGU");
  const [language, setLanguage] = useState<LanguagePreference | null>(null);
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const totalWindows = typeof windows === "number" ? windows : 0;
  const totalDoors = typeof doors === "number" ? doors : 0;
  const totalUnits = totalWindows + totalDoors;

  const primaryTag: CustomerTag = selectedTags[0] ?? "thermal";
  const hasProjectDetails =
    name.trim() !== "" &&
    postcode.trim() !== "" &&
    city.trim() !== "" &&
    state.trim() !== "";

  const profilesWithPricing = useMemo<ProfileWithPricing[]>(() => {
    if (!totalUnits) {
      return PROFILE_OPTIONS.map((profile) => ({
        ...profile,
        totalWindowsPrice: 0,
        totalDoorsPrice: 0,
        totalPrice: 0,
        focusTagLabel: "",
        focusTagTone: "standard",
      }));
    }

    const scores = PROFILE_OPTIONS.map(
      (p) => p.focusScores[primaryTag] ?? 0
    );
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);

    return PROFILE_OPTIONS.map((profile) => {
      const totalWindowsPrice = totalWindows * profile.windowPrice;
      const totalDoorsPrice = totalDoors * profile.doorPrice;
      const baseTotal = totalWindowsPrice + totalDoorsPrice;
      const totalPrice = Math.round(baseTotal * GLAZING_MULTIPLIER[glazing]);
      const score = profile.focusScores[primaryTag] ?? 0;

      let focusTagTone: ProfileWithPricing["focusTagTone"] = "standard";
      let focusTagLabel = "Standard option";

      if (score === maxScore && maxScore > 0) {
        focusTagTone = "best";
        focusTagLabel = "Best match for your priorities";
      } else if (score > minScore) {
        focusTagTone = "enhanced";
        focusTagLabel = "Good match";
      }

      return {
        ...profile,
        totalWindowsPrice,
        totalDoorsPrice,
        totalPrice,
        focusTagLabel,
        focusTagTone,
      };
    });
  }, [totalDoors, totalUnits, totalWindows, primaryTag, glazing]);

  const fromPrice = useMemo(() => {
    const nonZero = profilesWithPricing
      .map((p) => p.totalPrice)
      .filter((value) => value > 0);
    if (!nonZero.length) return null;
    return Math.min(...nonZero);
  }, [profilesWithPricing]);

  const canShowEstimate = totalUnits > 0 && hasProjectDetails;

  const canSubmitEmailQuote =
    canShowEstimate &&
    !!fromPrice &&
    contactEmail.trim() !== "" &&
    contactPhone.trim() !== "" &&
    language !== null;

  const sectionOrder: SectionId[] = [
    "projectDetails",
    "projectSize",
    "priorities",
    "quotation",
  ];

  const isSectionComplete = (section: SectionId): boolean => {
    switch (section) {
      case "projectDetails": {
        const trimmedName = name.trim();
        const trimmedPostcode = postcode.trim();
        const trimmedCity = city.trim();
        const trimmedState = state.trim();
        const postcodeIsNumeric =
          trimmedPostcode.length > 0 &&
          /^[0-9]{3,4}$/.test(trimmedPostcode);
        return (
          trimmedName.length > 0 &&
          trimmedPostcode.length > 0 &&
          trimmedCity.length > 0 &&
          trimmedState.length > 0 &&
          postcodeIsNumeric
        );
      }
      case "projectSize": {
        const windowsIsNumber =
          typeof windows === "number" &&
          !Number.isNaN(windows) &&
          windows >= 0;
        const doorsIsNumber =
          typeof doors === "number" &&
          !Number.isNaN(doors) &&
          doors >= 0;
        const units =
          (windowsIsNumber ? windows : 0) + (doorsIsNumber ? doors : 0);
        return (
          isSectionComplete("projectDetails") &&
          windowsIsNumber &&
          doorsIsNumber &&
          units > 0
        );
      }
      case "priorities": {
        return isSectionComplete("projectSize") && selectedTags.length > 0;
      }
      case "quotation": {
        const emailTrimmed = contactEmail.trim();
        const phoneTrimmed = contactPhone.trim();
        const emailLooksValid =
          emailTrimmed.length > 0 &&
          /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailTrimmed);
        return (
          isSectionComplete("priorities") &&
          language !== null &&
          emailTrimmed.length > 0 &&
          phoneTrimmed.length > 0 &&
          emailLooksValid &&
          !!fromPrice
        );
      }
      default:
        return false;
    }
  };

  const sectionCompletion: Record<SectionId, boolean> = {
    projectDetails: isSectionComplete("projectDetails"),
    projectSize: isSectionComplete("projectSize"),
    priorities: isSectionComplete("priorities"),
    quotation: isSectionComplete("quotation"),
  };

  const firstIncompleteSection: SectionId | null =
    sectionOrder.find((id) => !sectionCompletion[id]) ?? null;

  const getSectionState = (id: SectionId): SectionState => {
    if (!firstIncompleteSection) {
      // All sections complete: highlight the final submission section as active.
      return id === "quotation" ? "active" : "completed";
    }
    if (id === firstIncompleteSection) return "active";
    return sectionCompletion[id] ? "completed" : "inactive";
  };

  const handleEmailQuoteRequest = () => {
    if (!canSubmitEmailQuote || !fromPrice) return;
    const prioritiesLine =
      selectedTags.length > 0
        ? selectedTags.map((tag) => FOCUS_LABELS[tag]).join(", ")
        : "Not specified";
    const languageLine = language ? LANGUAGE_LABELS[language] : "Not specified";
    const subject = encodeURIComponent("Polygon Windows | Project quotation request");
    const body = encodeURIComponent(
      [
        `Approximate budget: $${fromPrice.toLocaleString()}`,
        "",
        `Name: ${name || "Not provided"}`,
        `Windows: ${totalWindows}`,
        `Doors: ${totalDoors}`,
        `Postcode: ${postcode || "Not provided"}`,
        `City/Suburb: ${city || "Not provided"}`,
        `State: ${state || "Not provided"}`,
        `Priorities: ${prioritiesLine}`,
        `Glazing: ${GLAZING_LABELS[glazing]}`,
        `Preferred language: ${languageLine}`,
        "",
        `Client email: ${contactEmail}`,
        `Client phone: ${contactPhone}`,
      ].join("\n")
    );
    window.location.href = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
  };

  // Load cached project details (per browser) on first render.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(PROJECT_DETAILS_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as {
        name?: string;
        postcode?: string;
        city?: string;
        state?: string;
      };
      if (parsed.name) setName(parsed.name);
      if (parsed.postcode) setPostcode(parsed.postcode);
      if (parsed.city) setCity(parsed.city);
      if (parsed.state) setState(parsed.state);
    } catch {
      // ignore corrupt cache
    }
  }, []);

  // Persist project details once fully filled so we can auto-fill for this user next time.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasProjectDetails) return;
    try {
      const payload = JSON.stringify({ name, postcode, city, state });
      window.localStorage.setItem(PROJECT_DETAILS_STORAGE_KEY, payload);
    } catch {
      // ignore storage failures
    }
  }, [hasProjectDetails, name, postcode, city, state]);

  const step1Disabled = !hasProjectDetails;

  return (
    <div className="space-y-8">
      <div className="scroll-mt-[var(--nav-height)]">
        <SectionCard state={getSectionState("projectDetails")}>
          <div className="p-4">
            <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground">
              PROJECT DETAILS
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-4">
              <label className="flex flex-col gap-1 text-xs">
                <span className="font-medium tracking-[0.18em] text-muted-foreground">
                  NAME
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs">
                <span className="font-medium tracking-[0.18em] text-muted-foreground">
                  POSTCODE
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                  placeholder="e.g. 2000"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs">
                <span className="font-medium tracking-[0.18em] text-muted-foreground">
                  CITY / SUBURB
                </span>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                  placeholder="e.g. Sydney"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs">
                <span className="font-medium tracking-[0.18em] text-muted-foreground">
                  STATE
                </span>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                >
                  <option value="NSW">NSW</option>
                </select>
              </label>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="scroll-mt-[var(--nav-height)]">
        <SectionCard state={getSectionState("projectSize")}>
          <div className="grid gap-4 bg-secondary/5 p-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)]">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground">
                STEP 1 — PROJECT SIZE
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                How many aluminium windows and doors are in this project?
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex flex-1 flex-col gap-1 text-xs">
                  <span className="font-medium tracking-[0.18em] text-muted-foreground">
                    WINDOWS
                  </span>
                  <input
                    type="number"
                    min={0}
                    value={windows}
                    onChange={(e) => {
                      const value = e.target.value;
                      setWindows(value === "" ? "" : Math.max(0, Number(value)));
                    }}
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={step1Disabled}
                    placeholder="e.g. 12"
                  />
                </label>
                <label className="flex flex-1 flex-col gap-1 text-xs">
                  <span className="font-medium tracking-[0.18em] text-muted-foreground">
                    DOORS
                  </span>
                  <input
                    type="number"
                    min={0}
                    value={doors}
                    onChange={(e) => {
                      const value = e.target.value;
                      setDoors(value === "" ? "" : Math.max(0, Number(value)));
                    }}
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={step1Disabled}
                    placeholder="e.g. 4"
                  />
                </label>
              </div>
              <p className="text-xs text-muted-foreground">
                Total openings:{" "}
                <span className="font-semibold text-foreground">
                  {totalUnits}
                </span>
              </p>
              {!hasProjectDetails && (
                <div className="mt-3 flex items-start gap-2 rounded-md border border-accent/40 bg-accent/5 px-3 py-2 text-xs">
                  <span className="mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
                    !
                  </span>
                  <p className="text-[11px] leading-snug text-foreground">
                    <span className="font-semibold">
                      Complete the project details
                    </span>{" "}
                    above to unlock this step and start sizing your project.
                  </p>
                </div>
              )}
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)]">
        <div className="scroll-mt-[var(--nav-height)]">
          <SectionCard state={getSectionState("priorities")}>
            <div className="bg-background p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground">
                    STEP 2 — CLIENT PRIORITY
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Pick up to three key priorities for this project.
                  </p>
                  {!canShowEstimate && (
                    <p className="mt-2 text-[11px] text-muted-foreground">
                      Complete the project size above to see tailored budget
                      ranges for each profile.
                    </p>
                  )}
                </div>
                <div className="mt-1 flex flex-col items-stretch gap-3">
                  <div className="rounded-md bg-secondary/20 px-2 py-2">
                    <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Priorities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(Object.keys(FOCUS_LABELS) as CustomerTag[]).map(
                        (key) => {
                          const isSelected = selectedTags.includes(key);
                          return (
                            <button
                              key={key}
                              type="button"
                              onClick={() =>
                                setSelectedTags((current) => {
                                  const exists = current.includes(key);
                                  if (exists) {
                                    return current.filter(
                                      (tag) => tag !== key
                                    );
                                  }
                                  if (current.length >= 3) {
                                    return current;
                                  }
                                  return [...current, key];
                                })
                              }
                              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${
                                isSelected
                                  ? "border-accent bg-accent text-accent-foreground"
                                  : "border-border bg-secondary/40 text-foreground hover:bg-secondary/60"
                              }`}
                            >
                              {FOCUS_LABELS[key]}
                            </button>
                          );
                        }
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 rounded-md bg-secondary/10 px-2 py-2">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Glazing
                    </span>
                    {(Object.keys(GLAZING_LABELS) as GlazingType[]).map(
                      (key) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setGlazing(key)}
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${
                            glazing === key
                              ? "border-accent bg-accent text-accent-foreground"
                              : "border-border bg-secondary/40 text-foreground hover:bg-secondary/60"
                          }`}
                        >
                          {GLAZING_LABELS[key]}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {profilesWithPricing.map((profile) => (
                  <article
                    key={profile.id}
                    className="flex flex-col justify-between rounded-md border border-border/70 bg-secondary/10 p-4"
                  >
                    <header className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold">
                          {profile.name}
                        </h3>
                        {profile.focusTagLabel && (
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                              profile.focusTagTone === "best"
                                ? "bg-emerald-100 text-emerald-900"
                                : profile.focusTagTone === "enhanced"
                                ? "bg-amber-100 text-amber-900"
                                : "bg-slate-100 text-slate-900"
                            }`}
                          >
                            {profile.focusTagLabel}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {profile.description}
                      </p>
                    </header>

                    <dl className="mt-4 space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-baseline justify-between">
                        <dt className="text-[11px] font-semibold text-foreground">
                          Approximate from
                        </dt>
                        <dd className="text-sm font-semibold text-foreground">
                          {canShowEstimate
                            ? `$${profile.totalPrice.toLocaleString()}`
                            : "—"}
                        </dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="scroll-mt-[var(--nav-height)]">
          <SectionCard state={getSectionState("quotation")}>
            <div className="flex flex-col gap-4 bg-secondary/10 p-4">
              <div>
                <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground">
                  STEP 3 - Get Your Exact Quotation
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Choose how you&apos;d like to continue with Polygon.
                </p>
                {!canShowEstimate && (
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    Complete the previous steps to unlock your exact quotation
                    and contact options.
                  </p>
                )}
              </div>

              <div className="rounded-md bg-background px-4 py-5">
                <div className="mb-5 space-y-2 text-xs">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Preferred Language
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Which language do you prefer so we can support you as much
                    as we can?
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(Object.keys(LANGUAGE_LABELS) as LanguagePreference[]).map(
                      (key) => {
                        const isSelected = language === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setLanguage(key)}
                            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${
                              isSelected
                                ? "border-accent bg-accent text-accent-foreground"
                                : "border-border bg-secondary/40 text-foreground hover:bg-secondary/60"
                            }`}
                          >
                            {LANGUAGE_LABELS[key]}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col gap-3 rounded-md border border-dashed border-border px-3 py-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        1. Get exact quotation
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Our team will contact you shortly and provide a
                        quotation within 24 hours.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs"
                      />
                      <input
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="Phone number"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleEmailQuoteRequest}
                      disabled={!canSubmitEmailQuote}
                      className="mt-1 inline-flex items-center justify-center rounded-md bg-accent px-3 py-2 text-[11px] font-medium tracking-[0.18em] text-accent-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      EMAIL MY QUOTE
                    </button>
                  </div>

                  <div className="flex flex-col justify-between gap-3 rounded-md border border-dashed border-border px-3 py-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        2. Speak With Our Team
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Talk through the project, see samples and options.
                      </p>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>
                        Phone:{" "}
                        <span className="font-medium text-foreground">
                          {SALES_PHONE}
                        </span>
                      </p>
                      <p>
                        Email:{" "}
                        <span className="font-medium text-foreground">
                          {SALES_EMAIL}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`tel:${SALES_PHONE.replace(/\s+/g, "")}`}
                        className="inline-flex flex-1 items-center justify-center rounded-md border border-border bg-secondary/40 px-3 py-2 text-[11px] font-medium tracking-[0.18em] text-foreground hover:bg-secondary/60"
                      >
                        CALL NOW
                      </a>
                      <a
                        href={`mailto:${SALES_EMAIL}`}
                        className="inline-flex flex-1 items-center justify-center rounded-md border border-border bg-secondary/40 px-3 py-2 text-[11px] font-medium tracking-[0.18em] text-foreground hover:bg-secondary/60"
                      >
                        EMAIL US
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
