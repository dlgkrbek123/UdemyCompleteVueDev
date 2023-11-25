Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    async copy() {
      let text = `transform: ${this.style.transform};`;

      await navigator.clipboard.writeText(text);
      alert('CSS Copied to Clipboard');
    },
  },
  computed: {
    style() {
      const { perspective, rotateX, rotateY, rotateZ } = this;

      return {
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
      };
    },
  },
}).mount('#app');
