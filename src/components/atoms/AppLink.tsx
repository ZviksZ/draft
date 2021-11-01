import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LinkProps } from "next/dist/client/link";

export function AppLink(props: React.PropsWithChildren<LinkProps>) {
  const router = useRouter();

  return (
    <Link {...props}>
      <a className={router.pathname == props.href ? "tw-text-blue-300" : "tw-text-black"}>
        {props.children}
      </a>
    </Link>
  );
}
