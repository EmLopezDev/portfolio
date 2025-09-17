import { type IconName } from "./Icon";
import { Icon } from "./Icon";

type IconButtonType = {
    iconName: IconName;
    iconSize?: number | string;
    iconColor?: string;
    className?: string;
    onClick: () => void;
};

function IconButton({
    iconName,
    iconSize,
    iconColor,
    className,
    onClick,
}: IconButtonType) {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            <Icon
                name={iconName}
                size={iconSize}
                color={iconColor}
            />
        </button>
    );
}

export default IconButton;
