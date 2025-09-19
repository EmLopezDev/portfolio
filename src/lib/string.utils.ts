export const nameCheck = (str: string) => {
    return /^[a-zA-Z ]+$/g.test(str);
};

export const emailCheck = (str: string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
};

export const capitalize = (str: string) => {
    if (!str.length) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
};
