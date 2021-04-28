import React from 'react'
import { connect } from 'react-redux'

import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
const MemoFile = ({titleProps}) => {
    console.log({titleProps})
    return(
    <div className="memo-file-container">
        <h1>Memo</h1>
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
                <li>
                    Cook Recepe
                    <hr />
                </li>
                
                {
                    <li>
                        {titleProps[0].title}
                        <hr /> 
                    </li>
                }
            </ul>
        </div>

    </div>
        ) 
}


const mapStateToProps = (state) => {
    console.log("memoState; ",state);
    return {
        titleProps: state.contents.memoList
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