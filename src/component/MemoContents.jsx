import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { addContents } from '../redux/actions';
import { MemoryRouter } from 'react-router';



const MemoContents = () => {

    const handleChange = (e) => {
        e.preventdefault()

    }
    return (
        <>
        <form >
        <TextField onChange={handleChange} id="standard-basic" label="Title" />
        <textarea className="memo-field" onChange={handleChange} name="" id="" cols="80" rows="30"></textarea>
       
      </form>

         {/* <div className="memo-box">
             <input className="memo-title" type="text"/>
             <textarea className="memo-field" name="" id="" cols="90" rows="30"></textarea>

         </div> */}
        </>
    )
}



const mapDispatchToProps = (dispatch) => ({
    addContents: (contens) => dispatch(addContents(contens))
})

export default connect(null, mapDispatchToProps)(MemoContents)

// const mapDispatchToProps = (dispatch) => ({
//     addItem: (item) => dispatch(addItem(item)),
//     removeItem: (item) => dispatch(removeItem(item)),
//     clearItem: (item) => dispatch(clearItemFromCart(item))
// })

// export default connect(null, mapDispatchToProps)(CheckOutItem)