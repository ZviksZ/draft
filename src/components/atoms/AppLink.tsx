import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LinkProps } from "next/dist/client/link";
import classNames from "classnames";

interface AppLinkProps extends React.PropsWithChildren<LinkProps> {
  className?: string;
  activeClassName?: string;
  testId?: string;
}

export function AppLink({
  className = "",
  activeClassName = "tw-text-blue-300",
  testId = "",
  ...props
}: AppLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === props.href;
  return (
    <Link {...props}>
      <a
        data-testId={testId}
        className={classNames("tw-text-black", className, isActive && activeClassName)}
      >
        {props.children}
      </a>
    </Link>
  );
}
