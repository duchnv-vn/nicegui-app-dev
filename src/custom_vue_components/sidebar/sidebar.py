from typing import Callable, Optional
from nicegui.element import Element
from nicegui.events import handle_event


class Sidebar(Element, component="sidebar.js"):
    def __init__(
        self,
        *,
        toggle_popup_sidebar: Optional[Callable] = None,
        resize_sidebar: Optional[Callable] = None,
    ) -> None:
        super().__init__()

        def display_popup_sidebar() -> None:
            handle_event(toggle_popup_sidebar, None)

        def display_sidebar(msg) -> None:
            handle_event(resize_sidebar, msg)

        self.on("change_1", display_sidebar)
        self.on("change_2", display_popup_sidebar)

    def set_window_width(self, width: int):
        self._props['window_width'] = width
        self.update()
