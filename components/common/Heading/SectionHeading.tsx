import React from "react";

interface SectionHeadingProps {
  title: string;
  subTitle?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

const SectionHeading = ({
  title,
  subTitle,
  titleClassName,
  subTitleClassName,
}: SectionHeadingProps) => {
  return (
    <>
      <h2 className={`text-2xl font-semibold mb-2 ${titleClassName}`}>
        {title}
      </h2>
      {subTitle && (
        <p className={`text-md text-gray-400 ${subTitleClassName}`}>
          {subTitle}
        </p>
      )}
    </>
  );
};

export default SectionHeading;
