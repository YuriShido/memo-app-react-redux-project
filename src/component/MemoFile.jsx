import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
const MemoFile = ({contentsProps}) => {
    console.log("titleProps;",{contentsProps})
    // const [currentContent, setCurrentContent] = useState('')

    // useEffect(() => {
    //     setCurrentContent(contentsProps)
      
    // }, [contentsProps])

    return(
    <div className="memo-file-container">
        
        <h2 className="memo-list">Memo list</h2>
        <div className="memo-file">

            <ul className="memo">
            
            {/* onclick functionでクリックしたら右のコンポーネントに出力できるようにする */}
                {
                    contentsProps.map(({title }, id )=> (
                    <li key={id} className="memo-item" >
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
    console.log("memoState; ",state);
    return {
        contentsProps: state.contents.memoList
    }
}

// connect method here
export default connect(mapStateToProps)(MemoFile)


// const mapStateToProps = (state) => {
//     return {
//       toDoList: state.toDoList,
//     }
//   }
//style={{borderBottom:"solid"}}