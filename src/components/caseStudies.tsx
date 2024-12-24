import styles from "../app/page.module.scss";

export default function CaseStudies() {
  return (
    <div className={styles.caseStudies}>
      <h2 className={styles.caseStudiesTitle}>Select Case Studies</h2>

      <div className={styles.cardContainer}>
        {/* Pinterest Case Study */}
        <div className={styles.card}>
          {" "}
          {/* Multiple Cards */}
          <div className={styles.cardContent}>
            <div>
              <img
                className={styles.cardImage}
                width={360}
                height={200}
                src="/pinterest-icon.jpg"
                alt="Pinterest UI Preview"
                loading="lazy"
              />
            </div>
            <div className={styles.cardText}>
              <h1>Scrolling Made Social</h1>
              <p>Pinterest Product Review</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        {/* TBA Case Study */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <img
              src="/tba-preview.png"
              alt="TBA Project Preview"
              className={styles.cardImage}
            />
            <div className={styles.cardText}>
              <h3>Scrolling Made Social</h3>
              <p>TBA</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
