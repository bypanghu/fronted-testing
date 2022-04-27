
<template>
  <div class="container">
    <Header></Header>

    <div class="container-line">
      <div class="container-line-box">CHARACTERS</div>
    </div>

    <div class="flex">
      <card  v-for="(item , index) in cardData.list" :bg="item.img" :title="item.title" :key="index"></card>
      <div class="flex-4">
        <card  v-for="(item , index) in cardData.smallList"  size="small" :bg="item.img" :title="item.title" :key="index"></card>
      </div>
    </div>

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
import Card from "@/components/card.vue";
import { ajax } from '@/utils/ajax'

const tabList = ["HOME", "NEWS", "WEAPONS", "MAP", "CHARACTERS", "WALLPAPER"];
const activeTab = ref(4);

const showRouteModal = ref(false);
const isMobileKey = isMobile();
const changeTab = (e) => {
  activeTab.value = e;
};

const cardData = ref({
  list : [],
  smallList: []
})


ajax('/mock/list').then(res=>{
  console.log(JSON.parse(res))
  const response = JSON.parse(res)
  if(response.code === 200){
    cardData.value = response.data
  }
})

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
  &-line {
    width: 100vw;
    height: 2px;
    background-color: #fff;
    margin-top: 60px;
    position: relative;
    &-box {
      position: absolute;
      left: 50%;
      top: -25px;
      width: 120px;
      height: 50px;
      font-weight: 500;
      background-color: #2a3137;
      transform: translate(-50%);
      border: 1px solid #2a3137;
      color: #a3acb1;
      text-align: center;
      line-height: 48px;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        left: 119px;
        border-width: 25px 18px;
        border-style: solid;
        border-color: transparent transparent transparent #2a3137;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        left: -36px;
        border-width: 25px 18px;
        border-style: solid;
        border-color: transparent #2a3137 transparent transparent;
        top: 0;
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

.flex {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px 200px;
  width: 100vw;
}

.flex-4 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 400px;
}

@media (max-width: 1200px) {
  .flex {
    padding: 50px 20px;
    justify-content: space-around;
  }
  .flex-4 {
    width: 40vw;
  }
}

@media (max-width: 725px) {
  .flex-4 {
    width: 80vw;
  }
}
</style>
