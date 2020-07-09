// react 中有多少种创建组件的方法？

// ES5组件 React.createElement()
// 类组件 class User extends R eact.Component(){}
// 无状态组件 function  User(props){}
// 高阶组件 function Hoc(child){}
// Hocks 组件

import React from 'react'

import { Child } from '@/components'

//类组件
//props 是父子之间的通信纽带
//props是只读的

//state 状态
class User extends React.Component{
    constructor(props){
        super(props)
        //当state发生变化时，视图自动变化（单向数据流）
        this.state = {
            msg: 'hello child',
            list:[]
        }
        this.click3 = this.click3.bind(this,'三')
    }
    //实例属性
    //类属性
    // 类方法
    // static aa(){
    // }
    //实例方法
    click1(arg,e){
        console.log("click 1",arg,this,e)
    }
    click2(arg,e){
        console.log("click 2",arg,this,e)
    }
    click3(arg,e){
        console.log("click 3",arg,this,e)
    }
    msgHandle(){
        //改变state，是异步操作
        this.setState({
            msg: 'hello 2001'
        },function(){
            console.log('msg更新成功')
        })
    }
    render(){
        return(
            <div>
                <h2>hhhhhhh User</h2>
                <div>
                    {/* 注释：常用下面两种方式事件绑定 */}
                    <button onClick={this.click1.bind(this,'一')}>点击事件1</button>
                    <button onClick={(e)=>this.click2('二',e)}>点击事件2</button>
                    {/* 注释：一般不建议怎么写 */}
                    <button onClick={this.click3}>点击事件3</button>
                </div>
                <button onClick={this.msgHandle.bind(this)}>操作state</button>
                <Child aaa='111' bbb='222' ccc={this.state.msg}></Child>
            </div>
        )
    }
}

export default User