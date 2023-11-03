import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Hello world this is the main Page</h1>
        <Link href="/users">Go to Users</Link>
        <p>This is the paragraph</p>
      </div>
    </main>
  )
}
