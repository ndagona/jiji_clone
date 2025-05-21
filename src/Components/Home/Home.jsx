import React,{useEffect, useState} from 'react';
import './Home.css';
import jiji_icon from './Assets/Icons/jiji.png';
import searchIcon from './Assets/Icons/search.png';
import Sidebar from './Assets/Sidebar';
import backicon from './Assets/Icons/back.png';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

function Home() {
  const [searchkey, setSearchkey] = useState();
   const [products, setProducts] = useState([]);
   const [visi, setVisi] = useState(false)
   const [currentProd, setCurrentprod] = useState()
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



  const handleProClick = (row) => {
      setVisi(true)
      setCurrentprod(products[row])
    
  }

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

        {!visi && <main className="placement">
               {Object.keys(products).length > 0 && 
                Object.keys(products).filter((row) => {
                  if(searchkey==="" || searchkey == undefined) return row
                  const lookup = searchkey.toString().toLowerCase()
                  const vlook = products[row]['title'].toString().toLowerCase()
                  if(vlook.includes(lookup)) return row
                }).map((row, ind) => (
                  <article className='product' key={`product single ${ind}` }
                  
                  onClick={() => {handleProClick(row); }}
                  >
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
        }{visi && <main className="placementa" >
          <section className="topaz">
          <section className="display_images">
            <section className="back_button"  
            onClick={() => {
              setVisi(false)
            }}
            >
              <img src={backicon} alt="" />
            </section>
            <img src={currentProd['images'][0]} alt="" />
          </section>
          <section className="descrip">
            <p className="title_name">{currentProd['title']}</p>
            <p className="desc_name">{currentProd['description']}</p>
            <section className="import">
              <p className="pricing"><span className="hmm">Current Price</span><span className="yoo">{`$ ${currentProd['price']}`}</span></p>
              <p className="pricing"><span className="hmm">Rating</span><span className="yoo">{`${currentProd['rating']}`}</span></p>
              <p className="pricing"><span className="hmm">Available Stock</span><span className="yoo">{`${currentProd['stock']}`}</span></p>
            </section>
            <section className="seller_info">
              <p className="storname">Store Name</p>
              <p className="location">Location</p>
              <p className="contanct">0439348349834</p>
            </section>
          </section>
          </section>
        </main> }
    </main>
  )
}

export default Home