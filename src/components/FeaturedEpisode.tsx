import React from "react";
import { Episode } from "../data/types";
import styles from "./FeaturedEpisode.module.css";
import Link from "next/link";

interface Props {
  episode: Episode;
}

export default function FeaturedEpisode({ episode }: Props) {
  return (
    <section className={styles.featured}>
      <div className={styles.tag}>Latest Episode</div>
      <h1 className={styles.title}>{episode.title}</h1>
      <p className={styles.meta}>
        {new Date(episode.publishDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        <span className={styles.separator}>•</span>
        {episode.duration}
      </p>
      <p className={styles.description}>{episode.description}</p>
      <div className={styles.player}>
        <audio controls src={episode.audioUrl} className={styles.audio}>
          Your browser does not support the audio element.
        </audio>
      </div>
      <Link href="/episodes" className={styles.button}>
        Browse All Episodes
      </Link>
    </section>
  );
}
