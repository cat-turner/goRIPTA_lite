# goRIPTA_lite
A PWA prototype to make it easier to pick bus routes and pay for them

## Synopsis
Progressive Web Apps (PWS) provide the same user experience regardless of the platform.

https://developers.google.com/web/progressive-web-apps/

Progressive Web Apps have to be fast, and installable, which means that they work online, offline, and on intermittent, slow connections. To achieve this, we need to cache our app shell using service worker, so that it's always available quickly and reliably.

The application shell is stored in the cache. When you first load, you load the shell, then the service worker retrieves the latest data from the site. By storing app shell data in the user's browsers there will be less load on the servers, freeing resources to process and manage bus data.

Here's how I am imaging the layout of the app:

-it will be a one page app. every feature will be integrated as a card
-there will be a drop down menu to select buttons that will take you to the specific cards
-there will be one button on the bottom right hand corner for the user to input a navigation (like google maps)
-the application will follow the principles of material design light: https://getmdl.io/index.html

That's it. for every feature there is a card. Of course that seems very structured but here's the fun part: because the cards are in a sense "pluginable" we can experiment with the features

Core Objectives:
Phase I
  1. Search and select routes in 3 or less steps
  2. Keep a tab on your most commonly used routes (myroutes) > tells you the latest ETA
  3. ~~ETA of buses presented in a way that is easy to understand and see (for all ages and languages)~~ done
Features (2-3):
TBD on Friday

Phase II
  4. Payment integration (beta)
  https://developers.google.com/web/fundamentals/getting-started/primers/payment-request/
  5. Rider check-in
  6. Feedback for RIPTA: New route suggestion from user start/end points (submitted through app). Users vote on new routes and put in amount of $ they would be willing to pay for it.

## Motivation

Good design for everyone that can be used in everyday life. New technology is cool. 

PWApps through chrome have built-in functionality that can used to meet project objectives. Picking a bus route and planning your day should be a seemless process.

## Install

1. Install the LTS version (4.x) of Node.js. The current version (6.x) should work, but is not officially supported. Versions below LTS are not supported. Skip if you have started a c9 container with nodejs.
2. Install git
3. Pull this repository and cd into it. You will mainly serve this file:
    
    /src/ride-app/ride-app.html
    
    There will be many add ons to this file, including service workers and other fun goodies. 

4. Install the latest version of Bower.
    ```
    npm install -g bower
    ```
    
5. Install Polymer CLI.
  ```
    npm install -g polymer-cli
    ```

## Run the demo

1. cd to /work directory of goRIPTA_lite
  
  
2. Run polymer serve from the repo directory:
    ```
    polymer serve
    ```

3. Open localhost:8080 in your browser.

    Cloud 9 users:
    ```
    polymer serve --hostname "0.0.0.0" 
    ```

    We have to serve the page on a port. Open a new tab, then you will go to:
    ```
    https://<your-c9-container-name>-<yrusername>.c9users.io:8080
    ```

    For example:
    ```
    https://goripta-mrcool.c9users.io:8080/
    
    Note that underscore in container names is replaced by dash
    ```

## API Reference

TODO: Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

TODO: Describe and show how to run the tests with code examples.

## Contributors

This is an open source project. This repo was started by Cat Turner.

All star contributors:

Ian Arsenault - Material Light UI Master
Jay Arsenault - Service Worker Wisperer


## License
See the [LICENSE](https://github.com/cat-turner/goRIPTA_lite/blob/master/LICENSE) file for license rights and limitations (Apache-2.0)
