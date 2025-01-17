// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="container">
    <Header />
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="sm-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="lg-img"
      />
    </div>
  </div>
)
export default Home
