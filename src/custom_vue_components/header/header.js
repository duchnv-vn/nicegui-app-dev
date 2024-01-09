export default {
  template: `
  <section
    class="w-full px-5 flex items-center justify-between bg-white border-b-4 border-b-blue-500 text-blue-500"
    :class="{
      [headerHeightClassName]: true
    }"
  >
    <button
       v-if="window_width <= tabletMaxWidth"
       @click="() => display_popup_sidebar()"
    >
      <i
        class="q-icon notranslate material-icons text-2xl"
        aria-hidden="true"
        role="img"
      >
        menu
      </i>
    </button>
    <h1 class="leading-none text-lg font-bold">{{title}}</h1>
    <button>
      <i
        class="q-icon notranslate material-icons text-2xl"
        aria-hidden="true"
        role="img"
      >
        logout
      </i>
    </button>
  </section>
  `,
  data() {
    return {
      title: 'Nice GUI application',
      tabletMaxWidth: 1023,
    };
  },
  computed: {
    headerHeightClassName() {
      return `h-[${this.header_height}px]`;
    },
  },
  methods: {
    display_popup_sidebar() {
      this.$emit('change', null);
    },
  },
  props: {
    header_height: Number,
    window_width: Number,
  },
};
