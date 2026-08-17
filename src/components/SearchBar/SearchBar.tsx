import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSearch = (formData: FormData) => {
    const query = (formData.get('query') as string)?.trim();

    if (!query) {
      toast.error('Пожалуйста, введите ваш поисковый запрос');
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Разработано на базе TMDB
        </a>

        <form className={styles.form} action={handleSearch}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Поиск фильмов..."
            autoFocus
          />

          <button className={styles.button} type="submit">
            Поиск
          </button>
        </form>
      </div>
    </header>
  );
}