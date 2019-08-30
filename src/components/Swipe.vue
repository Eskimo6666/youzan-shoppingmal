<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow" v-bind:href="list.clickUrl">
          <img class="goods-main-photo fadeIn" :src="list.img" />
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
/* 任何一个单Vue的文件最后导出的一定是一个实例的options */
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "swipe",
  /* props: ['lists'] */
  props: {
    lists: {
      //type: Array,
      required: true
    },
    name: {}
  }, //created阶段拿不到DOM节点，mounted阶段才能拿到
  created() {
    //console.log('created',document.querySelectorAll('.swiper-slide'))
  },
  mounted() {
    //console.log('mpounted',document.querySelectorAll('.swiper-slide'))
    new Swiper(".swiper-container", {        //swiper是依赖dom节点的，所以mounted之后再new
      loop: true,
     
      autoplay: {
        delay: 5000
      }
    });
  }
  //watch: {
  //    lists(val,oldVal){
  //       console.log(val,oldVal)
  //        console.log("beforeNext",document.querySelectorAll('.swiper-slide'))
  //        this.$nextTick(() => {   /* $nextTick表示下一次更新完成同时DOM确定了以后 */
  //            console.log("afterNext",document.querySelectorAll('.swiper-slide'))
  //        })
  //    }
  //}
};
</script>

<style>
.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>

