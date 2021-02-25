import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

const NotFoundPage = () => (
    <React.Fragment>
        <Title 
            title='Page not found'
            description='The page you are looking for was not found'
        />
        <Link to="/dashboard">Go back to home page</Link>
    </React.Fragment>
)

export default NotFoundPage