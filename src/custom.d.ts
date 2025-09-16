declare module "*.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    import React from "react";
    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;
    const content: string;
    export default content;
}
