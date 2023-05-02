<template>
  <div class="root">
    <header class="nav">
      <div class="sidebar sidebar-nav"></div>
      <div class="nav-inner"></div>
    </header>
    <div style="display: flex">
      <aside class="sidebar"></aside>
      <div class="container">
        <div class="content">
          <div class="content-container">
            <Md :content="mock" class="main" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Md } from "../lib/components";

export default defineComponent({
  name: "HomeView",
  components: {
    Md,
  },
  setup: () => {
    return {
      mock: `# About AirCode
            AirCode is an online platform designed to streamline the development and deployment of Node.js applications, tailored for full-stack engineers.
            With an intuitive in-browser IDE and pre-configured cloud services, AirCode takes care of the backend technology selection, environment setup, and operation, so you can focus on building great products. No more complex setup processes, no more headaches over server management - open your browser, and you're ready to go.
            ## Getting Started
            To help you quickly get familiar with the usage and core features of AirCode, we have designed a 5-minute introductory tutorial.
`,
      click: () => {
        console.log(1);
      },
    };
  },
});
</script>

<style lang="less">
.container {
  flex: 1;
  display: flex;
  padding: 32px 32px 0;
  max-width: 960px;
}

.content {
  order: 1;
  margin: 0;
  width: 100%;
  padding: 0 32px 128px;
  &-container {
    margin: 0 auto;
    max-width: 688px;
  }
}

.nav {
  height: 64px;
  &-inner {
    flex: 1;
    border-bottom: 0.5px solid var(--color-border-1);
  }
}

.sidebar {
  padding: 0 32px;
  width: var(--sidebar-width);
  background-color: var(--color-bg-0);
  height: calc(100vh - var(--nav-height));
  transition: margin-left 0.1s ease;
  &-nav {
    height: 100%;
  }
}

@media (max-width: 959px) {
  .sidebar {
    margin-top: calc(var(--nav-height) * -1);
    margin-left: calc(var(--sidebar-width) * -1);
    height: 100vh;
    position: fixed;
  }
}

@media (min-width: 1440px) {
  .sidebar {
    padding-left: max(calc((100vw - (var(--layout-max-width) - 64px)) / 2));
    padding-right: 32px;
    width: calc(
      (100vw - (var(--layout-max-width) - 64px)) / 2 + var(--sidebar-width) -
        32px
    );
  }
}
</style>
