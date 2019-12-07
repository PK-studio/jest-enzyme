import React from 'react'

export const Snapshot = ({isFeatureToggled}) => (
    <>
        <h1>Test name: snapshot</h1>
        {isFeatureToggled
            ? <p>Feature is switch on</p>
            : <p>This time feature is switch off</p>
        }
    </>
)