package homelab.spr_react_01.api;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/menu")
public class MenuConfig {

    @GetMapping
    public String[] getMenu() {
        return new String[]{"Menu01", "Menu02", "Menu03"};
    }

}
