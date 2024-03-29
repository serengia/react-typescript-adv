import { type ReactNode, type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type LinkProps = {
  el: "link";
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | LinkProps) {
  if (props.el === "button") {
    return <button {...props}>{props.children}</button>;
  }
  return (
    <a href="https://sawabox.com" {...props}>
      {props.children}
    </a>
  );
}
