import AnchorWithImage from '../../atoms/AnchorWithImage';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import './style.scss';

const SideMenu = ({ logoSrc, anchorTo, anchorLabel, iconProps, buttonProps }) => {
	return (
		<div className="side-menu">
			<div className="menu-header">
				<Image src={logoSrc} alt="Logo" />
				<AnchorWithImage to={anchorTo} />
			</div>
			<div className="menu-footer">
				<Icon {...iconProps} />
				<Button {...buttonProps} variant="primary" label="Sair" />
			</div>
		</div>
	);
}

export default SideMenu;
