<template>
  <div class="home">
    <Md :content="mock"></Md>
    <Button @click="click" type="primary">123</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Md, Button } from "../lib/components";

export default defineComponent({
  name: "HomeView",
  components: {
    Md,
    Button,
  },
  setup: () => {
    return {
      mock: `# This is a h1 Element
`,
      click: () => {
        console.log(1);
      },
    };
  },
});
</script>
