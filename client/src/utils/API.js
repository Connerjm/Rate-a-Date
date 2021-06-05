import axios from "axios";

export default
{
    //Get dates based on search term.
    getPosts: function(term) {
        return axios.get(`/api/posts/search/${term}`);
    },
    //Get single date by id.
    getPost: function(id) {
        return axios.get(`/api/posts/${id}`);
    },
    newPost: function(postData) {
        return axios.create(`/api/posts/${postData}`);
    },
    
   
}