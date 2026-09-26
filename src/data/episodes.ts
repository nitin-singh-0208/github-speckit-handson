import { Episode } from "./types";

export const episodes: Episode[] = Array.from({ length: 20 }, (_, i) => ({
  id: `ep-${20 - i}`,
  title: `Episode ${20 - i}: The Future of Web Development`,
  description: `In this episode, we dive deep into the modern web ecosystem. We cover Next.js, static site generation, and how to build sleek user experiences without the bloat. Join us as we explore what makes a great modern podcast website stand out in ${2024 - Math.floor(i / 5)}.`,
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  publishDate: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  duration: `${45 + (i % 15)}:00`,
  isFeatured: i === 0, // The most recent episode is featured
}));

export const featuredEpisode = episodes.find((ep) => ep.isFeatured) || episodes[0];
