package homelab.spr_react_01.api;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/menu")
public class MenuConfig {

    @GetMapping
    public MenuItem[] getMainMenu() {
        return new MenuItem[]
                {new MenuItem("Menu01"),
                new MenuItem("Menu02", new MenuItem[] {new MenuItem("SubMenu01"), new MenuItem("SubMenu02"), new MenuItem("SubMenu03")}),
                new MenuItem("Menu03")};
    }

    class MenuItem {
        private final String label;
        private final MenuItem[] submenu;

        private MenuItem(String label, MenuItem[] submenu) {
            this.label = label;
            this.submenu = submenu;
        }

        public MenuItem(String label) {
            this.label = label;
            this.submenu = null;
        }

        public String getLabel() {
            return label;
        }

        public MenuItem[] getSubmenu() {
            return submenu;
        }
    }
}
