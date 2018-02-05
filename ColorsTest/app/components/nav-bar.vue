<template>
    <div class="menu-bar">
        <div class="menu-bar-title" @click="goToPeople()">
            Favourite Colors
        </div>
        <div class="menu-bar-item" @click="goToPeople()">
            <i class="fa fa-user-circle-o fa-fw"></i>
        </div>
        <div class="menu-bar-item" @click="goToColors()">
            <i class="fa fa-paint-brush fa-fw"></i>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {

    private goToPeople() {
        alert("Go to People");
    }

    private goToColors() {
        alert("Go to Colors");
    }
}
</script>

<style lang="scss" scoped>
@import "~vars";

.menu-bar {
    background-color: $dark-blue;
    height: 50px;
    padding: 0 10px;
    display: flex;

    &-title {
        cursor: pointer;
        line-height: 50px;
        flex-grow: 1;
        font-size: 22px;
        color: #fff;
    }

    &-item {
        cursor: pointer;
        font-size: 30px;
        color: #fff;
        padding: 5px;

        &:hover {
            color: $gray
        }
    }
}
</style>