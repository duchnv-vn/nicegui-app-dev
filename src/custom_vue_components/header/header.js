export default {
  template: `
  <section class="w-full h-16 px-5 flex items-center justify-between bg-white border-b-4 border-b-blue-500 text-blue-500">
    <button @click="() => setDisplaySidebar(!isOpenSidebar)">
      <i
        v-if="windowWidth <= tabletMaxWidth"
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
      windowWidth: window.innerWidth,
      tabletMaxWidth: 1023,
      isOpenSidebar: false,
    };
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
      this.windowWidth = window.innerWidth;
    },
    setDisplaySidebar(isOpen) {
      console.log('==================');
      console.log('isOpen', isOpen);
      console.log('==================');
      this.$emit('openSidebar', { isOpen });
    },
  },
  props: {
    openSidebarTrigger: null,
  },
};
