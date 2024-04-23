import React from 'react'

export default function Location() {
    return (
        <>
            <h1 className="googleheading">
                    YOU CAN TRAKE THIS LOCATION   : )
                </h1>
            <div className="googlelocation">                
                <iframe title='hello' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7760.087791726675!2d73.16579688449909!3d22.35825357788808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc92532744cdf%3A0xec3432aa095ac797!2sRamakaka%20ni%20Deri!5e0!3m2!1sen!2sin!4v1709301260468!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                {/* cannot use style directly so use js while styleing in js file */}
            </div>
        </>
    )
}
