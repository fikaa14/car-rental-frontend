export interface Bill {
    is?: number,
    date: Date,
    isPaid: boolean,
    taxes: number,
    total: number
}