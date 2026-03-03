import { type ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full mx-auto px-4 md:px-6 lg:px-8 max-w-full lg:max-w-container">
      {children}
    </div>
  );
}
