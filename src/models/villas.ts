import { Dayjs } from "dayjs"

export interface Villa {
    location: string
    bookedDates: BookedDates[]
    bedrooms: number
    price: number
    tags: string[]
    currency: string
    experiences: string[]
    airport: string
    adults: number
    kids: number
    infants: number
}

export interface BookedDates {
    dateFrom: Dayjs
    dateTo: Dayjs
}