// journey
export interface PaginationParams {
    _month?: number;
    _limit: number;
    _page: number;
    _totalRows: number;
}

export interface ListResponse<T> {
    data: T[];
    pagination: PaginationParams;
}

export interface ListParams {
    _month?: number;
    _limit?: number;
    _page?: number;
    _sort?: string;
    _order?: 'asc' | 'desc';

    [key: string]: any;
}

// highlights
export interface HighlightsResponse<T> {
    status: string;
    data: T[];
}
