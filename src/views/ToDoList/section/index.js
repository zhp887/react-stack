import React from 'react'

class Section extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='section'>
                <h2>正在进行<span>0</span></h2>
                <ol id="todolist" className="demo-box">
                    <li>
                        <input type='checkbox' />
                        <p><input type='text'/></p>
                        <a href='#'>-</a>
                    </li>
                </ol>
                <h2>已经完成<span>0</span></h2>
                <ul id="donelist" >
                    <li>
                        <input type='checkbox' defaultChecked/>
                        <p><input type='text' /></p>
                        <a href='#'>-</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Section