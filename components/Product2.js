import React from "react";
import Link from "next/link";
import Image from "next/image";

function Product2() {
	return (
		<div className="flex flex-col md:flex-row  w-full py-20 px-16 md:p-24 space-y-24 md:space-y-0 justify-between items-center bg-gradient-to-r from-[#6462F0] to-[#9190E9] rounded-[30px] text-white">
			<div className="flex flex-row space-x-16 box-border ">
				<div className="flex items-center justify-center ">
					<Image
						src="/Rectangle 195.png"
						width="100"
						height="100"
						width="100"
						height="100"
						alt="rectangle"
						className="absolute"
					/>
					<Image
						src="/crucified-pose.png"
						alt="crucified-pose"
						width="38"
						height="50"
						width="38"
						height="50"
						className="absolute"
					/>
				</div>

				<div className="flex flex-col w-4/5 md:w-3/5 justify-between">
					<h3>Get that 11 line in 30 days</h3>

					<a href="#" className="flex flex-row  opacity-20 justify-between">
					<a href="#" className="flex flex-row  opacity-20 justify-between">
						<p>Learn More</p>
						<div className="mt-2">
							<Image
								src="/ArrowRight.png"
								alt="arrowright"
								width="15"
								height="15"
								width="15"
								height="15"
							/>
						</div>
					</a>
				</div>
			</div>
			<div className="flex flex-row space-x-16 box-border">
				<div className="flex items-center justify-center">
					<Image
						src="/Rectangle 195.png"
						width="100"
						height="100"
						width="100"
						height="100"
						alt="rectangle"
						className="absolute"
					/>
					<Image
						src="/dancer-balance.png"
						alt="dancer-balance"
						width="38"
						height="50"
						width="38"
						height="50"
						className="absolute"
					/>
				</div>
				<div className="flex flex-col w-2/3 md:w-1/2 justify-between ">
					<h3>14 days shred challenge</h3>

					<a href="#" className="flex flex-row opacity-20 justify-between">
						<p>Learn More</p>
						<div className="mt-2">
							<Image
								src="/ArrowRight.png"
								alt="arrowright"
								width="15"
								height="15"
								width="15"
								height="15"
							/>
						</div>
					</a>
				</div>
			</div>

			<div className="flex flex-row space-x-16 box-border">
				<div className="flex items-center justify-center">
					<Image
						src="/Rectangle 195.png"
						width="100"
						height="100"
						width="100"
						height="100"
						alt="rectangle"
						className="absolute"
					/>
					<Image
						src="/dancer-motion.png"
						alt="dancer-motion"
						width="38"
						height="50"
						width="38"
						height="50"
						className="absolute"
					/>
				</div>
				<div className="flex flex-col w-2/3 md:w-1/2 justify-between">
					<h3>get flat belly in 30 days</h3>

					<a href="#" className="flex flex-row opacity-20 justify-between">
						<p>Learn More</p>
						<div className="mt-2">
							<Image
								src="/ArrowRight.png"
								alt="arrowright"
								width="15"
								height="15"
								width="15"
								height="15"
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Product2;
