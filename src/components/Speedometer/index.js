// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    let presentSpeed = speed + 10
    if (presentSpeed > 200) {
      presentSpeed = 200
    }
    this.setState({speed: presentSpeed})
  }

  applyBreak = () => {
    const {speed} = this.state
    let presentSpeed = speed - 10
    if (presentSpeed < 0) {
      presentSpeed = 0
    }
    this.setState({speed: presentSpeed})
  }

  render() {
    const {speed} = this.state
    return (
      <div className="pageDiv">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2>Speed is {speed}mph</h2>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button onClick={this.accelerate} className="button" type="button">
            Accelerate
          </button>
          <button onClick={this.applyBreak} className="button" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
