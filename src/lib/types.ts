export interface Image {
	id: string;
	width: number;
	height: number;
	url: string;
}

export interface Weight {
	imperial: string;
	metric: string;
}

export interface BaseCat {
	id: string;
	name: string;
	description: string;
	life_span: string;
	wikipedia_url: string;
	image: Image;
}

export interface Cat extends BaseCat {
	weight: Weight;
	cfa_url: string;
	vetstreet_url: string;
	vcahospitals_url: string;
	temperament: string;
	origin: string;
	country_codes: string;
	country_code: string;
	life_span: string;
	indoor: number;
	lap: number;
	alt_names: string;
	adaptability: number;
	affection_level: number;
	child_friendly: number;
	dog_friendly: number;
	energy_level: number;
	grooming: number;
	health_issues: number;
	intelligence: number;
	shedding_level: number;
	social_needs: number;
	stranger_friendly: number;
	vocalisation: number;
	experimental: number;
	hairless: number;
	natural: number;
	rare: number;
	rex: number;
	suppressed_tail: number;
	short_legs: number;
	hypoallergenic: number;
	reference_image_id: string;
}
