"use client";

import { Link } from "next-view-transitions";
import { AppThemeSwitcher } from "../theme";

export const Footer = ({ showBuildInfo = true }) => {
  return (
    <footer className="border-border flex flex-col gap-2 border-t py-2">
      <div className="flex justify-between">
        <div className="flex gap-2 text-sm">
          {showBuildInfo && (
            <p className="text-xs text-muted">
              Built with{" "}
              <Link href="https://nextjs.org" className="transition-opacity hover:opacity-50" target="_blank">
                Next.js
              </Link>
              .
            </p>
          )}
        </div>
        <AppThemeSwitcher />
      </div>
    </footer>
  );
};
