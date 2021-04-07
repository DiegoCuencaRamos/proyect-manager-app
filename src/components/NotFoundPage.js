import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Title from './Title'

const NotFoundPage = () => (
    <Fragment>
        <Header />
        <Title 
            title='Page not found'
            description='The page you are looking for was not found'
        />
        <div className="container">
            <div id="goHomeContainer">
                <Link 
                    className="link"
                    to="/dashboard"
                >Go back to home page</Link>
            </div>
        </div>
    </Fragment>
)

export default NotFoundPage