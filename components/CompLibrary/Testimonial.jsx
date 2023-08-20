import React from "react"

export default function Testimonial ({testimonialText, person, position, variant}) {
    
    
    return variant =="photo"? (
        <div className="testimonial">
        
            <div className="testimonial-img"></div>
                 
                <div className="testimonial-content">
                    <div className="testimonial-icon"></div>
                    
                    <h4>{testimonialText}</h4>
                    <p className="person">{person}</p>
                    <p>{position}</p>
                </div>
        
        </div>
        
    ) : (
        
         <div className="testimonial-nophoto">
        
                   <div className="testimonial-logo"></div>
                      
                <div className="testimonial-content-nophoto">
                    
                    <h4>{testimonialText}</h4>
                    <div className="nophoto-signature">
                        <p className="person">{person}</p>
                        <div className="testimonial-divider"></div>
                        <p>{position}</p>
                    </div>
                </div>
                 
        
        </div>
       
        
    )
}