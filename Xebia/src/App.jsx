import { useState } from "react";
import Navbar from "./component/HeroSection/Navbar";
import HeroComp from "./component/HeroSection/HeroComp"
import "./App.css";
import JoinUs from "./component/HeroSection/JoinUs";
import Form from "./component/HeroSection/Form";

function App() {
 

  return (
    <>
     <Navbar/>
     <HeroComp h1='Our Journey' img="https://images.pexels.com/photos/19126536/pexels-photo-19126536/free-photo-of-rabbit-on-grass.jpeg"/>

    <div className="my-8"><HeroComp h1="Our Values" img="https://images.pexels.com/photos/20640188/pexels-photo-20640188/free-photo-of-two-people-standing-in-a-field-holding-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
    <div className="my-8">
    <HeroComp
     h1="Why Choose Us" img="https://images.pexels.com/photos/1125850/pexels-photo-1125850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>
    <JoinUs/>
    
    </>
  );
}

export default App;
