import React from 'react'

const ProjectContext = React.createContext()

const ProjectContextProvider = ({ children }) => {
    const value = {
        isProyect: true
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}

export { ProjectContext, ProjectContextProvider as default }