import React from 'react'
import {Model1,Model2} from '@/components'

function DeletePane(props){
    return(
        <div>
            <h3>你确定要删除当前文件吗？</h3>
        </div>
    )
}

function LogoutPane(props){
    return(
        <div>
            <h3>你确定要注销吗？</h3>
        </div>
    )
}
function ModelTitle1(props){
    return(
        <div>
            温馨提示
        </div>
    )
}
function ModelTitle2(props){
    return(
        <div>
            警告
        </div>
    )
}
function ModelBotton(props){
    return(
        <div>
            <button>我知道了</button>
        </div>
    )
}
export default class Combine extends React.Component{
    render(){
        return(
            <div>
                <h2>组合</h2>
                <Model1>
                    {/* 在子组件中使用props.children 进行渲染 */}
                    <DeletePane></DeletePane>
                    <LogoutPane></LogoutPane>
                </Model1>

                <Model1>
                    <LogoutPane></LogoutPane>
                </Model1>
                <hr />
                <Model2
                  title={<ModelTitle1 />}
                  button={<ModelBotton/>}>
                      <h2>哈哈哈哈哈哈</h2>
                </Model2>

                <Model2
                  title={<ModelTitle2/>}
                  button={<ModelBotton/>}>
                      <input type='text' placeholder='用户名' />
                </Model2>
            </div>
        )
    }
}