import Blurb from "components/Blurb";
import { BaseCat } from "lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "./BlurbListing.module.scss";

type BlurbListingProps = {
	items: Array<BaseCat>;
};

const BlurbListing = ({ items }: BlurbListingProps) => {
	const [query, setQuery] = useState<string | undefined>(undefined);
	const [filteredItems, setFilteredItems] = useState<Array<BaseCat>>(items);

	useEffect(() => {
		if (query !== undefined) {
			setFilteredItems(
				items.filter((cat) =>
					cat.name.toLowerCase().startsWith(query.toLowerCase())
				)
			);
		} else {
			setFilteredItems(items);
		}
	}, [query]);

	const onInput = (e) => setQuery(e.target.value || undefined);

	return (
		<div className={classes["container"]}>
			<input
				className={classes["search"]}
				type="text"
				name="name"
				id="name"
				placeholder="American Bobtail"
				onInput={onInput}
			/>
			<div className={classes["items"]}>
				{filteredItems.map((cat) => (
					<Link href={`/cat/${cat.id}`}>
						<a className={classes["link"]}>
							<Blurb {...cat} key={`item-${cat.id}`} />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default BlurbListing;
