//使用 vuex 插件
import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)


import Address from 'js/addressService.js'
import axios from 'axios'
import url from 'js/api.js'


//创建实例

const store = new Vuex.Store({
    state:{        //data
        lists:null
    },
    mutations:{                        //data不可以直接修改，必须通过事件进行触发
        init(state,lists){
            state.lists = lists
        },                              //mmutation是同步的
        add(state,instance){
            state.lists.push(instance)
        },
        remove(state,id){
            let lists = JSON.parse(JSON.stringify(state.lists))
            let index = lists.findIndex(item =>{
                return item.id === id
            })
            lists.splice(index,1)
            state.lists = lists
        },
        update(state,instance){
            let lists = JSON.parse(JSON.stringify(state.lists))
            let index = lists.findIndex(item =>{
                return item.id === instance.id
            })
            lists[index] = instance
            state.lists = lists
        },
        setDefault(state,id){
            let lists = JSON.parse(JSON.stringify(state.lists))
            lists.forEach(item =>{
                item.isDefault = item.id === id ? true : false
            })
            state.lists = lists
        }
    },
    actions:{                           //actions里面进行异步操作，操作完之后在触发mutattion进行同步操作
        getLists({commit}){             //action里面拿到的是context上下文,可以通过context.commit来触发mutation
            axios.get(url.addressLists).then(res=>{
                commit('init',res.data.lists)
            })
        },
        addAction({commit},instance){
            Address.add(instance).then(res=>{
                //模拟添加id,实际应该是后台返回
                instance.id = parseInt(Math.random()*10000)
                commit('add',instance)
            })
        },
        removeAction({commit},id){
            Address.remove(id).then(res=>{
                commit('remove',id)
            })
        },
        updateAction({commit},instance){
            Address.update(instance).then(res=>{
                commit('update',instance)
            })
        },
        setDefaultAction({commit},id){
            Address.setDefaultAddress(id).then(res =>{
                commit('setDefault',id)
            })
        }
    }
})

export default store