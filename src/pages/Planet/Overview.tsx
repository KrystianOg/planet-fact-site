import Source from "../../assets/icon-source.svg";
import PlanetInfoItem from "./PlanetInfoItem";
import type { Planet } from "../../types/Planet";
import { imageSelector } from "../../utils/imageSelector";
interface OverviewProps {
	planet: Planet | undefined;
}

const Overview = ({ planet }: OverviewProps) => {
	//select image
	return (
		<main className="planet-container">
			<img src={imageSelector(planet?.name!)} alt="planet" loading="lazy" />
			<div className="planet-main-text">
				<h2>{planet?.name}</h2>
				<p>{planet?.overview.content}</p>
				<a href={planet?.overview.source}>
					Source:
					<span>Wikipedia</span>
					<img className="src-img" src={Source} alt="source" />
				</a>
			</div>
			<ul className="planet-info-container">
				<PlanetInfoItem label="Rotation time" value={planet?.rotation!} />
				<PlanetInfoItem label="Revolution time" value={planet?.revolution!} />
				<PlanetInfoItem label="radius" value={planet?.radius!} />
				<PlanetInfoItem label="average temp." value={planet?.temperature!} />
			</ul>
		</main>
	);
};

export default Overview;
