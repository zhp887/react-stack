import React from 'react'

//无状态 state 组件
// function Child(props) {
//     return (
//         <div>
//             <h2>user 子组件</h2>
//             <span>{props.aaa}</span>
//             <span>-</span>
//             <span>{props.bbb}</span>
//             <span>-</span>
//             <span>{props.ccc}</span>
//             <span>-</span>
//         </div>
//     )
// }
// 箭头函数无状态 state 组件
const Child = (props) => (
    <div>
        <h2>user 子组件</h2>
        <span>{props.aaa}</span>
        <span>-</span>
        <span>{props.bbb}</span>
        <span>-</span>
        <span>{props.ccc}</span>
        <span>-</span>
    </div>
)

export default Child