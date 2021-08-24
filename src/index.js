import './sass/main.scss';
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const bodyEl = document.querySelector('.body')
const checkThem = document.querySelector('.theme-switch__toggle')

checkThem.addEventListener('input',changeTheme)

let theme = localStorage.getItem('theme');

localStorage.getItem('check',false);
checkThem.checked = localStorage.getItem('check')

if(theme==='dark'){
    bodyEl.classList.remove(Theme.LIGHT)
    bodyEl.classList.add(Theme.DARK)
}else if(theme==='light'){
    bodyEl.classList.remove(Theme.DARK)
    bodyEl.classList.add(Theme.LIGHT)
}

function changeTheme(evt){
    localStorage.setItem('theme', 'light');
    console.log(checkThem.checked);
    if(evt.currentTarget.checked){
        bodyEl.classList.remove(Theme.LIGHT)
        bodyEl.classList.add(Theme.DARK)
        localStorage.setItem('check', 'true'); 
        localStorage.setItem('theme', 'dark');    
    }else if(evt.currentTarget.checked===false){
        bodyEl.classList.remove(Theme.DARK)
        bodyEl.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', 'light');
        localStorage.setItem('check', 'false'); 
        
    }
}