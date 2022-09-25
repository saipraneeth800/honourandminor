import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PrivateRoute = ({ children }) => {
  console.log("Good to go");
  return (
    <>
      <Link>{children}</Link>
    </>
  );
};

export default PrivateRoute;
