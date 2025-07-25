import styles from './Dashboard.module.css';
import WeatherCard from './WeatherCard';
import FormComponent from './Form/FormComponent';
import Video from './Video';

export default function Dashboard() {
  return (
    <div className={styles.appContainer}>
      <header>
        <h1></h1>
      </header>
      <main className={styles.cardsContainer}>
        <WeatherCard />
        <FormComponent />
        <Video />
      </main>
      <footer></footer>
    </div>
  );
}
