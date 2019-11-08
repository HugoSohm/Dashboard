package com.dashboard.server;

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

    @RequestMapping("/register")
    public String register(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return "register";
    }

    @RequestMapping("/profile")
    public String profile(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return "profile";
    }

    @RequestMapping("/maps")
    public String maps(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return "maps";
    }

    @RequestMapping("/icons")
    public String icons(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return "icons";
    }

    @RequestMapping("/tables")
    public String tables(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return "tables";
    }
}