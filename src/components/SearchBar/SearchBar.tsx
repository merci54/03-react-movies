import styles from './SearchBar.module.css'
import toast from 'react-hot-toast'

export default function SearchBar() {
    const handleSubmit = (FormData: FormData) => {
        if (!FormData.get('query')) {
            toast.error("Please enter your search query.");
            return
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a
                    className={styles.link}
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by TMDB
                </a>
                <form className={styles.form} action={handleSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        name="query"
                        autoComplete="off"
                        placeholder="Search movies..."
                        autoFocus
                    />
                    <button className={styles.button} type="submit">
                        Search
                    </button>
                </form>
            </div>
        </header>

    )
}