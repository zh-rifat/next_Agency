import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

type Props = {}

const BtnToggleTheme = (props: Props) => {
  
  const {theme,setTheme}=useTheme();
  const toggleTheme=()=>{
    if(theme==='dark')
      setTheme("light");
    else setTheme('dark');
    console.log(theme);
  }

  return (
        <Button variant="outline" size="icon" onClick={toggleTheme} className="bg-transparent border-0 ">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  );
}

export default BtnToggleTheme;
