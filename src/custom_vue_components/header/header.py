from typing import Callable, Optional
from nicegui.element import Element
from nicegui.events import handle_event


class Header(Element, component="header.js"):
    def __init__(self, *, toggle_popup_sidebar: Optional[Callable] = None, header_height: int) -> None:
        super().__init__()

        def display_popup_sidebar() -> None:
            handle_event(toggle_popup_sidebar, None)

        self._props['header_height'] = header_height
        self.on("change", display_popup_sidebar)

    def set_window_width(self, width: int):
        self._props['window_width'] = width
        self.update()
