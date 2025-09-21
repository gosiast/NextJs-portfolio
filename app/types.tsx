export interface Quote {
  content: string;
  author: string;
}

export interface QuoteError {
  error: string;
}

export type QuoteResponse = Quote | QuoteError;
