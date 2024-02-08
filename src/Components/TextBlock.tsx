import { Typography } from "@simpplr/athena-ui";

export const TextBlock = (props: any) => {
  const { text } = props;

  return <Typography {...props}>{text}</Typography>;
};
