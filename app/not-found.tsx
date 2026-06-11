"use client"; // Required because we are using hooks for logging

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    // In Next.js, this will catch any route that triggers the notFound() function
    // or any URL that doesn't match a defined route.
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <div className="text-center">
        <h1 className="mb-4 font-syne text-6xl font-extrabold text-charcoal">404</h1>
        <p className="mb-6 font-mono text-xl text-warm-gray">
          Oops! This page doesn&apos;t exist.
        </p>
        
        {/* Use the Link component for internal navigation in Next.js */}
        <Link 
          href="/" 
          className="nav-cta inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}