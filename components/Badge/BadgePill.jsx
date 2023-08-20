import React from "react"

export default function BadgePill ({children, badgeColor}) {
    
    return (
        <div className={`badge pill ${badgeColor}`}>
            {children}
        </div>
    )
}