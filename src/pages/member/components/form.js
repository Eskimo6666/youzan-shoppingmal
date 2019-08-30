import Address from 'js/addressService.js'

import {mapState} from 'vuex'
export default {
    data() {
        return {
            name: '',
            tel: '',
            provinceValue: -1,
            cityValue:-1,
            districtValue:-1,
            address:'',
            id:'',
            type:'',
            instance:'',
            addressData:require('js/address.json'),
            cityLists:null,
            districtLists:null
        }
    },
    created(){
        this.type = this.$route.query.type
        this.instance = this.$route.query.instance

        if(this.type === 'edit'){
            let ad = this.instance
            this.provinceValue = parseInt(ad.provinceValue)
            this.name = ad.name
            this.tel = ad.tel
            this.address = ad.address
            this.id = ad.id
        }
    },
   /*  computed:{
        lists(){
            return this.$store.state.lists
        }
    }, */
   // computed:mapState['lists'],
   computed:{
    ...mapState({
        lists: state=>state.lists
    })
   },
    methods:{
        add(){
            //需要做非空合法性校验
            let {name,tel,provinceValue,districtValue,address} = this
            let data = {name,tel,provinceValue,districtValue,address}
            if(this.type === 'add'){
                this.$store.dispatch('addAction',data)
               /*  Address.add(data).then(res=>{
                    this.$router.go(-1)
                }) */
            }
            if(this.type === 'edit'){
                data.id = this.id
                this.$store.dispatch('updateAction',data)
                /* Address.add(data).then(res=>{
                    this.$router.go(-1)
                }) */
            }
        },
        remove(){
           if( window.confirm('确认删除？')){
               this.$store.dispatch('removeAction',this.id)
                /* Address.remove(this.id).then(res=>{
                    this.$router.go(-1)
                }) */
           }
        },
        setDefault(){
            this.$store.dispatch('setDefaultAction',this.id)
            /* Address.setDefaultAddress(this.id).then(res=>{
                this.$router.go(-1)
            }) */
        }
    },
    watch:{
        lists:{
            handler(){
                this.$router.go(-1)
            },
            deep:true
            
        },
        //如果选择了省份那么省的value将发生变化，并根据省的value来获取所在省的市的列表
        provinceValue(val){
            if(val === -1)return
            let list = this.addressData.list
            let index = list.findIndex(item =>{
                return item.value === val
            })
            this.cityLists = list[index].children
            //切换省之后要把市和区的value重置
            this.cityValue = -1
            this.districtValue = -1

            if(this.type === 'edit'){
                this.cityValue = parseInt(this.instance.cityValue)

            }
        },
        
        cityValue(val){
            if(val === -1)return
            let list = this.cityLists
            let index = list.findIndex(item =>{
                return item.value === val
            })
            this.districtLists = list[index].children
            this.districtValue = -1

            if(this.type==='edit'){
                this.districtValue = parseInt(this.instance.districtValue)
            }
        }
    }
}