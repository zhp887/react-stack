import React from 'react'


class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='footer'>
                Copyright © 2014 todolist.cn
                <a>clear</a>
            </div>
        )
    }
}

export default Footer