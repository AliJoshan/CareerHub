export function formatSalary(min?: number, max?: number) {
    if (min === undefined && max === undefined) return "N/A";

    const formatter = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
    });

    const formattedMin = min !== undefined ? `$${formatter.format(min)}` : "";
    const formattedMax = max !== undefined ? `$${formatter.format(max)}` : "";

    return min && max
        ? `${formattedMin} - ${formattedMax}`
        : formattedMin || formattedMax;
}
