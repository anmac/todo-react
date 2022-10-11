import React from 'react';
import '../stylesheets/ToggleTheme.css';
import { FiSun, FiMoon } from 'react-icons/fi';

function ToggleTheme() {
  const [darkTheme, setDarkTheme] = React.useState(false);

  const body = document.getElementById('body');

  const switchIcon = () => {
    if (body.classList.contains('dark')) {
      setDarkTheme(true);
    } else setDarkTheme(false);
  };

  const switchTheme = () => {
    body.classList.toggle('dark');
    switchIcon();
  };

  return (
    <div className="ToggleTheme">
      <div onClick={switchTheme} className="ToggleTheme__btn">
        {!darkTheme && <FiSun className="ToggleTheme__icon" />}
        {darkTheme && <FiMoon className="ToggleTheme__icon" />}
      </div>
    </div>
  );
}

export { ToggleTheme };
