import {
    Bluesky,
    Close,
    Github,
    LinkedIn,
    MoonCrescent,
    Sun,
    TikTok,
    XTwitter,
} from "./SVGComponents";

const iconMap = {
    bluesky: Bluesky,
    close: Close,
    github: Github,
    linkedin: LinkedIn,
    mooncrescent: MoonCrescent,
    sun: Sun,
    tiktok: TikTok,
    xtwitter: XTwitter,
};

export type IconName = keyof typeof iconMap;

type IconType = {
    name: IconName;
    size?: number | string;
    color?: string;
    className?: string;
};

export const Icon = ({
    name,
    size = 16,
    color = "currentColor",
    className,
}: IconType) => {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        console.warn(`Icon ${name} not found`);
        return;
    }

    return (
        <IconComponent
            className={className}
            size={size}
            fill={color}
        />
    );
};
