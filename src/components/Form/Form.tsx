import React from "react";

interface FormProps {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export function Form({ children, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="tw-flex tw-flex-col tw-w-full tw-p-4">
      {children}
    </form>
  );
}
