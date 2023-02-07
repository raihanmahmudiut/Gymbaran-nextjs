import React from "react";
import Link from "next/link";
import Image from "next/image";

function Product2() {
	return (
		<div className="flex flex-col md:flex-row col-auto w-full p-24 space-x-4 justify-between items-center bg-gradient-to-r from-[#6462F0] to-[#9190E9] rounded-[30px] text-white">
			<div className="flex flex-row col-auto space-x-10 justify-between ">
				<div className="flex items-center justify-center ">
					<Image
						src="/Rectangle 195.png"
						width={100}
						height={100}
						alt="rectangle"
					/>
					<Image
						src="/crucified-pose.png"
						alt="crucified-pose"
						width={38}
						height={50}
						className="absolute"
					/>
				</div>
				<div className="flex flex-col col-auto justify-between">
					<h3>Get that 11 line in 30 days</h3>

					<a
						href="#"
						className="flex flex-row col-auto opacity-20 justify-between"
					>
						<p>Learn More</p>
						<div className="mt-2">
							<Image
								src="/ArrowRight.png"
								alt="arrowright"
								width={15}
								height={15}
							/>
						</div>
					</a>
				</div>
			</div>
			<div className="flex flex-row space-x-10 justify-between">
				<div className="flex items-center justify-center">
					<Image
						src="/Rectangle 195.png"
						width={100}
						height={100}
						alt="rectangle"
					/>
					<Image
						src="/dancer-balance.png"
						alt="dancer-balance"
						width={38}
						height={50}
						className="absolute"
					/>
				</div>
				<div className="flex flex-col col-auto justify-between ">
					<h3>14 days shred challenge</h3>

					<a href="#" className="flex flex-row opacity-20 justify-between">
						<p>Learn More</p>
						<div className="mt-2">
							<Image
								src="/ArrowRight.png"
								alt="arrowright"
								width={15}
								height={15}
							/>
						</div>
					</a>
				</div>
			</div>

			<div className="flex flex-row space-x-10 justify-between ">
				<div className="flex items-center justify-center">
					<Image
						src="/Rectangle 195.png"
						width={100}
						height={100}
						alt="rectangle"
					/>
					<Image
						src="/dancer-motion.png"
						alt="dancer-motion"
						width={38}
						height={50}
						className="absolute"
					/>
				</div>
				<div className="flex flex-col col-auto justify-between">
					<h3>get flat belly in 30 days</h3>

					<a href="#" className="flex flex-row opacity-20 justify-between">
						<p>Learn More</p>
						<div className="mt-2">
							<Image
								src="/ArrowRight.png"
								alt="arrowright"
								width={15}
								height={15}
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Product2;
