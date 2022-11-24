import classNames from "classnames";
import { useParams } from "react-router-dom";

const planetsList = [
	{
		name: "Mercury",
		color: "#419EBB",
	},
	{
		name: "Venus",
		color: "#EDA249",
	},
	{
		name: "Earth",
		color: "#6F2ED6",
	},
	{
		name: "Mars",
		color: "#D13C32",
	},
	{
		name: "Jupiter",
		color: "#D83A34",
	},
	{
		name: "Saturn",
		color: "#CD5120",
	},
	{
		name: "Uranus",
		color: "#1EC2A4",
	},
	{
		name: "Neptune",
		color: "#2D68F0",
	},
];

interface PlanetsNavProps {
	visible?: boolean;
}

const PlanetsNav = ({ visible }: PlanetsNavProps) => {
	const { name } = useParams();

	return (
		<nav
			className={classNames({
				visibility: visible ? "visible" : "hidden",
			})}
		>
			<ul>
				{planetsList.map((planet) => (
					<li>{planet.name}</li>
				))}
			</ul>
		</nav>
	);
};

export default PlanetsNav;
