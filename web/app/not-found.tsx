import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-lg w-full mx-4 bg-white/80 backdrop-blur shadow-overlay rounded-lg p-8 text-center">
        <AlertCircle
          className="w-12 h-12 text-red-500 mx-auto mb-4"
          aria-hidden
        />
        <p className="text-6xl font-bold text-slate-800 mb-2">404</p>
        <h1 className="text-xl font-semibold text-slate-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
