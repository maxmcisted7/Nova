"use client";

import Link from "next/link";

export const Contact = () => {
  return (
    <div className="mt-6">
      <h2 className="py-2 text-muted capitalize">Links</h2>
      <div className="border-border flex flex-col border-t">
        <Link
          href="mailto:contact@mcisted.com"
          className="border-border flex cursor-pointer justify-between border-b py-2"
        >
          <p className="transition-opacity hover:opacity-50">Email</p>
        </Link>
        <Link
          href="https://linkedin.com/in/maxmcisted"
          className="border-border flex cursor-pointer justify-between border-b py-2"
          target="_blank"
        >
          <p className="transition-opacity hover:opacity-50">LinkedIn</p>
        </Link>
        <div className="flex justify-between py-2 text-neutral-500">
          <p>CV</p>
        </div>
      </div>
    </div>
  );
};
