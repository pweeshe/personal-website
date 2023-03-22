import Link from "next/link";
import React from "react";
import BackArrowIcon from "./BackArrowIcon";

const BackButton = () => {
  return (
    <Link href="/home">
      <div className="fixed left-12 top-12 flex items-center gap-2 rounded-xl bg-white/[.06] fill-white/[.2] px-4 py-2 font-medium text-white backdrop-blur-md hover:fill-white md:left-24">
        <BackArrowIcon />
        Home
      </div>
    </Link>
  );
};

export default BackButton;
