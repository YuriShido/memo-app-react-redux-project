import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {setContents} from '../redux/actions'

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';


const MemoFile = ({contentsProps, setContents, currentProps}) => {
    console.log("titleProps;",contentsProps)
    console.log("titleProps2;",currentProps)
    // const [currentContent, setCurrentContent] = useState('')

    // useEffect(() => {
    //     setCurrentContent(contentsProps)
      
    // }, [contentsProps])

    const clickHandler = (title, contents) => {
        console.log("title", title);
        console.log("content", contents);
        setContents({title:title, contents: contents})
    }

    return(
    <div className="memo-file-container">
        
        <h2 className="memo-list">Memo list</h2>
        <div className="memo-file">

            <ul className="memo">
            
            {/* onclick functionでクリックしたら右のコンポーネントに出力できるようにする */}
                {
                    contentsProps.map(({title,  contents }, id )=> (
                    <li key={id} className="memo-item" onClick={() => clickHandler(title, contents)} >
                        {title}
                        {/* <hr />  */}
                    </li>

                    ))
                }
            </ul>
        </div>

    </div>
        ) 
}


const mapStateToProps = (state) => {
    console.log("memoStateee; ",state);
    return {
        contentsProps: state.contents.memoList,
        currentProps: state.contents
    }
}

const mapDispatchToProps = (dispatch) => ({
    setContents: (content) => dispatch(setContents(content))
})

// connect method here
export default connect(mapStateToProps, mapDispatchToProps)(MemoFile)


// const mapStateToProps = (state) => {
//     return {
//       toDoList: state.toDoList,
//     }
//   }
//style={{borderBottom:"solid"}}