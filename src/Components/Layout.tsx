import { Spacing } from "@simpplr/athena-ui";
import React from "react";
import { Registry } from "../registry";

export const Layout = (props) => {
  const { items } = props;

  if (!items) return null;

  return (
    <Spacing {...props}>
      {items.map((item, index) => {
        const Component = Registry[item.type];
        if (!Component) return null;

        return <Component key={index} {...item} />;
      })}
    </Spacing>
  );
};
