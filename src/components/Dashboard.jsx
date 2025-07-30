import { createContext, useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import WeatherCard from './WeatherCard';
import FormComponent from './Form/FormComponent';
import Video from './Video';
import MarkdownEditor from './Editor';

// const ThemeContext = createContext(null);

export default function Dashboard() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    // <ThemeContext.Provider value={theme}>
    <div className={styles.appContainer}>
      <header>
        <h1></h1>
      </header>
      <main className={styles.cardsContainer}>
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use {theme} mode
        </label>
        <WeatherCard />
        <FormComponent />
        <Video />
        <MarkdownEditor />
      </main>
      <footer></footer>
    </div>
    // </ThemeContext.Provider>
  );
}
