import styles from './Dashboard.module.css';
import WeatherCard from './WeatherCard';

export default function Dashboard() {
  return (
    <div className={styles.appContainer}>
      <header>
        <h1></h1>
      </header>
      <main className={styles.cardsContainer}>
        <WeatherCard />
      </main>
      <footer></footer>
    </div>
  );
}
