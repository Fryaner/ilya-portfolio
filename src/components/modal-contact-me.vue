<template>
  <Transition name="modal">
    <div v-show="props.isActiveModal" class="modal">
      <button @click="closeModalContactsMe" class="modal__btn">
        <i class="fas fa-times"></i>
      </button>
      <Transition name="contacts-me">
        <div v-show="props.isActivePhoto" class="modal__contact-me">
          <p class="modal__title">{{ t('contactModal.contact_modal_title') }}</p>
          <div class="modal__body">
            <p class="modal__subtitle">{{ t('contactModal.contact_modal_description') }}</p>
            <div class="modal__list">
              <a v-for="item of listContacts" :key="item.id" class="modal__item">
                <i :class="item.icon"></i>
                <div class="item__info">
                  <h4 class="item__social">{{ t(item.socialName) }}</h4>
                  <p class="item__name">{{ t(item.heroName) }}</p>
                  <p class="item__answer">{{ t(item.statusType) }}</p>
                </div>
                <i class="item__go fas fa-arrow-right"></i>
              </a>
            </div>
            <p class="modal__prompt">
              <i class="fas fa-clock"></i>
              <span>{{ t('contactModal.contact_response_time') }}</span>
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  isActiveModal: Boolean,
  isActivePhoto: Boolean,
})

const emits = defineEmits('close')

function closeModalContactsMe() {
  emits('close')
}

const { t } = useI18n()

const listContacts = ref([
  {
    id: 1,
    icon: 'item__icon item__icon-contact-me fas fa-file-alt',
    socialName: 'contactForm.contact_form_option_title',
    heroName: 'contactForm.contact_form_option_desc',
    statusType: 'contactModal.contact_status_organized',
  },
  {
    id: 2,
    icon: 'item__icon item__icon-telegram fab fa-telegram',
    socialName: 'Telegram',
    heroName: '@fryaner',
    statusType: 'contactModal.contact_status_fast',
  },
  {
    id: 3,
    icon: 'item__icon item__icon-whatsapp fab fa-whatsapp',
    socialName: 'WhatsApp',
    heroName: '+ 7 (924) 218 33 76',
    statusType: 'contactModal.contact_status_fast',
  },
  {
    id: 4,
    icon: 'item__icon item__icon-email fas fa-envelope',
    socialName: 'Email',
    heroName: 'ilya.orlov123@mail.ru',
    statusType: 'contactModal.contact_status_detailed',
  },
  {
    id: 5,
    icon: 'item__icon item__icon-inst fab fa-instagram',
    socialName: 'Instagram',
    heroName: '@1lya_orel',
    statusType: 'contactModal.contact_status_social',
  },
])
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: 0.5s;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.contacts-me-enter-active,
.contacts-me-leave-active {
  transition: 1s;
}
.contacts-me-enter-from,
.contacts-me-leave-to {
  transform: scale(0);
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(16, 185, 129, 0.1));
  z-index: 10;
  backdrop-filter: blur(20px) saturate(180%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  &__btn {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
    border: 1px solid rgba(255, 255, 255, 0.2);
    top: 30px;
    right: 30px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    color: #333;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: $media-mobile) {
      right: 0;
    }

    @media (hover: hover) {
      &:hover {
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95));
        transform: scale(1.1) rotate(90deg);
      }
    }
  }

  &__contact-me {
    background: linear-gradient(135deg, var(--card-bg), var(--bg-secondary));
    max-width: 650px;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 24px;
    box-shadow:
      0 32px 64px rgba(0, 0, 0, 0.3),
      0 16px 32px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    max-height: 85vh;
    overflow-y: scroll;
  }

  &__title {
    padding: 32px 32px 16px;
    font-size: 24px;
    font-weight: 700;
    color: var(--text-primary);
    text-align: center;
    border-bottom: 1px solid var(--border-color);
  }

  &__body {
    padding: 32px;
  }

  &__subtitle {
    font-size: 16px;
    color: var(--text-secondary);
    margin-bottom: 32px;
    line-height: 1.6;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }

  &__item {
    cursor: pointer;
    padding: 20px;
    display: flex;
    background-color: var(--card-bg);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    align-items: center;
    transition: 0.3s;
    @media (hover: hover) {
      &:hover {
        border: 2px solid var(--brand-primary);
        transform: translateY(-2px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
      }
    }

    @media (hover: hover) {
      &:hover .item {
        &__go {
          background-color: var(--brand-primary);
          transform: translateX(4px);
          color: white;
        }
      }
    }

    .item {
      &__icon {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        font-size: 24px;
        color: white;

        &-contact-me {
          background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
        }
        &-telegram {
          background: linear-gradient(135deg, #0088cc, #0066aa);
        }
        &-whatsapp {
          background: linear-gradient(135deg, #25d366, #1ebe57);
        }
        &-email {
          background: linear-gradient(135deg, #ea4335, #d23430);
        }
        &-inst {
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        }
      }
      &__info {
        flex: 1;
      }

      &__go {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        color: var(--text-muted);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--bg-secondary);
        transition: 0.3s;
      }

      &__social {
        font-size: 17.6px;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 4px;
        line-height: 26px;
      }

      &__name {
        color: var(--text-secondary);
        font-size: 14.4px;
        margin-bottom: 8px;
        line-height: 22px;
      }

      &__answer {
        line-height: 18px;
        display: inline-block;
        background: rgba(34, 197, 94, 0.1);
        color: #22c55e;
        font-size: 12px;
        border-radius: 16px;
        font-weight: 500;
        padding: 4px 12px;
      }
    }
  }
  &__prompt {
    display: flex;
    gap: 8px;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    padding: 16px 32px 32px;
    font-size: 14.4px;
    i {
      color: var(--brand-primary);
    }
    span {
      color: var(--text-secondary);
      text-align: center;
    }
  }
}
</style>
