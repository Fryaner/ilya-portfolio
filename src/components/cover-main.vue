<template>
  <section class="cover">
    <div class="cover__container">
      <div class="cover__img">
        <img src="../assets/images/cover-hero.jpg" alt="frontend-разработчик" />
      </div>
      <p class="cover__name">Илья Орлов</p>
      <p class="cover__tagline">{{ t('brand_tagline') }}</p>
      <p class="cover__role">{{ t('hero.hero_role') }}</p>
      <p class="cover__description">{{ t('hero.hero_description') }}</p>
      <div class="cover__btns">
        <a class="btns__contacts" href="">{{ t('hero.hero_contact_btn') }}</a>
        <a class="btns__projects" href="">{{ t('hero.hero_projects_btn') }}</a>
      </div>
    </div>
  </section>
</template>

<script lang="js" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.cover {
  padding: 96px 24px 80px 24px;
  min-height: 100vh;

  &__container {
    max-width: 1236px;
    margin: 0 auto;
  }

  &__img {
    margin: 0 auto;
    border: 4px solid var(--border-color-image);
    border-radius: 50%;
    width: 128px;
    height: 128px;
    margin-bottom: 24px;
    animation: 2s pulse infinite;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 0 30px var(--border-color-image);
      opacity: 0.6;
    }

    img {
      width: 100%;
      border-radius: 50%;
      height: 100%;
    }
  }

  &__name,
  &__tagline,
  &__role,
  &__description {
    text-align: center;
  }

  &__name {
    margin-bottom: 8px;
    color: var(--text-primary);
    font-size: 60px;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: $media-mobile) {
      font-size: 48px;
    }
  }

  &__tagline {
    margin-bottom: 16px;
    color: var(--brand-primary);
    opacity: 0.8;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
  }

  &__role {
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 32px;
    color: var(--brand-primary);
    font-weight: 500;

    @media screen and (max-width: $media-mobile) {
      font-size: 20px;
    }
  }

  &__description {
    margin: 0 auto;
    margin-bottom: 32px;
    color: var(--text-secondary);
    font-size: 18px;
    line-height: 28px;
    max-width: 672px;
  }

  &__btns {
    display: flex;
    justify-content: center;
    gap: 16px;
    text-align: center;

    @media screen and (max-width: $media-mobile) {
      flex-direction: column;
    }

    .btns {
      &__contacts,
      &__projects {
        padding: 12px 32px;
        border-radius: 8px;
        font-weight: 500;
        transition: all 0.3s ease;
      }
      &__contacts {
        background-color: var(--brand-primary);
        color: rgb(255, 255, 255);
        @media (hover: hove) {
          &:hover {
            background-color: var(--brand-secondary);
            transform: translateY(-2px);
          }
        }
      }

      &__projects {
        color: var(--brand-primary);
        border: 2px solid var(--brand-primary);

        &:hover {
          background-color: var(--brand-primary);
          color: rgb(255, 255, 255);
        }
      }
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
