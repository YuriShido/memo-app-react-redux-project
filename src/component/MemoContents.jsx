import React, {useState} from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { addContents } from '../redux/actions';
import { MemoryRouter } from 'react-router';



const MemoContents = ({contentsProps, addContents}) => {
    // メモの内容が変わった時にstateのリストに追加と更新をする
    // デフォルトは空欄かひとつ目のメモの内容が出るようにする
    const [title, setTitle] = useState('')
    const [memo, setMemo ]  = useState('')

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

    const clickHandler = (title, memo) => {
        addContents({title: title, contents: memo})
    }

    return (
        <>
        <form >
        <TextField onChange={handleTitleChange} className="title" id="standard-basic" label="Title" defaultValue={contentsProps[0].title} />
        {/* タイトルファイルのとこ押すとフォームの中身がメモの内容で見れるようにする */}
        <textarea className="memo-field" onChange={handleMemoChange} name="" id="" cols="60" rows="30" defaultValue={contentsProps[0].contents}></textarea>
        {/* cols="80" rows="30" */}
        <button onClick={ ()=>clickHandler(title,memo)}>Add</button>
      </form>

         {/* <div className="memo-box">
             <input className="memo-title" type="text"/>
             <textarea className="memo-field" name="" id="" cols="90" rows="30"></textarea>

         </div> */}
        </>
    )
}

const mapStateToProps = (state) => ({
    contentsProps: state.contents.memoList

})

const mapDispatchToProps = (dispatch) => {
    console.log(addContents);
    return ({
    addContents: (contents) => dispatch(addContents(contents))
})}

export default connect(mapStateToProps, mapDispatchToProps)(MemoContents)

// const mapDispatchToProps = (dispatch) => ({
//     addItem: (item) => dispatch(addItem(item)),
//     removeItem: (item) => dispatch(removeItem(item)),
//     clearItem: (item) => dispatch(clearItemFromCart(item))
// })

// export default connect(null, mapDispatchToProps)(CheckOutItem)