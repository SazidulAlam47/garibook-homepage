import {
    cloneElement,
    forwardRef,
    isValidElement,
    type HTMLAttributes,
    type ReactNode,
} from "react";
import { cn } from "../../utils/cn";

type ContainerProps = {
    asChild?: boolean;
    children: ReactNode;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ asChild, children, className, ...props }, ref) => {
        const mergedClassName = cn(
            "w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8",
            className,
        );

        if (asChild && isValidElement(children)) {
            return cloneElement(children, {
                ...props,
                className: cn(
                    mergedClassName,
                    (children.props as { className?: string }).className,
                ),
            } as object);
        }

        return (
            <div
                ref={ref}
                className={mergedClassName}
                {...props}
            >
                {children}
            </div>
        );
    },
);

export default Container;
