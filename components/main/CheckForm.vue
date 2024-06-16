<script setup lang="ts">
import Arrow from '~/assets/icons/right-arrow.svg'
import YouTube from '~/assets/icons/YouTube.svg'
import {useNotification} from "@kyvg/vue3-notification";
import VideoModal from "~/components/main/VideoModal.vue";


const {notify} = useNotification()
const FORM = {
  number: '',
  text: '',
  tc: ''
}
const form = ref({...FORM})
const isOpen = ref(false)

const submit = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500))
    notify({
      title: 'Успешно',
      text: 'Данные были отправлены',
      type: 'success'
    })
   //reset form

    form.value = {
      number: '.',
      text: '.',
      tc: '.'
    };
  } catch (e) {
    notify({
      title: 'Ошибка',
      text: 'Произошла ошибка',
      type: 'error'
    })
  }

}

const vidioDialog = (value) => {
  isOpen.value = true
  if (value === false) {
    isOpen.value = false
  }
}

function isRequired(value: string) {
  if (value && value.trim()) {
    return true;
  }
  return 'Поле обязательное для заполнение';
}
</script>

<template>
  <div data-aos="fade-up"  class="penalty">
    <div class="penalty__check">
      <h1>Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
      <Form @submit="submit">
        <div style="gap: 30px" class="flex justify-between ">
          <div class="penalty-form">
            <Field
                v-slot="{errors}"
                :model-value="form.number"
                name="number"
                label="Номер автомобиля"
                :rules="isRequired"
            >
              <input
                  :class="{'has-error': errors.length}"
                  type="text"
                  required=""
                  v-model="form.number"
                  class="input"
              >
              <label class="label">Номер автомобиля</label>
              <ErrorMessage style="color: red" name="number"/>
            </Field>
          </div>
          <div style="max-width: 213px" class="penalty-form">
            <Field
                v-slot="{errors}"
                :model-value="form.text"
                name="text"
                label="Регион"
                :rules="isRequired"
            >
              <input
                  type="text"
                  required=""
                  v-model="form.text"
                  class="input"
                  :class="{'has-error': errors.length}"
              >
              <label class="label">Регион</label>
              <ErrorMessage style="color: red" name="text"/>
            </Field>
          </div>
        </div>
        <div style="margin-top: 36px;" class="penalty-form">
          <Field
              v-slot="{errors}"
              :model-value="form.tc"
              name="title"
              :rules="isRequired"
          >
            <input
                type="text"
                required=""
                v-model="form.tc"
                class="input"
                :class="{'has-error': errors.length}"

            >
            <label class="label">Свидетельство о регистрации ТС</label>
            <ErrorMessage style="color: red" name="title"/>
          </Field>
        </div>
        <div style="margin-top: 15px;" class="form__btns flex items-center gap-[21px]">
          <button
              class="action-bar__btn"
              style="font-size: 18px; padding: 11px 20px; margin-right: 0"
          >
            Проверить штрафы <span class="icon-arrow-right">
            <Arrow/>
          </span>
          </button>
          <button
              class="media__btn"
              aria-expanded="false"
              aria-label="Open menu"
              ref="menuIconRef"
              type="button"
              @click="vidioDialog"
          >
           <span class="icon-arrow-right">
           <YouTube/>
          </span> О сервисе <span class=" text-[15px]">(1 мин.20 сек)</span>
          </button>
        </div>
        <p style="line-height: 15.6px" class="mt-[15px] text-[#8F8F8F] text-[15px]">
          Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту
        </p>
      </Form>
    </div>
    <img src="~/assets/images/laptop.png" class="mr-8" alt="">
  </div>
  <video-modal @close="vidioDialog" v-if="isOpen === true"  />
</template>


<style scoped lang="scss">
@import "../../assets/scss/_mixins.scss";

.media__btn{
  font-size: 18px;
  padding: 11px 20px 11px 21px;
  margin-right: 0;
  background-color: #ffffff;
  border: 1px solid #0584FE;
  color: #000000;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: .25s;
  span{
    color: #1253A2
  }
  &:hover {
    background-color: #0584FE;
    color: #ffffff;
    transform: scale(1.1);
    span{
      color: #ffffff;
    }
  }
}
.icon-arrow-right {
  margin-left: 4px;
  padding-top: 2px;
}

.penalty {
  margin-top: 79px;
  display: flex;
  gap: 40px;
  align-items: start;
  justify-content: space-between;

  &__check {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
      font-size: 41px;
      font-weight: 700;
      color: #000000;
      line-height: 49.2px;
      margin-bottom: 27px;
    }
  }
}

.penalty-form {
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;
  color: #000000;
  flex-grow: 1;

  .input {
    height: 40px;
    outline: none;
    padding: 0px 7px;
    border-radius: 6px;
    color: #000000;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid #BCBCBC;

    &.has-error {
      @apply text-danger border-danger;
    }

    @include breakpoint(xs) {
      width: 100%;
      height: 40px !important;
      border-radius: 6px;
      border: 1px solid #dfe2e9;
      border-radius: 6px;
      padding: 0 15px;
      outline: none;
      background-color: #fafbfc;
    }
    @include breakpoint(lg) {
      padding: 0 20px;
    }
  }

  .input:focus {
    border: 2px solid #BCBCBC;

  }
}

.penalty-form .label {
  font-size: 14px;
  padding-left: 10px;
  position: absolute;
  top: 13px;
  transition: 0.3s;
  pointer-events: none;
}

.penalty-form .input:valid ~ .label,
.penalty-form .input:focus ~ .label {
  transition: 0.3s;
  padding-left: 2px;
  transform: translateY(-35px);
}
@media (max-width: 1270px) {
  .penalty {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .penalty__check {
    gap: 20px;
  }
}
@media (max-width: 768px) {
  .penalty {
    margin-top: 40px;
  }
  .penalty__check {
    gap: 20px;
  }
}
@media (max-width: 640px) {
  .penalty__check{
    h1{
      font-size: 30px;
      line-height: 36px;
    }
  }
  .form__btns{
    flex-direction: column;
    gap: 20px;
    button{
      width: 100%;
    }
  }
}
</style>