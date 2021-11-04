import React from "react";
import { Routes } from "enums/routes";
import { LinkProps } from "next/dist/client/link";
import { useRouter } from "next/router";
import { isChildrenPath } from "helpers";
import Link from "next/link";
import classNames from "classnames";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const router = useRouter();

  return (
    <div className="tw-flex tw-items-start tw-flex-col tw-w-48 tw-h-full tw-shadow-inner tw-bg-gray-900">
      <div className="tw-p-4 tw-text-2xl tw-text-white tw-uppercase tw-font-extrabold">Draft</div>
      <div className="tw-w-full tw-flex tw-flex-col tw-items-start tw-space-y-3">
        {Routes.map((route) => (
          <SidebarLink
            key={route.path}
            href={route.path}
            isActive={isChildrenPath(route.path, router.pathname)}
          >
            {route.name}
          </SidebarLink>
        ))}
      </div>
    </div>
  );
}

interface SidebarLinkProps extends React.PropsWithChildren<LinkProps> {
  href: string;
  testId?: string;
  isActive: boolean;
}

export function SidebarLink({ testId = "", href, isActive, ...props }: SidebarLinkProps) {
  return (
    <Link {...props} href={href}>
      <a
        className={classNames(" tw-px-4 tw-w-full", {
          "tw-text-white tw-w-full hover:tw-text-white": !isActive,
          "tw-bg-white tw-text-black hover:tw-text-black": isActive,
        })}
      >
        {props.children}
      </a>
    </Link>
  );
}
