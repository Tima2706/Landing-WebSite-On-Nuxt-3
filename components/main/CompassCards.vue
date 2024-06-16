<script setup lang="ts">
import Unlimited from '~/assets/icons/Frame.png'
import Unlimited1 from '~/assets/icons/Frame (1).png'
import Unlimited2 from '~/assets/icons/Frame (2).png'
import Unlimited3 from '~/assets/icons/Frame (3).png'
import Unlimited4 from '~/assets/icons/Frame (4).png'
import Unlimited5 from '~/assets/icons/Frame (5).png'

const array = ref([
  {
    icon: Unlimited,
    title: 'Неограниченный автопарк',
    description: 'Можно добавить неограниченное кол-во машин и водителей'
  },
  {
    icon: Unlimited1,
    title: 'Сокращение затрат до 50%',
    description: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке'
  },
  {
    icon: Unlimited2,
    title: 'Безопасность',
    description: 'Данные передаются в зашифрованном виде, они доступны только получателю'
  },
  {
    icon: Unlimited3,
    title: 'Уведомление о погашении',
    description: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП'
  },
  {
    icon: Unlimited4,
    title: 'Квитанция об оплате',
    description: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.'
  },
  {
    icon: Unlimited5,
    title: 'Вся история сохраняется по каждой машине',
    description: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по трафикам'
  }
])
</script>

<template>
  <div data-aos="fade-up"  class="mt-[98px]">
    <h2 class="text-[34px] text-center font-bold mb-4">Плюсы использования сервиса «Компас» для анализа штрафов</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="(item, idx) in array" :key="idx"  class="p-4 border-[#EEEFF1] bg-[#FBFCFD] rounded-lg shadow-sm flex  gap-[20px] items-center">
        <img :src="item.icon" />
        <div class="text-start">
        <h3 class="text-lg  mb-2 text-[#1253A2] text-[18px] font-bold">{{item.title}}</h3>
        <p class="text-[#000000] text-[15px] ">{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@media (max-width: 1270px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
