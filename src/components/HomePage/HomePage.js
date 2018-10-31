import api from '~api';

export default {
    name: 'HomePage',

    data () {
        return {
            msg: 'Welcome to  HomePage!',
            arr:[]
        }
    },

    methods:{

        getInfoFromApi(){
            api({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/users',
                headers: {
                    'Content-type': 'application/json'
                }
            }).then((response)=>{
                let data = response.data;
                if(Array.isArray(data)){
                    this.arr = data;
                }
            }).catch((error)=>{
                console.error('api', error);
            });
        }

    },

    mounted() {
        this.getInfoFromApi();
    }

}
