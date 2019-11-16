package com.dashboard.server;

import com.dashboard.server.services.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.sql.Connection;
import java.sql.DriverManager;

@SpringBootApplication
@RestController
public class ServerApplication {

	public static void main(String args[]) {
		YoutubeService YoutubeService = new YoutubeService();
		OpenWeatherService OpenWeatherService = new OpenWeatherService();
		TwitchService TwitchService = new TwitchService();
		SpringApplication.run(ServerApplication.class, args);
	}
}