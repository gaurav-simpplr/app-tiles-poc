import { Table, Cell, Row } from "@simpplr/athena-ui";
import { Registry } from "../registry";

export const TableRow = (props: any) => {
  const { cells } = props;

  if (!cells) return null;

  return (
    <Row {...props}>
      {cells.map((item, index) => {
        const Component = Registry[item.type];
        if (!Component) return null;

        return <Component key={index} {...item} />;
      })}
    </Row>
  );
};
