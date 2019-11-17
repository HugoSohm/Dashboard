<div align="center"><h1>Dashboard - Epitech 2019</h1>

L'arcade est un projet est un projet web de 1 mois réalisé par 2 étudiants à [Epitech Nice](https://www.epitech.eu/fr/)

[Hugo Sohm](https://github.com/HugoSohm), [Ryan Chamayrac](https://github.com/RyanChamayrac)

<img src="https://ressources.invox.fr/hs-fs/hubfs/Landing%20Pages/Dashboard%20Metrics%20Marketing/Invox-LP-banner-dashboard-metrics.png?width=2650&name=Invox-LP-banner-dashboard-metrics.png" alt="Dashboard" /></div>

## Projet dashboard

### Librairies

Le Dashboard fonctionne à l'aide de plusieurs langages et technologies

- [Java](https://fr.wikipedia.org/wiki/Java_(technique)
- [Spring boot](https://spring.io/projects/spring-boot)
- [HTML5](https://fr.wikipedia.org/wiki/Hypertext_Markup_Language)
- [CSS3](https://fr.wikipedia.org/wiki/Hypertext_Markup_Language)
- [Jquery](https://jquery.com)
- [Docker](https://www.docker.com)
- [PostgreSQL](https://www.postgresql.org)
- [Gradle](https://gradle.org)

Ils fonctionne également à l'aide de plusieurs Api
- [Youtube](https://www.youtube.com/intl/fr/yt/dev/api-resources)
- [Twitch](https://dev.twitch.tv/docs)
- [Deezer](https://developers.deezer.com/api)
- [OpenWeather](https://openweathermap.org/api)

## Installation et compilation

### Récupération du projet

Après avoir cloné le [répertoire](https://github.com/HugoSohm/Dashboard):

```
git clone https://github.com/HugoSohm/Dashboard
```

- Se rendre à la racine du projet :

```
$ cd Dashboard
```

### Compilation du programme

- Compilation avec docker-compose

```
$ sudo docker-compose build
```

## Execution

### Lancement du programme

- Lancement avec docker-compose
```
$ sudo docker-compose up
```

## Services

### Youtube

- Nombre d'abonnés d'une chaîne
- Dernière vidéo d'une chaîne

### Twitch

- Lives les plus regardés
- Jeux les plus regardés

### OpenWeather

- Température dans une ville

### Deezer

- Dernière musique d'un artiste

## Fonctionnement

- Requête de l'entrée texte sur la page web
```
<input name="widget-name-youtube" class="form-control" id="widget-name-youtube" placeholder="Nom de la chaîne">
```
- Interprétation et envoi de cette valeur vers le back-end
```
$.getJSON('http://localhost:8080/service/youtube/subscribers?value=' + value, function (data)
```
- Redirection vers la méthode permettant la requête API
```
@RequestMapping("/service/youtube/subscribers")
public String Subscribers(@RequestParam("value") String value) {
    return YoutubeService.Subscribers(value);
}
```
- Execution de la requête vers l'API avec la valeur en paramètre et envoi vers le front-end
```
public String Subscribers(String name) {
    String url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=" + name + "&fields=items/statistics/subscriberCount&key=" + key;

    RestTemplate restTemplate = new RestTemplate();
    String subscribers = restTemplate.getForObject(url, String.class);

    return subscribers;
}
```
- Interprétation du résultat
```
let subscribers = data["items"]["0"]["statistics"]["subscriberCount"];
```
- Affichage du résultat sur la page web
```
$("#subscribers").show();
$("#subscribers").html(html);
```