package homelab.spr_react_01;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

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
                .andExpect(content().json("[{\"label\": \"Menu01\"}, {\"label\": \"Menu02\"}, {\"label\": \"Menu03\"}]"));
    }

}
