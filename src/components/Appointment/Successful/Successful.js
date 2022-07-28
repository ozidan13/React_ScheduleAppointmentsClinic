import React from 'react'
import './Successful.css'
import MyIcon from './icon.png'

const Successful = () => {
  return (
    <>
        <div className="container">
            <div className='card'>
                <h1>successful</h1>
                <main>
                    <img src={MyIcon}></img>
                </main>
                <p>Good, Now your appointment is scheduled!</p>
            </div>
        </div>
    </>
  )
}

export default Successful