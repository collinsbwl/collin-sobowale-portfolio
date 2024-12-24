import styles from "./page.module.scss";
import Sidebar from "../components/Sidebar";
import About from "../components/about";
import CaseStudies from "@/components/caseStudies";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.mainGallery}>
        <About />
        <CaseStudies />
      </div>
    </main>
  );
}
