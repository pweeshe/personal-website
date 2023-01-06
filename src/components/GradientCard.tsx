import cn from "classnames";
import Link from "next/link";
import React from "react";

interface GradientCardType {
  title: string;
  href?: string;
  gradient?: string;
  desc?: string;
}

const GradientCard = ({
  title,
  href = "",
  gradient = "",
  desc = "",
}: GradientCardType) => {
  return (
    <div
      className={cn(
        "transform cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.01]",
        "w-full rounded-xl bg-gradient-to-r p-1 md:w-1/3",
        gradient,
        "h-auto"
      )}
    >
      <Link href={href}>
        <div className="flex h-full flex-col justify-between rounded-lg bg-black p-4">
          <div className="flex flex-col justify-between">
            <h3 className="mb-2 w-full w-fit text-lg font-medium tracking-tight">
              {title}
            </h3>
            <h5 className="font-sm mb-6 w-full w-fit text-sm tracking-tight">
              {desc}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GradientCard;
