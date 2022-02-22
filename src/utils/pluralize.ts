export const Pluralize = (
    singular: string,
    plural: string,
    quantity: number
): string => (quantity === 1 ? singular : plural);
