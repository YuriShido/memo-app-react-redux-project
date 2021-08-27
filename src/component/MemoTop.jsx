import React from 'react'
import Header from './Header'
import MemoContents from './MemoContents'
import MemoFile from './MemoFile'

const MemoTop = () => {
    return (
        <div>
            <h1 className="app-title">Memo</h1>
            <Header />
            <div className="main">
                <MemoFile />
                <MemoContents />
            </div>
        </div>
    )
}

export default MemoTop
