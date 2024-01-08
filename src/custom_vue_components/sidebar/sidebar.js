export default {
  template: `
  <section
    class="sidebar h-full bg-blue-500 text-white duration-300"
    :class="isExpanse ? expanseWidth : minimizeWidth"
  >
    <div class="w-full py-2 px-5 flex justify-end">
      <button @click="changeSizeSidebar">
        <i
          class="q-icon notranslate material-icons text-3xl"
          aria-hidden="true"
          role="img"
        >
          {{isExpanse ? "arrow_back" : "menu"}}
        </i>
      </button>
    </div>
    <ul class="mt-5">
      <li
        v-for="(item, index) in sidebars"
        :key={index}
      >
        <a :href="item.path" class="px-5 py-3 flex flex-nowrap items-center hover:bg-blue-800 duration-500">
          <i
            class="q-icon notranslate material-icons text-3xl mr-3"
            aria-hidden="true"
            role="img"
          >
            {{item.icon}}
          </i>
          <span v-if="isExpanse" class="text-xl">{{item.title}}</span>
        </a>
      </li>
    </ul>
  </section>
`,
  data() {
    return {
      sidebars: [
        {
          title: 'Home',
          path: '/',
          icon: 'home',
        },
        {
          title: 'About',
          path: '/about',
          icon: 'apartment',
        },
      ],
      isExpanse: true,
      expanseWidth: 'w-[200px]',
      minimizeWidth: 'w-[70px]',
    };
  },
  methods: {
    changeSizeSidebar() {
      this.isExpanse = !this.isExpanse;
    },
  },
};
