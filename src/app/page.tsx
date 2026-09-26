import FeaturedEpisode from "../components/FeaturedEpisode";
import { featuredEpisode } from "../data/episodes";

export default function Home() {
  return (
    <main>
      <FeaturedEpisode episode={featuredEpisode} />
    </main>
  );
}
