import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addContents, setContents, updateContents } from '../redux/actions';

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';

const Header = ({currentProps, setContents, updateContents}) => {
    
    const clickHandler = () => {
        console.log("handler");
        setContents({title:"", contents:""})
    }

    return (
        <div >
            {/* style={{float:"right", marginRight:"5rem"}} */}
        {/* <Icon color="primary">add_circle</Icon> */}
        {/* <Fab color="primary" aria-label="add"> */}
        <AddIcon onClick={clickHandler}/>
        {/* </Fab> */}
            <SearchIcon />
        {/* <Fab color="primary" > */}
            <DeleteIcon />
        {/* </Fab> */}
       
        </div>
    )
}

const mapStateToProps = (state) => ({
    contentsProps: state.contents.memoList,
    currentProps: state.contents.currentMemo
})

const mapDispatchToProps = (dispatch) => ({
    addContents: (contens) => dispatch(addContents(contens)),
    setContents:  (content) => dispatch(setContents(content)),
    updateContents: (content) => dispatch(updateContents(content))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)