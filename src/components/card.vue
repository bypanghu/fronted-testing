<template>
  <div class="card" :class="size">
    <img src="@/assets/imgs/img-1.jpg" class="card-img" alt="" />
    <div class="card-title">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  bg: {
    type: [String, Object],
    default: () => {
      return "@/assets/imgs/img-1.jpg";
    },
  },
  title: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "normal",
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 400px;
  height: 400px;
  margin-bottom: 40px;
  position: relative;
  &:hover {
    transform: scale(1.1);
  }
  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    line-height: 40px;
    text-align: left;
    padding-left: 40px;
    font-size: 18px;
    color: #fff;
    background-color: #000;
  }
}

.small {
  width: 180px;
  height: 180px;
  margin-bottom: 40px;
  .card-title {
    font-size: 13px;
    padding-left: 20px;
  }
}

@media (max-width: 1200px) {
  .card {
    width: 40vw;
    height: 40vw;
  }
  .small {
    width: 18vw;
    height: 18vw;
    margin-bottom: 10px;
  }
}

@media (max-width: 725px) {
  .card {
    width: 80vw;
    height: 80vw;
  }
  .small {
    width: 38vw;
    height: 38vw;
    margin-bottom: 10px;
  }
}
</style>
