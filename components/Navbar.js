import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
	return (
		<div className="fixed w-full h-20 shadow-xl text-black">
			<div className="flex justify-between items-center w-full h-full px-2">
				<div>
					<span className="bg-light-violet text-white rounded-md items-center p-1">
						Gym
					</span>
					<span className=" text-light-violet">Baran</span>
				</div>
				<div className="items-center ">
					<ul className="hidden md:flex mr-4">
						<Link href="#">
							<li className="font-normal ml-2 p-2">Home</li>
						</Link>
						<Link href="#">
							<li className="font-normal ml-2 p-2">Program</li>
						</Link>
						<Link href="#">
							<li className="font-normal ml-2 p-2">Blog</li>
						</Link>
						<Link href="#">
							<li className="font-normal ml-2 p-2">Contact Us</li>
						</Link>
						<button className="bg-navy-blue text-white ml-2 py-2 px-6 rounded-md">
							Login
						</button>
					</ul>
					<div className="md:hidden mr-4">
						<Image src="/Vector (3).png" alt="menubar" width={18} height={16} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
