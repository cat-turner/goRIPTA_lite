# goRIPTA_lite
A PWA prototype to make it easier to pick bus routes and pay for them

## Synopsis
Progressive Web Apps (PWS) provide the same user experience regardless of the platform.

https://developers.google.com/web/progressive-web-apps/

Progressive Web Apps have to be fast, and installable, which means that they work online, offline, and on intermittent, slow connections. To achieve this, we need to cache our app shell using service worker, so that it's always available quickly and reliably.

The application shell is stored in the cache. When you first load, you load the shell, then the service worker retrieves the latest data from the site.

Core Objectives:
Phase I
  1. Search and select routes in 3 or less steps
  2. Keep a tab on your most commonly used routes (myroutes) > tells you the latest ETA
  3. ETA of buses presented in a way that is easy to understand and see (for all ages and levels of education)

Phase II
  4. Payment integration (beta)
  https://developers.google.com/web/fundamentals/getting-started/primers/payment-request/
  5. Rider check-in
  6. Feedback for RIPTA: New Route Suggestion due to user start/end points (submitted through app). Users vote on new routes and put in amount of $ they would be willing to pay for it.

## Code Example

TODO

## Motivation

Good design for everyone that can be used in everyday life. New technology is cool. 

PWApps through chrome have built-in functionality that can used to meet project objectives. Picking a bus route and planning your day should be a seemless process.

## Installation

TODO: Provide code examples and explanations of how to get the project.

## API Reference

TODO: Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

TODO: Describe and show how to run the tests with code examples.

## Contributors

This is an open source project. This repo was started by Cat Turner.

## License

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
