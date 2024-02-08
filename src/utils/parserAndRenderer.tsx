import {Registry} from "../registry";

// Parsing and rendering the adaptive cards
export const parserAndRenderer = (schema: any) => {
    const pasredAndRenderedCard = schema.body.map((item: any) => {
      const Component = Registry[item.type];
      if (Component) {
        return <Component {...item} />;
      }
    });

    return pasredAndRenderedCard;
  };
