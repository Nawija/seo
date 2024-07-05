"use client";
import Lottie from "lottie-react";
import animationData from "../../public/heroAnim.json";
import Link from "next/link";

export default function Home() {
    return (
        <div className="">
            <section className="wrapper py-20 relative flex flex-col lg:flex-row  items-center justify-center">
                <div className="max-w-screen-sm text-center lg:text-start space-y-8">
                    <h1 className="text-xl lg:text-4xl font-medium ">
                        Loredolor sit amet{" "}
                        <span className="text-accent-primary">consectetur</span>{" "}
                        adipisicing soluta ad et modi debitis{" "}
                        <span className="text-accent-primary">magnam</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolore sit minus similique cum quaerat, ratione,
                        qui corporis consequuntur dicta voluptatem quos illo
                        fuga, corrupti velit.
                    </p>
                    <div className="space-x-4 py-4">
                      <Link href="/" className="py-2 px-4 border rounded-xl border-foreground-primary font-medium">Show info</Link>
                      <Link href="/" className="py-2 px-4 border rounded-xl border-accent-primary text-accent-primary font-medium">More</Link>
                    </div>
                </div>
                <Lottie
                    animationData={animationData}
                    className="flex justify-center items-center"
                    loop={true}
                />
            </section>
            <section className="py-20 bg-background-primary">
              <div className="wrapper">
                
              </div>
            </section>
        </div>
    );
}
