import "./planet.scss";

interface PlanetInfoProps {
	label: string;
	value: string;
}

const PlanetInfoItem = ({ label, value }: PlanetInfoProps) => {
	return (
		<li className="planet-info-item">
			<h3 className="center label">{label}</h3>
			<h2 className="center value">{value}</h2>
		</li>
	);
};

export default PlanetInfoItem;
