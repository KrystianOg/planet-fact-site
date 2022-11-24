import "./icon-button.scss";
import MenuIcon from "../../assets/icon-hamburger.svg";
import classNames from "classnames";

interface MenuIconProps {
	visible?: boolean;
}
const index = ({ visible = true }: MenuIconProps) => {
	return (
		<button
			className={classNames("icon-button", {
				display: visible ? "block" : "none",
			})}
			type="button"
			title="menu"
		>
			<img src={MenuIcon} alt="menu" />
		</button>
	);
};

export default index;
