import React from 'react'
import { connect } from 'react-redux'

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
const MemoFile = ({contentsProps}) => {
    console.log("titleProps;",{contentsProps})
    return(
    <div className="memo-file-container">
        
        <Icon color="primary">add_circle</Icon>
        {/* <Fab color="primary" aria-label="add"> */}
            <AddIcon />
        {/* </Fab> */}
            <SearchIcon />
        {/* <Fab color="primary" > */}
            <DeleteIcon />
        {/* </Fab> */}
        <div className="memo-file">
            <ul className="memo">
            
            {/* onclick functionでクリックしたら右のコンポーネントに出力できるようにする */}
                {
                    contentsProps.map(({ id, title })=> (
                    <li key={id} >
                        {title}
                        <hr /> 
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