// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <div className="container">
    <Header />
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="sm-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="lg-img"
      />
    </div>
  </div>
)
export default About
