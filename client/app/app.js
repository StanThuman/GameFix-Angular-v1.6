

import 'jquery';
import 'bootstrap-loader';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import styles from '../content/styles.scss';


import { NavBarComponent } from './layout/navbar.config.js';
import { HomeComponent } from './home/home.config.js';
import { CarouselComponent } from './components/carousel/carousel.config.js';
import { CardImageComponent } from './components/card-image/card-image.config.js';
import { NewsComponent } from './news/news.config.js';
import { VideosComponent } from './videos/videos.config.js';

import { NintendoComponent } from './consoles/nintendo/nintendo.config.js';
import { SonyComponent } from './consoles/sony/sony.config.js'
import { MicrosoftComponent } from './consoles/microsoft/microsoft.config.js';

import routes from './app.config.js';


//add components
angular.module('app', [uirouter])
  .config(routes)
  .component(NavBarComponent.name, NavBarComponent.component)
  .component(CarouselComponent.name, CarouselComponent.component)
  .component(CardImageComponent.name, CardImageComponent.component)
  .component(HomeComponent.name, HomeComponent.component)
  .component(NewsComponent.name, NewsComponent.component)
  .component(VideosComponent.name, VideosComponent.component)
  .component(NintendoComponent.name, NintendoComponent.component)
  .component(SonyComponent.name, SonyComponent.component)
  .component(MicrosoftComponent.name, MicrosoftComponent.component);
