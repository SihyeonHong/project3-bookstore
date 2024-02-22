import { FC, ReactNode } from "react";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
