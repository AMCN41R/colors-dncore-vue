import Vue from "vue";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./index.scss";

import NavBar from "./components/nav-bar.vue";
import PeopleList from "./pages/people/list.vue";

Vue.filter("toYesNo", (value: boolean) => {
    return value ? "Yes" : "No";
});

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <nav-bar />
        <div class="container app-container">
            <people-list />
        </div>
    </div>`,
    data: {
        name: "World"
    },
    components: {
        NavBar,
        PeopleList
    }
});