export interface SearchResponseItem {
  position: number;
  title: string;
  link: string;
  displayed_link: string;
  thumbnail: string;
  date: string;
  snippet: string;
}

export interface SearchResult {
  organic_results: SearchResponseItem[];
}
