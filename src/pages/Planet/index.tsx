import { MobileNav, PlanetContentNav } from "../../components";
import type { Planet as PlanetType } from "../../types/Planet";
import { useParams } from "react-router-dom";
import data from "../../static/data.json";
import Overview from "./Overview";
import "./planet.scss";

const Planet = () => {
	const { name } = useParams();

	const planet: PlanetType | undefined = data.find(
		(p) => p.name.toLowerCase() === name
	);

	return (
		<>
			<MobileNav />
			<PlanetContentNav />
			<Overview planet={planet} />
		</>
	);
};

export default Planet;
