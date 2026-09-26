import { faqs } from "../../data/faqs";
import FAQItem from "../../components/FAQItem";
import styles from "./page.module.css";

export default function FAQPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Frequently Asked Questions</h1>
      <p className={styles.subheading}>
        Find answers to the most common questions about our podcast.
      </p>
      <div className={styles.list}>
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}
