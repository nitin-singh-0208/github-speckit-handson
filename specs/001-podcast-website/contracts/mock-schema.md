# Interface Contracts

Since this is a fully static site with no backend API, the "contract" consists of the TypeScript interfaces used for the internal mock data.

## Episode Interface

```typescript
export interface Episode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  publishDate: string;
  duration: string;
  isFeatured?: boolean;
}
```

## FAQ Interface

```typescript
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
```
