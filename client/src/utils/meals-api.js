import axios from "axios";

export default {
    // Get all meals from DB
    // GetAllMeals: function (meals) {
    //     return axios.get("/api/meals")
    //         .then(function (response) {
    //             return response;
    //         })
    // },
    AddMeal: function (meal) {
        return axios.post("/api/meals", meal)
            .then(function (response) {
            })
    },
    // Gets all meals belonging to user
    GetMeals: function (user_id) {
        return axios.post("/api/meals/user/", user_id)
            .then(function (response) {
            })
    },
    // Gets individual meal for details
    ThisMeal: function (_id) {
        return axios.get("/api/meals/" + _id)
            .then(function (response) {
                return response;
            })
    },
    // Updates meal
    UpdateMeal: function (_id, changes) {
        return axios.put("/api/meals/" + _id, changes)
            .then(function (response) {
                return response;
            })
    },
    // Deletes Meal
    DeleteMeal: function (_id) {
        return axios.delete("/api/meals/" + _id);
    }
}