import axios from "axios";

export default {
    // Get all Users from DB
    // GetAllUsers: function (Users) {
    //     return axios.get("/api/Users")
    //         .then(function (response) {
    //             return response;
    //         })
    // },
    
    // Adds user to db
    AddUser: function (user) {
        return axios.post("/api/users", user)
            .then(function (response) {
            })
    },
    // Gets individual User
    FindUser: function (_id) {
        return axios.get("/api/Users/" + _id)
            .then(function (response) {
                return response;
            })
    },
    // Updates User
    UpdateUser: function (_id, changes) {
        return axios.put("/api/Users/" + _id, changes)
            .then(function (response) {
                return response;
            })
    },
    // Deletes User
    DeleteUser: function (_id) {
        return axios.delete("/api/Users/" + _id);
    }
}