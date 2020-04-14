import {getClassList,getAllClassList} from '../api/api'
import * as types from './creatorActions'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store =new Vuex.Store({
    state :{
        options:[],
        pOptions:[]
    },
    mutations:{
        [types.GET_OPTIONS](state,data){
           
            state.options=data
            console.log(state.options)
        },
        [types.GET_P_OPTIONS](state,data){
            
            state.pOptions=data
            console.log(state.pOptions)

        }
    },
    actions :{
        async getOptions({commit}){
            const data=await getClassList(0)
            console.log(data)
            if(data.code===0){
                // console.log(data.data)
                const dataOption=[];
                for(let i=0;i<data.data.length;i++){
                    dataOption.push({value:data.data[i].id,label:data.data[i].name})
                  }
                dataOption.unshift({value:0,label:'无上级'})
                commit(types.GET_OPTIONS,dataOption)
            }
        },
        async getPOptions({commit}){
            const data=await getAllClassList()
            if(data.code===0){
                const optionsData=data.data
                let fData=optionsData.filter(item=>item.pid===0)
                let optionsdata=optionsData.filter(item=>item.pid!==0) 
                let cData=[];
                for(let i=0;i<optionsdata.length;i++){
                   cData.push({value:optionsdata[i].id,pid:optionsdata[i].pid,label:optionsdata[i].name})
                }
                console.log(cData)
                let Cdata=[];
                for(let i=1;i<6;i++){
                  Cdata.push(cData.filter(item=>item.pid===i))
                }
                let Fdata=[];
                 for(let i=0;i<fData.length;i++){
                  
                    Fdata.push({value:fData[i].id,label:fData[i].name,children:Cdata[i]})
                  }
                  commit(types.GET_P_OPTIONS,Fdata)
              }
        }
    },
    getters:{
    }
})
export default store