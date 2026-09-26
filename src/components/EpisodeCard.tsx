import React from "react";
import { Episode } from "../data/types";
import styles from "./EpisodeCard.module.css";

interface Props {
  episode: Episode;
}

export default function EpisodeCard({ episode }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{episode.title}</h2>
        <span className={styles.date}>
          {new Date(episode.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
      <p className={styles.description}>{episode.description}</p>
      <div className={styles.footer}>
        <span className={styles.duration}>{episode.duration}</span>
        <audio controls src={episode.audioUrl} className={styles.audio}>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
