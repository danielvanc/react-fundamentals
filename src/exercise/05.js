// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function Box({size, style, children}) {
  return (
    <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <>
      {smallBox}
      {mediumBox}
      {largeBox}
    </>
  )
}

export default App
