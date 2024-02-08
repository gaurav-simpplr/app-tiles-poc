import React from "react";
import { Registry } from "../registry";

export const Container = (props: any) => {
  const { items } = props;

  if (!items) return null;

  return (
    <div {...props}>
      {items.map((item, index) => {
        const Component = Registry[item.type];
        if (!Component) return null;

        return <Component key={index} {...item} />;
      })}
    </div>
  );
};
