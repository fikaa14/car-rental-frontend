export interface Bill {
    id?: number,
    date: Date,
    isPaid: boolean,
    taxes: number,
    total: number
}