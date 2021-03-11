import React from 'react'
import loader from '../assets/images/loader.gif'

const LoadingPage = () => (
    <div className="loader">
        <img
            className="loader__image" 
            src={loader}
        />
    </div>
)

export default LoadingPage