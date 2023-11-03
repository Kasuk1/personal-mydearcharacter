import { ReactNode } from "react";
import ContainerStyles from "./Container.styles";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};
