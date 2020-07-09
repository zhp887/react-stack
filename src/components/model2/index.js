import React from 'react'

import './style.scss'

export default function Model2(props) {
    return (
        <div className='model'>
            {/* <div>标题</div>
            {props.children}
            <div>
                <button>取消</button>
                <button>确定</button>
            </div> */}
            <div>{props.title}</div>
            <div>{props.children}</div>
            <div>{props.button}</div>
        </div>
    )
}