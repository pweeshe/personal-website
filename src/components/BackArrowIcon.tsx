import React from "react";

interface svgType {
  className?: string;
}

const BackArrowIcon = ({ className }: svgType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      transform="rotate(180 0 0)"
      className={className}
    >
      <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
    </svg>
  );
};

export default BackArrowIcon;
