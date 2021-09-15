import BlurbListing from "components/BlurbListing";
import { BaseCat } from "lib/types";

export const getStaticProps = async () => {
	const resp = await fetch("https://api.thecatapi.com/v1/breeds");
	const cats = await resp.json();

	return {
		props: {
			cats: cats.filter((cat) => cat.image && cat.image.url),
		},
		revalidate: 60,
	};
};

type HomeProps = {
	cats: Array<BaseCat>;
};

const Home = ({ cats }: HomeProps) => (
	<main>
		<h1>List of cat breeds</h1>
		<BlurbListing items={cats} />
	</main>
);

export default Home;
