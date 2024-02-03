import { Villa } from "../models/villas";

export const VILLAS_MOCK: Villa[] = [
    {
        location: "East Sicily",
        bookedDates: [],
        bedrooms: 5,
        price: 5000,
        tags: ["Pool", "Seaview"],
        experiences: ["Cooking Experiences"],
        airport: '',
        adults: 4,
        children: 0,
        infants: 0,
        currency: "EUR",
    },
    {
        location: "South Sicily",
        bookedDates: [],
        bedrooms: 3,
        price: 9000,
        tags: ["Couples", "Seaview"],
        experiences: ["Sicily Outdoors"],
        airport: '',
        adults: 2,
        children: 1,
        infants: 0,
        currency: "EUR",
    },
]