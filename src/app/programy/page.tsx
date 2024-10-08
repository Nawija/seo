import dynamic from "next/dynamic";
import React from "react";
import { APPS } from "@/constants/Apps";

const DynamicAppCard = dynamic(() => import("./_components/AppCards"), {
    ssr: false,
    loading: () => <SkeletonAppCard />,
});

function SkeletonAppCard() {
    return (
        <div className="relative p-2 border rounded bg-foreground text-center group overflow-hidden">
            <div className="h-80 w-full bg-white/10 object-cover group-hover:scale-95 transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 bg-[#1111116a] backdrop-blur-3xl w-full p-4 flex items-center justify-center flex-col">
                <div className="w-[30%] z-10 uppercase font-bold tracking-widest h-3 my-4 bg-white/10 rounded-lg" />
                <p className="mb-4 w-10/12 h-3 bg-white/10 rounded-lg" />
                <div className="mr-auto w-full">
                    <div className="bg-white/20 w-20 h-7 mx-auto rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <div className="anim-opacity">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 wrapper">
                {APPS.map((app, index) => {
                    return (
                        <DynamicAppCard
                            key={index}
                            href={app.href}
                            title={app.title}
                            desc={app.desc}
                            imgUrl={app.imgUrl}
                        />
                    );
                })}
            </div>
        </div>
    );
}
