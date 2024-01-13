import { Input } from '@mui/material'
import React, { useState } from 'react'



const InputSave = ({onInputChange}) => {
const [saveItem, setSaveItem] = useState('')


  return (
        <>
        <Input value={saveItem} onChange={(e)=>{
          const updated = e.target.value; 
          setSaveItem(updated); onInputChange(updated)}}
          />
        </>
  )
}

export default InputSave