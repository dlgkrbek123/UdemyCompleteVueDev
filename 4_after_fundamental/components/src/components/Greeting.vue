<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>you must be 25 years or loder to view this message</p>
</template>

<script>
export default {
  name: 'Greeting',
  props: ['age'],
  data() {
    return {
      msg: 'Hello World!',
    };
  },
};
</script>

<style lang="scss" scoped>
p:hover {
  color: red;
}
</style>
