"use client";

import Header from "./Header";
import { PropsWithChildren } from "react";

const BodyLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="mt-[15vh] overflow-hidden">{children}</main>
    </>
  );
};

export default BodyLayout;
