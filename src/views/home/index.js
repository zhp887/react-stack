import React from 'react'

// jsx = javascript xml 语法糖
// jsx 变量 、 对象
// jsx 不是强制，但
var ele = (
    <div>
        <h1>hello hsx</h1>
    </div>
)
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0
        }
    }
    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    init(){
        return ele
    }
    render() {
        return (
            <div>
                <h2>首页</h2>
                <h3>
                    {this.state.seconds}
                    
                </h3>
            </div>
        )
    }
}
