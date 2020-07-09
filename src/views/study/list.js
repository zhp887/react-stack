import React from 'react'
''
export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { id: 1, name: 'zhangsan' },
                { id: 2, name: 'zhang' },
                { id: 3, name: 'zhan' },
            ]
        }
    }
    //数据需要处理
    initList() {
        let { list } = this.state
        let res = []
        list.map(ele => {
            //数据处理  
            ele.id = ele.id * 10
            res.push(
                <div key={ele.id}>
                    <span>{ele.id}</span>
                    <span>-</span>
                    <span>{ele.name}</span>
                </div>
            )
        })
        return res
    }
    //数据不处理
    initList2() {
        let { list } = this.state
        let res = []
        list.map(ele => {
            res.push(
                <div key={ele.id}>
                    <span>{ele.id}</span>
                    <span>-</span>
                    <span>{ele.name}</span>
                </div>
            )
        })
        return res
    }
    render() {
        let { list } = this.state
        var res2 = list.map(ele=>(
            <div key={ele.id}>
                <span>{ele.id}</span>
                <span>-</span>
                <span>{ele.name}</span>
            </div>
        ))
        return (
            <div className='list'>
                <h2>列表渲染</h2>
                <hr />
                <div>
                    {this.initList()}
                </div>
                <hr />
                <div>
                    {this.initList2()}
                </div>
                <hr />
                {/* 不建议使用这种方式 */}
                <div>
                    {
                        list.map(ele => (
                            <div key={ele.id}>
                                <span>{ele.id}</span>
                                <span>-</span>
                                <span>{ele.name}</span>
                            </div>
                        ))
                    }
                </div>
                <hr />
                <div>
                    <h2>2</h2>
                    {res2}
                </div>
            </div>
        )
    }
}