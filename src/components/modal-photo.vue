<template>
  <Transition name="modal">
    <div v-show="props.isActiveModal" class="modal">
      <Transition name="photo">
        <div v-show="props.isActivePhoto" class="modal__photo">
          <img class="modal__img" src="../assets/images/cover-hero.jpg" alt="" />
          <button @click="closeModalPhoto" class="modal__btn">
            <i class="fas fa-times"></i>
          </button>
          <div class="modal__info">
            <p class="modal__title">{{ t('photo.modal_photo_title') }}</p>
            <p class="modal__subtitle">{{ t('photo.modal_photo_subtitle') }}</p>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="js" setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  isActiveModal: Boolean,
  isActivePhoto: Boolean,
})
const emits = defineEmits('close')

function closeModalPhoto() {
  emits('close')
}

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.photo-enter-active,
.photo-leave-active {
  transition:
    transform 1s ease,
    opacity 1s ease;
}

.photo-enter-from,
.photo-leave-to {
  transform: scale(0);
  opacity: 0;
}
.modal {
  position: fixed;
  padding: 0 22px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(16, 185, 129, 0.1));
  z-index: 10;
  backdrop-filter: blur(20px) saturate(180%);

  &__photo {
    max-width: 500px;
    display: flex;
    position: relative;
    img {
      width: 100%;
      border-radius: 24px;
      box-shadow:
        0 32px 64px rgba(0, 0, 0, 0.4),
        0 16px 32px rgba(16, 185, 129, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.15);
    }
  }

  &__info {
    position: absolute;
    max-width: 250px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 4px;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 16px 32px;
    border-radius: 16px;
    bottom: -60px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  &__btn {
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
    border: 1px solid rgba(255, 255, 255, 0.2);
    top: -20px;
    right: -20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    color: #333;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    &:hover {
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95));
      transform: scale(1.1) rotate(90deg);
    }
  }

  &__title {
    color: white;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
  }

  &__subtitle {
    font-size: 14.4px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 22px;
  }
}
</style>
