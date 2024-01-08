from typing import Callable, Optional
from nicegui.element import Element
from nicegui.events import handle_event


class Chatbox(Element, component="chat_box.js"):
    def __init__(self) -> None:
        super().__init__()
