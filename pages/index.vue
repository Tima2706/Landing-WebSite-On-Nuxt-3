<script setup lang="ts">
import CheckForm from "~/components/main/CheckForm.vue";
import CompassCards from "~/components/main/CompassCards.vue";
import SwiperCard from "~/components/main/SwiperCard.vue";


</script>


<template>
  <div class="container">
    <check-form/>
    <compass-cards/>
    <swiper-card/>
  </div>
</template>

<style scoped lang="scss">
.penalty-form .label {
  font-size: 15px;
  padding-left: 10px;
  position: absolute;
  top: 13px;
  transition: 0.3s;
  pointer-events: none;
}

</style>
