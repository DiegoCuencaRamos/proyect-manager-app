import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(state => !!state.auth.uid) 
    
    return (
        <Route {...rest}>
            {
                isAuthenticated ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <Component />
                )
            }
        </Route>
    )
} 

export default PublicRoute