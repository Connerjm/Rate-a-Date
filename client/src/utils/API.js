import axios from "axios";

export default
{
    //Get dates based on search term.
    getDates: function(term) {
        return axios.get(`/api/dates/${term}`);
    },
    //Get single date by id.
    getDate: function(id) {
        return axios.get(`/api/dates/${id}`);
    }
}