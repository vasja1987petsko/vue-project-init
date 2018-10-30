import axios from 'axios';
//Settings for axios

axios.defaults.baseURL = `${process.env.API_URL}`;

axios.interceptors.response.use((response)=> {
    // Do something with response data
    //console.log('interceptors', response);
    return response;
}, (error)=> {
    // Do something with response error
    //console.log('interceptors',error);
    return Promise.reject(error);
});
//End settings for axios

function api(config) {

    return new Promise(function(resolve, reject) {
        //To do  formatHttpHeaders

        return axios(config).then((response)=>{
            resolve(response) ;
        }).catch((error)=>{
            reject(error);
        });
    });

}

export default api;
