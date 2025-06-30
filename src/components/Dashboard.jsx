import styles from './Dashboard.module.css';
import WeatherCard from './WeatherCard';
import FormComponent from './Form/FormComponent';

export default function Dashboard() {
  return (
    <div className={styles.appContainer}>
      <header>
        <h1></h1>
      </header>
      <main className={styles.cardsContainer}>
        <WeatherCard />
        <FormComponent />
      </main>
      <footer></footer>
    </div>
  );
}
