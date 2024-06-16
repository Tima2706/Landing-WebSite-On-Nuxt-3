<script setup lang="ts">
const isClose = ref(false)
const emit = defineEmits(['close'])
const handleClose = () => {
  isClose.value = false
  emit('close', isClose.value)
}
</script>
<template>
  <div class="modal">
    <div class="modal-media">
      <div>
        <button class="modal-media__close" @click="handleClose">
          x
        </button>
      </div>
     <iframe width="100%" height="400" src="https://www.youtube.com/embed/7e90gBu4pas"
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
     ></iframe>
    </div>
  </div>
</template>





<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
 &-media {
    width: 100%;
    max-width: 800px;
    max-height: 600px;
    background-color: transparent;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
   &__close {
      position: absolute;
      top: -10px;
      right: 20px;
      background-color: transparent;
      border: none;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>