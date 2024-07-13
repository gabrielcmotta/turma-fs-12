import { Wrapper } from "./style";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
