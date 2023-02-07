import Head from "next/head";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Product1 from "../components/Product1";
import Product2 from "../components/Product2";
import Product3 from "../components/Product3";

const Home = () => (
	<div className="flex flex-col  ">
		<Head>
			<title>Gym Product Landing Page</title>
		</Head>

		<div className="flex flex-row w-full p-4">
			<div>
				<Navbar />
			</div>
		</div>

		<main className="mt-8 ">
			<div className="px-8 py-12">
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
