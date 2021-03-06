import React from 'react'
import { connect } from 'react-redux'
import {setContents, updateContents} from '../redux/actions'


const MemoFile = ({contentsProps, setContents, currentProps, updateContents}) => {
    console.log("contentsProps;",contentsProps)
    console.log("currentProps2;",currentProps)
    // const [currentContent, setCurrentContent] = useState('')

    // useEffect(() => {
    //     setCurrentContent(contentsProps)
      
    // }, [contentsProps])

    const clickHandler = (title, contents, id) => {
        console.log("title", title);
        console.log("content", contents);
        console.log("ID", id);
        // console.log("isNewProps:", isNew);
        setContents({title:title, contents: contents, id: id,  isNew: false})
    }

    console.log("ContentsPropsInMemofile: ", contentsProps);

    return(
    <div className="memo-file-container">
        
        <h2 className="memo-list">Memo list</h2>
        <div className="memo-file">

            <ul className="memo">
            {/* onclick functionでクリックしたら右のコンポーネントに出力できるようにする */}
               
                {
                    contentsProps.map(({title,  contents }, id )=> (
                    <li key={id} className="memo-item" onClick={() => clickHandler(title, contents, id)} >
                        {title}
                    </li>

                    ))
                }
            
            {/* {
                contentsProps.lenght ?
                (contentsProps.map(({title,  contents }, id )=> (
                        <li key={id} className="memo-item" onClick={() => clickHandler(title, contents, id)} >
                    {title}
                </li>
                ))
                ) :
                (<li>There are no Memo yet!</li>) 
                
            }  */}
            </ul>
        </div>

    </div>
        ) 
}


const mapStateToProps = (state) => {
    console.log("memoStateee; ",state);
    return {
        contentsProps: state.contents.memoList,
        currentProps: state.contents.currentMemo,
    }
}

const mapDispatchToProps = (dispatch) => ({
   setContents:  (content) => dispatch(setContents(content)),
   updateContents: (content) => dispatch(updateContents(content))

})

// connect method here
export default connect(mapStateToProps, mapDispatchToProps)(MemoFile)


