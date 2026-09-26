import { episodes } from "../../data/episodes";
import EpisodeCard from "../../components/EpisodeCard";
import styles from "./page.module.css";

export default function EpisodesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>All Episodes</h1>
      <p className={styles.subheading}>
        Catch up on all {episodes.length} of our previous episodes.
      </p>
      <div className={styles.grid}>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
