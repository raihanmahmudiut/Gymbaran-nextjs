import React from "react";
import Image from "next/image";
import Link from "next/link";

function Product() {
	return (
		<div className="flex flex-col md:flex-row w-full  ">
			<div className="w-1/2 mt-20">
				<div className=" py-4">
					<h1>
						Healthy in side <span className="text-regal-violet">fresh</span> out
						side
					</h1>
				</div>
				<div className=" w-3/4 py-4">
					<p>
						Exercise is a very important need for our body. Health and fitness
						will be obtained if you can do regular exercise and run a healthy
						routine.
					</p>
				</div>
				<div className="flex flex-col w-3/4">
					<div className="flex flex-row col-auto space-x-8 py-4">
						<a
							href="#"
							className="flex flex-row justify-between w-1/2 shadow-3xl  bg-navy-blue text-white rounded-md p-2"
						>
							<div href="#" className="mr-4 ">
								Get Started
							</div>

							<Image
								src="/caretcircleright.png"
								alt="caretright"
								width={26}
								height={26}
							/>
						</a>
						<a
							href="#"
							className="flex flex-row justify-between w-1/3 shadow-3xl text-navy-blue bg-white rounded-md p-2"
						>
							<div>
								<Image
									src="/playright.png"
									alt="playright"
									width={26}
									height={26}
								/>
							</div>
							<div>
								<Link href="#" className="ml-4">
									Learn more
								</Link>
							</div>
						</a>
					</div>
					<div className="py-10 space-y-3">
						<p>Brands:</p>
						<div className="flex flex-row justify-between ">
							<Image src="/nike.png" alt="nike" width="58" height="27" />
							<Image src="/addidas.png" alt="addidas" width="53" height="54" />
							<Image src="/puma.png" alt="puma" width="80" height="41" />
							<Image src="/reebok.png" alt="reebock" width="119" height="30" />
						</div>
					</div>
				</div>
			</div>

			<div className="items-center">
				{/* <div>
					<div className="rounded-full  bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF]">
						<Image
							src="/stretching.png"
							alt="streching"
							width="33"
							height="35"
						/>
					</div>
					<div className="rounded-full  bg-gradient-to-r from-[#F8A422] to-[#FEDEAC]  ">
						<Image
							src="/dancer-motion.png"
							alt="streching"
							width="33"
							height="35"
						/>
						<div>150 members</div>
					</div>
					<div className="rounded-full  bg-gradient-to-r from-[#5478EF] to-[#D6DFFF]  ">
						<Image
							src="/person-practicing-a-strengthen-posture.png"
							alt="streching"
							width="33"
							height="35"
						/>
					</div>
					<div className="rounded-full  bg-gradient-to-r from-[#F8A422] to-[#FEDEAC]  ">
						<Image
							src="/stretching.png"
							alt="streching"
							width="33"
							height="35"
						/>
					</div>
				</div> */}
				<Image src="/image77.jpg" width="358" height="580" alt="Gym Product" />
			</div>
		</div>
	);
}

export default Product;
