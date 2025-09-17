export const stopPropagation = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
) => {
    event.stopPropagation();
};
