import { Icon, type IconName } from "./Icon";

type IconLinkType = {
    href: string;
    name: IconName;
    size?: number | string;
    color?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    className?: string;
};

export const IconLink = ({
    href,
    name,
    size = 16,
    color = "currentColor",
    target = "_self",
    className = "",
}: IconLinkType) => {
    return (
        <a
            href={href}
            target={target}
            className={className}
        >
            <Icon
                name={name}
                size={size}
                color={color}
            />
        </a>
    );
};
