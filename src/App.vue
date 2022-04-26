
<template>
  <div class="container">
    <Header></Header>

    <Teleport to="body">
      <!--全局弹窗 提示用户手机切换为横屏状态-->
      <div class="modal" v-if="showRouteModal">
        <img
          class="modal-img rotate-center"
          src="@/assets/imgs/scape.png"
          alt=""
        />
        <div class="modal-tips">请将手机至于横屏状态</div>
      </div>
    </Teleport>
  </div>
</template>
<script setup>
import { onUnmounted, ref } from "vue";
import { isLandscape, isMobile } from "@/utils/index.js";
import Header from "@/components/header.vue";

const tabList = ["HOME", "NEWS", "WEAPONS", "MAP", "CHARACTERS", "WALLPAPER"];
const activeTab = ref(4);

const showRouteModal = ref(false);
const isMobileKey = isMobile();
const changeTab = (e) => {
  activeTab.value = e;
};

const init = () => {
  // 判断用户是否横屏
  const isLandscapeKey = isLandscape();
  // console.log(isLandscapeKey);
  if (!isLandscapeKey) {
    console.log("用户手机处于竖屏状态！");
    showRouteModal.value = true;
  } else {
    showRouteModal.value = false;
  }
};

//只有当用户是手机的时候才显示弹窗 和监听屏幕旋转
if (isMobileKey) {
  init();

  //用户手机切换的横竖屏的时候 重新调用init
  window.addEventListener(
    "orientationchange" in window ? "orientationchange" : "resize",
    () => {
      init();
    }
  );
  onUnmounted(() => {
    window.removeEventListener(
      "orientationchange" in window ? "orientationchange" : "resize",
      () => {
        init();
      }
    );
  });
}
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

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;

  &-img {
    width: 260px;
    transform: rotate(270deg);
  }
  &-tips {
    margin-top: 120px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
  }
}
</style>
