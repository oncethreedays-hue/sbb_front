export interface PageResponse<T> {
    content: T[];
    totalPages: number;
    size: number;
    currentPage: number;
    first: boolean;
    last: boolean;
}