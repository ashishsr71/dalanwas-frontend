import { useEffect, useState } from 'react';

const useColorMode = () => {
  const [colorMode, setColorMode] = useState(() => {
    const storedMode = localStorage.getItem('colorMode');
    return storedMode ? storedMode : 'light';
  });

  useEffect(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('colorMode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('colorMode', 'light');
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
