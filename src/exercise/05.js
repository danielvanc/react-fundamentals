// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const smallBox = (
  <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box className="box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box className="box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function Box({className, style, children}) {
  return (
    <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  )
}

function App() {
  return (
    // <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    //   small lightblue box
    // </Box>

    <>
      {smallBox}
      {mediumBox}
      {largeBox}
    </>
  )
}

export default App
