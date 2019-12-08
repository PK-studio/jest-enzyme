import React from 'react'

export const Snapshot = ({isFeatureToggled, link, onClick}) => {
    return (
        <>
            <h1>Test name: snapshot</h1>
        
            {isFeatureToggled
                ? <p>Feature is switch on</p>
                : <p>This time feature is switch off</p>
            }

            <button 
                data-test-id={'snapshot-button'} 
                href={link || '#'} 
                onClick={() => {
                    onClick(link)
                }} 
            />
        </>
    )
}