import React from "react";

interface SubHeaderProps {
  title: string;
    icon: string;
    children: React.ReactNode;
}

export const SubHeader = ({ title, icon, children }: SubHeaderProps) => {
  return (
    <div>
      <div className="flex gap-2 items-center text-xl mb-5">
        <i className={`${icon}`}></i>
        <p>{title}</p>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 text-secon">
        {children}
      </div>
    </div>
  );
};
