import React from 'react'
import './Section.css'
const Section = (props) => {
  return (
    <>
    <div className="registration">
        <div className="DLFlogo">
            <img src={props.image} alt="" />
        </div>
        <div className="details">
            <h3>
                HARERA Registration No.: <br />
                RC/REP/HARERA/GGM/{props.GGM} <br />
                Dated {props.date}
            </h3>
        </div>
    </div>
    </>
  )
}

export default Section
