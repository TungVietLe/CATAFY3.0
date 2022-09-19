import React, { useContext } from 'react'
//context
import {UserContext} from '../../../App'

function NewStorePage() {
    //context
    const user = useContext(UserContext)
    const userid = user?.uid

    //
  return (
    <>
        <h2>New Store</h2>
    </>
  )
}

export default NewStorePage