import { observable, action} from 'mobx'

import { fetchCnodeList } from '@/utils/api'

export default class CnodeStore{
    @observable list = []
    @action getCnodeList(params){
        fetchCnodeList(params).then(res=>{
            console.log('res',res)
            this.list = res
        })
    }
}