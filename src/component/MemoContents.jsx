import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { addContents, setContents, updateContents} from '../redux/actions';
import { MemoryRouter } from 'react-router';
import { Update } from '@material-ui/icons';



const MemoContents = ({contentsProps, addContents, setContents, currentProps, isNewProps, updateContents}) => {
    // メモの内容が変わった時にstateのリストに追加と更新をする
    // デフォルトは空欄かひとつ目のメモの内容が出るようにする
    const [title, setTitle] = useState('')
    const [memo, setMemo ]  = useState('')
    const [current, setCurrent] = useState('')

    console.log("inNewProps:", isNewProps);

    useEffect(() => {
        setCurrent(currentProps)
    }, [currentProps])

    const handleTitleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
        console.log('title: ', title);
    }

    const handleMemoChange = (e) => {
        e.preventDefault()
        setMemo(e.target.value)
        console.log("memo:", memo);

    }

    const clickHandler = (title, memo, isAdd) => {
        if(isAdd) {
            addContents({title: title, contents: memo})
        } else {
            updateContents({title: title, contents: memo})
        }
    }

    return (
        <>
        <form >
        <TextField onChange={handleTitleChange} className="title" id="standard-basic"  defaultValue={current.title} />
        {/* タイトルファイルのとこ押すとフォームの中身がメモの内容で見れるようにする */}
        <textarea className="memo-field" onChange={handleMemoChange} name="" id="" cols="60" rows="30" value={current.contents} ></textarea>
        {/* cols="80" rows="30" */}
        { isNewProps? (<button onClick={ ()=>clickHandler(title,memo, true)}>Add</button>):(<button onClick={ ()=>clickHandler(title,memo, false)}>Update</button>)}
             
        
      </form>

         {/* <div className="memo-box">
             <input className="memo-title" type="text"/>
             <textarea className="memo-field" name="" id="" cols="90" rows="30"></textarea>

         </div> */}
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

// const mapDispatchToProps = (dispatch) => ({
//     addItem: (item) => dispatch(addItem(item)),
//     removeItem: (item) => dispatch(removeItem(item)),
//     clearItem: (item) => dispatch(clearItemFromCart(item))
// })

// export default connect(null, mapDispatchToProps)(CheckOutItem)