import React,{useEffect, useState} from 'react';
import './Home.css';
import jiji_icon from './Assets/Icons/jiji.png';
import searchIcon from './Assets/Icons/search.png';
import Sidebar from './Assets/Sidebar';
//import axios from 'axios';

function Home() {
  const [searchkey, setSearchkey] = useState();
   const [products, setProducts] = useState([]);
  const handleChange = (e) => {
    const cap = (word) => {
        return `${word.slice(0,1).toUpperCase()}${word.slice(1,).toLowerCase()}`
    }
    setSearchkey(cap(e.target.value))
  }


   useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        
      }
    }

    fetchProducts();

  }, []);

  useEffect(() => {
        console.log("Products below")
        console.log(products)
  },[products])

  return (
    <main className="home">
        <nav className="topnav">
            <section className="jiji_header">
                <img src={jiji_icon} alt="Website Icon" />
            </section>
            <section className="searchbarhome">
                <input type="text" className="search_input_home" placeholder='Search' value={searchkey} onChange={e => {handleChange(e)}}/>
                <section className="search_button">
                    <img src={searchIcon} alt="Search Button Icon" />
                </section>
            </section>
            <Sidebar />
        </nav>

        <nav className="sidenav">

        </nav>

        <main className="placement">
               {Object.keys(products).length > 0 && 
                Object.keys(products).map((row, ind) => (
                  <article className='product' key={`product single ${ind}`}>
                    <img src={products[row]['thumbnail']} alt="" />
                  <p className="product_name">{products[row]['title']}</p>
                  <p className="misc">
                    <span>{`${products[row]['price']} $`}</span>
                    <span>{`Rating ${products[row]['rating']}`}</span>
                  </p>
                  </article>
                ))
               }
        </main>
    </main>
  )
}

export default Home