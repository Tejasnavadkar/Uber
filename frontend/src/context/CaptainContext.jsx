import { createContext, useContext, useState } from 'react'


export const CaptainDataContext = createContext()

export const useCaptainContext = () => {
    const context = useContext(CaptainDataContext)
    if (!context) {
        throw new Error('useCaptainContext must used inside captainProvider')
    }

    return context
}


export const CaptainContext = ({ children }) => {

    const [captain, setCaptain] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const updateCaptain = (captainData) => {
        setCaptain(captainData)
    }

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    }


    return (
        <>
            <CaptainDataContext.Provider value={value}>
                {children}
            </CaptainDataContext.Provider>

        </>
    )
}