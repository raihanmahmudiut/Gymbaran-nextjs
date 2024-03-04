import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
	return (
		// <div className="w-full h-20 shadow-xl md:shadow-none text-black">
			<div className=" w-full flex flex-row justify-between items-center h-full px-2">
				<div className="font-sporting-grotesque">
					<span className="bg-light-violet text-white rounded-md items-center px-1">
						Gym
					</span>
					<span className="text-light-violet">Baran</span>
				</div>
				<div className="flex items-center font-poppins">
					<ul className="hidden md:flex mr-4">
						<li className="font-normal ml-2 p-2">
							<Link href="#">Home</Link>
						</li>
						<li className="font-normal ml-2 p-2">
							<Link href="#">Program</Link>
						</li>
						<li className="font-normal ml-2 p-2">
							<Link href="#">Blog</Link>
						</li>
						<li className="font-normal ml-2 p-2">
							<Link href="#">Contact Us</Link>
						</li>
					</ul>
					<button className="bg-navy-blue text-white ml-2 py-2 px-6 rounded-md">
						Login
					</button>
					<div className="md:hidden mr-7">
						<Image src="/Vector (3).png" alt="menubar" width={18} height={16} />
					</div>
				</div>
			</div>
		// </div>
	);
}

export default Navbar;
