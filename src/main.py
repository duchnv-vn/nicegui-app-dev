from layout import Page_layout
from custom_vue_components.chat_box.chat_box import Chatbox
from nicegui import ui


@ui.page('/')
def home_page():
    Page_layout(Body=Chatbox).display()


@ui.page('/topic-1')
@ui.page('/topic-2')
@ui.page('/topic-3')
def topic_page():
    Page_layout(Body=Chatbox).display()


home_page()
topic_page()

ui.run()
