import React from "react";
import { AppLink } from "src/components/atoms/AppLink";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  return (
    <div className="tw-flex tw-items-start tw-flex-col tw-w-48 tw-h-full tw-shadow-inner tw-bg-gray-900">
      <div className="tw-p-4 tw-text-2xl tw-text-white tw-uppercase tw-font-extrabold">Draft</div>
      <div className="tw-flex tw-flex-col tw-items-start tw-space-y-3">
        <AppLink href="/" className="tw-text-white">
          Home
        </AppLink>
        <AppLink href="/projects" className="tw-text-white">
          Projects
        </AppLink>
      </div>
    </div>
  );
}
