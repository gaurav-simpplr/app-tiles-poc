import { Image } from "@simpplr/athena-ui";

export const ImageBlock = (props: any) => {
  const { src } = props;

  return <Image src={src} {...props} />;
};
