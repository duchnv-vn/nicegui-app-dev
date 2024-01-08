from custom_vue_components.sidebar.sidebar import Sidebar
from custom_vue_components.header.header import Header
from nicegui import ui


def page_layout(Component):
    with ui.header().classes("p-0"):
        Header(toggle_popup_sidebar=lambda: left_drawer.toggle())

    with ui.left_drawer(fixed=False).classes("p-0").props("width=auto") as left_drawer:
        sidebar = Sidebar(toggle_popup_sidebar=lambda: left_drawer.toggle())

    with ui.element('div').classes('h-[calc(100vh-100px)] w-[calc(100vw-230px)] self-end'):
        Component()
