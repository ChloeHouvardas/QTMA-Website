import React from "react";
import Image from "next/image";

type Props = {
    className?: string;
    children?: React.ReactNode;
    // width and height are in px and used as defaults (u can override with className)
    width?: number;
    height?: number;
};

export default function DecorativePatches({ children, className = "" }: Props) {
    return (
        <div className={`relative overflow-visible w-[500px] h-[500px] ${className}`}>
            <Image
                src="/assets/Visuals/QTMADecorativePatches.svg"
                alt="Decorative Patches"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 640px) 320px, 500px"
            />

            {children ? (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-3/4 h-auto flex items-center justify-center translate-y-6">{children}</div>
                </div>
            ) : null}
        </div>
    );
}