<template>
  <div class="container-header">
    <div class="container-header-tabs">
      <div
        class="container-header-tabs-tab"
        :class="index === activeTab ? 'active' : ''"
        v-for="(item, index) in tabList"
        :key="index"
        @click="changeTab(index)"
      >
        {{ item }}
      </div>
      <div class="container-header-tabs-f">f</div>
    </div>
    <img src="@/assets/imgs/logo.png" class="container-header-logo" alt="" />
  </div>
</template>

<script setup>
import { onUnmounted, ref } from "vue";
const tabList = ["HOME", "NEWS", "WEAPONS", "MAP", "CHARACTERS", "WALLPAPER"];
const activeTab = ref(4);
const changeTab = (e) => {
  activeTab.value = e;
};
</script>

<style scoped lang="scss">
$--active: #e8a137;

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  &-header {
    background-image: url(@/assets/imgs/bg.png);
    background-size: cover;
    width: 100vw;
    height: 260px;
    padding: 25px 50px;

    &-logo {
      margin-top: 60px;
      margin-left: 240px;
      width: 270px;
    }

    &-tabs {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding-left: 20px;
      border-left: 15px solid $--active;
      border-right: 15px solid $--active;
      &-f {
        position: relative;
        width: 15px;
        height: 30px;
        margin-left: auto;
        background-color: $--active;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 20px;
        margin-right: 40px;
        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          right: 15px;
          border-width: 15px 9.5px;
          border-style: solid;
          border-color: transparent $--active transparent transparent;
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          left: 15px;
          border-width: 15px 9.5px;
          border-style: solid;
          border-color: transparent transparent transparent $--active;
          top: 0;
        }
      }
      &-tab {
        padding: 15px 30px;
        font-weight: 600;
        cursor: pointer;
        &.active {
          color: $--active;
        }
      }
    }
  }
}
</style>