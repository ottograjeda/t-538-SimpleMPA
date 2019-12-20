ReactJS: SimpleMPA
=================
"SimpleMPA" is sample code of a multi-page app for ReactJS.

The business use case is to separate the main app (for paid users) from other pages (for marketing use).   
Examples: an SPA is built as the main app (where users login) and there is a requirement of a landing    
page for a blog & promotions. You are tasked to re-use existing SPA code as much as possible,   
and to ensure the UI/UX remains the same.

This repo is for Web built using ```create-react-app``` (see [docs](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)). It can be used as     
starter-kit for the MPA or combined with an SPA monorepo, like [SimpleApp](https://github.com/ottograjeda/public_ticket.528) for   
Mobile use on iOS & Android.


Installation
============
*  Get the repo
* From root directory, do ```yarn```   
**Required** Basic ReactJS knowledge. If repo user needs review, please read [this](https://www.taniarascia.com/getting-started-with-react/) 

Run
===

For web, from the root directory, do

* ```node_modules/.bin/webpack -p --progress```
* ```node_modules/.bin/webpack-dev-server --content-base public/ --config ./webpack.config.js --inline --hot --colors```
* Manually open a browser to localhost:8080 to see webapp 

Demo & Animated GIFs
===========
* [Live Demo](https://t-538-react.web.app/) at [Firebase Hosting](https://firebase.google.com/docs/hosting) 
* Google PageSpeed Analysis ([desktop](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ft-538-react.web.app%2F&tab=desktop) | [mobile](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ft-538-react.web.app%2F&tab=mobile))  
* SimpleMPA on iOS 
![Animated GIF - Webapp on iOS](https://raw.githubusercontent.com/ottograjeda/public_ticket.538/master/tente/_docs/ezgif-720_ios.gif)
* SimpleMPA on Android 
![Animated GIF - Webapp on Android](https://raw.githubusercontent.com/ottograjeda/public_ticket.538/master/tente/_docs/ezgif-720_android.gif)
* SimpleMPA Webapp 
![Animated GIF - Webapp on Desktop](https://raw.githubusercontent.com/ottograjeda/public_ticket.538/master/tente/_docs/ezgif-720_web.gif)

Notes - Development
===========
* CSS is mix of custom code and [MUI](https://www.muicss.com/).    
* Loaders are custom CSS + JS (ReactJS used).   
* Sample photos & placeholder text obtained via external APIs ([photos](https://source.unsplash.com/) | [text](https://loripsum.net/)).      
* [Assets](https://github.com/ottograjeda/public_ticket.538/tree/master/app/assets) (from graphic designer, writers, editors, etc.) are copied during build process.     
* Custom components for [Header](https://github.com/ottograjeda/public_ticket.538/tree/master/app/components/Header) & [Footer](https://github.com/ottograjeda/public_ticket.538/tree/master/app/components/Footer) used. Can be refactored or expanded as needed.
* SEO can be edited manually per [page](https://github.com/ottograjeda/public_ticket.538/tree/master/app/pages) or on minor refactor, pulled from database during build process.   

Inspiration
===========
* [Ultimate Death Match: SPA vs MPA](https://medium.com/@jainshilpa1993/ultimate-death-match-spa-vs-mpa-82e0b79ae6b6) 
* [Static website, multiple pages using webpack](https://www.ivarprudnikov.com/static-website-multiple-html-pages-using-webpack-plus-github-example/) 
* [How OkCupid organizes multi-page React app](https://tech.okcupid.com/how-okcupid-organizes-its-multi-page-react-app/) 
* [The Difference between Single-Page and Multi-page Apps](https://rubygarage.org/blog/single-page-app-vs-multi-page-app) 
