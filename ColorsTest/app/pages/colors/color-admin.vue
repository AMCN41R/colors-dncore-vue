<template>

  <div class="panel">

      <div class="colors-header flex-container">
          <div class="colors-header-title">
              Available Colors
          </div>
          <div class=" colors-header-add pull right" @click="addColor()">
              <i class="fa fa-plus"></i>
          </div>
      </div>

      <div :key="color.id" v-for="color in colors" class="color-item">
          <span class="color-item-name">{{color.name}}</span>
          <div class="pull-right flex-container">
              <div class="action-icon" @click="deleteColor(color)">
                  <i class="fa fa-trash fa-fw"></i>
              </div>
          </div>
      </div>
  </div>

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ColorsApi, IColor } from "../../api/colors-api";

@Component
export default class ColorAdmin extends Vue {
  private colors: IColor[] = [];

  mounted() {
    this.fetchData();
  }

  private async fetchData() {
    this.colors = await ColorsApi.getColors();
  }

  private addColor() {
    alert("ADD");
  }

  private deleteColor(color: IColor) {
    alert(`DELETE: ${color.name}`);
  }
}
</script>

<style lang="scss" scoped>
@import "~vars";

.colors-header {
  font-size: 28px;
  padding: 10px;
  background-color: $light-blue;
  color: $dark-blue;

  &-title {
    flex-grow: 1;
  }

  &-add {
    cursor: pointer;

    &:hover {
      color: $blue;
    }
  }
}

.color-item {
  padding: 10px 15px;
  font-size: 18px;

  &:hover {
    background-color: $gray-hover;
  }

  &-name {
    flex-basis: 200px;
  }

  .action-icon {
    cursor: pointer;
    margin-left: 5px;

    &:hover {
      color: $blue;
    }
  }
}
</style>

