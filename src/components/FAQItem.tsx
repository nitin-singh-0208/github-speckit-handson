import React from "react";
import { FAQ } from "../data/types";
import styles from "./FAQItem.module.css";

interface Props {
  faq: FAQ;
}

export default function FAQItem({ faq }: Props) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>{faq.question}</summary>
      <div className={styles.answer}>
        <p>{faq.answer}</p>
      </div>
    </details>
  );
}
