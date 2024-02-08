import { Table, Cell, Row } from "@simpplr/athena-ui";
import { Registry } from "../registry";

export const TableBlock = (props: any) => {
  const { rows } = props;

  if (!rows) return null;

  return (
    <Table {...props}>
      {rows.map((item, index) => {
        const Component = Registry[item.type];
        if (!Component) return null;

        return <Component key={index} {...item} />;
      })}
    </Table>
  );
};
