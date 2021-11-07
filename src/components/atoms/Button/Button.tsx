import React from "react";
import classNames from "classnames";

export enum ButtonStyle {
  default = "default",
  transparent = "transparent",
  link = "link",
  secondary = "secondary",
  gray = "gray",
  green = "green",
  danger = "danger",
  cancel = "cancel",
  inverted = "inverted",
  lightGray = "lightGray",
}

export enum ButtonSize {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonVariant {
  pill = "pill",
  rounded = "rounded",
}

interface ButtonProps {
  style?: ButtonStyle;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick: React.MouseEventHandler<HTMLElement>;
  isDisabled?: boolean;
  testId?: string;
  type?: "button" | "submit";
  children: React.ReactNode;
}

export function Button({
  onClick,
  testId,
  style = ButtonStyle.default,
  size = ButtonSize.md,
  variant = ButtonVariant.pill,
  isDisabled,
  type = "button",
  children,
}: ButtonProps) {
  return (
    <button
      data-testid={testId}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className={classNames(
        "tw-relative",
        "tw-select-none tw-inline-block tw-border tw-whitespace-nowrap tw-overflow-ellipsis",
        "tw-transform active:tw-scale-95 focus:tw-ring-2 tw-max-w-full",
        {
          "tw-cursor-not-allowed": isDisabled,
          "tw-opacity-30": isDisabled,
        },
        {
          [ButtonVariant.pill]: "tw-rounded-full",
          [ButtonVariant.rounded]: "tw-rounded-lg",
        }[variant],
        {
          [ButtonSize.xs]: "tw-py-1 tw-px-1 tw-font-normal tw-text-xs",
          [ButtonSize.sm]: "tw-py-2 tw-px-4 tw-font-normal tw-text-sm",
          [ButtonSize.md]: "tw-py-2 tw-px-4 tw-font-semibold tw-text-md",
          [ButtonSize.lg]: "tw-py-3 tw-px-4 tw-font-semibold tw-text-lg",
          [ButtonSize.xl]: "tw-py-4 tw-px-5 tw-font-medium tw-text-xl",
        }[size],
        {
          [ButtonStyle.default]:
            "tw-bg-blue-500 tw-border-blue-500 tw-text-white hover:tw-bg-blue-600 hover:tw-border-blue-600 active:tw-border-blue-800 active:tw-bg-blue-800",
          [ButtonStyle.secondary]:
            "tw-bg-gray-900 tw-border-gray-900 tw-text-white hover:tw-bg-gray-800 hover:tw-border-gray-800 active:tw-bg-gray-900 active:tw-border-gray-900",
          [ButtonStyle.gray]:
            "tw-bg-gray-500 tw-border-gray-500 tw-text-white hover:tw-bg-gray-400 hover:tw-border-gray-400 active:tw-bg-gray-400 active:tw-border-gray-400",
          [ButtonStyle.cancel]:
            "tw-border-blue-500 tw-bg-white tw-text-mBlue hover:tw-border-blue-600 hover:tw-text-blue-600 active:tw-border-blue-800 active:tw-text-blue-800",
          [ButtonStyle.green]:
            "tw-border-green-500 tw-bg-green-500 hover:tw-bg-green-600 hover:tw-border-green-600 tw-text-white",
          [ButtonStyle.danger]:
            "tw-border-red-500 tw-bg-white tw-text-red-500 hover:tw-border-red-400 hover:tw-bg-red-400 hover:tw-text-white active:tw-border-red-600 active:tw-bg-red-600 active:tw-text-white",
          [ButtonStyle.transparent]: "tw-border-transparent hover:tw-backdrop-filter",
          [ButtonStyle.inverted]: "tw-border-gray-600 tw-text-white",
          [ButtonStyle.link]:
            "hover:tw-underline tw-border-transparent tw-text-blue-500  hover:tw-text-blue-600 active:tw-text-blue-800",
          [ButtonStyle.lightGray]:
            "tw-bg-gray-100 tw-border-gray-100 tw-text-mGray hover:tw-bg-gray-200 hover:tw-border-gray-200 active:tw-bg-gray-300 active:tw-border-gray-300",
        }[style],
      )}
    >
      {children}
    </button>
  );
}
