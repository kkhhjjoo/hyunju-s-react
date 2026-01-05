import ThemeContext from '@/contexts/ThemeContext';
import './ThemeToggle.css';
import { use, useEffect } from 'react';

function ThemeToggle() {
  useEffect(() => {
    console.log('## ThemeToggle 렌더링.');
  });

  //TODO 5. Theme Context 사용하기(theme, toggleTheme() 호출)
  const { theme, toggleTheme } = use(ThemeContext);
  console.log('theme', theme);

  return (
    <button
      onClick={() => { console.log('토클???'); toggleTheme() }}
      className='theme-toggle'
    >{ theme === 'light'? '🌙 다크 모드' : '☀️ 라이트 모드'}</button>
  );
}

export default ThemeToggle;