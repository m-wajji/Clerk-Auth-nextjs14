import { SignUp } from "@clerk/nextjs";
import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full py-10">
      <SignUp />
    </div>
  );
};

export default Signup;
