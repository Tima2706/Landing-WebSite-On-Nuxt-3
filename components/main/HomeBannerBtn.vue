<script lang="ts" setup>

const swiper = useSwiper();
const prev = () => {
  swiper.value.slidePrev()
}
const next = () => {
  swiper.value.slideNext()
}
</script>

<template>
  <div class="action-btn">
    <button @click="prev" class="left-btn">
      <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_249)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 80C22.0914 80 40 62.0914 40 40C40 17.9086 19.5657 0 0 0V80Z"  fill-opacity="0.471045"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5872 38.9505C11.0752 39.3751 10.8193 39.7928 10.8193 40.2037C10.8193 40.6146 11.0859 41.0802 11.6191 41.6007L21.5576 51.6012C22.0715 52.1184 22.0798 52.9508 21.5763 53.478C21.0877 53.9897 20.2768 54.0084 19.7652 53.5198C19.7583 53.5132 19.7514 53.5064 19.7446 53.4996L7.85579 41.6238C7.07432 40.8431 7.07363 39.5768 7.85425 38.7953C7.85645 38.7931 7.85866 38.7909 7.86087 38.7887L19.9372 26.8117C20.4528 26.3003 21.2854 26.3037 21.7968 26.8193C21.8038 26.8265 21.8108 26.8336 21.8177 26.8409C22.3326 27.3843 22.3206 28.2391 21.7907 28.7679L11.5872 38.9505Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_1_249">
            <rect width="40" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
    <button @click="next" class="right-btn">
      <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_255)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M40 80C17.9086 80 0 62.0914 0 40C0 17.9086 20.4343 0 40 0V80Z"  fill-opacity="0.471045"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4127 38.9505C28.9247 39.3751 29.1807 39.7928 29.1807 40.2037C29.1807 40.6146 28.9141 41.0802 28.3808 41.6007L18.4424 51.6012C17.9285 52.1184 17.9202 52.9508 18.4237 53.478C18.9123 53.9897 19.7231 54.0084 20.2347 53.5198C20.2417 53.5132 20.2486 53.5064 20.2554 53.4996L32.1442 41.6238C32.9256 40.8431 32.9263 39.5768 32.1457 38.7953C32.1435 38.7931 32.1413 38.7909 32.1391 38.7887L20.0628 26.8117C19.5471 26.3003 18.7146 26.3037 18.2032 26.8193C18.1961 26.8265 18.1891 26.8336 18.1822 26.8409C17.6674 27.3843 17.6794 28.2391 18.2092 28.7679L28.4127 38.9505Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_1_255">
            <rect width="40" height="80" fill="white"/>
          </clipPath>
        </defs>
      </svg>

    </button>
  </div>
</template>


<style lang="scss" scoped>
@import '../../assets/scss/mixins';
.action-btn {
  .left-btn, .right-btn {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    z-index: 1;
    color: #FFFFFF;
    cursor: pointer;
    svg {
      fill: #A6B7D4;
    }
    transition: .5ms ease;
    &:hover {
      svg {
        fill: #48545D;
      }
    }
  }
  .left-btn {
    left: 40px;

    @include breakpoint(xs){
      left: 0;
      top: 50%;

    }
    @include breakpoint(sm){
      left: 0;
      top: 50%;
    }
    @include breakpoint(md){
      left: 0;
      top: 50%;
    }
  }

  .right-btn {
    right: 20px;

    @include breakpoint(xs){
      right: 0;
      top: 50%;
    }
    @include breakpoint(md){
      right: 0;
      top: 50%;
    }
  }
}
@media (max-width: 767px) {
  .action-btn {
    .left-btn, .right-btn {
      svg {
        width: 20px;
      }
    }
  }
}

</style>
