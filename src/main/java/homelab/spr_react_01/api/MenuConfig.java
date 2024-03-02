package homelab.spr_react_01.api;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/menu")
public class MenuConfig {

    @GetMapping
    public MainMenuItem[] getMainMenu() {
        return new MainMenuItem[]
                {new MainMenuItem("Menu01"),
                new MainMenuItem("Menu02"),
                new MainMenuItem("Menu03")};
    }

    class MainMenuItem {
        private final String label;

        private MainMenuItem(String label) {
            this.label = label;
        }

        public String getLabel() {
            return label;
        }
    }
}
