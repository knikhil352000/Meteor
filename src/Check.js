import React from 'react'
import './Check.css'
const Check = ({check}) => {
    return (
        <div className="check" style={{backgroundColor: check}}>
            {
                check === "green" ? (
                    <h3>Correct</h3>
                ) : (
                    <h3>Wrong</h3>
                )
            }
        </div>
    )
}

export default Check
