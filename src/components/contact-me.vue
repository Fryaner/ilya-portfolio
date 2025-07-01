<template>
  <section class="contact-me">
    <div class="contact-me__container">
      <titleUI>
        <template v-slot:title>
          {{ t('contact.contact_title') }}
        </template>
      </titleUI>
      <div class="contact-me__body">
        <div class="contact-me__contacts">
          <h3 class="contact-me__title">{{ t('contact.contact_subtitle') }}</h3>
          <p class="contact-me__description">{{ t('contact.contact_description') }}</p>
          <div class="contact-me__list">
            <div class="contact-me__contact" v-for="contact of contacts" :key="contact.id">
              <i :class="`contact__icon ${contact.icon}`"></i>
              <div class="contact__body">
                <p class="contact__title">{{ contact.title }}</p>
                <p class="contact__subtitle">{{ contact.contact }}</p>
              </div>
            </div>
          </div>
        </div>
        <form class="contact-me__form">
          <div class="contact-me__input">
            <label>{{ t('contact.contact_form_name') }}</label>
            <input :placeholder="t('contact.contact_form_name')" type="text" />
          </div>
          <div class="contact-me__input">
            <label>{{ t('contact.contact_form_email') }}</label>
            <input :placeholder="t('contact.contact_form_email')" type="text" />
          </div>
          <div class="contact-me__input">
            <label>{{ t('contact.contact_form_message') }}</label>
            <textarea rows="5" :placeholder="t('contact.contact_form_message')"></textarea>
          </div>
          <button class="contact-me__button">{{ t('contact.contact_form_submit') }}</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import { reactive } from 'vue'
import titleUI from './ui/title-UI.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const contacts = reactive([
  {
    id: '1',
    title: 'Email',
    contact: 'ilya.orlov123@mail.ru',
    icon: 'fas fa-envelope contact__icon-email',
  },
  {
    id: '2',
    title: 'Telegram',
    contact: '@fryaner',
    icon: 'fab fa-telegram contact__icon-tg',
  },
  {
    id: '3',
    title: 'WhatsApp',
    contact: '+7 (924) 218-33-76',
    icon: 'fab fa-whatsapp contact__icon-wa',
  },
  {
    id: '4',
    title: 'Instagram',
    contact: '@1lya_orel',
    icon: 'fab fa-instagram contact__icon-inst',
  },
])
</script>

<style lang="scss" scoped>
//Поправить
[data-theme='dark'] .contact-me {
  background: linear-gradient(135deg, #1a2e3a 0%, #064e3b 50%, #0c4a6e 100%);
}
.contact-me {
  padding: 80px 24px;
  background: var(--bg-secondary);

  &__container {
    max-width: 1236px;
    margin: 0 auto;
  }

  .contact {
    &__icon {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      &-email {
        background: rgb(220 252 231);
        color: rgb(22 163 74);
      }

      &-tg {
        background: rgb(219 234 254);
        color: rgb(59 130 246);
      }

      &-wa {
        background: rgb(220 252 231);
        color: rgb(59 130 246);
      }

      &-inst {
        color: rgb(236 72 153);
        background: rgb(252 231 243);
      }
    }

    &__title {
      color: var(--text-primary);
      line-height: 24px;
      font-weight: 500;
    }

    &__subtitle {
      color: var(--text-secondary);
      line-height: 24px;
    }
  }
  &__body {
    max-width: 896px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;

    @media screen and (max-width: $media-mobile) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__title {
    color: var(--text-primary);
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 24px;
  }

  &__description {
    color: var(--text-secondary);
    margin-bottom: 32px;
    line-height: 24px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__contact {
    display: flex;
    gap: 16px;
  }

  &__form {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 32px;
    background-color: var(--card-bg);
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__input {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      color: var(--text-primary);
      font-weight: 500;
      line-height: 24px;
    }

    input,
    textarea {
      padding: 12px 16px;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      transition: 0.3s;
      font-size: 100%;
      outline: none;
      background: var(--card-bg);
      &:focus {
        border: 1px solid rgb(34 197 94);
      }

      &::placeholder {
        color: rgb(174, 174, 174);
      }
    }
  }

  &__button {
    background-color: rgb(34 197 94);
    padding: 12px 0;
    border-radius: 8px;
    font-weight: 500;
    color: rgb(255 255 255);
    border: none;
    cursor: pointer;
    transition: 0.3s;
    line-height: 24px;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      background: rgb(22 163 74 / var(--tw-bg-opacity, 1));
    }
  }
}
</style>
