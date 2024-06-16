<script setup lang="ts">
import HomeBannerBtn from './HomeBannerBtn.vue'
const router = useRouter()
const slidesPerView = ref(3)
const handleRoute = (slide: number) => {
  router.push({
    name: 'license-id',
    params: { id: slide }
  }).catch(() => {
    console.log('error')
  })
}


const slideData = ref([{
  id: 1,
  title: 'Лицензионный договор',
  description: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.'
},
  {
    id: 2,
    title: 'Политика обработки персональных данных',
    description: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.'
},
  {
    id: 3,
    title: 'Информация об оплате',
    description: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.'
},
  {
    id: 4,
    title: 'Slide 4',
    description: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.'
},
  {
    id: 5,
    title: 'Slide 5',
    description: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.'
},
  {
    id: 6,
    title: 'Slide 6',
    description: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассып'
}])

const updateSlidesPerView = () => {
  if (window.innerWidth <= 767) {
    slidesPerView.value = 1
  } else {
    slidesPerView.value = 3
  }
}

onMounted(() => {
  updateSlidesPerView()
  window.addEventListener('resize', updateSlidesPerView)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView)
})


</script>

<template>
  <div data-aos="fade-right"  class="swiper-card">
    <h1 class="swiper-card__header text-center">Документы</h1>
    <div class="px-4">
    <Swiper
        :height="300"
        :slides-per-view="slidesPerView"
        :space-between="35"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
        :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"


    >
      <SwiperSlide v-for="slide in slideData" :key="slide.id">
        <div class="swiper-card__slide">
          <div>
          <h3> {{ slide.title }}</h3>
          <p>{{slide.description}}</p>
          </div>
          <button @click="handleRoute(slide.id)">
            Перейти
          </button>
        </div>
      </SwiperSlide>
  <HomeBannerBtn/>
    </Swiper>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import '../../assets/scss/mixins';
.swiper-card{
  margin: 85px 0;
  &__slide{
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0px 0px 20px 0px #0000001F;
    border: 1px solid #EEEFF1;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
      font-size: 31px;
      font-weight: 700;
      line-height: 37.2px;
      color: #1253A2;
    }
    p{
      font-size: 18px;
      color: #000000;
      margin-top: 15px;
    }
    button{
      font-size: 18px;
      width: 100%;
      padding: 11px 0;
      background-color: #0584FE;
      color: #FFFFFF;
      border-radius: 6px;
      text-align: center;
      cursor: pointer;
      transition: 0.5s;
      border: 1px solid transparent;
      &:hover{
        background-color: #FFFFFF;
        color: #0584FE;
        border: 1px solid #0584FE;
      }
    }
  }
  &__header{
    font-size: 34px;
    font-weight: 700;
    color: #000000;
    line-height: 41.2px;
    margin-bottom: 40px;
  }
}
.action-btn {
  .left-btn, .right-btn {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    z-index: 1;
    color: #D5D5D7;
    cursor: pointer;
    &:hover {
      color: #48545D
    }
  }
  .left-btn {
    left: 40px;

    @include breakpoint(xs){
      left: 75%;
      top: 90%;

    }
    @include breakpoint(sm){
      left: 80%;
      top: 90%;
    }
    @include breakpoint(md){
      left: 20px;
      top: 50%;
    }
  }

  .right-btn {
    right: 20px;

    @include breakpoint(xs){
      right: 5%;
      top: 90%;
    }
    @include breakpoint(md){
      right: 20px;
      top: 50%;
    }
  }
}
@media (max-width: 1270px) {
  .swiper-card__slide{
    min-height: 400px;
    h3{
      font-size: 24px;
      line-height: 29px;
    }
    p{
      font-size: 16px;
    }
    button{
      font-size: 16px;
    }
  }
  .swiper-card__header{
    font-size: 24px;
    margin-bottom: 20px;
  }
}
@media (max-width: 767px) {
  .swiper-card__slide{
    min-height: 300px;
    h3{
      font-size: 20px;
      line-height: 24px;
    }
    p{
      font-size: 14px;
    }
    button{
      font-size: 14px;
    }
  }
  .swiper-card__header{
    font-size: 20px;
    margin-bottom: 20px;
  }
}
</style>