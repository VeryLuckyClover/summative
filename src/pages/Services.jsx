import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

// Images 
import Service1 from '../assets/images/service1.png'
import Service2 from '../assets/images/service2.png'
import Service3 from '../assets/images/service3.png'

// Links
import { Link } from "react-router-dom"

const Services = () => {
  const baseURL = import.meta.env.VITE_WP_API_BASEURL

  const [services, setServices] = useState ([])
  const [workshops, setWorkshops] = useState ([]) // Empty array until it gets the data from Woocommerce
  const [loading, setLoading] = useState(true)

  const servicesEndPoint = `${baseURL}/services?_embed`

  const workshopEndPoint = `${baseURL}/workshop?_embed`

  useEffect(() => {
    setLoading(true)
 
    // fetch services data
    const fetchServices = axios.get(servicesEndPoint)

    // fetch workshop data
    const fetchWorkshop = axios.get(workshopEndPoint)

    axios.all([fetchServices, fetchWorkshop])
    .then(axios.spread((...responses) => {
      const servicesResponse = responses[0]
      const workshopResponses = responses[1]
 
      setServices(servicesResponse.data)
      setWorkshops(workshopResponses.data)
      setLoading(false)
      // const timeout = setTimeout(() => setLoading(false), 1000);
    }))
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })

  }, [])
  
  if(loading) { 
    return(
    <div>loading</div>
    ) }

  return (
    <>
    <div className="services-header">
      <div className="heading-section">
        <h2>Ratonga</h2>
        <h4>Our Services</h4>
      </div>
    </div>

    <div className="services-container">

        <div className="service-posts">

          {/* Service 1 */}

          <img src={Service1} alt="Mirimiri picture" />
          <h4>Mirimiri</h4>
          <h3>Healing Massage</h3>

          <br />

          <p>Mirimiri helps to clear energetic blocks within the body that often result from physical or emotional trauma.</p>

          <Link to={`/servicesposts/${services[0].id}`}>
            <button className="learn-more-btn">Learn More</button>
          </Link>
        </div>

        <div className="service-posts">
          {/* Service 2 */}

          <img src={Service2} alt="Romiromi picture" />
          <h4>Romiromi</h4>
          <h3>Deep Healing Massage</h3>

          <br />

          <p>Romiromi includes a deeper layer of healing that affects the function of the internal organs. This service...</p>

          <Link to={`/servicesposts/${services[1].id}`}>
            <button className="learn-more-btn">Learn More</button>
          </Link>
        </div>

        <div className="service-posts">
          {/* Service 3 */}

          <img src={Service3} alt="workshop picture" />
          <h4>Aweawhe</h4>
          <h3>Workshops</h3>

          <br />

          <p>Manawa Ora Mirimiri & Workshops teach Mirimiri and traditional Maori healing as a way to reconnect people...</p>

          <Link to={`/workshopposts/${workshops[0].id}`}>
            <button className="learn-more-btn">Learn More</button>
          </Link>
        </div>
    </div>
      
    </>
  )
}

export default Services
