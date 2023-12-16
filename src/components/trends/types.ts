import { TimeWindow } from "@/domain/entities/tmdb"

export type RecordsFilter = { page: number, filterBy: string }
export type TrendsListProps = { time_window?: TimeWindow } & RecordsFilter
export type  UseTrendsInput = { page: number, time_window: TimeWindow }