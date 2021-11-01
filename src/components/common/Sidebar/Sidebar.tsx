import React from "react";
import { AppLink } from "src/components/atoms/AppLink";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  return (
    <div className="tw-flex tw-items-start tw-flex-col tw-w-48 tw-h-full tw-shadow-inner tw-bg-gray-300">
      <div className="tw-p-4 tw-text-2xl tw-text-black tw-uppercase tw-font-extrabold">Draft</div>

      <div className="tw-flex tw-flex-col tw-items-start tw-space-y-3">
        <AppLink href="/">Home</AppLink>
        <AppLink href="/projects">Projects</AppLink>
      </div>
    </div>
  );
}
