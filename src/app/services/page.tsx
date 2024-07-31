import { MainBtn } from "@/components/Buttons/MainBtn";
import { SecondBtn } from "@/components/Buttons/SecondBtn";
import Link from "next/link";
import React from "react";

const SERVICES = [
    {
        name: "creating websites",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore in tenetur.",
        url: "https://img.freepik.com/darmowe-zdjecie/reprezentacje-doswiadczenia-uzytkownika-i-projektu-interfejsu_23-2150104519.jpg?ga=GA1.1.1051382671.1720181044&semt=ais_hybrid",
        href: "/creating-websites",
    },
    {
        name: "UI/UX design",
        desc: "Lorem ipsum dolor consectetur adipisicing elit. Placeat inventore in tenetur.",
        url: "https://img.freepik.com/darmowe-wektory/zilustrowano-gradientowe-tlo-ui-ux_23-2149050182.jpg?ga=GA1.1.1051382671.1720181044&semt=ais_hybrid",
        href: "/ui-ux-design",
    },
    {
        name: "creating bot",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore in tenetur.",
        url: "https://img.freepik.com/darmowe-wektory/graident-ai-robot-wektorart_78370-4114.jpg?ga=GA1.1.1051382671.1720181044&semt=ais_hybrid",
        href: "/creating-bot",
    },
    {
        name: "API integration",
        desc: "Lorem ipsum dolor sit amet consectetur adipisici tenetur.",
        url: "https://img.freepik.com/darmowe-wektory/plaska-ilustracja-interfejsu-api_23-2149363700.jpg?ga=GA1.1.1051382671.1720181044&semt=ais_hybrid",
        href: "/api-Integration",
    },
];

export default function page() {
    return (
        <div className="wrapper">
            <h1 className="text-foreground-primary text-center text-2xl md:text-3xl lg:text-4xl py-12 lg:py-20 font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 px-2 pb-12">
                {SERVICES.map((service) => (
                    <Link
                        href={service.href}
                        className="p-10 flex items-start justify-start border border-border-primary hover:border-orange-200 transition-colors rounded-xl flex-col relative"
                    >
                        <img
                            className="w-12 h-12 transition-all rounded-full object-cover border-2 shadow-2xl shadow-orange-200 border-border-primary"
                            src={service.url}
                        />
                        <h2 className="capitalize text-foreground-primary py-2">
                            {service.name}
                        </h2>
                        <p>{service.desc}</p>
                    </Link>
                ))}
            </div>
            <div className="px-4 py-6 lg:py-10 max-w-screen-lg mx-auto">
                <div className="flex items-start justify-between pb-12">
                    <p className="text-foreground-primary lg:text-xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>
                    <SecondBtn>Show</SecondBtn>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 relative py-10">
                    <img
                        className="rounded-xl"
                        src="https://img.freepik.com/darmowe-wektory/gradientowa-ilustracja-api_23-2149379181.jpg?ga=GA1.1.1051382671.1720181044&semt=ais_hybrid"
                    />
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl text-foreground-primary font-medium">
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ut cum placeat harum consequuntur rerum,
                            reiciendis illo magnam, beatae quod animi nesciunt
                            error repellendus veniam inventore, suscipit at
                            blanditiis? Ipsam fuga voluptatibus non corrupti!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus reiciendis accusantium totam!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus reiciendis accusantium totam Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure, labore sapiente ea, assumenda magnam maxime officiis consectetur, quod maiores excepturi laudantium. Possimus.
                        </p>
                        <div className="flex items-center justify-start space-x-2">
                            <MainBtn>Info</MainBtn>
                            <SecondBtn>Contact</SecondBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
