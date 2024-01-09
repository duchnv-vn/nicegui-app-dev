from typing import Callable, Optional
from nicegui.element import Element


class Window_size(Element, component="window_size.js"):
    def __init__(self, *, watch_window_width: Optional[Callable] = None) -> None:
        super().__init__()

        self.on("change_window_width", watch_window_width)
