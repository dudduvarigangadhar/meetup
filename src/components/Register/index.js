import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {username: '', selectedId: '', isEmpty: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  selectedId = event => {
    this.setState({selectedId: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    console.log('clicked')
  }

  render() {
    const {username, isEmpty} = this.state

    return (
      <div className="register-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
          alt="website-register"
          className="register-img"
        />

        <form className="formContainer" onSubmit={this.onSubmitForm}>
          <h1 className="heading">Let us join</h1>
          <label htmlFor="name" className="label-name">
            NAME
          </label>
          <input type="text" id="name" className="input-container" />
          <label htmlFor="Topic" className="label-name">
            TOPICS
          </label>
          <select id="topic" className="input-container">
            {topicsList.map(eachItem => (
              <option key={eachItem.id} value={eachItem.displayText}>
                {eachItem.displayText}
              </option>
            ))}
          </select>
          <button className="register-btn" type="submit">
            Register Now
          </button>
          {isEmpty && <p className="errorMsg">Please enter your name</p>}
        </form>
      </div>
    )
  }
}

export default Register
