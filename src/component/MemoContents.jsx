
import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { addContents, setContents, updateContents} from '../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { CropSquareRounded, Update } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';


const MemoContents = ({contentsProps, addContents, setContents, currentProps, isNewProps, updateContents}) => {
    // メモの内容が変わった時にstateのリストに追加と更新をする
    // デフォルトは空欄かひとつ目のメモの内容が出るようにする
    const [title, setTitle] = useState('')
    const [memo, setMemo ]  = useState('')
    const [current, setCurrent] = useState(currentProps)

    console.log("inNewProps:", isNewProps);

    useEffect(() => {
        setCurrent(currentProps)
        console.log(currentProps);
        console.log("InuseEffect", current);
    }, [currentProps])

    const handleTitleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
        console.log('title: ', title);
    }

    // const handleMemoChange = (e) => {
    //     e.preventDefault()
    //     return {
    //         ...pre
    //     }
    //     setMemo(e.target.value)
    //     console.log("memo:", memo);

    // }
    const handleMemoChange = (e) => {
        setCurrent((prevProps) => {
            return {
                ...prevProps,
                contents: e.target.value,
            }
        })
        
    }

    const clickHandler = (title, memo, isAdd, id=null) => {
        if(isAdd) {
            addContents({id: contentsProps.length, title: current.title, contents: current.contents, isNew: false})
        } else {
            console.log("updatetitle",title);
            console.log("updacontent",memo);

            updateContents({title: title, contents: memo, id: id})
        }
    }

    return (
        <>
        <form className="memo-box">
        <TextField onChange={handleTitleChange} className="title" id="standard-basic" label="Title" value={current.title} onChange={(e)=> setCurrent((prevProps) => {
            return {
                ...prevProps,
                title: e.target.value
                
            }
        })} />
        
        <textarea className="memo-field" onChange={handleMemoChange} name="" id="" cols="30" rows="30"  value={current.contents}></textarea>
        {
            isNewProps?
            (<Button variant="contained" color="primary" onClick={ ()=>clickHandler(title, memo, true)}>Add</Button>) :
            (<Button variant="contained" color="secondary" className="button" onClick={ ()=>clickHandler(current.title,current.contents, false, currentProps.id)}>Update</Button>)
        }
    
      </form>
        </>
    )
}

const mapStateToProps = (state) => ({
    contentsProps: state.contents.memoList,
    currentProps: state.contents.currentMemo,
    isNewProps: state.contents.isNew
    
})

const mapDispatchToProps = (dispatch) => {
    // console.log(addContents);
    return ({
    addContents: (contents) => dispatch(addContents(contents)),
    setContents: (contents) => dispatch(setContents(contents)),
    updateContents: (contents) => dispatch(updateContents(contents))
})}

export default connect(mapStateToProps, mapDispatchToProps)(MemoContents)
