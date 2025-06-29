<template>
  <div class="title">
    <h2>
      <slot name="title"></slot>
    </h2>
    <h3><slot name="subtitle"></slot></h3>
    <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 16px;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 48px;
    line-height: 24px;
  }
}
.line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--brand-primary), transparent);
  margin-bottom: 48px;
}
</style>
