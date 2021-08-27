import React from 'react'
import { Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { addContents, setContents, updateContents, deleteContents} from '../redux/actions';
// import MemoCard from './MemoCard'
import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const useStyles = makeStyles({
    root: {
      color:'black',
    },
    
});

const Header = ({currentProps, setContents, updateContents, deleteContents}) => {
    
    const classes = useStyles();

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

    return (
    
        <div className="header">
            <AddIcon onClick={clickHandler}/>
            <DeleteIcon onClick={removeHandler}/>
            <Link to="/card"><ViewModuleIcon className={classes.root}/></Link>
            {/* <ViewModuleIcon /> */}
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