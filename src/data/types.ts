export interface Episode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  publishDate: string;
  duration: string;
  isFeatured?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
