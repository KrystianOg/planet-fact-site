import "./mobile-nav.scss";
import IconButton from "../../MenuIcon";
import PlanetsNav from "../PlanetsNav";
import classNames from "classnames";

const index = () => {
	return (
		<nav className="mobile-navbar">
			<h2>THE PLANETS</h2>
			<IconButton />
			<PlanetsNav visible />
		</nav>
	);
};

export default index;
