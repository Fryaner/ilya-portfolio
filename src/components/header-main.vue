<template>
  <header class="header">
    <nav class="header__container">
      <div class="header__nav">
        <div class="header__logo">
          <button class="logo__btn"><i class="fas fa-water"></i></button>
          <p class="logo__title">Ilia Flow</p>
        </div>
        <ul class="header__list header__list-desctop">
          <li>
            <a href="">{{ t('navigation.nav_about') }}</a>
          </li>
          <li>
            <a href="">{{ t('navigation.nav_skills') }}</a>
          </li>
          <li>
            <a href="">{{ t('navigation.nav_portfolio') }}</a>
          </li>
          <li>
            <a href="">{{ t('navigation.nav_calculator') }}</a>
          </li>
          <li>
            <a href="">{{ t('navigation.nav_experience') }}</a>
          </li>
          <li>
            <a href="">{{ t('navigation.nav_contact') }}</a>
          </li>
        </ul>
        <div class="header__btns">
          <div class="btns__settings">
            <button class="btns__theme">
              <i class="fas fa-sun"></i>
            </button>
            <button @click="changeLanguage" class="btns__lang">
              {{ currentLanguage }}
            </button>
          </div>
          <button @click="toggleBurgerMenu" class="btns__burger">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      <Transition name="mobile">
        <ul v-show="isActiveBurgerMenu" class="header__list header__list-mobile">
          <li>
            <a href="">{{ t('navigation.nav_about') }}</a>
          </li>
          <li>
            <a href="">{{ t('navigation.nav_skills') }}</a>
          </li>
          <li>
            <a href="">{{ t('navigation.nav_portfolio') }}</a>
          </li>
          <li>
            <a href="">{{ t('navigation.nav_calculator') }}</a>
          </li>
          <li>
            <a href="">{{ t('navigation.nav_experience') }}</a>
          </li>
          <li>
            <a href="">{{ t('navigation.nav_contact') }}</a>
          </li>
        </ul>
      </Transition>
    </nav>
  </header>
</template>

<script lang="js" setup>
import { useI18n } from 'vue-i18n'
import { useStore } from '@/stores/store'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

const store = useStore()

const { getLanguage, changeLanguage } = useStore()
const { currentLanguage } = storeToRefs(store)

const { t } = useI18n()

const isActiveBurgerMenu = ref()

function getStateIsBurger() {
  const isActive = localStorage.getItem('isActiveBurgerMenu')
  if (isActive === 'true') {
    isActiveBurgerMenu.value = true
  } else {
    isActiveBurgerMenu.value = false
  }
}

function toggleBurgerMenu() {
  isActiveBurgerMenu.value = !isActiveBurgerMenu.value
  localStorage.setItem('isActiveBurgerMenu', isActiveBurgerMenu.value)
}

onMounted(() => {
  getLanguage()
  getStateIsBurger()
})
</script>

<style lang="scss" scoped>
.mobile-enter-active,
.mobile-leave-active {
  transition: transform 0.5s ease;
}

.mobile-enter-from,
.mobile-leave-to {
  transform: translateX(-100%);
}

.header {
  border-bottom: 1px solid $border-color;
  position: fixed;
  width: 100%;

  &__container {
    max-width: 1236px;
    margin: 0 auto;
    padding: 16px;
  }
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 12px;

    .logo {
      &__btn {
        background-color: $brand-primary;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        animation: 2s infinite pulse;
        cursor: pointer;

        i {
          color: white;
        }
      }

      &__title {
        color: $brand-primary;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }

  &__lang {
    font-weight: 600;
    color: $text-primary;
    font-size: 14px;
  }

  &__list {
    display: flex;

    &-desctop {
      gap: 32px;
      flex-direction: row;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    &-mobile {
      flex-direction: column;
      gap: 20px;
      margin: 24px 0;
      display: none;
      @media screen and (max-width: 768px) {
        display: flex;
      }
    }
    a {
      color: $text-secondary;
      transition: 0.3s;

      &:hover {
        color: rgb(22 163 74);
      }
    }
  }
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 $brand-primary;
  }
  50% {
    box-shadow: 0 0 0 10px transparent;
  }
}
.header__btns {
  display: flex;
  align-items: center;
  gap: 16px;

  .btns {
    &__settings {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    &__theme,
    &__lang {
      width: 40px;
      height: 40px;
      background-color: transparent;
      border: 2px solid $border-color;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        border-color: $green-accent;
        transform: scale(1.05);
      }
    }

    &__theme {
      i {
        color: rgb(234 179 8);
      }
    }

    &__burger {
      display: none;
      background-color: transparent;
      border: none;

      @media screen and (max-width: 768px) {
        display: block;
      }
      i {
        color: green;
        font-size: 20px;
      }
    }
  }
}
</style>
