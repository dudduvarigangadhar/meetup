import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  state = {}

  render() {
    return (
      <div>
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
            className="website-logo-img"
          />
        </>
        <div className="text-container">
          <h1 className="heading">Welcome to Meetup</h1>
          <p className="para">Please register for the topic</p>
          <Link to="/register">
            <button type="button" className="register-btn">
              Register
            </button>
          </Link>

          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
            className="meetup-img"
          />
        </div>
      </div>
    )
  }
}

export default Home
