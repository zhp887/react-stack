import React from 'react'
import { Child4 } from '@/components'
import { observer, inject} from 'mobx-react'
//observer 当store中数据发生变化时，当前组件视图自动更新
//inject 把store中数据映射进来
@inject('store')
@observer
class Home extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: 'lisi' },
        { id: 2, name: 'zhangsan' },
        { id: 3, name: 'wangwu'}
      ]
    }
  }
  componentDidMount(){
    console.log('home props',this.props)
    let { cnode } = this.props.store
    let params = {
      mdrendr:false,
      tab:'',
      page:1,
      limit:5
    }
    cnode.getCnodeList(params)
  }
  //渲染文章列表
  createCnodeList(){
    let { cnode } = this.props.store
    return cnode.list.map(ele=>(
      <div key={ele.id}>
        {ele.title}
      </div>
    ))
  }
  skipToDetail(ele) {
    this.props.history.push('/home/detail/'+ele.id+'/'+ele.name)
  }

  createList() {
    let { list } = this.state
    return list.map(ele=>(
      <div key={ele.id} onClick={this.skipToDetail.bind(this,ele)}>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.name}</span>
      </div>
    ))
  }
  changeCount(type){
    let { todo } = this.props.store
    todo.changeCount(type)
  }


  render() {
    let { todo } = this.props.store
    return (
      <div>
        <h1>首页</h1>
        <h2>{todo.count}</h2>
        <button onClick={this.changeCount.bind(this,'add')}>加</button>
        <button onClick={this.changeCount.bind(this,'sub')}>减</button>
        <hr/>
        <Child4></Child4>
        {this.createList()}
        <hr/>
        {this.createCnodeList()}
      </div>
    )
  }
}
export default Home
