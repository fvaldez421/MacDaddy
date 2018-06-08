import axios from "axios";

export default {
    // Get all Users from DB
    // GetAllUsers: function (Users) {
    //     return axios.get("/api/users/all")
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
    FindUser: function (email) {
        return axios.get("/api/users", {
            params: {
                email
            }
        }).then(function (response) {
            return response;
        })
    },
    // Updates User
    UpdateUser: function (_id, changes) {
        return axios.put("/api/users/" + _id, changes)
            .then(function (response) {
                return response;
            })
    },
    // Deletes User
    DeleteUser: function (_id) {
        return axios.delete("/api/users/" + _id);
    }
}