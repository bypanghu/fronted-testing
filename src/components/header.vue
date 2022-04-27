<template>
  <div class="container-header is-pc" v-if="is_pc">
    <ul class="container-header-tabs">
      <li
        class="container-header-tabs-tab"
        :class="index === activeTab ? 'active' : ''"
        v-for="(item, index) in tabList"
        :key="index"
        @click="changeTab(index)"
      >
        {{ item }}
      </li>
      <div class="container-header-tabs-f">f</div>
    </ul>
    <img src="@/assets/imgs/logo.png" class="container-header-logo" alt="" />
  </div>

  <div class="container-header is-moble" v-if="!is_pc">
    <a class="container-header-tabs-tigger" @click="changeShowTabs"></a>
    <ul
      class="container-header-tabs"
      id="tigger-body"
      :class="showTabs ? 'show' : 'hidden'"
    >
      <a class="container-header-tabs-tigger-close" @click="changeShowTabs"></a>
      <li
        class="container-header-tabs-tab"
        :class="index === activeTab ? 'active' : ''"
        v-for="(item, index) in tabList"
        :key="index"
        @click="changeTab(index)"
      >
        {{ item }}
      </li>
      <div class="container-header-tabs-f">f</div>
    </ul>
    <img src="@/assets/imgs/logo.png" class="container-header-logo" alt="" />
  </div>
</template>

<script setup>
import { onUnmounted, ref } from "vue";
const tabList = ["HOME", "NEWS", "WEAPONS", "MAP", "CHARACTERS", "WALLPAPER"];
const activeTab = ref(4);
const showTabs = ref(false);
const changeTab = (e) => {
  activeTab.value = e;
};
const changeShowTabs = () => {
  showTabs.value = !showTabs.value;
};

const is_pc = ref(true);
const window_width = window.document.body.clientWidth;
if (window_width < 990) {
  is_pc.value = false;
} else {
  is_pc.value = true;
}

window.onresize = (e) => {
  window.requestAnimationFrame(() => {
    const window_width = window.document.body.clientWidth;
    if (window_width < 990) {
      is_pc.value = false;
    } else {
      is_pc.value = true;
    }
  });
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

.is-moble.container-header {
  background-image: none;
  background-color: #121413;
  height: 60px;
  border-left: 15px solid $--active;
  padding: 10px;
  width: calc(100vw - 10px);
  .container-header-logo {
    height: 40px;
    width: 160px;
    margin: 0;
  }
  .container-header-tabs {
    // display: none;
    width: 280px;
    background: #fff;
    flex-direction: column;
    color: #000;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0;
    transition: transform 0.25s ease-out, opacity 0.25s ease-out,
      display 0.1s ease-in-out;
    height: 100vh;
    padding-top: 40px;

    .container-header-tabs-f {
      display: none;
    }
  }
  .container-header-tabs.hidden {
    transform: translateX(280px);
    opacity: 0;
    display: none;
  }
  .container-header-tabs.show {
    transform: translateX(0);
    opacity: 1;
    display: block;
    z-index: 888;
  }

  .container-header-tabs-tigger {
    float: right;
    width: 40px;
    height: 40px;
    background-color: $--active;
    border-radius: 4px;
    background-image: url(@/assets/imgs/icon_menu.png);
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
  }
  .container-header-tabs-tigger-close {
    width: 40px;
    height: 40px;
    // background-color: $--active;
    border-radius: 4px;
    background-image: url(@/assets/imgs/icon_menu_close.png);
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
//
@media (min-width: 990px) {
  .is-pc {
    display: block;
  }
  .is-moble {
    display: none;
  }
}
@media (max-width: 990px) {
  .is-pc {
    display: none;
  }
  .is-moble {
    display: block;
  }
}
</style>