import Vue from "vue";
import VueRouter from 'vue-router'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./index.scss";

import NavBar from "./components/nav-bar.vue";
import PeopleList from "./pages/people/list.vue";
import EditPerson from "./pages/people/edit/edit.vue";
import ColorAdmin from "./pages/colors/color-admin.vue";



Vue.filter("toYesNo", (value: boolean) => {
    return value ? "Yes" : "No";
})

import ConfirmModal from "./components/confirm-modal.vue";
Vue.component("confirm-modal", ConfirmModal);

Vue.use(VueRouter)

const routes = [
    { path: "/", redirect: "/people" },
    { path: "/people", name: "people", component: PeopleList },
    { path: "/people/:id", name: "person", component: EditPerson },
    { path: "/colors", name: "colors", component: ColorAdmin }
];

const router = new VueRouter({
    routes
});;

let v = new Vue({
    el: "#app",
    router,
    template: `
    <div>
        <nav-bar />
        <div class="container app-container">
            <router-view></router-view>
        </div>
    </div>`,
    components: {
        NavBar
    }
});