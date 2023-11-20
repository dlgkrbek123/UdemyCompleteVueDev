let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: 'John',
          message: 'Hello world!',
        },
        {
          name: 'Rick',
          message: 'I like pie.',
        },
        {
          name: 'Amy',
          message: 'Skydiving is fun!',
        },
      ],
    };
  },
  methods: {
    move() {
      this.people = [...this.people.slice(1), this.people[0]];
    },
  },
}).mount('#app');
