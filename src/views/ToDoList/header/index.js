import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
        if (window.event.key == "Enter") {
            if (e.target.value == "") {
                alert("请输入内容")
                return;
            } else {
                let newItem = {
                    text: this.state.text,
                    id: Date.now()
                };
                this.state.items.push(newItem)
                // console.log(e.target.value)
                // this.state.items.push(e.target.value)
                console.log(this.state)
                // this.defaultValue = ''
                // console.log(this.state.text)
            }
        }
    }
    render() {
        return (
            <div className='header'>
                <div className='top'>
                    <label htmlFor="title">ToDoList</label>
                    <input type="text" id="title" onKeyUp={this.handleChange} defaultValue={this.state.text} name="title" placeholder="添加ToDo" required="required" />
                </div>
            </div>
        )
    }
}

export default Header