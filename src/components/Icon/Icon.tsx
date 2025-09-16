import { Bluesky, Github, LinkedIn, TikTok, XTwitter } from "./SVGComponents";

const iconMap = {
    bluesky: Bluesky,
    github: Github,
    linkedin: LinkedIn,
    tiktok: TikTok,
    xtwitter: XTwitter,
};

export type IconName = keyof typeof iconMap;

type IconType = {
    name: IconName;
    size?: number | string;
    color?: string;
};

export const Icon = ({ name, size = 16, color = "currentColor" }: IconType) => {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        console.warn(`Icon ${name} not found`);
        return;
    }

    return (
        <IconComponent
            size={size}
            fill={color}
        />
    );
};
