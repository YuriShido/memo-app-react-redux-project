import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { addContents, setContents, updateContents} from '../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MemoryRouter } from 'react-router';
import { CropSquareRounded, Update } from '@material-ui/icons';
import Button from '@material-ui/core/Button';




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
                contents: e.target.value
            }
        })
    }

    const clickHandler = (title, memo, isAdd, id=null) => {
        if(isAdd) {
            addContents({id: contentsProps.length, title: current.title, contents: current.contents})
        } else {
            console.log("updatetitle",title);
            console.log("updacontent",memo);

            updateContents({title: title, contents: memo, id: id})
        }
    }

    return (
        <>
        <form >
        <TextField onChange={handleTitleChange} className="title" id="standard-basic"  value={current.title} onChange={(e)=> setCurrent((prevProps) => {
            return {
                ...prevProps,
                title: e.target.value
            }
        })} />
        {/* <input onChange={handleTitleChange} className="title" id="standard-basic"  value={current.title}></input> */}
        <textarea className="memo-field" onChange={handleMemoChange} name="" id="" cols="30" rows="30"  defaultValue={current.contents}></textarea>
        <Button variant="contained" color="primary" onClick={ ()=>clickHandler(title, memo, true)}>Add</Button>
        <Button variant="outlined" color="primary" className="button" onClick={ ()=>clickHandler(current.title,current.contents, false, currentProps.id)}>Update</Button>
        {/* { isNewProps ?
        (<Button variant="contained" color="primary" onClick={ ()=>clickHandler(title, memo, true)}>Add</Button>) :
        (<Button variant="contained" color="primary" onClick={ ()=>clickHandler(title,memo, false)}>Update</Button>)
        } */}
        {/* { isNewProps ? (<button onClick={ ()=>clickHandler(title, memo, true)}>Add</button>):(<button onClick={ ()=>clickHandler(title,memo, false)}>Update</button>)} */}
             
        
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