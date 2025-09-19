export type NavDataType = {
    id: number;
    pathName: string;
    path: string;
};

export const navData: NavDataType[] = [
    {
        id: 1,
        pathName: "home",
        path: "/",
    },
    {
        id: 2,
        pathName: "projects",
        path: "/projects",
    },
    {
        id: 3,
        pathName: "about",
        path: "/about",
    },
];
