import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Review1 from '../assets/images/review1.png'
import Review2 from '../assets/images/review2.png'
import Review3 from '../assets/images/review3.png'

// Link import
import { Link } from "react-router-dom"

const baseURL = import.meta.env.VITE_WC_PRODCUTS_URL

const Home = () => {

  const [products, setProducts] = useState ([])

  useEffect(() => {
    axios.get(`${baseURL}`)
    .then((res) => {
      console.log(res.data)
      setProducts(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>

    {/* this will have the hero banner as background */}
    <div className="hero-container">
      {/* this will allow you to style these sections */}
      <div className="hero-inner-container">
        <div className="hero-heading-section">
          <h3>Manawa Ora</h3>
          <h1>Rongoā Māori</h1>
        </div>
        <p>Welcome to Manawa Ora, Step outside your comfort zone and Experience Personal Transformation Through Mirimiri! </p>
        <br />
        <p>At Manawa Ora Mirimiri & Workshops, we practice authentic, traditional Mirimiri.</p>
        <Link to='/contact'>
          <button id="hero-btn-styling" className="book-now-btn">Book Now</button>
        </Link>
      </div>
    </div>

    {/* This has information about the sites services and links to the services page */}
    <div className="home-services-container">
      <div className="heading-section">
        <h2>Ratonga</h2>
        <h4>Services</h4>
      </div>
      <p>At Manawa Ora, we follow traditional Māori practices passed down through generations. </p>
      <br />
      <p>These practices involve connecting with ancient spiritual teachings and using physical touch to balance energies and promote healing. </p>
      <br />
      <p>We use the wisdom of mauri, wairua, tapu, whakapapa, and genealogy to help people on their life's journey.</p>
      <Link to='/services'>
        <button className="learn-more-btn">Learn More</button>
      </Link>
    </div>

    {/* This has information about the sites workshops and links to the Workshops page */}
    <div className="home-workshops-container">
      <div className="heading-section">
        <h2>Aweawhe</h2>
        <h4>Workshops</h4>
      </div>
      <p>At Manawa Ora, we provide hands-on workshops in Mirimiri, Romiromi, and Rongoā Rākau to kickstart your Māori healing journey and connect you with your higher self. </p>
      <br />
      <p>Our holistic approach covers physical, emotional, family, and spiritual aspects, considering culture and history. </p>
      <br />
      <p>These healing practices complement western medicine and can be used together or separately for various conditions and illnesses.</p>
      <Link to='/services'>
        <button className="learn-more-btn">Learn More</button>
      </Link>
    </div>

    <div className="home-products-container">
      <div className="heading-section">
          <h2>Hua Rongonui</h2>
          <h4>Popular Products</h4>
      </div>
      <div className="product-grid">
        {products.map((product) => {
          return (
            <div key={product.slug} className="product-card">
              <img className="page-img-styling" src={product.images[0].src} alt="product picture" />
              {product.name}
              <div dangerouslySetInnerHTML={{ __html: product.price_html }} />
              <button className="learn-more-btn">Buy Now</button>

            </div>
          )
        })}
      </div>

    </div>

    <div className="reviews-container">
      <div className="heading-section">
          <h2>Kupo Atawhai</h2>
          <h4>Kind Words</h4>
      </div>

      <div className="review-imgs">
        <img src={Review1} alt="amazing, life changing, very professional, this is an amazing space to relax, heal." />
        <img src={Review2} alt="beatiful massage from a beautiful person! Thank you!" />
        <img src={Review3} alt="Fabulous place, amazing lady." />
      </div>
    </div>
    
    </>
  )
}

export default Home
