import { BaseCat } from "lib/types";
import { useRouter } from "next/dist/client/router";
import classes from "./Blurb.module.scss";

type BlurbProps = BaseCat;

const Blurb = ({
	description,
	id,
	image,
	life_span,
	name,
	wikipedia_url,
}: BlurbProps) => {
	const router = useRouter();

	const onClick = () => router.push(`/cats/${id}`);

	return (
		<div
			className={classes["container"]}
			onClick={onClick}
			tabIndex={0}
			onKeyPress={(e) => e.key === "Enter" && onClick()}
		>
			<img className={classes["image"]} src={image.url} alt={name} />
			<h2 className={classes["name"]}>{name}</h2>
			<p className={classes["description"]}>{description}</p>
			<div className={classes["bottom_information"]}>
				<p className={classes["life_span"]}>{life_span}</p>
				<a
					className={classes["wikipedia"]}
					target="_blank"
					rel="noreferrer noopener"
					href={wikipedia_url}
				>
					Wikipedia
				</a>
			</div>
		</div>
	);
};

export default Blurb;
