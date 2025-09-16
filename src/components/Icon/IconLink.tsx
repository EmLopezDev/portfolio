import { Icon, type IconName } from "./Icon";

type IconLinkType = {
    href: string;
    name: IconName;
    size?: number | string;
    color?: string;
};

export const IconLink = ({
    href,
    name,
    size = 16,
    color = "currentColor",
}: IconLinkType) => {
    return (
        <a href={href}>
            <Icon
                name={name}
                size={size}
                color={color}
            />
        </a>
    );
};
