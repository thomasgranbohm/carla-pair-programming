import { BaseCat, Cat } from "lib/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export const getStaticProps = async ({ params }) => {
	const { id } = params;

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
		revalidate: 60,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const resp = await fetch("https://api.thecatapi.com/v1/breeds/");
	const cats: Array<BaseCat> = await resp.json();

	return {
		paths: cats.map(({ id }) => ({ params: { id } })),
		fallback: true,
	};
};

type CatProps = Omit<Cat, "image">;

const CatPage = ({
	description,
	id,
	life_span,
	name,
	wikipedia_url,
}: CatProps) => {
	const router = useRouter();

	if (router.isFallback) return <div>Loading cat...</div>;

	return (
		<main>
			<h1>{name}</h1>
			<p>{description}</p>
			<Link href="/">Back to startpage</Link>
		</main>
	);
};

export default CatPage;
