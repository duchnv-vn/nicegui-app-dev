export default {
  template: `
    <section class="w-full h-full">
        <div class="messages-container w-full h-[95%] pb-5 px-2 flex items-end overflow-auto">
          <ul class="w-full">
            <li
              v-for="(item, index) in messages"
              class="w-max mt-3 text-base"
              :class="item.type === 'me' ? 'ml-auto' : 'mr-auto'"
              :key="index"
            >
              <div
                v-if="item.type === 'me'"
                class="flex flex-nowrap items-center"
              >
                <p class="mr-3">{{ item.content }}</p>
                <i
                  class="q-icon notranslate material-icons text-2xl"
                  aria-hidden="true"
                  role="img"
                >
                  face_6
                </i>
              </div>
              <div
                v-else
                class="flex flex-nowrap items-center"
              >
                <i
                  class="q-icon notranslate material-icons text-2xl"
                  aria-hidden="true"
                  role="img"
                >
                  face_3
                </i>
                <p class="ml-3">{{ item.content }}</p>
              </div>
            </li>
          </ul>
        </div>
        <form
          class="chat-input w-full h-[5%] flex flex-nowrap"
          ref="sendMessageForm"
          @submit.prevent="sendMessage"
        >
            <input
              name="content"
              class="border border-gray-500 rounded-md w-full mih-h-[41px] max-h-[41px] py-1 px-2 mr-2 focus:outline focus:outline-blue-500"
            />
            <button type="submit" class="px-3 py-2 rounded-md bg-blue-700 text-white font-bold">Send</button>
        </form>
    </section>
  `,
  data() {
    return {
      messages: [
        {
          type: 'guest',
          content: 'Nice to meet you!',
        },
        {
          type: 'me',
          content: 'Welcome to our chat room!',
        },
      ],
    };
  },
  methods: {
    sendMessage(e) {
      const formData = new FormData(e.target);
      const content = formData.get('content');
      const newMessage = {
        type: 'me',
        content,
      };
      this.messages = [newMessage, ...this.messages];
      this.$refs.sendMessageForm.reset();
    },
  },
};
