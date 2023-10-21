
export const toPixels = (value:number | string):string => {
    return typeof value === "number" ? `${value * 8}px` : value;
}