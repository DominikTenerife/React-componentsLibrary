import React from "react"

export default function Card ({title, paragraph}) {
    
    return (
        
        <div className="card">
        <div className="card-content">
            <div className="card-icon"></div>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        
        </div>
            
           
        </div>
        
    )
    
}