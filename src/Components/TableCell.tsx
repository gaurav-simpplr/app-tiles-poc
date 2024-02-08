import { Cell } from "@simpplr/athena-ui";
import { Registry } from "../registry";

export const TableCell = (props: any) => {
  const { items } = props;

  if (!items) return null;

  return (
    <Cell>
      {items.map((item, index) => {
        const Component = Registry[item.type];
        if (!Component) return null;

        return <Component key={index} {...item} />;
      })}
    </Cell>
  );
};
