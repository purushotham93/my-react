import { useEffect, useState } from "react"

export default function RandomHex() {
    const [colorType, setColorType] = useState('HEX');
    const [color, setColor] = useState('#000000');

    function handleClick () {
        if(colorType === 'HEX') {
            generateRandomHex()
        } else {
            generateRandomRgb()
        }
    }

    function generateRandomHex() {
        const hexColorsArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor ='#';
        
        for(let i=0; i<6;i++) {
            hexColor += hexColorsArray[randomUtility(hexColorsArray.length)]
        }
        setColor(hexColor)

    }

    useEffect(()=> handleClick(),[colorType])

    function generateRandomRgb() {
        const r= randomUtility(256);
        const g= randomUtility(256);
        const b= randomUtility(256);
        setColor(`rgb(${r},${g},${b})`)
    }

    function randomUtility(length) {
        return Math.floor(Math.random()*length)
    }

return (

    <div className="container"
    style={{
        width:'w00vw',
        height: '100vh',
        background: color
    }}>
        <button onClick={()=> setColorType('HEX')}>Create Hex color</button>
        <button onClick={()=> setColorType('RGB')}>Create RGB color</button>
        <button onClick={handleClick}>Generate Random color</button>
        <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            color:'#000000',
            fontSize:'60px',
            marginTop:'50px'

        }}><h1>{colorType}</h1>
        <h3>{color}</h3></div>
    </div>
)
}