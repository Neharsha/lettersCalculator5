import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  InputValue = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="background-container">
        <div className="details-container">
          <div className="first">
            <h1 className="heading">
              Calculate the Letters you <br /> enter
            </h1>
            <div className="label">
              <label className="p" htmlFor="input">
                Enter the phrase
              </label>

              <br />

              <input
                type="text"
                id="input"
                onChange={this.InputValue}
                placeholder="Enter the phrase"
              />
            </div>
            <p className="count">No.of letters:{count}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
