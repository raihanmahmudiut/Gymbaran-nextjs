import Head from "next/head";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Product1 from "../components/Product1";
import Product2 from "../components/Product2";
import Product3 from "../components/Product3";

const Home = () => (
	<div className="flex flex-col bg-[#E5E5E5] z-10 md:px-16 ">
		<Head>
			<title>Gym Product Landing Page</title>
		</Head>
		<div className="z-0 hidden lg:block">
			<div className="absolute bg-[#D388FF] opacity-60 blur-[17.625rem] w-[30.25rem] h-[50.25rem] top-[-21.25rem] left-[38.125rem]"></div>

			<div className="absolute w-[30.25rem] h-[30.25rem] left-[-21.5625rem] bg-[#F3B411] opacity-30 blur-[17.625rem] top-[5.0625rem]"></div>

			<div className="absolute w-[30.25rem] h-[30.25rem] left-[-5.8125rem] top-[-25.625rem] bg-[#F4CDD6] blur-[17.625rem]"></div>
		</div>

		<div className="p-4 z-20">
			<Navbar />
		</div>

		<main className="mt-8 z-20 ">
			<div className="px-8 py-12 ">
				<Product />
			</div>
			<div className="px-8 py-12">
				<Product1 />
			</div>
			<div className="px-8 py-12">
				<Product2 />
			</div>
			<div className="px-8 py-12">
				<Product3 />
			</div>
		</main>
	</div>
);

export default Home;
