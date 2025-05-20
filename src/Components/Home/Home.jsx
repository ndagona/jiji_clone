import React,{useEffect, useState} from 'react';
import './Home.css';
import jiji_icon from './Assets/Icons/jiji.png';
import Sidebar from './Assets/Sidebar';
//import axios from 'axios';

function Home() {
  const [searchkey, setSearchkey] = useState();
  const handleChange = (e) => {
    const cap = (word) => {
        return `${word.slice(0,1).toUpperCase()}${word.slice(1,).toLowerCase()}`
    }
    setSearchkey(cap(e.target.value))
  }

  return (
    <main className="home">
        <nav className="topnav">
            <section className="jiji_header">
                <img src={jiji_icon} alt="" />
            </section>
            <section className="searchbarhome">
                <input type="text" className="search_input_home" placeholder='Search' value={searchkey} onChange={e => {handleChange(e)}}/>
                <section className="search_button">Search</section>
            </section>
            <Sidebar />
        </nav>

        <nav className="sidenav">

        </nav>

        <main className="placement">
               
        </main>
    </main>
  )
}

export default Home