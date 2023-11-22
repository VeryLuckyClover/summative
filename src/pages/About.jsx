import React from 'react'
import Team from '../assets/images/team.png'
import Massage from '../assets/images/massage.png'
import Jolie from '../assets/images/jolie.png'

const About = () => {
  return (
    <>

    <div className="about-container">
      <div className="heading-section">
        <h2>Mo Mihi</h2>
        <h4>About us</h4>
      </div>

      <img className="page-img-styling" src={Team} alt="This is a picture of the team at Manawa Ora, standing in front of a marae" />

      <div className="sub-section">
        <h6>Ko Wai Tātou?</h6>
        <h3>Who are we?</h3>
        <p>We're Manawa Ora, a Māori-owned business on a mission to make a positive impact. Our belief is that many people have lost touch with their bodies. Our goal is to reconnect individuals, collaborating to restore balance to both body and mind. Our approach leads to harmonious healing on a spiritual level.</p>
      </div>

      <img className="page-img-styling" src={Massage} alt="This is an extreme close up of a massage in progress on a womens shoulder" />

      <div className="sub-section">
        <h6>Ā tātou mahi</h6>
        <h3>Our work</h3>
        <p>At our core, we practice Mirimiri and Romiromi, drawing from their linguistic roots:</p>
        <br />
        <li>Mi to stimulate</li>
        <li>Ri to agitate</li>
        <li>Ro internal organs</li>
        <li>Mi to stimulate</li>
        <br />
        <p>Mirimiri channels stimulation to invigorate blood, bone, tissue, and fluids. Meanwhile, Romiromi adds a profound healing touch, reaching into the intricacies of internal organ function. Harmoniously, we integrate both traditions, bringing balance to your body and fostering harmony in your mind.</p>
      </div>

      <img className="page-img-styling" src={Jolie} alt="This is a close up on Jolie who is the founder of Manawa Ora" />

      <div className="sub-section">
        <h6>Jolie Davis</h6>
        <p>Jolie Davis, founder of Manawa Ora Mirimiri & Workshops, brings over 20 years of experience as a respected Kaimirimiri (Mirimiri practitioner). A former nurse, she returned to her traditional roots inspired by her own healing journey, realising the importance of personal healing to prevent passing on pain to the next generation.</p>
        <p>Now, as an expert in pain, injuries, chronic conditions, and trauma, Jolie passionately educates and champions Māori knowledge and practices, lost over successive generations.</p>
      </div>      
    </div>
      
    </>
  )
}

export default About
