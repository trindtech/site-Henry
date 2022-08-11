import './App.css'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import Header from './header/header'
import Box from './box/box'
import Body from './body/body'
import Footer from './footer/footer'

function App() {

    const [activeColor, setActiveColor] = useState(false)

    useEffect(function () {
        function scrollPosition() {
            if (window.scrollY > 40) {
                setActiveColor(true);
            } else {
                setActiveColor(false);
            }
        }

        window.addEventListener('scroll', scrollPosition)

    }, []);

    return (
        <div className="App">
            <Header action={activeColor}></Header>
            <Box></Box>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
    }
export default App; 