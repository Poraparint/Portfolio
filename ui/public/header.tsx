import React from "react";

interface HeaderProps {
  title: string;
  children: React.ReactNode;
}

export const Header = ({ title, children }: HeaderProps) => {
  return (
    <div className="flex flex-col mt-4 text-lg">
      <h1 className="font-semibold text-2xl">{title}</h1>
      <hr className="mb-5 mt-2 border-main" />
      {children}
    </div>
  );
};
