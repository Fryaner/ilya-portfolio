<template>
  <section class="work">
    <div class="work__container">
      <titleUI>
        <template v-slot:title>
          {{ t('experience.exp_title') }}
        </template>
      </titleUI>
      <div class="work__experience-container">
        <div class="work__experience">
          <div class="experience__header">
            <div>
              <h3 class="experience__title">{{ t('experience.exp_role') }}</h3>
              <p class="experience__subtitle">{{ t('experience.exp_company') }}</p>
            </div>
            <p class="experience__exp">{{ t('experience.exp_period') }}</p>
          </div>
          <ul class="work__list">
            <li class="work__item">
              <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i
              ><span>{{ t('experience.exp_task1') }}</span>
            </li>
            <li class="work__item">
              <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i
              ><span>{{ t('experience.exp_task2') }}</span>
            </li>
            <li class="work__item">
              <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i
              ><span>{{ t('experience.exp_task3') }}</span>
            </li>
            <li class="work__item">
              <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i
              ><span>{{ t('experience.exp_task4') }}</span>
            </li>
            <li class="work__item">
              <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i
              ><span>{{ t('experience.exp_task5') }}</span>
            </li>
          </ul>
        </div>
        <div class="work__cards">
          <div :class="`cards__card ${card.class}`" v-for="card in cards" :key="card.id">
            <p class="cards__count">{{ t(card.count) }}</p>
            <p class="cards__title">{{ t(card.title) }}</p>
            <i :class="`cards__icon ${card.icon}`"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import { useI18n } from 'vue-i18n'
import titleUI from './ui/title-UI.vue'
import { reactive } from 'vue'

const cards = reactive([
  {
    id: 1,
    class: 'cards__card-exp',
    icon: 'fas fa-calendar-alt cards__icon-exp',
    count: '3',
    title: 'experience.exp_years',
  },
  {
    id: 2,
    class: 'cards__card-prj',
    icon: 'fas fa-laptop-code cards__icon-prj',
    count: '15+',
    title: 'experience.exp_projects',
  },
  {
    id: 3,
    class: 'cards__card-clt',
    icon: 'fas fa-users cards__icon-clt',
    count: '12+',
    title: 'experience.exp_clients',
  },
])
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.work {
  padding: 80px 24px;
  &__container {
    max-width: 1236px;
    margin: 0 auto;
  }
  [data-theme='dark'] &__experience {
    border: 1px solid var(--border-color);
  }
  &__experience {
    &-container {
      max-width: 896px;
      margin: 0 auto;
    }
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-shadow:
      var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: 12px;
    padding: 32px;
    background: var(--card-bg);
    margin-bottom: 32px;

    .experience {
      &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: $media-mobile) {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      &__title {
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        margin-bottom: 8px;
        color: var(--text-primary);
      }

      &__subtitle {
        color: rgb(22 163 74 / var(--tw-text-opacity, 1));
        font-weight: 500;
        line-height: 24px;
      }

      &__exp {
        color: var(--text-muted);
        font-weight: 500;
        line-height: 24px;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__item {
    display: flex;
    font-size: 16px;
    gap: 12px;

    i {
      margin-top: 4px;
      color: rgb(34 197 94 / var(--tw-text-opacity, 1));
    }
    span {
      color: var(--text-secondary);
      line-height: 24px;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media screen and (max-width: $media-mobile) {
      grid-template-columns: repeat(1, 1fr);
    }

    .cards {
      &__card {
        padding: 24px;
        text-align: center;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 12px;

        &-exp {
          color: var(--green-accent);
          background-color: var(--green-bg);
          border: 1px solid var(--green-accent);
        }

        &-prj {
          color: var(--blue-accent);
          background: var(--blue-bg);
          border: 1px solid var(--blue-accent);
        }

        &-clt {
          color: var(--purple-accent);
          background: var(--purple-bg);
          border: 1px solid var(--purple-accent);
        }
      }

      &__count {
        font-weight: 700;
        font-size: 30px;
        line-height: 36px;
      }

      &__title {
        font-weight: 500;
        color: var(--text-primary);
      }

      &__icon {
        display: flex;
        margin: 0 auto;
        width: 48px;
        height: 48px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        &-exp {
          background-color: rgba(16, 185, 129, 0.2);
          color: var(--green-accent);
        }

        &-prj {
          background-color: rgba(59, 130, 246, 0.2);
          color: var(--blue-accent);
        }

        &-clt {
          background-color: rgba(139, 92, 246, 0.2);
          color: var(--purple-accent);
        }
      }
    }
  }
}
</style>
