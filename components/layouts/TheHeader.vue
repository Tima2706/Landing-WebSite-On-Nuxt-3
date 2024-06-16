<script setup lang="ts">
import Logo from 'assets/icons/logo.svg'
import BurgerIcon from 'assets/icons/icons8-hamburger-menu.svg'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>


<template>
  <div class="action-bar">
    <div class="container ">
      <div class="action-bar__row">
        <div class="action-bar__col">
          <router-link to="/" class="brand">
            <Logo/>
          </router-link>
          <router-link to="/rates" class="action-bar__link">Тарифы</router-link>
          <router-link to="/contacts" class="action-bar__link">Контакты</router-link>
        </div>
        <div class="action-bar__col action-bar__col--right" :class="{ 'is-open': isMenuOpen }">
          <a href="tel: +7 495 118-44-22" style="font-weight: 700" class="action-bar__link">+7 495 118-44-22</a>
          <router-link to="/in" class="action-bar__link">Вход</router-link>
          <router-link
              class="action-bar__btn"
              aria-expanded="false"
              aria-label="Open menu"
              ref="menuIconRef"
              to="/registration"
          >
            Регистрация
          </router-link>
        </div>
        <button class="burger-btn" @click="toggleMenu" aria-label="Toggle menu">
          <BurgerIcon />
        </button>
      </div>
      <div class="flex justify-between mt-3 gap-3 items-center  is-Blocked"  v-if="isMenuOpen === true">
        <a href="tel: +7 495 118-44-22" style="font-weight: 700" class="action-bar__link">+7 495 118-44-22</a>
        <div class="flex gap-2 items-center">
        <router-link to="/in" class="action-bar__link">Вход</router-link>
        <router-link
            class="action-bar__btn"
            aria-expanded="false"
            aria-label="Open menu"
            ref="menuIconRef"
            to="/registration"
        >
          Регистрация
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './action';
.is-Blocked{
  display: none;
}
.burger-btn{
  display: none;

}
.action-bar {
  .action-bar__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .action-bar__col--right {
      @media (max-width: 768px) {
        display: none;

      }
    }

    .burger-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      color: #fafbfc;
      @media (max-width: 768px) {
        display: block;
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
@media (max-width: 768px) {
  .is-Blocked{
    display: flex;
  }

}
</style>