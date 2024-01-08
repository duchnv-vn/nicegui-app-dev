from typing import Callable, Optional
from nicegui.element import Element


class Header(Element, component="header.js"):
    def __init__(self, *, open_sidebar_trigger: Optional[Callable] = None) -> None:
        super().__init__()
        self.on("openSidebar", print("AAAAAAAA"))
        # self._props["openSidebarTrigger"] = 'open_sidebar_trigger'
