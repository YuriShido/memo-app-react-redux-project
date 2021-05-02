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
        setContents({title:"", contents:"", isNew: true})
    }

    //削除するときにこのタイトル消していいかのアラート出すif文使ってｏｋなら消す
    const removeHandler = () => {
        const check =  window.confirm(`Do you want to delete Memo title: ${currentProps.title}?`)
        if(check) {
            console.log("delete:",currentProps);
            deleteContents(currentProps)
            setContents({title:"", contents:"", isNew: true})

        }
    
    }
    // const removeHandler = () => {
    //     deleteContents(currentProps)
    //     setContents({title:"", contents:"", isNew: true})
    //     console.log('delete;', currentProps)
    // }

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