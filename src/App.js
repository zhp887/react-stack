import React from 'react'

import Home from './views/home/'


class App extends React.Component {
    constructor(props) {
        super(props)
        //声明式数据
        this.state = {
            msg: "hello 2001"
        }
    }
    render() {
        return (
            <div>
                <h1>hello React</h1>
                <h2>{this.state.msg}</h2>
                <Home></Home>
            </div>
        )
    }
}

export default App