export default {
  template: `
  <section
    class="sidebar h-full bg-blue-500 text-white duration-300"
    :class="sidebarWidth"
  >
    <div class="w-full py-2 px-5 flex justify-end">
      <button @click="() => clickDisplaySidebarAction()">
        <i
          class="q-icon notranslate material-icons text-3xl"
          aria-hidden="true"
          role="img"
        >
          {{isExpanse ? "arrow_back" : "menu"}}
        </i>
      </button>
    </div>
    <ul class="mt-5 overscroll-none">
      <li
        v-for="(item, index) in sidebars"
        :key={index}
        draggable
        @dragstart="startDrag(index)"
        @drop="onDrop(index)"
        @dragover.prevent
        @dragenter.prevent
      >
        <a :href="item.path" class="px-5 py-3 flex flex-nowrap items-center hover:bg-blue-800 duration-500">
          <i
            class="q-icon notranslate material-icons text-3xl mr-3"
            aria-hidden="true"
            role="img"
          >
            drag_indicator
          </i>
          <span v-if="isExpanse" class="text-xl whitespace-nowrap">{{item.title}}</span>
        </a>
      </li>
    </ul>
  </section>
`,
  data() {
    return {
      sidebars: [
        {
          id: 1,
          title: 'Topic 1',
          path: '/topic-1',
        },
        {
          id: 2,
          title: 'Topic 2',
          path: '/topic-2',
        },
        {
          id: 3,
          title: 'Topic 3',
          path: '/topic-3',
        },
      ],
      isExpanse: true,
      expanseWidth: 200,
      minimizeWidth: 70,
      tabletMaxWidth: 1023,
      windowWidth: window.innerWidth,
      startDragIndex: null,
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
  computed: {
    clickDisplaySidebarAction() {
      return this.windowWidth > this.tabletMaxWidth
        ? this.changeSizeSidebar
        : this.display_popup_sidebar;
    },
    sidebarWidth() {
      return this.isExpanse
        ? `w-[${this.expanseWidth}px]`
        : `w-[${this.minimizeWidth}px]`;
    },
  },
  methods: {
    changeSizeSidebar() {
      this.isExpanse = !this.isExpanse;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    display_popup_sidebar() {
      this.$emit('change', null);
    },
    startDrag(startIndex) {
      this.startDragIndex = startIndex;
    },
    onDrop(endIndex) {
      if (!this.startDragIndex && this.startDragIndex !== 0) return;

      let cloneSidebar = [...this.sidebars];

      const item = cloneSidebar[this.startDragIndex];

      cloneSidebar.splice(this.startDragIndex, 1);

      cloneSidebar = [
        ...cloneSidebar.slice(0, endIndex),
        item,
        ...cloneSidebar.slice(endIndex),
      ];

      this.sidebars = cloneSidebar;
      this.startDragIndex = null;
    },
  },
};
