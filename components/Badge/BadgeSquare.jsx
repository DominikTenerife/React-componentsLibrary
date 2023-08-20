import React from "react"

export default function BadgeSquare ({children, badgeColor}) {
    
    return (
        <div className={`badge square ${badgeColor}`}>
            {children}
        </div>
    )
}