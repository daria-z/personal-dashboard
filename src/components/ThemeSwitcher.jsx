import { useContext } from 'react';
import { ThemeContext } from './Dashboard';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  // From Uiverse.io by JkHuger
  return (
    <label htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle"
          type="checkbox"
          role="switch"
          name="theme"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light');
          }}
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
        </span>
      </span>
    </label>
  );
}
