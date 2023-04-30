import { Header } from "../header";
import { Footer } from "../footer";
import React from "react";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
