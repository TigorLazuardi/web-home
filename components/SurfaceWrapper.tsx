import React from 'react'
import AppBar from './surfaces/AppBar'

const SurfaceWrapper: React.FC = ({ children }) => {
    return (
        <React.Fragment>
            <AppBar />
            <div children={children}></div>
        </React.Fragment>
    )
}

export default SurfaceWrapper
