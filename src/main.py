from layout import page_layout
from custom_vue_components.chat_box.chat_box import Chatbox
from nicegui import ui

page_layout(lambda: Chatbox())

ui.run()
