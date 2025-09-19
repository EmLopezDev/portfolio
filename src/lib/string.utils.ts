export const nameCheck = (string: string) => {
    return /^[a-zA-Z ]+$/g.test(string);
};

export const emailCheck = (string: string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(string);
};
