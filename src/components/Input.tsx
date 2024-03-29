import { ComponentPropsWithoutRef } from "react";

type InputPros = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...otherProps }: InputPros) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps} />
    </p>
  );
}
