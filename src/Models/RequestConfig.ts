export interface requestConfig {
    url: string;
    method?: string;
    headers?: {
        'Content-Type': 'application/json'
    };
    body?: string | null;
}