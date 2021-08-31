import './sass/main.scss';
import templateFunction from './block.hbs';
import menu from './menu.json';

const bodyEl = document.querySelector('.body');
const menuEl = document.querySelector('.js-menu');
const checkThem = document.querySelector('.theme-switch__toggle');

// menuEl.innerHTML('<AccessAlarmIcon>start</AccessAlarmIcon>')
menuEl.insertAdjacentHTML('beforeend', templateFunction(menu));
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
checkThem.addEventListener('change', changeTheme);

let theme = localStorage.getItem('theme');

if (theme === 'dark') {
  checkThem.checked = true;
  bodyEl.classList.remove(Theme.LIGHT);
  bodyEl.classList.add(Theme.DARK);
} else if (theme === 'light') {
  checkThem.checked = false;
  bodyEl.classList.remove(Theme.DARK);
  bodyEl.classList.add(Theme.LIGHT);
}

function changeTheme(evt) {
  localStorage.setItem('theme', 'light');
  console.log(checkThem.checked);
  if (evt.currentTarget.checked) {
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark');
  } else if (evt.currentTarget.checked === false) {
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light');
  }
}
