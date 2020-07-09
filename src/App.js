import React from 'react'

// import Home from './views/home/'
// import User from './views/user/'
import { 
    Home, 
    User, 
    Condition, 
    List, 
    Form, 
    State, 
    Combine, 
    Life, 
    Fragment, 
    Testctx,
    Testhoc,
    Hook,
    Testtype
} from './views'
import { Header,Section,Footer,Todolist } from './views/ToDoList/'
import { theme, ThemeContext } from './utils/theme'
// import { Todor } from './views'

class App extends React.Component {
    constructor(props) {
        super(props)
        //声明式数据
        this.state = {
            msg: "hello 2001",
            curTheme: theme.dark
        }
    }
    changeTheme(){
        var i = Math.random()
        if (i < 0.3) {
            this.setState({curTheme:theme.dark})
        } else if (i < 0.6 && i > 0.3) {
            this.setState({curTheme:theme.light})
        } else {
            this.setState({curTheme:theme.pink})
        }
    }
    render() {
        let { curTheme } = this.state
        return (
            <div>
                {/* <h1>hello React</h1>
                <h2>{this.state.msg}</h2>
               <User></User> */}
               {/* <Header></Header>
               <Section></Section>
               <Footer></Footer> */}
               {/* <Condition></Condition>
               <List></List> */}
               {/* <Form></Form> */}
               {/* <State></State> */}
               {/* <Todolist></Todolist> */}
               {/* <Combine></Combine> */}
               {/* <Life></Life> */}
               {/* <Fragment></Fragment> */}
               {/* <div>
                   上下文是给TestCtx 这个组件来使用
                   <ThemeContext.Provider value={curTheme}>
                       <Testctx></Testctx>
                       <button onClick={this.changeTheme.bind(this)}>换肤</button>
                   </ThemeContext.Provider>
               </div> */}
               {/* <Testhoc></Testhoc> */}
               {/* <Hook></Hook> */}
               <Testtype></Testtype>
            </div>
        )
    }
}

export default App