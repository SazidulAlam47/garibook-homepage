import type { HTMLAttributes, ReactNode } from "react";

export type ContainerProps = {
    asChild?: boolean;
    children: ReactNode;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;
