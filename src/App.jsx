import { useState } from 'react'
import './App.css'
import { Slider } from '@mui/material'
import { createTheme, ThemeProvider} from '@mui/material/styles'

function App() {
  const [val,setVal] = useState([0, 100])
  const [randomNum, setRabdomNum] = useState('Tap the button to generate a random number')
  const [rNColor, setrNColor] = useState('#B4B4B4')
  const updateRange = (e,value) =>{
      setVal(value);
  }
  const randomColor = '#' + Math.random().toString(16).slice(2,8)
  const handleRandomNumber = () =>{
    setRabdomNum(
      <div id='rNumber'  style={{color: randomColor}}>
        {Math.floor(Math.random() * (val[1] - val[0] + 1)+val[0])}
      </div>
    )
  }
  return (
    <div>
      <div className='mainContainer'>
        <div className='textContainer'>
            <h1>RANDOM NUMBER GENERATOR</h1>
        </div>
        <div className='discription'>
                <span style={{color: rNColor}}>{randomNum}</span>
        </div>
        <div className='rangeSlider'>
          <p className='Range'>Range: {val.join(" - ")}</p>
          <ThemeProvider theme={theme}>
            <Slider 
              step={1}
              valueLabelDisplay="auto"
              max={100}
              value={val}
              onChange = {updateRange}
              color='neutral'
            />
          </ThemeProvider>
        </div>
        <div className='curveArea'>
          <button className='button' onClick={handleRandomNumber}></button>
        </div>
      </div>
      <p className='credit'>Design credit to <span class="name"> Kevin Mao, </span><a href="https://dribbble.com/shots/3804576-Random-Number-Generator">Design Link</a></p>
    </div>
  )
}
export default App
const theme = createTheme({
  palette: {
    primary:{
      main: '#C9C9C9',
      darker: '8B8B8B',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  }
});