import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

const PublicRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => !!state.auth.uid)

    return (
        <Route {...rest}>
        {
            isAuthenticated  ? (
                <React.Fragment>
                    <Header />
                    <Component />
                </React.Fragment>
            ) : (
                <Redirect to="/" />
            )
        }
        </Route>
    )
}

export default PublicRoute