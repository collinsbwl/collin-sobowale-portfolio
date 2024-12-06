import Link from 'next/link'
import styles from './sidebar.module.scss'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1 className={styles.title}>Collin's Site</h1>
        <p className={styles.subtitle}>Honours Computer Science @</p>
        <p className={styles.subtitle}>Western University</p>
      </div>
      
      <nav className={styles.nav}>
        <div>
        <Link href="#about" className={styles.navItem}>
        <img src="/profile.svg" alt="Me" width={16} height={16} />
          <span>About Me</span>
        </Link>
        </div>
        <div>
        <Link href="#work" className={styles.navItem}>
        <img src="/printer-cloud-line.svg" alt="Printer icon" width={16} height={16} />
          <span>Work</span>
        </Link>
        </div>

        <div className={styles.divider} />

        <div>
        <Link href="https://github.com" className={styles.navItem}>
        <img src="/github-fill.svg" alt="Github icon" width={16} height={16} />
          <span>Github</span>
        </Link>
        </div>
        <div>
        <Link href="https://www.linkedin.com/in/collinsbwle/" className={styles.navItem}>
        <img src="/linkedin.svg" alt="Linkedin icon" width={16} height={16} />
          <span>Linkedin</span>
        </Link>
        </div>
        <div>
          
        <Link href="mailto:collinsbwle@email.com" className={styles.navItem}>
        <img src="/mail-ai-line.svg" alt="Email icon" width={16} height={16} />
          <span>Email</span>
        </Link>
        </div>
      </nav>
    </div>
  )
}