import React from "react";
import Image from "next/image";
import Link from "next/link";

function Product() {
    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 mt-20">
                <div className="md:py-4">
                    <h1 className="text-3xl md:text-5xl leading-snug md:leading-tight">
                        Healthy inside <span className="text-regal-violet">fresh</span>{" "}
                        outside
                    </h1>
                </div>
                <div className="w-full md:w-3/4 md:py-4">
                    <p className="text-base md:text-lg">
                        Exercise is a very important need for our body. Health and <br />{" "}
                        fitness will be obtained if you can do regular exercise and <br />{" "}
                        run a healthy routine.
                    </p>
                </div>
                <div className="flex flex-col w-full md:w-3/4">
                    <div className="flex flex-row justify-center md:justify-start space-y-4 md:space-y-0 space-x-0 md:space-x-4 py-4">
                        <button
                            className="flex items-center justify-between w-full md:w-auto min-w-28 h-12 md:h-auto shadow-3xl bg-navy-blue text-white rounded-md p-2 md:p-3"
                            style={{ flexBasis: "calc(1.5 * 28rem)" }}
                        >
                            <span className="mr-2 md:mr-4">Get Started</span>
                            <img
                                src="/caretcircleright.png"
                                alt="caretright"
                                width="20"
                                height="20"
                                className="hidden md:inline"
                            />
                        </button>
                        <Link
                            href="#"
                            className="flex items-center justify-center w-full md:w-auto min-w-28 h-12 md:h-auto shadow-3xl text-navy-blue bg-white rounded-md p-1 md:p-3"
                            style={{ flexBasis: "28rem" }}
                        >
                            <img
                                src="/playright.png"
                                alt="playright"
                                width="20"
                                height="20"
                                className="hidden md:inline"
                            />
                            <span className="ml-2 md:ml-4">Learn more</span>
                        </Link>
                    </div>

                    <div class="py-10 space-y-3">
                        <p>Brands:</p>
                        <div class="flex flex-row justify-between">
                            {/* <!-- Nike --> */}
                            <div class="w-12 h-3.5 sm:w-14 sm:h-5 md:w-16 md:h-6">
                                <img
                                    src="/nike.png"
                                    alt="nike"
                                    class="object-cover w-full h-full"
                                />
                            </div>
                            {/* <!-- Adidas --> */}
                            <div class="w-14 h-9.5 sm:w-18 sm:h-12 md:w-20 md:h-13.5">
                                <img
                                    src="/addidas.png"
                                    alt="addidas"
                                    class="object-cover w-full h-full"
                                />
                            </div>
                            {/* <!-- Puma --> */}
                            <div class="w-20 h-16 sm:w-24 sm:h-19 md:w-32 md:h-25">
                                <img
                                    src="/puma.png"
                                    alt="puma"
                                    class="object-cover w-full h-full"
                                />
                            </div>
                            {/* <!-- Reebok --> */}
                            <div class="w-30 h-10 sm:w-40 sm:h-13 md:w-48 md:h-16">
                                <img
                                    src="/reebok.png"
                                    alt="reebok"
                                    class="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex w-full md:w-1/2 mt-20">
                <div className="absolute bottom-0 right-0 flex flex-col space-y-4 mr-4 mb-4">
                    <div className="rounded-full bg-gradient-to-r w-10 h-10 p-1 flex justify-center from-[#4BACE1] to-[#D8F1FF]">
                        <Image
                            src="/stretching.png"
                            alt="stretching"
                            width="33"
                            height="35"
                        />
                    </div>
                    <div>
                        <p className="font-bold">Zacky</p>
                        <p className="">Trainer</p>
                    </div>
                    <div className="rounded-full bg-gradient-to-r w-10 h-10 p-2 flex justify-center from-[#F8A422] to-[#FEDEAC]">
                        <Image
                            src="/dancer-motion.png"
                            alt="dancer motion"
                            width="33"
                            height="35"
                        />
                    </div>
                    <div flex flex-col>
                        <p className="font-bold">150+</p>
                        <p>members</p>
                    </div>
                    <div className="rounded-full bg-gradient-to-r w-10 h-10 p-1 flex justify-center from-[#5478EF] to-[#D6DFFF]">
                        <Image
                            src="/person-practicing-a-strengthen-posture.png"
                            alt="strengthen posture"
                            width="33"
                            height="35"
                        />
                    </div>
                    <div className="rounded-full bg-gradient-to-r w-10 h-10  p-1 flex justify-center from-[#4bace1] to-[#d8f1ff]">
                        <Image
                            src="/stretching.png"
                            alt="stretching"
                            width="33"
                            height="35"
                        />
                    </div>
                </div>
                <Image
                    src="/Vector 32.svg"
                    width="427"
                    height="323"
                    alt="vector 32"
                    className="absolute mt-12 bottom-0 right-10 z-20"
                />
                <Image
                    src="/Ellipse 136.svg"
                    width="434"
                    height="434"
                    alt="Gym Product"
                    className="absolute rounded-full bottom-0 right-10 z-10"
                />
                <Image
                    src="/Group 3840.svg"
                    width="293"
                    height="253"
                    alt="curve-group"
                    className="absolute bottom-10 right-48 z-10"
                />
                <Image
                    src="/image 77.svg"
                    width="358"
                    height="580"
                    alt="Gym Product"
                    className="z-40 absolute bottom-0 right-20"
                />
            </div>
        </div>
    );
}

export default Product;
