import { createContext, useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import WeatherCard from './WeatherCard';
import FormComponent from './Form/FormComponent';
import Video from './Video';
import MarkdownEditor from './Editor';
import ThemeSwitcher from './ThemeSwitcher';

export const ThemeContext = createContext(null);

export default function Dashboard() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={styles.appContainer}>
        <header>
          <h1></h1>
        </header>
        <main className={styles.cardsContainer}>
          <ThemeSwitcher />
          <WeatherCard />
          <FormComponent />
          <Video />
          <MarkdownEditor />
        </main>
        <footer></footer>
      </div>
    </ThemeContext.Provider>
  );
}
