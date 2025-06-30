<template>
  <section class="about">
    <div class="about__container">
      <titleUI>
        <template v-slot:title>{{ t('about.about_title') }}</template>
      </titleUI>
      <div class="about__body">
        <div class="about__info">
          <h3 class="about__subtitle">{{ t('about.about_subtitle') }}</h3>
          <p class="about__description">{{ t('about.about_description') }}</p>
          <div class="about__statistic">
            <div class="about__projects">
              <p class="projects__count">15+</p>
              <p class="projects__title">{{ t('about.about_projects') }}</p>
            </div>
            <div class="about__clients">
              <p class="clients__count">12+</p>
              <p class="clients__title">{{ t('about.about_clients') }}</p>
            </div>
          </div>
        </div>
        <div class="about__cards">
          <div v-for="card in cards" :key="card.id" class="about__card">
            <div class="card__header">
              <i :class="`card__icon ${card.icon}`"></i>
              <p class="card__title">{{ t(card.title) }}</p>
            </div>
            <p class="card__description">{{ t(card.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js" setup>
import { reactive } from 'vue'
import titleUI from './ui/title-UI.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cards = reactive([
  {
    id: 1,
    icon: 'card__icon-prog fas fa-code',
    title: 'about.about_programming_title',
    description: 'about.about_programming_desc',
  },
  {
    id: 2,
    icon: 'card__icon-ii fas fa-robot',
    title: 'about.about_ai_title',
    description: 'about.about_ai_desc',
  },
  {
    id: 3,
    icon: 'card__icon-cms fas fa-layer-group',
    title: 'about.about_cms_title',
    description: 'about.about_cms_desc',
  },
])
</script>

<style lang="scss" scoped>
.about {
  padding: 80px 24px;
  &__container {
    max-width: 1236px;
    margin: 0 auto;
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
    gap: 48px;

    @media screen and (max-width: $media-mobile) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__subtitle {
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 24px;
  }

  &__description {
    line-height: 1.625;
    color: var(--text-secondary);
    font-size: 16px;
    margin-bottom: 24px;
  }

  &__statistic {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  &__projects,
  &__clients {
    box-shadow:
      var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    padding: 16px;
    background-color: var(--card-bg);
    border-radius: 8px;
    text-align: center;
  }

  .projects,
  .clients {
    &__count {
      font-size: 30px;
      font-weight: 700;
      line-height: 36px;
      color: var(--green-accent);
    }

    &__title {
      color: var(--text-secondary);
      font-size: 16px;
      line-height: 24px;
    }
  }

  .projects {
    &__count {
      color: var(--green-accent);
    }
  }

  .clients {
    &__count {
      color: var((--blue-accent));
    }
  }
  &__cards {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 24px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow:
      (--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background: var(--card-bg);
    padding: 24px;
    border-radius: 12px;
    transition: 0.3s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
  }

  .card {
    &__header {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    &__icon {
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;

      &-prog {
        color: oklch(62.7% 0.194 149.214);
        background-color: rgb(220 252 231);
      }

      &-ii {
        background-color: rgb(219 234 254);
        color: oklch(62.3% 0.214 259.815);
      }

      &-cms {
        background-color: rgb(243 232 255);
        color: oklch(62.7% 0.265 303.9);
      }
    }

    &__title {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      color: var(--text-primary);
    }

    &__description {
      color: var(--text-secondary);
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
