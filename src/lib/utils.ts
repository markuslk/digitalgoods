import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPrice(
	price: number | string,
	options: {
		currency?: "EUR";
		notation?: Intl.NumberFormatOptions["notation"];
	} = {}
) {
	const { currency = "EUR", notation = "compact" } = options;

	const numericPrice = typeof price === "string" ? parseFloat(price) : price;

	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		notation,
		maximumFractionDigits: 2,
	}).format(numericPrice);
}
