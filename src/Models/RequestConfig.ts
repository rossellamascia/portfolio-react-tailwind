export interface requestConfig {
    url: string;
    method?: 'POST' | 'GET' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
    headers?: {
        'Content-Type': 'application/json'
    };
    body?: string | null;
}