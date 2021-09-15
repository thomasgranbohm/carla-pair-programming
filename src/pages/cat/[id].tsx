import { Cat } from "lib/types";
import Link from "next/link";

export const getServerSideProps = async ({ query }) => {
	const { id } = query;

	const resp = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`);
	const cat = await resp.json();

	if (!cat.name) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: cat,
	};
};

type CatProps = Omit<Cat, "image">;

const CatPage = ({
	description,
	id,
	life_span,
	name,
	wikipedia_url,
}: CatProps) => (
	<main>
		<h1>{name}</h1>
		<p>{description}</p>
		<Link href="/">Back to startpage</Link>
	</main>
);

export default CatPage;
