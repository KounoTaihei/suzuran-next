import { Cms } from "./cms";

export interface Closed extends Cms {
    year: number
    month: number
    dates: CmsDate[]
}

interface CmsDate {
    fieldId: string
    date: Date
}