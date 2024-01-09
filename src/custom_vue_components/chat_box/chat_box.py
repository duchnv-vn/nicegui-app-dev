from nicegui.element import Element


class Chatbox(Element, component="chat_box.js"):
    def __init__(self) -> None:
        super().__init__()
