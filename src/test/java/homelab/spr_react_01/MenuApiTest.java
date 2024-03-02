package homelab.spr_react_01;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class MenuApiTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void getMenu() throws Exception {
        this.mockMvc.perform(get("/api/menu"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$[0].label").value("Menu01"))
                .andExpect(jsonPath("$[0].submenu").doesNotExist())
                .andExpect(jsonPath("$[1].label").value("Menu02"))
                .andExpect(jsonPath("$[1].submenu").isArray())
                .andExpect(jsonPath("$[1].submenu[0].label").value("SubMenu01"))
                .andExpect(jsonPath("$[1].submenu[1].label").value("SubMenu02"))
                .andExpect(jsonPath("$[1].submenu[2].label").value("SubMenu03"))
                .andExpect(jsonPath("$[2].label").value("Menu03"))
                .andExpect(jsonPath("$[2].submenu").doesNotExist());
    }

}
