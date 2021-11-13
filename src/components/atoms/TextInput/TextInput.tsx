import classNames from "classnames";
import React, { ChangeEventHandler, ForwardedRef, forwardRef } from "react";

export interface TextInputProps {
  name: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  testId?: string;
  error?: string;
  type?: string;
  searchIcon?: boolean;
  theme?: "dark" | "light" | "borderless";
}

export default forwardRef(TextInput);

function TextInput(
  {
    testId,
    name,
    placeholder,
    label,
    isRequired = false,
    isDisabled = false,
    theme = "light",
    value,
    onChange,
    error,
    type = "text",
    ...props
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <>
      {label && (
        <div
          className={classNames("tw-font-medium tw-text-mGray tw-text-md tw-pl-2 tw-pb-1", {
            "tw-opacity-50": isDisabled,
          })}
        >
          {label}
        </div>
      )}
      <div className="tw-relative tw-flex tw-items-center">
        <input
          ref={ref}
          className={classNames("tw-block tw-w-full tw-rounded-md tw-border", {
            "focus:tw-border-mBlue focus:tw-ring-1": !isDisabled,
            "tw-opacity-50": isDisabled,
            "tw-border-mLightGray hover:tw-border-mGray": theme === "light",
            "tw-border-mLighterGray tw-bg-mLighterGray tw-py-3 focus:tw-ring-0 tw-ring-0 tw-outline-none focus:tw-border-mLighterGray":
              theme === "borderless",
            "focus:tw-bg-white tw-bg-white focus:tw-text-black tw-text-black tw-border-gray-800 focus:tw-border-gray-800":
              theme === "borderless" && value && value.length > 0,
            "tw-bg-gray-600 tw-border-gray-600 tw-placeholder-white tw-text-white hover:tw-border-gray-700":
              theme === "dark",
          })}
          data-testid={testId}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={true}
          required={isRequired}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
          type={type}
          {...props}
        />

        {error && (
          <span className="tw-absolute tw-bottom-0 tw-left-0 tw-transform tw-translate-y-full tw-font-medium tw-text-red-500 tw-text-sm tw-pt-1">
            {error}
          </span>
        )}
      </div>
    </>
  );
}
