import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addContents, setContents, updateContents, deleteContents} from '../redux/actions';

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';

const Header = ({currentProps, setContents, updateContents, deleteContents}) => {
    
    const clickHandler = () => {
        console.log("handler");
        setContents({title:"", contents:""})
    }

    const removeHandler = () => {
        deleteContents(currentProps)
        setContents({title:"", contents:""})
        console.log('delete;', currentProps.id)
    }

    return (
        <div className="header">
        <AddIcon onClick={clickHandler}/>
            <DeleteIcon onClick={removeHandler}/>
       
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
    updateContents: (content) => dispatch(updateContents(content)),
    deleteContents: (content) => dispatch(deleteContents(content))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)