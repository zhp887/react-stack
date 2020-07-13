import React from 'react'
import '@/assets/css/style.scss'
import { theme, ThemeContext } from './utils/theme'

import {
    HashRouter,
    BrowserRouter,
    NavLink,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { Header, Section, Footer, Todolist } from './views/ToDoList/'
import routes from '@/views'
console.log(routes)
import { Provider } from 'mobx-react'
import store from '@/store'
class App extends React.Component {
    constructor(props) {
        super(props)
        //声明式数据
        this.state = {
            msg: "hello 2001",
            curTheme: theme.dark
        }
    }
    changeTheme() {
        var i = Math.random()
        if (i < 0.3) {
            this.setState({ curTheme: theme.dark })
        } else if (i < 0.6 && i > 0.3) {
            this.setState({ curTheme: theme.light })
        } else {
            this.setState({ curTheme: theme.pink })
        }
    }
    //生成侧边导航
    createNavLink() {
        return routes.map(ele => (
            <div key={ele.id} className='link'>
                <NavLink exact activeClassName='on' to={ele.path}>{ele.text}</NavLink>
            </div>
        ))
    }
    //生成视图容器
    //exact完全匹配
    //Route和Switch是直接父子关系，中间不能其它的元素包裹
    createRoute() {
        var res = []
        let { curTheme } = this.state
        routes.map(ele => {
            res.push(
                <Route
                    key={ele.id}
                    exact
                    path={ele.path}
                    component={ele.component}>
                </Route>
            )
            if (ele.children) {
                ele.children.map(ele => {
                    res.push(
                        <Route
                            key={ele.id}
                            exact
                            path={ele.path}
                            component={ele.component}>
                        </Route>
                    )
                })
            }
        })
        return res
    }
    render() {
        let { curTheme } = this.state
        return (
            <HashRouter>
                <Provider store={store}>
                    <ThemeContext.Provider value={curTheme}>
                        <div className='app'>
                            {/* 上下文是给TestCtx 这个组件来使用 */}
                            {/* <ThemeContext.Provider value={curTheme}>
                            <button onClick={this.changeTheme.bind(this)}>换肤</button>
                            <TestCtx></TestCtx>
                            </ThemeContext.Provider> */}
                            <div className='left'>
                                {this.createNavLink()}
                            </div>
                            <div className='right'>
                                {/* 保证匹配关系，只有一个成立，避免一对多的匹配关系 */}
                                <Switch>
                                    {/* 一组匹配规则，从上到下进行匹配 */}
                                    {this.createRoute()}
                                    <Redirect from='/*' to='/'></Redirect>
                                </Switch>
                            </div>
                        </div>
                    </ThemeContext.Provider>
                </Provider>
            </HashRouter>
        )
    }
}

export default App