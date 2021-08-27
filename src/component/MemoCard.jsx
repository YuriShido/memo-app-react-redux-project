import * as React from 'react';
import { Link } from 'react-router-dom';
// import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        textDecoration: 'none',
        color: 'black',

    },

});

const MemoCard = ({ contentsProps }) => {

    const classes = useStyles();
    console.log(contentsProps);
    return (
        <div className="MemoCard">
            <h1 className="memo-card-title">Memo Card</h1>
            <div className="card-area">

                <div className="card-wrapper">
                    {
                        contentsProps.map((memo, index) => (
                            <div className="card-box" id={index}>
                                <h3 className="card-title">{memo.title}</h3>
                                <p className="card-content">{memo.contents}</p>
                            </div>
                        ))
                    }
                </div>
                {/* <Link to="/"><Button variant="contained" color="primary" className={classes.root} >Go Back</Button></Link> */}
                <Link to="/"><HomeIcon fontSize="large" className={classes.root}></HomeIcon></Link>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    contentsProps: state.contents.memoList,

})

export default connect(mapStateToProps)(MemoCard)
