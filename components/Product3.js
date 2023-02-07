import React from "react";
import Image from "next/image";

function Product3() {
	return (
		<div className="flex flex-col md:flex-row col-auto justify-between w-full ">
			<div>
				<Image src="/image78.jpg" width={250} height={500} alt="gym image" />
			</div>
			<div className="w-1/2">
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
					className="flex flex-row justify-between  bg-navy-blue text-white rounded-md p-2"
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
