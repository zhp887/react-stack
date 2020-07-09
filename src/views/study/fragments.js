import React from 'react'

function QfModel(props){
    return(
        <div>
            <h2>model</h2>
        </div>
    )
}
function QFDialog(props){
    return(
        <div>
            <h2>dialog</h2>
        </div>
    )
}

export default class Fragment extends React.Component{
    render(){
        return(
            <>
            {/*<React.Fragment> */}
                <QfModel></QfModel>
                <QFDialog></QFDialog>
            {/* </React.Fragment> */}
            </>

        )
    }
}