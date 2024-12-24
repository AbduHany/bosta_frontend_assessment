import { TransitEvent } from "@/types/shipmentDetailsType";

export function createDateString(
    date: string,
    lang: string,
    monthFormat: "short" | "long"
) {
    if (lang === "ar") {
        return new Date(date).toLocaleDateString("ar-EG", {
            year: "numeric",
            month: monthFormat,
            day: "numeric",
        });
    } else
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: monthFormat,
            day: "numeric",
        });
}

export function groupEventsByDay(events: TransitEvent[]): Record<string, TransitEvent[]> {
    return events.reduce<Record<string, TransitEvent[]>>((acc, event) => {
        // Convert the timestamp to a Date and extract the YYYY-MM-DD part
        const dateKey = new Date(event.timestamp).toISOString().slice(0, 10);

        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        acc[dateKey].push(event);

        return acc;
    }, {});
}