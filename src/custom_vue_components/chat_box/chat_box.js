export default {
  template: `
    <section class="w-full h-full">
        <div class="messages-container w-full h-[95%] pb-5 flex flex-wrap items-end">
            <div
                v-for="(item, index) in messages.reverse()"
                :key="index"
                class="w-full flex flex-nowrap items-center"
                :class="item.type === 'me' ? 'ml-auto' : 'mr-auto'"
            >
                <component v-if="item.type === 'me'">
                    <p class="mr-3">{{item.content}}</p>
                    <i
                        class="q-icon notranslate material-icons text-2xl"
                        aria-hidden="true"
                        role="img"
                    >
                        face_6
                    </i>
                </component>
                <component v-else>
                    <i
                        class="q-icon notranslate material-icons text-2xl"
                        aria-hidden="true"
                        role="img"
                    >
                        face_3
                    </i>
                    <p class="mr-3">{{item.content}}</p>
                </component>
            </div>
        </div>
        <form class="chat-input w-full h-[5%] flex flex-nowrap" @submit.prevent="sendMessage">
            <input name="content" class="border border-gray-500 rounded-md w-full py-1 px-2 mr-2" />
            <button type="submit" class="px-3 py-2 rounded-md bg-blue-700 text-white font-bold">Send</button>
        </form>
    </section>
  `,
  data() {
    return {
      messages: [
        {
          type: 'me',
          content: 'Welcome to our chat room!',
        },
        {
          type: 'guest',
          content: 'Nice to meet you!',
        },
      ],
    };
  },
  methods: {
    sendMessage(e) {},
  },
  props: {
    isExpanse: Boolean,
  },
};
