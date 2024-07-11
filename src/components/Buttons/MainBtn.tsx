import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative rounded-lg bg-accent-primary px-4 py-1 text-xs lg:text-sm font-semibold transition-colors text-background-primary",
                className
            )}
        >
            {children}
        </button>
    );
}
