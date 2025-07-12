import Link from "next/link";
import React from "react";

interface TargetLinkProps {
  target: string;
children: React.ReactNode;
}

export const TargetLink = ({ target, children }: TargetLinkProps) => {
    return (
        <Link href={target} target="blank">
            { children }
        </Link>
    );
};