<template>
  <div class="home">
    <Button>123</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../lib/components/Button";

export default defineComponent({
  name: "HomeView",
  components: {
    Button,
  },
});
</script>
