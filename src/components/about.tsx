import styles from "./about.module.scss";

export default function About() {
  return (
    <div>
      <div className={styles.divider} />

      <div className={styles.about}>
        <div className={styles.aboutTitle}>
          <h1>About Me</h1>
        </div>
        <div className={styles.aboutContent}>
          <p>
            Hi! I'm currently a second year student at the{" "}
            <a
              className={styles.greyP}
              href="https://www.uwo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Western Ontario
              <img
                src="/external-link-line.svg"
                alt="Western"
                width={16}
                height={16}
              />
            </a>
          </p>

          <p>
            Aside from being an aspiring Software Engineer / Product Manager, my
            hobbies include thrifting,
          </p>

          <p>exploring new places, and spending time with friends!</p>
        </div>
      </div>
    </div>
  );
}
