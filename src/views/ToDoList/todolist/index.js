import React from 'react'
import axios from 'axios'
import '../ToDoList.css'
import {addTodo} from '@/utils/api'
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            task: ''
        };
    }
    keyUpHandle(e) {
        let {task} = this.state
        if (e.keyCode == 13) {
            var arr = this.state.items
            // arr.push({id:Date.now(),task:task})
            // this.setState({
            //     items:arr,
            //     task:''
            // })
            // let params = {
            //     userId:'BJ200113003',
            //     task:task
            // }
            // console.log(params)
            // addTodo(params).then(res=>{
            //     console.log('res',res)
            // })
            this.init()
        }
    }
    changeHandle(key,e){
        this.setState({
            [key]:e.target.value
        })
    }
    componentDidMount(){
        
        // {
        //     let { task } = this.state
        //     let params = {
        //         userId:'BJ200113003',
        //         task:task
        //     }
        //     console.log(params)
        //     addTodo(params).then(res=>{
        //         console.log('res',res)
        //     })
        // } 
    }
    render() {
        let {task} = this.state
        return (
            <div>
                <div className='header'>
                    <div className='top'>
                        <label htmlFor="title">ToDoList</label>
                        <input type="text" id="title" onKeyUp={this.keyUpHandle.bind(this)} onChange={this.changeHandle.bind(this,'task')} value={task} name="title" placeholder="添加ToDo" required="required" />
                    </div>
                </div>
                <div className='section'>
                    <h2>正在进行<span>0</span></h2>
                    <ol id="todolist" className="demo-box">
                        <li>
                            <input type='checkbox' />
                            <p><input type='text' /></p>
                            <a href='#'>-</a>
                        </li>
                    </ol>
                    <h2>已经完成<span>0</span></h2>
                    <ul id="donelist" >
                        <li>
                            <input type='checkbox' defaultChecked />
                            <p><input type='text' /></p>
                            <a href='#'>-</a>
                        </li>
                    </ul>
                </div>
                <div className='footer'>
                    Copyright © 2014 todolist.cn
                    <a>clear</a>
                </div>
            </div>

        )
    }
}

export default Header