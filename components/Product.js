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
							className="flex flex-row justify-between bg-navy-blue text-white rounded-md p-2"
						>
							<div href="#" className="mr-4">
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
							className="flex flex-row justify-between text-navy-blue bg-white rounded-md p-2"
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
					<div className="py-10">
						<p>Brands:</p>
						<div className="flex flex-row justify-between">
							<Image src="/nike.png" alt="nike" width={70} height={27} />
							<Image src="/addidas.png" alt="addidas" width={53} height={54} />
							<Image src="/puma.png" alt="puma" width={80} height={41} />
							<Image src="/reebok.png" alt="reebock" width={119} height={30} />
						</div>
					</div>
				</div>
			</div>

			<div className="items-center">
				<Image src="/image77.jpg" width="358" height="580" alt="Gym Product" />
			</div>
		</div>
	);
}

export default Product;
