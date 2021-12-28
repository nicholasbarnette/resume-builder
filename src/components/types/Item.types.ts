export interface Item {
    header: string;
    date: { start: string, end?: string; }
    title?: string;
    description: string[];
}