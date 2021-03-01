import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Title from './Title'

const NotFoundPage = () => (
    <React.Fragment>
        <Header />
        <Title 
            title='Page not found'
            description='The page you are looking for was not found'
        />
        <div className="container">
            <Link 
                to="/dashboard"
                className="link"
            >Go back to home page</Link>
        </div>
    </React.Fragment>
)

export default NotFoundPage