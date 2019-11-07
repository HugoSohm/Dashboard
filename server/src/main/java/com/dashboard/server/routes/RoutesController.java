package com.dashboard.server.routes;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RoutesController {

    @RequestMapping("/index")
    public String index(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return "index";
    }

    @RequestMapping("/login")
    public String login(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return "login";
    }

    @RequestMapping("/profile")
    public String profile(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return "profile";
    }

}