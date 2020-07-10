import React from 'react'

let theme = {
    dark:{
        color: 'white',
        background: 'black' 
    },
    light:{
        color:'blue',
        background:'white'
    },
    pink:{
        color:'white',
        background:'pink'
    }
}
let ThemeContext = React.createContext()

export { ThemeContext, theme}