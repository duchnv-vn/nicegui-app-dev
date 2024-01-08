from typing import Callable, Optional
from nicegui.element import Element
from nicegui.events import handle_event


class Header(Element, component="header.js"):
    def __init__(self, *, toggle_popup_sidebar: Optional[Callable] = None) -> None:
        super().__init__()

        def display_popup_sidebar() -> None:
            handle_event(toggle_popup_sidebar, None)

        self.on("change", display_popup_sidebar)
