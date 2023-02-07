import React from "react";
import Image from "next/image";

function Product3() {
	return (
		<div className="flex flex-col md:flex-row w-full ">
			<div className="w-1/2 items-center order-last md:order-first ">
				<Image src="/image78.jpg" width="416" height="496" alt="gym image" />
			</div>
			<div className="w-1/2 space-y-12 p-16">
				<div>
					<h2>Best full body workout to lose fat</h2>
				</div>
				<div>
					<p>
						Exercise is a very important need for our body. Health and fitness
						will be obtained if you can do regular exercise and run a healthy
						routine. Even at home we still have to be diligent in exercising,
						either alone or with your friends at home.
					</p>
				</div>

				<a
					href="#"
					className="flex flex-row justify-between w-1/3 shadow-3xl items-center bg-navy-blue text-white rounded-md p-4"
				>
					<p>Get Started</p>
					<div>
						<Image
							src="/ArrowRight (1).png"
							alt="arrowright1"
							width={15}
							height={15}
						/>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Product3;
