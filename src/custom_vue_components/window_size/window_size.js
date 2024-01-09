export default {
  template: ``,
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.$emit('change_window_width', window.innerWidth);
    },
  },
};
