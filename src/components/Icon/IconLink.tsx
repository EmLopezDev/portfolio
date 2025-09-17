import { Icon, type IconName } from "./Icon";

type IconLinkType = {
    href: string;
    name: IconName;
    size?: number | string;
    color?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
};

export const IconLink = ({
    href,
    name,
    size = 16,
    color = "currentColor",
    target = "_self",
}: IconLinkType) => {
    return (
        <a
            href={href}
            target={target}
        >
            <Icon
                name={name}
                size={size}
                color={color}
            />
        </a>
    );
};
