export interface Villa {
    location: string
    bookedDates: BookedDates[]
    bedrooms: number
    price: number
    tags: string[]
    currency: string
    experiences?: string[]
    airport?: string
    adults?: number
    children?: number
    infants?: number
}

interface BookedDates {
    dateFrom: Date
    dateTo: Date
}