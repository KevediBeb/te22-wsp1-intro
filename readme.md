# webbserver intro

För att köra webbserver har vi installerat WSL och Node.

## Linux Commandon

* pwd - visar aktiv mapp
* ls - listar alla filer i mappen
* ll - visar även dolda filer, samma sak som ls -la
* cd - går tillbaka i mapparna

## Node

För att initiera ett nytt npde projekt kör jag "npm init -y" i en mapp. Detta skapar en package.json fil.

```bash

mkdir serverprojektet

cd serverprojektet

npm init -y
```

För node installerade vi express och nodemon
För att avsluta node som körs med nodemon tryc ctrl + c

Vi skapade även en gitignore fil med kommandot "echo node_modules > .gitignore"
för att ignorera node_modules mappen när vi pushar till github.

## Express

Vi satte upp en webbserver.(programmering)

En mapp vid namnet "public" skapades för att hålla statiska filer som ska skickas mellan server och klient.

## NJK

Vi gjorde två sidor som länkade till varandra, både sidor följer samma "layout.njk" Main sidan "root" länkar till index och en annan sida vid namnet om länkar till "om.njk".

```java
//this is java guys now woah guys
int balls = 0;
boolean ballin = false;

```

```C#
//this is now C# now this is crazy
int balls = 999999;
bool ballin = true;
//the correct way to type boolean btw^^
````
