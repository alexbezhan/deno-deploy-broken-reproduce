/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { LayoutProps } from "../utils/types/index.ts";

export default ({ children, ...customMeta }: LayoutProps) => {
  return (
    <div>
      {children}
    </div>
  );
};
