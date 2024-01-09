from custom_vue_components.sidebar.sidebar import Sidebar
from custom_vue_components.header.header import Header
from custom_vue_components.window_size.window_size import Window_size
from nicegui import ui


class Page_layout:
    sidebar_width = 200
    header_height = 64
    window_width = None
    left_drawer = None
    vue_header = None
    vue_left_drawer = None
    Body = None

    def __init__(self, *, Body) -> None:
        self.Body = Body

    def resize_sidebar(self, msg):
        self.sidebar_width = msg.args
        self.left_drawer.props(f"width={self.sidebar_width}")

    def watch_window_width(self, msg):
        self.vue_header.set_window_width(msg.args)
        self.vue_left_drawer.set_window_width(msg.args)

    def display(self):
        Window_size(watch_window_width=self.watch_window_width)

        with ui.header().classes("p-0"):
            header = Header(toggle_popup_sidebar=lambda: self.left_drawer.toggle(),
                            header_height=self.header_height)
            self.vue_header = header

        with ui.left_drawer(fixed=False).classes("p-0").props(
            f"width={self.sidebar_width}"
        ) as left_drawer:
            self.left_drawer = left_drawer
            vue_left_drawer = Sidebar(
                toggle_popup_sidebar=lambda: self.left_drawer.toggle(),
                resize_sidebar=self.resize_sidebar,
            )
            self.vue_left_drawer = vue_left_drawer

        with ui.element("section").classes(f"p-0 w-full h-[calc(100vh-{self.header_height}px-32px)]"):
            self.Body()
