import React from 'react';
import ReactDOM from 'react-dom/client';

import Badge from "./components/Badge/index"
import Banner from "./components/CompLibrary/Banner"
import Card from "./components/CompLibrary/Card"
import Testimonial from "./components/CompLibrary/Testimonial"

function App() {
  return (
    <>
      <div className="component-display">
        <Badge.Square badgeColor="grey">Badge</Badge.Square>
        <Badge.Square badgeColor="red">Badge</Badge.Square>
        <Badge.Square badgeColor="blue">Badge</Badge.Square>
        <Badge.Square badgeColor="yellow">Badge</Badge.Square>
        <Badge.Square badgeColor="green">Badge</Badge.Square>
        <Badge.Square badgeColor="red">Badge</Badge.Square>
        <Badge.Square badgeColor="indigo">Badge</Badge.Square>
        <Badge.Square badgeColor="purple">Badge</Badge.Square>
        <Badge.Square badgeColor="pink">Badge</Badge.Square>
      </div>
            
      <div className="component-display">
        <Badge.Pill badgeColor="grey">Badge</Badge.Pill>
        <Badge.Pill badgeColor="red">Badge</Badge.Pill>
        <Badge.Pill badgeColor="blue">Badge</Badge.Pill>
        <Badge.Pill badgeColor="yellow">Badge</Badge.Pill>
        <Badge.Pill badgeColor="green">Badge</Badge.Pill>
        <Badge.Pill badgeColor="red">Badge</Badge.Pill>
        <Badge.Pill badgeColor="indigo">Badge</Badge.Pill>
        <Badge.Pill badgeColor="purple">Badge</Badge.Pill>
        <Badge.Pill badgeColor="pink">Badge</Badge.Pill>
        
      </div>
      
      <Banner
      className="banner"
      variant="success"
      title="Congratulations!"
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      
      <Banner
      className="banner"
      variant="success"
      title="Congratulations!"
      />
      
      
      <Banner
      className="banner"
      variant="warning"
      title="Attention!"
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      
      <Banner
      className="banner"
      variant="warning"
      title="Attention!"
      />
      
      <Banner
      className="banner"
      variant="error"
      title="There is a problem with your application"
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      
      <Banner
      className="banner"
      variant="error"
      title="There is a problem with your application"
      />
      
      <Banner
      className="banner"
      variant="neutral"
      title="Update available"
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      />
      
      <Banner
      className="banner"
      variant="neutral"
      title="Update available"
      />
      
      <Card
      className="card"
      title="Easy Deployment"
      paragraph="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      
       />
       
       <Card
      className="card"
      title="Easy Deployment2"
      paragraph="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      
       />
       
       <Testimonial
       variant="photo"
       testimonialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
       person= "Dominik Piskorski"
       position= "Archipelago Consulting, CEO"
       
        />
        
        <Testimonial
       variant="no-photo"
       testimonialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
       person= "May Anderson"
       position= "Worcation, CTO"
       
        />
      
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
