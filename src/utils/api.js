import fetch from './fetch'

export function addTodo(params) {
  return fetch({
    url: '/todo/addTodo',
    method: 'post',
    params
  })
}

export function fetchCnodeList(params){
  return fetch({
    url:'/topics',
    method:'get',
    params
  })
}