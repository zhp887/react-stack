import fetch from './fetch'

export function addTodo(params) {
  return fetch({
    url: '/todo/addTodo',
    method: 'post',
    params
  })
}

export default {
    addTodo,
}