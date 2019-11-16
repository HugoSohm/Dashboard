package com.dashboard.server.routes;

import java.sql.*;
import java.util.Map;

import java.io.*;
import java.lang.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dashboard.server.User;
import com.dashboard.server.services.*;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServicesController {
    OpenWeatherService OpenWeatherService = new OpenWeatherService();
    YoutubeService YoutubeService = new YoutubeService();
    TwitchService TwitchService = new TwitchService();

    @RequestMapping("/service/weather/temperature")
    public String Temperature(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return OpenWeatherService.Temperature("LONDON");
    }

    @RequestMapping("/service/youtube/subscribers")
    public String Subscribers(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return YoutubeService.Subscribers("sardochelol");
    }

    @RequestMapping("/service/youtube/lastvideo")
    public String LastVideo(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return YoutubeService.LastVideo("sardochelol");
    }

    @RequestMapping("/service/twitch/games")
    public String Games(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return TwitchService.Games(10);
    }

    @RequestMapping("/service/twitch/streams")
    public String Streams(ModelMap model) {
        model.addAttribute("App", "Dashboard");
        return TwitchService.Streams(10);
    }
}