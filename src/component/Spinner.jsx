import React, { Component } from 'react'
import walk from "./Walk.gif"
export class Spinner extends Component {
  render() {
    return (
      <div className=''>
        <img src={walk} alt='loading'/>
      </div>
    )
  }
}

export default Spinner