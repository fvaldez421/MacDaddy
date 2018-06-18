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
                return response;
            })
    },
    // Gets all meals belonging to user
    GetMeals: function (user_id, date) {
        return axios.get("/api/meals/user", {
                params: {
                    user_id,
                    date
                }
            }).then(function (response) {
                return response;
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