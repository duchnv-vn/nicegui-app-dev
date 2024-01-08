from custom_vue_components.sidebar.sidebar import Sidebar
from custom_vue_components.header.header import Header
from nicegui import ui


def page_layout():
    with ui.left_drawer().classes("p-0").props("width=auto") as left_drawer:
        Sidebar()

    with ui.header().classes("p-0"):
        Header(open_sidebar_trigger=lambda: left_drawer.toggle())
