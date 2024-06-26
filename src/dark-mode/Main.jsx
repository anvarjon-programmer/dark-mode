import React, { useEffect, useState } from 'react'
import './Main.css'
import data from './Data'
import Article from './Article';

const getStorageTheme = () =>{
    let theme = 'light-theme';
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme')
    }
    return theme
}
const Main = () => {

    const [theme,setTheme] = useState(getStorageTheme())

    const toggleTheme = () =>{
        if(theme === 'light-theme'){
            setTheme('dark-theme')
        }else{
            setTheme('light-theme')
        }
    }

    useEffect(() =>{
        document.documentElement.className = theme;
        localStorage.setItem('theme',theme)
    },[theme])
    
  return (
    <main>
        <nav>
            <div className='nav-center'>
                <h1>Overreacted</h1>
                <button className='btn' onClick={toggleTheme}>togle</button>
            </div>
        </nav>
        <section className='articles'>
            {data.map((item,index) =>{
                return <Article key={item.id} {...item}/>
            })}
        </section>
    </main>
  )
}

export default Main