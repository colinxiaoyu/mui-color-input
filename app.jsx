import React from 'react'

import { MuiColorInput } from './src'

const App = () => {
  const [color, setColor] = React.useState('#ffffff')

  const handleChange = (color) => {
    setColor(color)
  }

  const onClose = () => {
    console.log('onClose')
  }




  console.log('color', color)


  return (
    <MuiColorInput value={color} onChange={handleChange} format="hex" onCloseValue={onClose} />
  )
}

export default App