import axios from 'axios';
import store from '@/store'
//import router from '@/router'

//Settings for axios

axios.defaults.baseURL = `${process.env.API_URL}`;

axios.interceptors.response.use((response)=> {
    // Do something with response data
    //console.log('interceptors', response);
    return response;
}, (error)=> {
    // Do something with response error
    //console.log('interceptors',error);
    const originalRequest = error.config;
    if(error.response){
        if(error.response.status==401 && !originalRequest._retry){

            let json = JSON.stringify({
                "refresh_token": "refreshToken" // or other format data
            });
            axios({
                method: 'POST',
                url: '/api/token/refresh',
                headers: {
                    'Content-type': 'application/json'
                },
                data: json   // or other data for axios
            }).then((response) => {
                let token = response.data.token;
                //save token and refresh token
                originalRequest._retry = true;

                originalRequest.headers.Authorization = `Bearer ${token}`;

                //router.go(0); // sametimes need to do reload page (don't forget  import router);

                //retry request
                return axios.request(originalRequest);

            })
            .catch(() => {
                //to do logout user and redirect
            });

        }
    }
    return Promise.reject(error);
});
//End settings for axios

function api(config) {

    return new Promise(function(resolve, reject) {
        //FormatHttpHeaders
        if (store.state.user.authorization && store.state.user.tokens.userToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.user.tokens.userToken}`;
        }
        //End formatHttpHeaders
        return axios(config).then((response)=>{
            resolve(response) ;
        }).catch((error)=>{
            reject(error);
        });
    });

}

export default api;
