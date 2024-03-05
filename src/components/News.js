import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defaultProps={
        country:'in',
        pagesize:8,
        category:'general'
       
      }
      static defaultTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string
      }
        articles= [
            {
            "source": {
            "id": null,
            "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "La marca de móviles que triunfa en Latinoamérica pero que nadie conoce en el resto del mundo",
            "description": "Mientras que cada año Samsung, Apple y Xiaomi compiten por convertirse en la compañía que más smartphones envía globalmente, hay una empresa que silenciosamente está derrotando al grupo BBK, compuesto por marcas como Vivo, OnePlus, Oppo o Realme, entre otras.…",
            "url": "http://hipertextual.com/2024/03/la-marca-de-moviles-que-triunfa-en-latinoamerica-pero-que-nadie-conoce-en-el-resto-del-mundo",
            "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2024/03/tecno-001.jpg?fit=1920%2C1281&quality=55&strip=all&ssl=1",
            "publishedAt": "2024-03-04T08:00:00Z",
            "content": "Mientras que cada año Samsung, Apple y Xiaomi compiten por convertirse en la compañía que más smartphones envía globalmente, hay una empresa que silenciosamente está derrotando al grupo BBK, compuest… [+3536 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Xataka.com"
            },
            "author": "Jose García",
            "title": "Apple no eliminará finalmente las PWA en la Unión Europea: seguirán funcionando, pero con WebKit",
            "description": "Hace apenas un par de semanas, Apple anunció que las web apps o PWA (aplicaciones web progresivas) iban a dejar de funcionar en los iPhone de la Unión Europea. Lo harían con la llegada de iOS 17.4 y el motivo, afirmó Apple en su momento, era que debían cumpli…",
            "url": "https://www.xataka.com/aplicaciones/apple-no-eliminara-finalmente-pwa-union-europea-seguiran-funcionando-webkit",
            "urlToImage": "https://i.blogs.es/88d66a/webapp/840_560.jpeg",
            "publishedAt": "2024-03-04T09:27:48Z",
            "content": "Hace apenas un par de semanas, Apple anunció que las web apps o PWA (aplicaciones web progresivas) iban a dejar de funcionar en los iPhone de la Unión Europea. Lo harían con la llegada de iOS 17.4 y … [+3311 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Xataka.com"
            },
            "author": "Ricardo Aguilar",
            "title": "El diseño del iPhone SE 4 asoma la patita. Es exactamente lo que estábamos imaginando",
            "description": "Los rumores sobre el iPhone SE 4 empiezan a tener más peso que nunca. En las últimas horas se han filtrado los supuestos renders originales, dejándonos ver el diseño de este teléfono. Según las fuentes se han obtenido documentos originales de Apple y, al meno…",
            "url": "https://www.xataka.com/moviles/diseno-iphone-se-4-asoma-patita-exactamente-que-estabamos-imaginando",
            "urlToImage": "https://i.blogs.es/08e6a2/iphone-se/840_560.jpeg",
            "publishedAt": "2024-03-04T08:57:13Z",
            "content": "Los rumores sobre el iPhone SE 4 empiezan a tener más peso que nunca. En las últimas horas se han filtrado los supuestos renders originales, dejándonos ver el diseño de este teléfono. Según las fuent… [+1965 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "heise online"
            },
            "author": "Ben Schwan",
            "title": "Neue iPads und Macs wohl in dieser Woche, aber ohne Apple-Event",
            "description": "Bis zur Vorstellung neuer Apple-Produkte dauert es nicht mehr lange, wie informierte Kreise schreiben. Die Präsentation ist wohl \"low key\" geplant.",
            "url": "https://www.heise.de/news/Neue-Apple-Hardware-Diese-Woche-aber-wie-9644800.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/1/0/3/7/Apples-keynote-event_Tim_Cook-03252019-824c351e050b8cfc.png",
            "publishedAt": "2024-03-04T08:59:00Z",
            "content": "Apple wird, so sind sich die Gerüchteköche weitgehend einig, in dieser Woche neue Produkte vorstellen. Ein Event soll es dazu aber nicht geben, stattdessen ist zeitnah wohl mit schlichten Pressemitte… [+2119 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "heise online"
            },
            "author": "Joachim Kläschen",
            "title": "heise+ | 27 Mac-Apps ohne Abo: Software-Perlen vorgestellt",
            "description": "Sie kaufen Anwendungen lieber, anstatt sie zu mieten? Wir haben Premium-Apps für viele Mac-Anwendungsfälle zusammengestellt.",
            "url": "https://www.heise.de/tests/27-Mac-Perlen-ohne-Abo-Es-muss-nicht-immer-mieten-sein-9637056.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/6/9/8/1/mi0124_mac_apps_ohne_abo_aufmacher_digital-56f070aaec440cf1.jpg",
            "publishedAt": "2024-03-04T06:30:00Z",
            "content": "Inhaltsverzeichnis\r\nApple und viele Mitspieler in der Softwareindustrie versuchen seit mehreren Jahren, Nutzer in Abomodelle zu drängen: Statt eine Anwendung vollständig zu kaufen, soll man für diese… [+2098 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Gizmodo.jp"
            },
            "author": "福田ミホ",
            "title": "iPhoneの純正ファインウーブンケース、返品が多い理由とは",
            "description": "Apple（アップル）純正iPhoneケースの「ファインウーブン」が、わりと不評のようです。不評すぎて、米Amazon上では「返品が多い商品です」のラベルまで付くようになってしまいました。",
            "url": "https://www.gizmodo.jp/2024/03/apple-finewoven-case-frequently-returned-warning-amazon.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/03/02/240301_finewoven.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2024-03-04T02:00:00Z",
            "content": "AppleiPhoneAmazon\r\nAmazon2023\r\nImage: Amazon\r\nAmazon3.24.6\r\nAmazon3.44.4Amazon3.64.6\r\nApple598,900Amazon355,300Amazon9,9807,000\r\nAmazon\r\nApple"
            },
            {
            "source": {
            "id": null,
            "name": "Gizmodo.jp"
            },
            "author": "はらいさん",
            "title": "新生活のお供に。Apple Watch春の新作バンドがまもなく登場？",
            "description": "Image:Apple写真は現行モデルのピンクNikeスポーツループ全体的に明るめの色？スマートウォッチの魅力といえば、気分や服装、季節に合わせて自分好みのバンドに簡単に付け替えられることですが、今年もいよいよ春が近づいてきたということで、まもなくApple（アップル）からAppleWatch向けの春の新作バンドが登場する予感です。Hermèsモデルも含めて全部で8つの新色が登場？ちょうど1年ほど",
            "url": "https://www.gizmodo.jp/2024/03/apple-watch-spring-2024-band-coming-soon.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/03/01/20240301_78623_01_16x9.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2024-03-04T01:00:00Z",
            "content": "AppleApple Watch\r\n1iPhone 14Apple WatchApple Store\r\nMacRumorsiOS 17.4Apple Watch2024HermèsBleu CélestJaune de Naples\r\nApple Watch\r\niPad ProMacBook Air3\r\nSource: MacRumors"
            },
            {
            "source": {
            "id": null,
            "name": "Yanko Design"
            },
            "author": "Srishti Mitra",
            "title": "Top 10 Pop Culture-Inspired LEGO Builds For You To Try At Home",
            "description": "Top 10 Pop Culture-Inspired LEGO Builds For You To Try At HomeIf you are a lover of pop culture, and your personal space is adorned with Pokémon, Star Wars, Marvel, or Mario-themed products and devices, then,...",
            "url": "https://www.yankodesign.com/2024/03/03/top-10-pop-culture-inspired-lego-builds-for-you-to-try-at-home/",
            "urlToImage": "https://www.yankodesign.com/images/design_news/2024/03/top-10-pop-culture-lego-builds/top_10_pop_culture_lego_builds_yanko_design_hero.jpeg",
            "publishedAt": "2024-03-04T00:30:39Z",
            "content": "If you are a lover of pop culture, and your personal space is adorned with Pokémon, Star Wars, Marvel, or Mario-themed products and devices, then, well youre at the right spot. Because we’re gonna ta… [+4746 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Journal du geek"
            },
            "author": "tristan carballeda",
            "title": "Apple pourrait lancer de nouveaux produits cette semaine",
            "description": "Apple pourrait profiter de cette semaine pour lancer de nouveaux produits, notamment des iPad Pro OLED, les premiers du nom.",
            "url": "https://www.journaldugeek.com/2024/03/04/apple-pourrait-lancer-de-nouveaux-produits-cette-semaine/",
            "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/02/ipad-pro-oled-.jpg",
            "publishedAt": "2024-03-04T08:36:21Z",
            "content": "Apple est l’une des entreprises les plus secrètes de la planète et elle cultive à merveille cette discrétion. Malgré tout de nombreux analystes réussissent à obtenir des informations avant les annonc… [+2375 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Applesfera.com"
            },
            "author": "Álvaro García M.",
            "title": "Nuevos iPad y MacBook a la vista: esto es lo que se espera que lance Apple esta misma semana",
            "description": "Tras ser el Vision Pro el primer producto de Apple en lanzarse en 2024, esta misma semana podríamos asistir al lanzamiento de unos cuantos más. Se tratan de nuevos iPad y Mac que, a diferencia del Vision Pro, estos sí se lanzarían en todos los territorios hab…",
            "url": "https://www.applesfera.com/rumores/nuevos-ipad-macbook-a-vista-esto-que-se-espera-que-lance-apple-esta-semana",
            "urlToImage": "https://i.blogs.es/472f32/ipad-pro/840_560.jpeg",
            "publishedAt": "2024-03-04T08:01:54Z",
            "content": "Tras ser el Vision Pro el primer producto de Apple en lanzarse en 2024, esta misma semana podríamos asistir al lanzamiento de unos cuantos más. Se tratan de nuevos iPad y Mac que, a diferencia del Vi… [+5108 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Applesfera.com"
            },
            "author": "Álvaro García M.",
            "title": "Ya sabemos cómo será el iPhone SE 4 y llega con una sorpresa inesperada",
            "description": "Hacía tiempo que un iPhone no generaba tanto misterio como el que está generando el iPhone SE 4. En sus anteriores generaciones teníamos claro cómo sería, pero en esta ocasión apunta a cambios importantes en el diseño y eso nos ha ido dejando muchas contradic…",
            "url": "https://www.applesfera.com/iphone/sabemos-como-sera-iphone-se-4-llega-sorpresa-inesperada",
            "urlToImage": "https://i.blogs.es/bb9d5f/iphone-se/840_560.jpeg",
            "publishedAt": "2024-03-04T09:31:54Z",
            "content": "Hacía tiempo que un iPhone no generaba tanto misterio como el que está generando el iPhone SE 4. En sus anteriores generaciones teníamos claro cómo sería, pero en esta ocasión apunta a cambios import… [+3721 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Android Authority"
            },
            "author": "Aamir Siddiqui",
            "title": "Buying a new iPad or MacBook this month? You should wait for these new launches",
            "description": "Apple could soon be launching a lot of new hardware, including revamped iPad Pros, new iPad Air, refreshed MacBook Air, and new accessories.",
            "url": "https://www.androidauthority.com/apple-ipad-pro-air-macbook-launch-m3-refresh-3422140/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2022/12/Apple-iPad-Pro-M2-2022-rear-3-scaled.jpeg",
            "publishedAt": "2024-03-04T07:38:06Z",
            "content": "<ul><li>Apple could be launching a lot of new hardware as soon as this week, but it could skip the launch event and do it through press releases.</li><li>New products expected include revamps to the … [+2141 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "NPR"
            },
            "author": "Berly McCoy",
            "title": "Cancer is no longer a death sentence, but treatments still have a long way to go",
            "description": "Recently, the US Food and Drug Administration approved a first-of-its-kind cancer therapy to treat aggresive forms of skin cancer. It has us thinking of the long history of cancer. One of the first recorded mentions of cancer appears in an ancient Egyptian te…",
            "url": "https://www.npr.org/2024/03/04/1198909458/cancer-causes-treatments-aging-mutations-surgery-radiation",
            "urlToImage": "https://media.npr.org/assets/img/2024/02/22/gettyimages-1316395_wide-a09142d36b260861bde669fe8b4095d7127fc8f5-s1400-c100.jpg",
            "publishedAt": "2024-03-04T08:00:59Z",
            "content": "One of the first recorded mentions of cancer appears in an ancient Egyptian text from around 3000 B.C. And although we now know much more about how cancer beginsas a series of mutations in someone's … [+5897 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Presse-citron"
            },
            "author": "Presse-citron",
            "title": "7 nouveautés majeures pressenties chez Apple cette semaine",
            "description": "Des rumeurs ont laissé penser que l'entreprise organisera très bientôt un keynote, comme à son habitude à cette période. Mais rien n'est moins sûr, finalement. Les annonces pourraient donc arriver sous une autre forme bien connue de la firme à la pomme.",
            "url": "https://www.presse-citron.net/7-nouveautes-majeures-pressenties-chez-apple-cette-semaine/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2024/03/macbook-apple.jpg",
            "publishedAt": "2024-03-04T06:31:26Z",
            "content": "Apple n’organisera pas de keynote entre mars et début mai, selon le journaliste de Bloomberg Mark Gurman, souvent très bien informé à ce sujet. À la place, notre source du jour suppose que les multip… [+6622 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Presse-citron"
            },
            "author": "Setra",
            "title": "Fin de la polémique : Apple annule une modification controversée sur iOS",
            "description": "Apple annule une décision très critiquée qu’il avait prise dans le cadre de sa conformité avec le DMA : l’iPhone continuera à prendre en charge les applications web sur l’écran d'accueil en Europe.",
            "url": "https://www.presse-citron.net/fin-de-la-polemique-apple-annule-une-modification-controversee-sur-ios/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2023/09/DSC06084_DxO_PC.jpg",
            "publishedAt": "2024-03-04T07:36:38Z",
            "content": "Comme vous le savez peut-être déjà, Apple est obligé de rendre iOS un peu plus ouvert dans lUnion européenne pour se conformer au Digital Markets Act. Le changement majeur, cest lautorisation dinstal… [+3139 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "/FILM"
            },
            "author": "staff@slashfilm.com (Rafael Motamayor)",
            "title": "The Correct Order To Watch The MonsterVerse Franchise",
            "description": "There are technically several ways to approach watching the MonsterVerse movies, but our recommended order is designed to maximize your enjoyment.",
            "url": "https://www.slashfilm.com/1527197/correct-order-to-watch-monsterverse-franchise/",
            "urlToImage": "https://www.slashfilm.com/img/gallery/the-correct-order-to-watch-the-monsterverse-franchise/l-intro-1709048348.jpg",
            "publishedAt": "2024-03-04T02:00:43Z",
            "content": "Unlike, say, the \"John Wick\" franchise, which has titles that make it very clear which order to watch things, the MonsterVerse movies don't exactly have the easiest titles to figure out. Still, the c… [+1672 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNET"
            },
            "author": "David Lumb （CNET News） 翻訳校正： 編集部",
            "title": "アップル、「iPhone」向けサードパーティーアプリストアに対するセキュリティ計画を公表",
            "description": "アップルは、EU域内におけるサードパーティーのアプリストアで提供されるアプリを審査する仕組みについて、ホワイトペーパーを公開した。",
            "url": "https://japan.cnet.com/article/35216003/",
            "urlToImage": "https://japan.cnet.com/storage/2024/03/04/72596d4faeaffdf4a42d043d5e5d301b/gettyimages-1246014851_1280x960.jpg",
            "publishedAt": "2024-03-04T03:39:00Z",
            "content": "AppleiOS 17.4iPhoneAppleApp Store\r\nNotarization for iOSApple\r\nAppleEUDMAiPhoneEUDMAITAppleEpic GamesApp StoreiOSEpic Games30AppleGoogle\r\nAppleApp StoreiPhoneiOSNotarization for iOS\r\nMacAppleNotarizat… [+194 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Xatakamovil.com"
            },
            "author": "Iván Ramírez",
            "title": "El iPhone SE 4 con bordes planos como el iPhone 14, pantalla de 6,1 pulgadas y USB-C se deja ver en nuevos renders",
            "description": "Que el iPhone SE 4 va a llegar se intuía desde que se lanzó la tercera generación, aunque los filtradores no se ponían de acuerdo. Aunque estaba más o menos confirmado que serían todo pantalla (sin Touch ID), hay quien opinaba que sería más como un iPhone XR,…",
            "url": "https://www.xatakamovil.com/apple/iphone-se-4-bordes-planos-como-iphone-14-pantalla-6-1-pulgadas-usb-c-se-deja-ver-nuevos-renders",
            "urlToImage": "https://i.blogs.es/93c03d/iphonese/840_560.jpeg",
            "publishedAt": "2024-03-04T07:01:55Z",
            "content": "Que el iPhone SE 4 va a llegar se intuía desde que se lanzó la tercera generación, aunque los filtradores no se ponían de acuerdo. Aunque estaba más o menos confirmado que serían todo pantalla (sin T… [+2330 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "tagesschau.de"
            },
            "author": "tagesschau.de",
            "title": "Marktbericht: Reißt jetzt die Rekordserie im DAX?",
            "description": "Nach der Rekordrally der Vorwoche scheint die Luft erst einmal raus. Die Serie immer neuer historischer Höchststände im DAX droht zu reißen. Bekommen die Anleger nun kurz vor der 18.000-Punkte-Marke kalte Füße?",
            "url": "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/marktbericht-dax-rekordserie-kurse-geldanlage-dow-gold-oel-vw-nvidia-apple-aktien-100.html",
            "urlToImage": "https://images.tagesschau.de/image/e0c4c220-15ba-4cd1-b2b0-6c28dc340aa9/AAABi8kLKZE/AAABjcWen7M/16x9-1280/boersenhaendler-102.jpg",
            "publishedAt": "2024-03-04T06:29:18Z",
            "content": "Stand: 04.03.2024 07:29 Uhr\r\nNach der Rekordrally der Vorwoche scheint die Luft erst einmal raus. Die Serie immer neuer historischer Höchststände im DAX droht zu reißen. Bekommen die Anleger nun kurz… [+4003 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Caschys Blog"
            },
            "author": "André Westphal",
            "title": "Smartphone-Markt im 4. Quartal 2023: Apple kann sich behaupten",
            "description": "Counterpoint hat bereits seine Auswertungen des Smartphone-Marktes im 4. Quartal 2023 veröffentlicht. Man stellt obendrein eine kleine Infografik mit übersichtlichen und prägnanten Zahlen zur Verfügung. Aus der könnt ihr unter anderem auch die Marktanteile de…",
            "url": "https://stadt-bremerhaven.de/smartphone-markt-im-4-quartal-2023-apple-kann-sich-behaupten/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/10/iPhone-15-Test-3.jpg",
            "publishedAt": "2024-03-04T09:30:44Z",
            "content": "Counterpoint hat bereits seine Auswertungen des Smartphone-Marktes im 4. Quartal 2023 veröffentlicht. Man stellt obendrein eine kleine Infografik mit übersichtlichen und prägnanten Zahlen zur Verfügu… [+1492 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Caschys Blog"
            },
            "author": "André Westphal",
            "title": "WhatsApp führt Passkey-Support in der Betaversion für iOS ein",
            "description": "WhatsApp hat Passkey-Unterstützung für Android bereits eingeführt. Nun geht es endlich auch unter Apple iOS voran. Wie WABetaInfo berichtet, testet man den Support inzwischen zumindest in der Betaversion 24.4.10.78 des Messengers. Im ersten Schritt bedient ma…",
            "url": "https://stadt-bremerhaven.de/whatsapp-fuehrt-passkey-support-in-der-betaversion-fuer-ios-ein/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2018/07/WhatsApp-logo.jpg",
            "publishedAt": "2024-03-04T07:37:30Z",
            "content": "WhatsApp hat Passkey-Unterstützung für Android bereits eingeführt. Nun geht es endlich auch unter Apple iOS voran. Wie WABetaInfo berichtet, testet man den Support inzwischen zumindest in der Betaver… [+1606 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Caschys Blog"
            },
            "author": "Mike Leitner",
            "title": "Yale Linus L2 Smart Lock vorgestellt",
            "description": "Yale, bekannt für seine Linus-Smartschlösser, hat das Nachfolgemodell des „Linus Smart Lock“ vorgestellt, das Linus L2. Das Design wurde von „Bould Design“ entwickelt. Wer die Firma nicht kennt: Sie ist verantwortlich für das Design der Nest-Thermostate, der …",
            "url": "https://stadt-bremerhaven.de/yale-linus-l2-smart-lock-vorgestellt/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2024/02/Yale-Linus-Indoor-Black.jpg",
            "publishedAt": "2024-03-04T08:00:23Z",
            "content": "Yale, bekannt für seine Linus-Smartschlösser, hat das Nachfolgemodell des „Linus Smart Lock“ vorgestellt, das Linus L2. Das Design wurde von Bould Design entwickelt. Wer die Firma nicht kennt: Sie is… [+2041 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Slickdeals.net"
            },
            "author": "phoinix",
            "title": "14-Oz Starburst Original Easter Jelly Beans Chewy Candy $1.90 w/ S&S",
            "description": "Amazon has *14-Oz Original Starburst Fruit Chews Candy* for for *$1.90* when you checkout via Subscribe & Save. *Shipping is free* w/ Prime or on $35+ orders. \n* Note: You may cancel Subscribe & Save...",
            "url": "https://slickdeals.net/f/17330793-14-oz-starburst-original-easter-jelly-beans-chewy-candy-1-90-w-s-s",
            "urlToImage": "https://static.slickdealscdn.com/attachment/1/1/7/1/5/2/7/15083334.attach",
            "publishedAt": "2024-03-04T02:28:58Z",
            "content": "Amazon[amazon.com] has STARBURST Original Easter Jelly Beans Chewy Candy, 14 oz Bag for $2 - 5% when you check out via Subscribe &amp; Save = $1.90.Shipping is free with Prime or on $35+ orders.Price… [+1135 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ifanr.com"
            },
            "author": "肖凡博",
            "title": "欧盟对苹果开出史上最高罚单，意味着什么？",
            "description": "苹果和 Spotify 的反垄断之战，可能还会持续更久。#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
            "url": "https://www.ifanr.com/1576706",
            "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2024/03/EU12.jpg",
            "publishedAt": "2024-03-04T01:53:33Z",
            "content": "5 38.8 \r\n App iPhone \r\n3 5 \r\nSpotify\r\n 10 \r\nApp Store App Store \r\nSpotify \r\n2013 1 Spotify App Store Spotify iOS App Store \r\n2019 3 Spotify iOS App Store \r\nSpotify 10 65 \r\nSpotify \r\n<ol><li> iOS </li… [+509 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ifanr.com"
            },
            "author": "张明悦",
            "title": "早报|苹果或于本周发布新产品/OpenAI 回应马斯克诉讼/农夫山泉董事长回应与娃哈哈传言",
            "description": "·深圳发布政策支持鸿蒙原生应用发展\n·苹果硬件工程灵魂人物即将退休\n·天涯社区拟 5 月 1 日前恢复访问#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
            "url": "https://www.ifanr.com/1576930",
            "urlToImage": "https://s3.ifanr.com/images/ep/cover-images/cheng_shi_man_pao_zhe_cover.jpg",
            "publishedAt": "2024-03-04T00:36:45Z",
            "content": "OpenAI \r\nAxios OpenAI \r\nOpenAI Jason Kwon \r\nKwon OpenAI AGI \r\nGPT-4 GPT-4 \r\nGPT-4 \r\nAPI \r\nOpenAI ChatGPT ChatGPT for Enterprise Copilot Microsoft 365 Copilot\r\n2 29 OpenAI \r\n3 2 2024 \r\n 2024 \r\n 2024 1… [+1191 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Nomadicmatt.com"
            },
            "author": "NomadicMatt",
            "title": "The Chase Sapphire Reserve Review",
            "description": "Posted: 3/4/24 | March 4th, 2024 Nomadic Matt has partnered with CardRatings for our coverage of credit card products. Nomadic Matt and CardRatings may receive a commission from card issuers. The upgraded version of the Chase Sapphire Preferred, the card_name…",
            "url": "https://www.nomadicmatt.com/travel-blogs/chase-sapphire-reserve-review/",
            "urlToImage": "https://www.nomadicmatt.com/wp-content/uploads/2024/03/csrreview.jpg",
            "publishedAt": "2024-03-04T07:47:50Z",
            "content": "Posted: 3/4/24 | March 4th, 2024\nNomadic Matt has partnered with CardRatings for our coverage of credit card products. Nomadic Matt and CardRatings may receive a commission from card issuers.\nThe upg… [+13992 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "GSMArena.com"
            },
            "author": "Yordan",
            "title": "Apple iPhone SE 4 renders reveal iPhone 14 frame and notched screen",
            "description": "Apple is working on its fourth iPhone SE, and we know the device will have an OLED panel, a first for the relatively cheap series.\n\nToday, alleged CAD renders of the new phone appeared, and the source revealed the phone will have the body of the iPhone 14 (wh…",
            "url": "https://www.gsmarena.com/apple_iphone_se_4_renders_reveal_iphone_14_frame_and_notched_screen-news-61845.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/03/apple-iphone-se-4-cad-renders/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2024-03-04T09:02:01Z",
            "content": "Apple is working on its fourth iPhone SE, and we know the device will have an OLED panel, a first for the relatively cheap series.\r\nToday, alleged CAD renders of the new phone appeared, and the sourc… [+828 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "01net.com"
            },
            "author": "Titouan Gourlin",
            "title": "L’iPhone SE 4 devrait ringardiser l’iPhone 14",
            "description": "L'iPhone SE 4 reprendrait le châssis de l'iPhone 14 en lui adjoignant un port USB-C. Il abandonnerait cependant le module photo secondaire.",
            "url": "https://www.01net.com/actualites/liphone-se-4-devrait-ringardiser-liphone-14.html",
            "urlToImage": "https://www.01net.com/app/uploads/2024/03/iPhone-SE-4-CAD-CAO-Une.jpg",
            "publishedAt": "2024-03-04T09:34:10Z",
            "content": "L’iPhone SE 4 reprendrait le châssis de l’iPhone 14 en lui adjoignant un port USB-C. Il abandonnerait cependant le module photo secondaire.La prochaine génération d’iPhone SE, l’iPhone abordable grâc… [+2327 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Smartworld.it"
            },
            "author": "Alessandro Nodari",
            "title": "Questa settimana potrebbe arrivare una cascata di nuovi dispositivi Apple: ecco quali",
            "description": "Stando a un'anticipazione apparsa in rete in queste ore, potete attendervi a giorni l'annuncio da parte di Apple di una...\r\nL'articolo Questa settimana potrebbe arrivare una cascata di nuovi dispositivi Apple: ecco quali sembra essere il primo su Smartworld.",
            "url": "https://www.smartworld.it/news/prodotti-apple-arrivo.html",
            "urlToImage": "https://www.smartworld.it/images/2023/05/10/apple-ipad-final-cut-pro-lifestyle-hover-big.jpg.medium-2x_1200x675.jpg",
            "publishedAt": "2024-03-04T07:18:00Z",
            "content": "Stando a un'anticipazione apparsa in rete in queste ore, potete attendervi a giorni l'annuncio da parte di Apple di una serie di nuovi prodotti, ma la casa della mela non si affiderà a un evento, qua… [+3138 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Digiday"
            },
            "author": "Antoinette Siu",
            "title": "Media Buying Briefing: Influencer marketing looks to grow with AI avatars and shoppable content",
            "description": "With the influencer marketing business getting more competitive, agencies are testing trends from AI avatars to social commerce in order to find new ways to grow.",
            "url": "http://digiday.com/media-buying/media-buying-briefing-influencer-marketing-looks-to-grow-with-ai-avatars-and-shoppable-content/",
            "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2024/02/confetti-money-digiday.png",
            "publishedAt": "2024-03-04T05:01:00Z",
            "content": "This article is part of Digidays coverage of its Digiday Media Buying Summit. More from the series →With the influencer marketing business getting more competitive, agencies that specialize in the fi… [+7699 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "La Vanguardia"
            },
            "author": "Fran Besora",
            "title": "No habrá evento en marzo: Apple lanzaría nuevos productos esta semana",
            "description": "Todo parecía indicar que Apple celebraría un evento en los próximos días, pero finalmente no será así. En su lugar, Apple lanzará los nuevos iPad Pro con pantallas OLED, iPad Air y MacBook Air con procesador M3 a través de notas de prensa, vídeos y material p…",
            "url": "https://www.lavanguardia.com/andro4all/apple/no-habra-evento-en-marzo-apple-lanzaria-nuevos-productos-esta-semana",
            "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/03/apple-evento-logo.jpeg?width=1200",
            "publishedAt": "2024-03-04T07:38:27Z",
            "content": "Apple no celebraría una keynote en marzo\r\nTodo parecía indicar que Apple celebraría un evento en los próximos días, pero finalmente no será así. En su lugar, Apple lanzará los nuevos iPad Pro con pan… [+2327 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "La Vanguardia"
            },
            "author": "Fran Besora",
            "title": "Apple lo hace oficial: no se eliminarán las aplicaciones web progresivas en iOS 17.4",
            "description": "Durante las primeras betas de iOS 17.4, las aplicaciones web progresivas de la pantalla de inicio de los iPhone comenzaron a fallar en la Unión Europea y no funcionaban. Son webs que se transforman en aplicaciones y de las cuales incluso se pueden recibir not…",
            "url": "https://www.lavanguardia.com/andro4all/apple/apple-lo-hace-oficial-no-se-eliminaran-las-aplicaciones-web-progresivas-en-ios-17-4",
            "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/03/apple-permitira-pwa-ios-17-4.jpg?width=1200",
            "publishedAt": "2024-03-04T08:23:31Z",
            "content": "Las aplicaciones web progresivas no se eliminarán en iOS 17.4 en la UE\r\nDurante las primeras betas de iOS 17.4, las aplicaciones web progresivas de la pantalla de inicio de los iPhone comenzaron a fa… [+2907 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Impress.co.jp"
            },
            "author": null,
            "title": "楽天モバイル「AirPods Pro（第2世代）」がスーパーセールで1900円割引",
            "description": "楽天モバイルは、楽天市場の「楽天モバイル公式 楽天市場店」で、アップル（Apple）のフルワイヤレスイヤホン「MagSafe充電ケース（USB-C）付きAirPods Pro（第2世代）」を1900円割引の3万7900円で提供する。期間は3月4日20時～11日1時59分まで。",
            "url": "https://k-tai.watch.impress.co.jp/docs/news/1573412.html",
            "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/1573/412/cont0.jpg",
            "publishedAt": "2024-03-04T03:10:19Z",
            "content": "AppleMagSafeUSB-CAirPods Pro2190037900342011159 \r\n MagSafeUSB-CAirPods Pro2USB-CUSB Type-CiPhone 1539800"
            },
            {
            "source": {
            "id": null,
            "name": "Clubic"
            },
            "author": "Mérouan Goumiri",
            "title": "iPad Pro, iPad Air, MacBook... Apple devrait dévoiler de nouveaux appareils cette semaine",
            "description": "Apple serait sur le point d'effectuer de nombreuses annonces hardware, bien qu'aucun événement ne devrait avoir lieu pour marquer le coup. La marque à la pomme aurait en effet de nouveaux Mac et iPad dans ses cartons, dont le très attendu iPad Pro M3.",
            "url": "https://www.clubic.com/actualite-520519-ipad-pro-ipad-air-macbook-apple-devrait-devoiler-de-nouveaux-appareils-cette-semaine.html",
            "urlToImage": "https://pic.clubic.com/v1/images/2126917/raw",
            "publishedAt": "2024-03-04T09:26:00Z",
            "content": "Afin de palier les faibles ventes de tablettes depuis déjà quelques années, la marque à la pomme croquée s'apprêterait à dévoiler deux nouveaux modèles d'iPad Pro équipés d'écrans OLED et propulsés p… [+587 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "New Macs, iPads, and accessories coming soon from Apple: No launch event expected",
            "description": "Apple is expected to unveil new M3-powered MacBook Airs, iPad Pros with a 12.9-inch OLED screen, and new accessories in the coming weeks, possibly without a launch event.",
            "url": "https://indianexpress.com/article/technology/tech-news-technology/macs-ipads-launch-soon-apple-without-launch-event-9194273/",
            "urlToImage": "https://images.indianexpress.com/2024/02/iPad-Pro-Apple.jpg",
            "publishedAt": "2024-03-04T03:52:39Z",
            "content": "Apple might announce new Macs, iPads, and accessories in the next few weeks. Unlike most Apple product launches, where the devices are unveiled during a launch event, these products could arrive with… [+1324 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Googlewatchblog.de"
            },
            "author": "Jens",
            "title": "Pixel Watch 3: Googles neue Smartwatch kommt auch in einer 45mm-Variante – endlich zwei Displaygrößen",
            "description": "Einer der größten Kritikpunkte an der Pixel Watch 1 und 2 ist die Displaygröße. Mit der Pixel Watch 3 wird Google endlich eine größere Variante auf den Markt bringen.Pixel Watch 3: Googles neue Smartwatch kommt auch in einer 45mm-Variante – endlich zwei Displ…",
            "url": "https://www.googlewatchblog.de/?p=221796",
            "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/pixel-watch-und-grosse-smartwatch.jpg",
            "publishedAt": "2024-03-04T07:30:41Z",
            "content": "Google wird in diesem Jahr bereits die dritte Generation der Pixel Watch auf den Markt bringen, die aller Voraussicht nach als Pixel Watch 3 an den Start geht und sich jetzt erneut in einem Leak zeig… [+2657 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Nextpit.de"
            },
            "author": "Jade Bryan",
            "title": "Kommen das iPad Pro mit OLED und das MacBook Air M3 schon diese Woche?",
            "description": "Apple könnte diese Woche das iPad Pro, das iPad Air und das MacBook Air 2024 vorstellen, alle mit M3-Chip an Bord. Hier erfahrt Ihr alles über den Launch.",
            "url": "https://www.nextpit.de/oled-ipad-pro-und-macbook-air-m3-schon-diese-woche",
            "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Apple_iPad_Pro_2022/NextPit_Apple_iPad_Pro_2022.jpg",
            "publishedAt": "2024-03-04T08:19:51Z",
            "content": "Neues iPad Pro 2024, iPad Air und MacBook Air M3 aber ohne Launch-Event\r\nDas berichtet zumindest MacRumors , ohne allerdings explizit zu erwähnen, um welche Produkte es sich handelt. Vermutet wird al… [+2295 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Inside.com.tw"
            },
            "author": "Sisley",
            "title": "蘋果第二次放棄春季活動！彭博：新品僅線上發表",
            "description": "這次新品超多，包括六年來首次重大更新的 iPad Pro、M3 MacBook Air、Apple Pencils 和 Magic Keyboards 等等，卻沒有實體春季活動，僅會線上發表，時間可能落在 3 至 4 月。",
            "url": "https://www.inside.com.tw/article/34361-two-years-in-a-row-that-apple-has-passed-on-a-spring-event",
            "urlToImage": "https://bucket-img.tnlmedia.com/cabinet/2024/03/f7efc90b-d7d8-464f-8ce6-ff8cbe7db0e7.jpg?w=1200&h=630&fit=crop&auto=compress",
            "publishedAt": "2024-03-04T02:53:00Z",
            "content": "Apple iPad Pro iPad Air M3 MacBook Air\r\nPower On Mark Gurman \r\nGurman iPad Pro 12.9  iPad Air 13 15 M3 MacBook Air iPad Apple Pencils Magic Keyboards\r\n Omdia iPad Pro OLED iPad Pro \r\n WWDC AI iOS \r\nJ… [+28 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Basicthinking.de"
            },
            "author": "Fabian Peters",
            "title": "Homescreen! Ein Blick auf das Smartphone von Sören Stamer",
            "description": "In der Serie „Homescreen!“ präsentieren wir die Homescreens von Menschen aus der Social Media-, Marketing-, Medien- und Tech-Branche – inklusive App-Empfehlungen und Tipps für alles von To-do-Listen bis zum kleinen Game für zwischendurch. Heute: Sören Stamer,…",
            "url": "https://www.basicthinking.de/blog/2024/03/04/homescreen-ein-blick-auf-das-smartphone-von-soeren-stamer/",
            "urlToImage": "https://www.basicthinking.de/blog/wp-content/uploads/2024/02/soeren-stamer-homescreen.jpg",
            "publishedAt": "2024-03-04T09:15:58Z",
            "content": "In der Serie Homescreen! präsentieren wir die Homescreens von Menschen aus der Social Media-, Marketing-, Medien- und Tech-Branche inklusive App-Empfehlungen und Tipps für alles von To-do-Listen bis … [+3286 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Businessinsider.de"
            },
            "author": "Don Dahlmann",
            "title": "Apple, Byton, Sono: Warum gerade fast alle Auto-Startups scheitern – und Tesla Erfolg hat",
            "description": "Byton, Lightyear, Sono Motors – die Liste der gescheiterten Auto-Startups ist lang. Doch warum hat Tesla so viel Erfolg und andere scheitern?",
            "url": "https://www.businessinsider.de/gruenderszene/automotive-mobility/warum-gerade-fast-alle-auto-startups-scheitern-und-tesla-erfolg-hat/",
            "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2020/11/sono-motors-founders-landscape.2200x0.jpg",
            "publishedAt": "2024-03-04T05:00:00Z",
            "content": "Byton, Lightyear, Sono Motors die Liste der gescheiterten Auto Startups ist lang. Doch warum hat Tesla so viel Erfolg, wo andere scheiterten?Vor knapp zehn Jahren beobachteten etliche Investoren eine… [+4967 chars]"
            },
            {
            "source": {
            "id": "il-sole-24-ore",
            "name": "Il Sole 24 Ore"
            },
            "author": "di Biagio Simonetta",
            "title": "Da Shein a Temu, il fast fashion cinese a basso costo sconvolge il cargo aereo",
            "description": "Trasporto. I colossi Shein e Temu si sfidano sui tempi di consegna con spedizioni quotidiane che ormai superano 9mila tonnellate Il fast fashion sottrae spazi crescenti in stiva in un periodo in cui la crisi nel Mar Rosso spinge molti settori a ripensare la l…",
            "url": "https://www.ilsole24ore.com/art/da-shein-temu-fast-fashion-cinese-basso-costo-sconvolge-cargo-aereo-AFWV1GuC",
            "urlToImage": "https://i2.res.24o.it/images2010/S24/Documenti/2024/03/03/Immagini/Ritagli/366958474-k52E--1440x752@IlSole24Ore-Web.jpg?r=1170x507",
            "publishedAt": "2024-03-04T06:55:20Z",
            "content": "Il boom è dovuto alla crescita senza intoppi di Shein e Temu, dunque.Crescita che sta sottraendo spazio ad altri settori nel trasporto cargo aereo, proprio mentre le aziende globali si stanno affrett… [+2778 chars]"
            },
            {
            "source": {
            "id": "il-sole-24-ore",
            "name": "Il Sole 24 Ore"
            },
            "author": null,
            "title": "Meta stacca il dividendo, ma la vera rivoluzione è l’intelligenza artificiale",
            "description": "L’ex Facebook. Per la prima volta verrà emessa la cedola. Il gruppo ha ridotto i costi, focalizzandosi sul business storico. Il rischio è sul fronte regolamentare",
            "url": "https://www.ilsole24ore.com/art/meta-stacca-dividendo-ma-vera-rivoluzione-e-l-intelligenza-artificiale-AFGZpatC",
            "urlToImage": "https://i2.res.24o.it/images2010/S24/Documenti/2024/03/03/Immagini/Ritagli/meta-kiCG--1440x752@IlSole24Ore-Web.jpg?r=1170x507",
            "publishedAt": "2024-03-04T07:01:43Z",
            "content": "Vero! Nellultimo trimestre del 2023 i ricavi di Reality Labs (area del Metaverso) hanno lanciato un segnale positivo, salendo per la prima volta - in un singolo quarter - sopra il miliardo. E, tuttav… [+4812 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Numerama"
            },
            "author": "Bob Jouy",
            "title": "La Connexion premium en Tesla vaut-elle le coup ?",
            "description": "Tesla propose un abonnement à 9,99 € par mois sans engagement, apportant une expérience plus intuitive et plus immersive dans ses voitures. Mais, que se cache-t-il réellement derrière cette promesse ? Est-ce indispensable, ou la connexion standard gratuite su…",
            "url": "https://www.numerama.com/vroom/1636258-faut-il-payer-pour-la-connectivite-premium-en-tesla.html",
            "urlToImage": "https://www.numerama.com/wp-content/uploads/2023/12/tesla-model3-2023-2.jpg",
            "publishedAt": "2024-03-04T06:25:00Z",
            "content": "Tesla propose un abonnement à 9,99 par mois sans engagement, apportant une expérience plus intuitive et plus immersive dans ses voitures. Mais, que se cache-t-il réellement derrière cette promesse ? … [+9539 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Forbes"
            },
            "author": "Zak Doffman, Contributor, \n Zak Doffman, Contributor\n https://www.forbes.com/sites/zakdoffman/",
            "title": "Google’s Surprise Update Just Made Android More Like iPhone",
            "description": "Why Android is changing forever…",
            "url": "https://www.forbes.com/sites/zakdoffman/2024/03/04/google-upgrade-samsung-s24-s23-pixel-towards-apple-iphone-15-pro-max/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65aeed369be3a016e61b4a9a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-03-04T08:15:47Z",
            "content": "If you buy a high-end Samsung or iPhone device, theres little to choose between them. Its the Android OS that has always been the catch. But now Google is slowly changing that as welland its causing … [+10246 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Forbes"
            },
            "author": "Dev Patnaik, Contributor, \n Dev Patnaik, Contributor\n https://www.forbes.com/sites/devpatnaik/",
            "title": "What Kind Of CEO Do You Have? And What Kind Do You Need?",
            "description": "From Steve Jobs to David Zaslav, there are 5 types of CEOs. Their unique mindsets—more so than their resumes—speak volumes about how they'll navigate growth challenges.",
            "url": "https://www.forbes.com/sites/devpatnaik/2024/03/03/what-kind-of-ceo-do-you-have-and-what-kind-do-you-need/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65e221dff357a5bec6050c6c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-03-04T00:00:00Z",
            "content": "A leaders past accomplishments matter, but by focusing too heavily on what a leader has done, we ... [+] risk missing why they did ittheir mindset through which they make meaning of the world. (Photo… [+8052 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Forbes"
            },
            "author": "Monica Mercuri, Contributor, \n Monica Mercuri, Contributor\n https://www.forbes.com/sites/monicamercuri/",
            "title": "When Is ‘Dune: Part Two’ Coming To Streaming On Max?",
            "description": "Denis Villeneuve’s blockbuster sci-fi film “Dune: Part Two” is currently in theaters. Find out when you can watch and stream “Dune: Part Two” from home.",
            "url": "https://www.forbes.com/sites/monicamercuri/2024/03/03/when-is-dune-part-two-coming-to-streaming-on-max/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65e5135977a37cc335931734/0x0.jpg?format=jpg&crop=750,499,x0,y5,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2024-03-04T00:26:34Z",
            "content": "'Dune: Part Two\" now in theaters.\r\nCourtesy of Warner Bros.\r\nAs one of the most anticipated sci-fi films of the year, Dune: Part Two is soaring at the box office. If you cant make it to the theaters … [+3494 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hdblog.it"
            },
            "author": "HDblog.it",
            "title": "Apple, il manager di Vision Pro Dan Riccio va in pensione. Riorganizzazione in corso",
            "description": "A lui si devono tanti progetti di Apple.",
            "url": "https://www.hdblog.it/indossabili/articoli/n579023/apple-dan-riccio-pensione-vision-pro-futuro/",
            "urlToImage": "https://hd2.tudocdn.net/1144514?w=1920",
            "publishedAt": "2024-03-04T08:25:00Z",
            "content": "In Apple c'è aria di cambiamenti: l'ex responsabile del team Hardware Engineering Dan Riccio, attualmente Vice President of Engineering, va in pensione. Si tratta di un manager dal peso specifico imp… [+2299 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hdblog.it"
            },
            "author": "HDblog.it",
            "title": "Apple, nuovi prodotti già questa settimana: nessun evento, solo comunicati stampa",
            "description": "Non sarebbe stato pianificato un vero e proprio evento di lancio",
            "url": "https://www.hdblog.it/tablet/articoli/n579017/apple-nuovi-ipad-mac-evento/",
            "urlToImage": "https://hd2.tudocdn.net/1144472?w=1920",
            "publishedAt": "2024-03-04T06:25:00Z",
            "content": "Come ipotizzato più volte in questi ultimi mesi, nel corso di marzo e di aprile dovrebbero essere annunciati da Apple una serie di nuovi prodotti. Secondo indiscrezioni, tuttavia, non ci sarebbero in… [+3305 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hdblog.it"
            },
            "author": "HDblog.it",
            "title": "iPhone SE 4, disegni CAD evidenziano l'estrema somiglianza con iPhone 14",
            "description": "Ci sarà anche il notch",
            "url": "https://www.hdblog.it/smartphone/articoli/n579024/iphone-se-4-render-cad/",
            "urlToImage": "https://hd2.tudocdn.net/1144492?w=1920",
            "publishedAt": "2024-03-04T08:05:00Z",
            "content": "Un iPhone 14, ma con una fotocamera in meno. Potrebbe essere semplificata in questo modo la descrizione del design della quarta generazione di iPhone SE che, secondo indiscrezioni, verrà lanciata da … [+2379 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hdblog.it"
            },
            "author": "HDblog.it",
            "title": "Yale presenta Smart Lock Linus L2: la nuova serratura smart",
            "description": "La versione di nuova generazione",
            "url": "https://www.hdblog.it/domotica/articoli/n579021/yale-smart-lock-linus-l2-nuova-serratura-smart/",
            "urlToImage": "https://hd2.tudocdn.net/1144490?w=1920",
            "publishedAt": "2024-03-04T08:10:00Z",
            "content": "Yale, la celebre azienda che negli ultimi anni ha dimostrato un grande valore nelle soluzioni per la sicurezza domestica intelligente, ha annunciato il lancio di Smart Lock Linus L2, la nuova generaz… [+3288 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "ComputerBase"
            },
            "author": "Dennis Krause",
            "title": "Apple-Gerüchte: Doch kein Apple Event für iPad Pro und MacBook Air im März",
            "description": "Trotz zahlreicher, mutmaßlich anstehender Produktvorstellungen wie iPad Pro mit OLED, iPad Air in 12,9\", Apple Pencil 3 oder Magic Keyboard 2 bis hin zum MacBook Air mit M3-Chip soll Apple kurzfristig doch kein eigenes Event planen. Stattdessen gehen mehrere …",
            "url": "https://www.computerbase.de/2024-03/apple-geruechte-doch-kein-apple-event-fuer-ipad-pro-und-macbook-air-im-maerz/",
            "urlToImage": "https://pics.computerbase.de/1/1/1/3/7/9-c6456dfff4f41db5/article-1280x720.82688b0e.jpg",
            "publishedAt": "2024-03-04T07:52:00Z",
            "content": "Trotz zahlreicher, mutmaßlich anstehender Produktvorstellungen wie iPad Pro mit OLED, iPad Air in 12,9\", Apple Pencil 3 oder Magic Keyboard 2 bis hin zum MacBook Air mit M3-Chip soll Apple kurzfristi… [+1830 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "ComputerBase"
            },
            "author": "Michael Günsch",
            "title": "AMD Sound Wave: Nach Strix, Sarlak und Kraken eine weitere AMD-APU",
            "description": "Ein neuer Codename für zukünftige AMD-Prozessoren macht die Runde. Auf dem LinkedIn-Profil eines AMD-Mitarbeiters ist von „Sound Wave“, eines mutmaßlichen APU-Projekts in 3 nm die Rede. Auch die schon zuvor aufgetauchten Codenamen Kraken, Sarlak und Strix ste…",
            "url": "https://www.computerbase.de/2024-03/amd-sound-wave-nach-strix-sarlak-und-kraken-eine-weitere-amd-apu/",
            "urlToImage": "https://pics.computerbase.de/1/1/1/3/8/0-fd545924caa70953/article-1280x720.ed2f1d17.jpg",
            "publishedAt": "2024-03-04T05:47:00Z",
            "content": "Ein neuer Codename für zukünftige AMD-Prozessoren macht die Runde. Auf dem LinkedIn-Profil eines AMD-Mitarbeiters ist von Sound Wave, eines mutmaßlichen APU-Projekts in 3 nm die Rede. Auch die schon … [+2681 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "ComputerBase"
            },
            "author": "Frank Hüber",
            "title": "Yale Linus Smart Lock L2: Kleines Metall-Smart-Lock integriert Wi-Fi, Thread und Matter",
            "description": "Yale legt das Linus Smart Lock (Test) neu auf und bringt das Yale Linus Smart Lock L2 in den Handel. Das Yale Linus Smart Lock L2 ist kleiner und verfügt nun auch über integriertes Wi-Fi, Thread und Matter, wie es beispielsweise auch das Nuki Smart Lock 4.0 P…",
            "url": "https://www.computerbase.de/2024-03/yale-linus-smart-lock-l2-kleines-metall-smart-lock-integriert-wi-fi-thread-und-matter/",
            "urlToImage": "https://pics.computerbase.de/1/1/1/3/5/6-11816a263ce609e1/article-1280x720.d09b3d88.jpg",
            "publishedAt": "2024-03-04T08:00:00Z",
            "content": "Yale legt das Linus Smart Lock (Test) neu auf und bringt das Yale Linus Smart Lock L2 in den Handel. Das Yale Linus Smart Lock L2 ist kleiner und verfügt nun auch über integriertes Wi-Fi, Thread und … [+3360 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Antyweb.pl"
            },
            "author": "Kamil Świtalski",
            "title": "To będą najlepsze tablety na rynku. Zaprezentują je w tym tygodniu",
            "description": "Już za kilka dni Apple zaprezentować ma nowe tablety oraz odświeżone komputery MacBook Air. Co o nich wiadomo?\n \n The post To będą najlepsze tablety na rynku. Zaprezentują je w tym tygodniu appeared first on AntyWeb.",
            "url": "https://antyweb.pl/ipad-pro-macbook-air-ipad-air-wiosna-2024",
            "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2021/07/11110109/ipad_pro_m1_2021_2.jpg",
            "publishedAt": "2024-03-04T07:00:28Z",
            "content": "Wyczekiwanie na nowe tablety Apple trwa od wielu miesicy. I cho z jednej strony wielu uytkowników jest ju nieco znuona t sam form, to w tym roku firma ma przygotowa rewolucyjn zmian na któr wielu cze… [+2849 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Esuteru.com"
            },
            "author": "htmk722",
            "title": "Apple、ゲーム事業から撤退か？関係者「Apple Arcadeの先行きに不透明感が増しており、『死の匂い』が立ち込めている」",
            "description": "Apple、ゲーム事業から撤退か？関係者「Apple Arcadeの先行きに不透明感が増しており、『死の匂い』が立ち込めている」の記事ページ",
            "url": "http://blog.esuteru.com/archives/10179244.html",
            "urlToImage": "https://livedoor.blogimg.jp/hatima/imgs/e/b/eb1644b6-s.png",
            "publishedAt": "2024-03-04T01:30:23Z",
            "content": "Inside Apple Arcade: axed games, declining payouts, disillusioned studios and an uncertain future\r\nApple Arcade2021Apple\r\nIPIAPApp Store Greats12\r\nArcade\r\nArcade\r\nAppleArcade\r\nArcade\r\nAI\r\napple oneyo… [+44 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "fool.com",
            "title": "3 Top Dividend Stocks That Could Deliver Record Payouts In 2024",
            "description": "Often, investors focus too much on a stock's yield instead of the reasons behind the yield. In the case of Apple (AAPL -0.60%), its yield is low because its stock price has outpaced its dividend raises. Air Products and Chemicals (APD 0.84%) and MSC Industria…",
            "url": "https://biztoc.com/x/8673802e62f93fb5",
            "urlToImage": "https://c.biztoc.com/p/8673802e62f93fb5/og.webp",
            "publishedAt": "2024-03-04T08:28:08Z",
            "content": "Often, investors focus too much on a stock's yield instead of the reasons behind the yield. In the case of Apple (AAPL -0.60%), its yield is low because its stock price has outpaced its dividend rais… [+291 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ilfattoquotidiano.it"
            },
            "author": "Monica Secondino",
            "title": "Volvo EX-30, la prova de Il Fatto.it – Elettroni e piccola taglia, ma alla svedese – FOTO",
            "description": "“Fai attenzione alle piccole cose, perchè un giorno ti volterai e capirai che erano grandi”. Questa frase attribuita a Jim Morrison sembra perfetta per la Volvo EX30, un vero e proprio pilastro nel percorso verso l’elettrificazione della casa svedese, che pun…",
            "url": "https://www.ilfattoquotidiano.it/2024/03/04/volvo-ex-30-prezzo-la-prova-de-il-fatto-it-elettroni-e-piccola-taglia-ma-alla-svedese-foto/7467155/",
            "urlToImage": "https://st.ilfattoquotidiano.it/wp-content/uploads/2024/03/03/324672_Volvo_EX30_-_Test_Drive_Stampa_Italiana_26.jpg",
            "publishedAt": "2024-03-04T07:15:42Z",
            "content": "Fai attenzione alle piccole cose, perchè un giorno ti volterai e capirai che erano grandi. Questa frase attribuita a Jim Morrison sembra perfetta per la Volvo EX30, un vero e proprio pilastro nel per… [+7067 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Geekpark.net"
            },
            "author": null,
            "title": "苹果或将线上渠道发布新款 iPad 和 Mac；小鹏汽车降价最高 5 万元；中国新能源乘用车占比世界 66% | 极客早知道",
            "description": "古尔曼：苹果计划通过线上渠道发布 2024 款 iPad 和 Mac\n3 月 3 日，据彭博社记者马克・古尔曼称，苹果公司不会举办传统发布会来推出新款 iPad 和 Mac 电脑，而是计划通过其官方网站发布一系列线上视频和营销活动来发布这些产品。\n如果该消息属实，那么预计苹果将通过新闻稿的形式在其官网发布新品。古尔曼预计苹果将发布以下产品：\n<ul>\n<li>\n两款配备 M3 芯片和 OLED 显示屏的全新 iPad Pro 机型\r\n\n</li>\n<li>\n一款适用于 iPad Pro 的全新妙控键盘\r\n\n</l…",
            "url": "https://www.geekpark.net/news/331902",
            "urlToImage": "https://imgslim.geekpark.net/uploads/image/file/28/5c/285cc823df3ad18fba09fd31246f6b9f.png",
            "publishedAt": "2024-03-04T00:25:42Z",
            "content": "2024 iPad Mac\r\n3 3 iPad Mac \r\n<ul><li> M3 OLED  iPad Pro \r\n</li><li> iPad Pro \r\n</li><li> iPad Air  12.9 \r\n</li><li> Apple Pencil\r\n</li><li> M3 13 15 MacBook Air \r\n</li></ul>\r\n 3 iOS 17.4 3 4 IT\r\n202… [+963 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Geekpark.net"
            },
            "author": null,
            "title": "苹果或将线上渠道发布新款 iPad 和 Mac；小鹏汽车降价最高 5 万元；中国新能源乘用车占比世界 66% | 极客早知道",
            "description": "古尔曼：苹果计划通过线上渠道发布 2024 款 iPad 和 Mac\n3 月 3 日，据彭博社记者马克・古尔曼称，苹果公司不会举办传统发布会来推出新款 iPad 和 Mac 电脑，而是计划通过其官方网站发布一系列线上视频和营销活动来发布这些产品。\n如果该消息属实，那么预计苹果将通过新闻稿的形式在其官网发布新品。古尔曼预计苹果将发布以下产品：\n<ul>\n<li>\n两款配备 M3 芯片和 OLED 显示屏的全新 iPad Pro 机型\r\n\n</li>\n<li>\n一款适用于 iPad Pro 的全新妙控键盘\r\n\n</l…",
            "url": "https://www.geekpark.net/news/331899",
            "urlToImage": "https://imgslim.geekpark.net/uploads/image/file/28/5c/285cc823df3ad18fba09fd31246f6b9f.png",
            "publishedAt": "2024-03-04T00:25:42Z",
            "content": "2024 iPad Mac\r\n3 3 iPad Mac \r\n<ul><li> M3 OLED  iPad Pro \r\n</li><li> iPad Pro \r\n</li><li> iPad Air  12.9 \r\n</li><li> Apple Pencil\r\n</li><li> M3 13 15 MacBook Air \r\n</li></ul>\r\n 3 iOS 17.4 3 4 IT\r\n202… [+963 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (P.W), P.W",
            "title": "Dự án xe điện Project Titan thất bại, có lẽ một phần vì Apple bơ vơ một mình tự xoay sở",
            "description": "Nếu như những định hướng trái ngược nhau của những giám đốc dự án đã khiến Project Titan, nỗ lực phát triển xe điện hoặc giải pháp phần mềm xe tự hành của Apple thất bại sau 10 năm và 10 tỷ USD đốt cho dự án…",
            "url": "https://tinhte.vn/thread/du-an-xe-dien-project-titan-that-bai-co-le-mot-phan-vi-apple-bo-vo-mot-minh-tu-xoay-so.3767433/",
            "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/03/8277047_cover-apple.webp",
            "publishedAt": "2024-03-04T03:30:43Z",
            "content": "Thit k và sn xut mt chic ô tô là vic rt phc tp. làm c iu này, các hãng xe thng phi gi quan h làm n vi hàng nghìn nhà cung cp ph tùng n t khp ni trên th gii, nh h làm ra tng chi tit riêng l, t phn cng… [+2108 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "3dnews.ru"
            },
            "author": null,
            "title": "Слухи: Apple представит на этой неделе ряд новинок, но презентацию проводить не будет",
            "description": "В рамках своего регулярного дайджеста Марк Гурман (Mark Gurman) рассуждал о причинах неудачи проекта Apple по разработке электромобиля, а заодно напомнил, что в марте и апреле компания собирается представить ряд более традиционных для себя продуктов. Представ…",
            "url": "https://3dnews.ru/1101167/apple-zaplanirovala-na-etu-nedelyu-anons-novinok",
            "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/03/04/1101167/apple_01.jpg",
            "publishedAt": "2024-03-04T07:30:00Z",
            "content": "(Mark Gurman) Apple , , . MacRumors , , Apple - , .\r\n: Apple\r\n, , «» Bloomberg :\r\n<ul><li> iPad Pro M3, OLED, - , . , MagSafe .</li><li> iPad Air M2, 12,9 .</li><li> Magic Keyboard iPad Pro .</li><li… [+177 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Sspai.com"
            },
            "author": "少数派编辑部",
            "title": "派早报：马斯克起诉 OpenAI",
            "description": "你可能错过的新鲜事马斯克起诉OpenAI2月29日，马斯克在旧金山提起诉讼，指控OpenAI及其联合创始人SamAltman、GregBrockman将利润置于人类利益之上，违反了OpenAI成立之初 ...查看全文",
            "url": "https://sspai.com/post/86873",
            "urlToImage": "https://cdn.sspai.com/3/4/2024/article/73d98945-bf24-22a8-6317-f4c14003d6e1.png",
            "publishedAt": "2024-03-04T00:56:33Z",
            "content": "OpenAI\r\n2 29 OpenAI Sam AltmanGreg Brockman OpenAI \r\n OpenAI Altman Brockman OpenAI Altman 2015 AI OpenAI \r\nOpenAI OpenAI fiduciary dutyOpenAI OpenAI Altman GPT-4 AGI\r\n OpenAI 2018 Altman 2016 2020 O… [+819 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (thanhtung6868), thanhtung6868",
            "title": "Cận cảnh Mercedes-Benz E-Class 2024 hoàn toàn mới, sắp có tại Việt Nam",
            "description": "Mercedes-Benz E-Class 2024 (W214) là mẫu xe hoàn toàn mới được ra mắt vào tháng 3/2023 trên thị trường quốc tế. E-Class W214 được trang bị tối đa đến 5 màn hình và 5 camera bao gồm camera selfie, nền tảng giải trí MBUX còn cho phép trực tiếp sử…",
            "url": "https://tinhte.vn/thread/can-canh-mercedes-benz-e-class-2024-hoan-toan-moi-sap-co-tai-viet-nam.3767181/",
            "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/03/8276954_mercedes-benz-e-class-w214-2024-tinhte.jpg",
            "publishedAt": "2024-03-04T02:39:03Z",
            "content": "Mercedes-Benz e-Class W214 cng ã trang b tính nng Digital Key ging nh mt s thng hiu khác, khách hàng s dng Apple Watch hay iPhone ã có th m khoá và s dng xe mà không cn n chìa khoá cng theo xe, tt nh… [+2023 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (P.W), P.W",
            "title": "Google có đang dần biến thành IBM thứ hai, vừa lỗi thời vừa nhàm chán?",
            "description": "Chỉ hai tháng sau khi Google ra mắt mô hình AI mới toanh của họ, Gemini, tập đoàn này đã công bố luôn phiên bản Gemini 1.5. Theo Google, phiên bản 1.5 quy mô lớn hơn, vận hành nhanh hơn và khả năng tạo nội dung tốt hơn bản trước.",
            "url": "https://tinhte.vn/thread/google-co-dang-dan-bien-thanh-ibm-thu-hai-vua-loi-thoi-vua-nham-chan.3767409/",
            "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/03/8277036_Google-scaled.webp",
            "publishedAt": "2024-03-04T04:04:40Z",
            "content": "Nm 2012, Business Insider a Google vào danh sách 10 công ty v i nht th gii.Tp oàn càng ln dn, thì nhng v lãnh o càng lúc càng s nguy c b máy công ty tr nên quan liêu. Vic nm 2015, tp oàn i tên thành … [+8516 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Who What Wear"
            },
            "author": "Kaitlyn McLintock",
            "title": "This Unexpected Item Hydrated My Skin Overnight (It's Not a Skincare Product)",
            "description": "A beauty editor dishes on the unexpected item that took her skin from dry and parched to plump and hydrated overnight.",
            "url": "https://www.whowhatwear.com/beauty/canopy-humidifier-review",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/y9LNPBQYQidSpy2TdtabJA-1200-80.jpg",
            "publishedAt": "2024-03-04T08:00:00Z",
            "content": "I spent the last six years living in Los Angeles and Austin, Texas. So, when I recently moved back home to the Midwest, I expected some growing pains as I re-adjusted to the cycle of the four seasons… [+6961 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Elespanol.com"
            },
            "author": "César Rebolledo",
            "title": "FREE FIRE MAX | Códigos de hoy lunes 4 de marzo de 2024 - Recompensas gratis",
            "description": "<!--cache-->Estos son todos los códigos gratis de Garena Free Fire MAX que podrás canjear hoy, lunes 4 de marzo de 2024. Consigue recompensas como skins, diamantes y mucho más.<!--aa--->El éxito para móviles Android e iOS, Garena Free Fire MAX, ha recibido nu…",
            "url": "https://vandal.elespanol.com/noticia/1350769597/free-fire-max-codigos-de-hoy-lunes-4-de-marzo-de-2024-recompensas-gratis/",
            "urlToImage": "https://media.vandal.net/ivandal/12/63/1200x630/3/3-2024/4/2024348415967_1.jpg",
            "publishedAt": "2024-03-04T07:42:00Z",
            "content": "El éxito para móviles Android e iOS, Garena Free Fire MAX, ha recibido nuevos códigos diarios para hoy lunes 4 de marzo de 2024. Los jugadores pueden canjear estos códigos para recibir recompensas va… [+3536 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Anaitgames.com"
            },
            "author": "Pep Sànchez",
            "title": "Podcast Reload: S15E24 – Más despidos, Balatro, Expeditions, La cara del orden, Minami Lane",
            "description": "Podcast Reload: S15E24 – Más despidos, Balatro, Expeditions, La cara del orden, Minami Lane ️\nNo queda otra que volver a hablar de despidos, porque los más recientes en SIE y EA apuntan de nuevo a grandes cambios en la industria. Además, tenemos Balatro, Ex…",
            "url": "https://www.anaitgames.com/podcast/podcast-reload-s15e24-mas-despidos-balatro-expeditions-la-cara-del-orden-minami-lane/",
            "urlToImage": "https://www.anaitgames.com/wp-content/uploads/2024/03/reload-s15e24-img.jpg",
            "publishedAt": "2024-03-04T09:00:00Z",
            "content": "/p&gt;\r\nNo queda otra que volver a hablar de despidos. Porque tanto Sony Interactive Entertainment como Electronic Arts han anunciado estos días que reducirán su plantilla de forma considerable, pero… [+1201 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Zive.cz"
            },
            "author": "Karel Kilián",
            "title": "Ztraceno v překladu. Starší lidé mají problémy porozumět smajlíkům a ženy je chápou lépe než muži",
            "description": "Podle nejnovějšího výzkumu se interpretace emotikonů výrazně liší v závislosti na pohlaví, věku a kulturním prostředí. Spolupráce britských a čínských vědců odhaluje, jak různé demografické skupiny vnímají emoji po celém světě. Studie odhalila, že zásadní rol…",
            "url": "https://www.zive.cz/clanky/ztraceno-v-prekladu-starsi-lide-maji-problemy-porozumet-smajlikum-a-zeny-je-chapou-lepe-nez-muzi/sc-3-a-226648/default.aspx",
            "urlToImage": "https://www.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=461366600",
            "publishedAt": "2024-03-04T07:45:00Z",
            "content": "Podle nejnovjího výzkumu se interpretace emotikon výrazn lií v závislosti na pohlaví, vku a kulturním prostedí. Spolupráce britských a ínských vdc odhaluje, jak rzné demografické skupiny vnímají emoj… [+2980 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Taisy0.com"
            },
            "author": "taisy0",
            "title": "｢Apple PayのICOCA｣利用開始で1,000ポイント貰えるキャンペーン",
            "description": "本日、西日本旅客鉄道株式会社（JR西日本）と株式会社ギックスが、JR 西日本が提供する移動生活ナビアプリ「WESTER」およびギックスが提供する商業施設・観光事業向けキャンペーンツール「マイグル」を活用した「Apple PayのICOCAな",
            "url": "https://taisy0.com/2024/03/04/195767.html",
            "urlToImage": "https://taisy0.com/wp-content/uploads/2024/03/icocacam202403.jpg",
            "publishedAt": "2024-03-04T08:06:28Z",
            "content": "JRJR WESTERApple PayICOCA1,000\r\niPhoneApple WatchApple PayICOCAWESTER GO!1,000 WESTER \r\n 7 \r\niPhone Apple Watch 2024 ICOCA Apple Pay ICOCA ICOCAWESTER ID WESTER J-WEST 12 WESTER ID\r\nApple Pay ICOCA I… [+49 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Taisy0.com"
            },
            "author": "taisy0",
            "title": "新型登場が近い証拠か?! ｰ Appleの直営店で｢MacBook Air｣や｢iPad Pro｣の在庫が減少",
            "description": "Appleはまもなく「iPad Pro」や「iPad Air」「MacBook Air」の新モデルを発表するとみられており、早ければ今週にも何らかの発表が行われると噂されていますが、Bloombergの著名記者であるMark Gurman氏",
            "url": "https://taisy0.com/2024/03/04/195762.html",
            "urlToImage": "https://taisy0.com/wp-content/uploads/2023/06/macbookair15.jpg",
            "publishedAt": "2024-03-04T03:54:03Z",
            "content": "A few additional points: retail stores are low on MacBook Airs and iPad Pros; Stores are planning a minor refresh for this week (I think it's a new accessory rather than a new product); Stores are pl… [+142 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Macitynet.it"
            },
            "author": "Mauro Notarianni",
            "title": "Probabili nuovi prodotti Apple in arrivo in settimana",
            "description": "Apple annuncerà in settimana nuovi prodotti senza eventi dedicati ma direttamente sul sito. Ecco quali sono i probabili prodotti in arrivo.\n- su macitynet.it Probabili nuovi prodotti Apple in arrivo in settimana",
            "url": "https://www.macitynet.it/?p=1285451",
            "urlToImage": "https://www.macitynet.it/wp-content/uploads/2023/05/Final-Cut-Pro-ipad-apple-ufficiale-5.jpg",
            "publishedAt": "2024-03-04T06:29:11Z",
            "content": "Apple annuncerà in settimana nuovi prodotti senza eventi dedicati ma direttamente sul sito e con dei semplici comunicati stampa.\r\nLo riferisce il sito Macrumors citando una sua non meglio precisata f… [+1863 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Macitynet.it"
            },
            "author": "Mauro Notarianni",
            "title": "Nuovi rendering CAD mostrano design iPhone SE 4",
            "description": "Da tempo si vocifera che Apple lavora sulla quarta generazione di iPhone SE, dispositivo che dovrebbe, tra le altre cose, vantare un nuovo design. Ecco come dovrebbe essere.\n- su macitynet.it Nuovi rendering CAD mostrano design iPhone SE 4",
            "url": "https://www.macitynet.it/nuovi-rendering-cad-mostrano-design-iphone-se-4/",
            "urlToImage": "https://www.macitynet.it/wp-content/uploads/2024/03/designiphonese4.jpg",
            "publishedAt": "2024-03-04T06:59:49Z",
            "content": "Da tempo si vocifera che Apple lavora sulla quarta generazione di iPhone SE, dispositivo che dovrebbe, tra le altre cose, vantare un nuovo design.\r\nNuovi rendering ottenuti dal sito 91mobiles mostran… [+1762 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Macitynet.it"
            },
            "author": "Daniele Piccinelli",
            "title": "Yale Linus L2 Smart Lock rende smart serratura e porta di casa",
            "description": "Smartphone come chiave, permessi al volo e controllo apertura e chiusura da remoto: Yale Linus L2 Smart Lock migliora tutto del primo modello \n- su macitynet.it Yale Linus L2 Smart Lock rende smart serratura e porta di casa",
            "url": "https://www.macitynet.it/yale-linus-l2-smart-lock-rende-smart-serratura-e-porta-di-casa/",
            "urlToImage": "https://www.macitynet.it/wp-content/uploads/2024/03/Yale-Linus-L2-1-ico.jpg",
            "publishedAt": "2024-03-04T09:21:51Z",
            "content": "La serratura smart di ultima generazione Yale Smart Lock Linus L2 (qui la recensione del primo modello) è stata progettata per offrire ancora più comodità e praticità d’uso nella vita di tutti i gior… [+4175 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hwupgrade.it"
            },
            "author": null,
            "title": "Apple pronta a presentare iPad Pro M3, iPad Air M2, MacBook Air M3 già da questa settimana",
            "description": "Sarà un mese decisamente caldo per Apple che, secondo le ultimissime indiscrezioni del solito Gurman, sembra pronta a presentare nelle prossime settimana una serie di nuovi pronti dagli iPad Pro con M3 passando per gli iPad Air con M2 e tutti i loro accessori…",
            "url": "https://www.hwupgrade.it/news/apple/apple-pronta-a-presentare-ipad-pro-m3-ipad-air-m2-macbook-air-m3-gia-da-questa-settimana_124891.html",
            "urlToImage": "https://www.hwupgrade.it/i/n/ApplEventMarch2024_720.jpg",
            "publishedAt": "2024-03-04T07:23:15Z",
            "content": "Saranno giorni di fuoco quelli in arrivo questo mese per Apple. L'azienda di Cupertino infatti si appresta a solcare il palcoscenico delle novità con una serie di annunci che promettono di scuotere i… [+4711 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Cineblog.it"
            },
            "author": "Pietro Ferraro",
            "title": "Crocodile Swarm: trailer del survival-horror di Tyler-James con un’orda di letali coccodrilli",
            "description": "Dai produttori di \"Winnie-the-Pooh - Sangue e miele\" arriva \"Crocodile Swarm\", un survival-horror con un'orda di letali coccodrilli.",
            "url": "https://www.cineblog.it/post/crocodile-swarm-trailer-film-horror",
            "urlToImage": "https://www.blogo.it/app/uploads/sites/3/2024/03/crocodile-swarm-trailer-del-survival-horror-di-tyler-james-con-unorda-di-letali-coccodrilli-1.png",
            "publishedAt": "2024-03-04T09:23:37Z",
            "content": "Ha debuttato negli Stati Uniti con Jagged Edge Productions e ITN Distribution, le case di produzione e distribuzione di Winnie-the-Pooh Sangue e miele, il suvival-horror low-buget Crocodile Swarm.\r\nC… [+2541 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Famitsu.com"
            },
            "author": "ファミ通.com",
            "title": "【Amazon新生活セール】Apple Watch、ルンバ i2、電気ケトルなど20％以上割引されている商品を紹介",
            "description": "Amazon.co.jp（アマゾン）で、新生活セールが2024年3月5日23時59分まで開催中。セールで20％以上割引になっている商品からおすすめをピックアップして紹介。",
            "url": "https://www.famitsu.com/news/202403/04336578.html",
            "urlToImage": "https://www.famitsu.com/images/000/336/578/z_65e5755d4b260.jpg",
            "publishedAt": "2024-03-04T08:00:00Z",
            "content": "Amazon3/1Fire TV Stick 4K MaxApple WatchMacBook Pro\r\nAmazon.co.jp2024352359Apple WatchMacBook Pro"
            },
            {
            "source": {
            "id": null,
            "name": "Shutterbean.com"
            },
            "author": null,
            "title": "Intentions for the Week",
            "description": "Intentions for the Week- Week 10 in 2024\nHappy Monday, friends!\nBusy weekend here. We celebrated our friend’s 50th birthday. It was a costume party and it was SO MUCH FUN.\n\nI also hosted Sunday Self-Check-In where we went over our calendars are worked on our …",
            "url": "https://www.shutterbean.com/2024/intentions-for-the-week-348/",
            "urlToImage": "https://www.shutterbean.com/wp-content/uploads/2021/11/intentionsfortheweekworkbook-10.jpg",
            "publishedAt": "2024-03-04T09:22:15Z",
            "content": "Intentions for the Week- Week 10 in 2024\r\nHappy Monday, friends!\r\nBusy weekend here. We celebrated our friend’s 50th birthday. It was a costume party and it was SO MUCH FUN.\r\nI also hosted Sunday Sel… [+3410 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Sapo.pt"
            },
            "author": "Pedro Simões",
            "title": "Apple pode saltar evento da primavera e anunciar novos iPads, M3 MacBook Airs online",
            "description": "A Apple já nos habituou aos seus eventos, onde apresenta os seus novos produtos todos os anos. Estes são momentos sempre esperados e que acontecem em alturas muito específicas do ano. A empresa tem...",
            "url": "https://pplware.sapo.pt/apple/apple-pode-saltar-evento-da-primavera-e-anunciar-novos-ipads-m3-macbook-airs-online/",
            "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2024/03/evento_primavera_apple_1.jpg",
            "publishedAt": "2024-03-04T08:00:24Z",
            "content": "A Apple já nos habituou aos seus eventos, onde apresenta os seus novos produtos todos os anos. Estes são momentos sempre esperados e que acontecem em alturas muito específicas do ano. A empresa tem e… [+1889 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Macsparky.com"
            },
            "author": "David Sparks",
            "title": "The End of Project Titan",
            "description": "This week, we got the news that Apple canceled its Apple Car program (Project Titan). Apple spent the last ten years poking around the edges of making cars and, according to Bloomberg, got to a critical decision point recently and decided to pass. I’m relieve…",
            "url": "https://www.macsparky.com/blog/2024/03/the-end-of-project-titan/",
            "urlToImage": null,
            "publishedAt": "2024-03-04T09:00:25Z",
            "content": "This week, we got the news that Apple canceled its Apple Car program (Project Titan). Apple spent the last ten years poking around the edges of making cars and, according to Bloomberg, got to a criti… [+906 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Macotakara.jp"
            },
            "author": "danbo",
            "title": "西日本旅客鉄道とギックス「Apple PayのICOCAなら1,000ポイントもらえるキャンペーン」を実施（5/12まで）",
            "description": "Apple PayのICOCAで1,000ポイントがもらえる！キャンペーン\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\n西日本旅客鉄道とギックスは、JR西日本が提供する移動生活ナビアプリ「WESTER」およびギックスが提供する商業施設・観光事業向けキャンペーンツール「マイグル」を活用した「Apple PayのICOCAで1,000ポイントがもらえる！キャンペーン」を開催すると発表しています。\n\nSTEP1：キャンペーン期間中に、…",
            "url": "https://www.macotakara.jp/news/entry-46274.html",
            "urlToImage": "https://www.macotakara.jp/archives/001/202403/c88d1232f5501774.jpg",
            "publishedAt": "2024-03-04T08:09:49Z",
            "content": "JRWESTERApple PayICOCA1,000\r\nSTEP1iPhoneApple WatchApple Pay ICOCASTEP2WESTERGOSTEP3  \r\n2024342024512 10"
            },
            {
            "source": {
            "id": null,
            "name": "Macotakara.jp"
            },
            "author": "danbo",
            "title": "Macの整備済商品 商品追加（2024/3/04）",
            "description": "<!-- テキスト -->\n\nApple.com/jpが、Apple認定の整備済製品で、Mac整備済み製品として、商品の追加を行っています。\n\n30,000円以上購入でオリコApple ショッピングローンが24回払いまで金利０%で利用出来ます。\n\nペイディあと払いプランApple専用は利用できません。\n\n整備品情報はメールマガジンでもお知らせしています。\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\n<ul>\n<li>Mac…",
            "url": "https://www.macotakara.jp/sale/entry-46275.html",
            "urlToImage": "https://www.macotakara.jp/archives/001/201611/10134cab4834b8bd4b1346b5c637c3fe1278d42f1b296f0e07d0c32397e85962.jpg",
            "publishedAt": "2024-03-04T08:38:20Z",
            "content": "Apple.com/jpAppleMac\r\n30,000Apple 24%\r\nApple\r\n<ul><li>Mac Pro (2023)/M2 Ultra/24Core CPU/76CoreGPU/192GB/8TB SSD1,461,800</li><li>Mac Pro (2023)/M2 Ultra/24Core CPU/76CoreGPU/128GB/8TB SSD1,366,800</… [+5047 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Unwire.hk"
            },
            "author": "蔣納偲",
            "title": "Apple iCloud 面臨集體訴訟 消費者指 iPhone 焗住要用 iCloud 備份兼免費容量太少",
            "description": "根據《彭博社》報導，上週有人提交集體訴訟申請，指控 Apple 雲端平台 iCloud 能夠託管來自 iPhone 和 iPad 的應用程式數據和裝置設定，形容這種做法非法地將蘋果的移動裝置和 iCloud 「綑綁」在一起，是「操控雲端服務的競爭環境」。訴狀中提及，雖然 Apple 允許用戶使用 Google Drive、Sync.com、、pCloud、Dropbox Inc. 備份相片、影片，但對於裝置的設定和 App 資料就只能使用 iCloud 進行備份。Apple 目前限制用戶只可以選擇 Apple 旗…",
            "url": "https://unwire.hk/2024/03/04/apple-customers-icloud/software/ios-app/",
            "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2024/03/90-1.jpeg",
            "publishedAt": "2024-03-04T07:21:01Z",
            "content": "Apple iCloud iPhone iPad iCloud \r\n Apple Google DriveSync.compCloudDropbox Inc. App iCloud \r\nApple Apple iCloud 5GB \r\nApple iCloud 70%\r\nApple iCloud \r\n Apple Apple \r\nBloomberg\r\n:<li>iOS 17.3 iPhone +… [+71 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "MacGeneration"
            },
            "author": "Nicolas Furno",
            "title": "Après l’Apple Vision Pro, Dan Riccio s’apprêterait à prendre une retraite bien méritée",
            "description": "Dan Riccio serait sur le point de prendre sa retraite, après une carrière de 25 ans chez Apple. Il est arrivé à Cupertino en 1998 et a travaillé tout d’abord sur les Mac, avant de se pencher sur les iPad. Depuis 2012, il avait pris le rôle de vice-président s…",
            "url": "https://www.macg.co/aapl/2024/03/apres-lapple-vision-pro-dan-riccio-sappreterait-prendre-une-retraite-bien-meritee-142469",
            "urlToImage": "https://cdn.mgig.fr/2024/03/mga-d6e3118b-w375-w1500-w750_accroche.jpg",
            "publishedAt": "2024-03-04T07:30:00Z",
            "content": "Dan Riccio serait sur le point de prendre sa retraite, après une carrière de 25 ans chez Apple. Il est arrivé à Cupertino en 1998 et a travaillé tout dabord sur les Mac, avant de se pencher sur les i… [+1393 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Tweakers.net"
            },
            "author": "Arnoud Wokke",
            "title": "CAD-renders tonen fors grotere Apple iPhone SE 4 met notch en enkele camera",
            "description": "Er zijn renders verschenen van wat de vierde generatie van de Apple iPhone SE zou worden. In tegenstelling tot voorgaande generaties is er geen Home-knop. Ook lijkt de nieuwe SE een stuk groter dan zijn voorgangers.",
            "url": "https://tweakers.net/nieuws/219312/cad-renders-tonen-fors-grotere-apple-iphone-se-4-met-notch-en-enkele-camera.html",
            "urlToImage": "https://tweakers.net/i/sT24TyMgzNCI8E5kV3W3ICgble4=/134x134/filters:strip_icc():strip_exif()/i/2004967456.jpeg?f=meta",
            "publishedAt": "2024-03-04T07:45:00Z",
            "content": "Er zijn renders verschenen van wat de vierde generatie van de Apple iPhone SE zou worden. In tegenstelling tot voorgaande generaties is er geen Home-knop. Ook lijkt de nieuwe SE een stuk groter dan z… [+698 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Tweakers.net"
            },
            "author": "Arnoud Wokke",
            "title": "AMD mag van HDMI Forum HDMI 2.1 niet implementeren in hun opensourcedriver",
            "description": "AMD mag van standaardenorganisatie HDMI Forum geen opensourcedriver ontwikkelen voor Linux op basis van HDMI 2.1. AMD heeft de driver gemaakt, maar HDMI Forum heeft een voorstel daartoe afgewezen.",
            "url": "https://tweakers.net/nieuws/219310/amd-mag-van-hdmi-forum-hdmi-21-niet-implementeren-in-hun-opensourcedriver.html",
            "urlToImage": "https://tweakers.net/i/U1iA5G_ERrDh43nhJDmAGT93mis=/134x134/filters:strip_icc():strip_exif()/i/2004836756.jpeg?f=meta",
            "publishedAt": "2024-03-04T07:09:00Z",
            "content": "De EU heeft hier goed in gehandeld, het was belachelijk dat we meerdere oplaad en aansluit poorten hadden, zoek naar eens een oude PA apparaat en de bijhorende kabels erbij. Of gewoon een moderne iPh… [+950 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Iphones.ru"
            },
            "author": "Илья Сидоров",
            "title": "Apple может представить новые MacBook и iPad на этой неделе",
            "description": "Apple планирует анонсировать новые продукты на этой неделе, сообщил проверенный источник MacRumors. Он не уточнил, что именно покажет компания. Ожидается, что в марте Apple выпустит новые iPad Pro, iPad Air, обновленные MacBook Air, а также Magic Keyboard для…",
            "url": "https://www.iphones.ru/iNotes/apple-mozhet-predstavit-novye-macbook-i-ipad-na-etoy-nedele-03-04-2024",
            "urlToImage": null,
            "publishedAt": "2024-03-04T06:12:02Z",
            "content": "Apple , MacRumors.\r\n , . , Apple iPad Pro, iPad Air, MacBook Air, Magic Keyboard iPad Pro Apple Pencil.\r\n Apple - . ."
            },
            {
            "source": {
            "id": null,
            "name": "MacGeneration"
            },
            "author": "Florian Innocente",
            "title": "iPad, Mac… Apple lancerait de nouveaux matériels dès cette semaine",
            "description": "Après le Vision Pro, l'actualité des produits plus \"traditionnels\" chez Apple devrait reprendre ses droits. Avec des annonces possibles, de nouveaux matériels programmés dès cette semaine. Reste à savoir qui, parmi les iPad, les Mac et les accessoires, va ouv…",
            "url": "https://www.macg.co/materiel/2024/03/ipad-mac-apple-lancerait-de-nouveaux-materiels-des-cette-semaine-142467",
            "urlToImage": "https://cdn.mgig.fr/2024/03/mga-3498bf7a-w375-w1500-w750_accroche.jpg",
            "publishedAt": "2024-03-04T06:10:00Z",
            "content": "Après le Vision Pro, l'actualité des produits plus \"traditionnels\" chez Apple devrait reprendre ses droits. Avec des annonces possibles, de nouveaux matériels programmés dès cette semaine. Reste à sa… [+1667 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Expansion.com"
            },
            "author": "expansion.com",
            "title": "La Primera de Expansión sobre Carlos Cuerpo, Ikea, Santander, Space X y la Nasa y Nikki Haley",
            "description": "Este lunes arrancamos con la entrevista en profundidades que EXPANSIÓN ha tenido con el nuevo ministro de Economía, Comercio y Empresa, Carlos Cuerpo Caballero. Además, hablaremos sobre Ikea, que espera crecer en España, aunque el foco está en Estados Unidos …",
            "url": "https://www.expansion.com/podcasts/la-primera-de-expansion/2024/03/04/65e56bab468aeb660c8b45bd.html",
            "urlToImage": "https://phantom-expansion.unidadeditorial.es/cc771a55254882c86003c77f3f11373e/f/webp/assets/multimedia/imagenes/2024/03/04/17095330957375.jpg",
            "publishedAt": "2024-03-04T06:35:26Z",
            "content": "Este lunes arrancamos con la entrevista en profundidades que EXPANSIÓN ha tenido con el nuevo ministro de Economía, Comercio y Empresa, Carlos Cuerpo Caballero. Además, hablaremos sobre Ikea, que esp… [+754 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "iphone-ticker.de › iPhone-News seit 2007"
            },
            "author": "chris",
            "title": "CAD-Zeichnungen zeigen iPhone SE 4 mit Face ID",
            "description": "Apple wird wohl in Kürze auch das letzte iPhone mit Home-Taste in Rente schicken. Es wird ja schon längere Zeit darüber spekuliert, dass auch das iPhone SE künftig auf die Taste mit integriertem Fingerabdrucksensor verzichtet. Mit der für dieses Frühjahr erwa…",
            "url": "https://www.iphone-ticker.de/cad-zeichnungen-zeigen-iphone-se-4-mit-face-id-230948/",
            "urlToImage": "https://images.iphone-ticker.de/wp-content/uploads/2024/03/iphone-se-4-rendering-feature.jpg",
            "publishedAt": "2024-03-04T05:57:12Z",
            "content": "Apple wird wohl in Kürze auch das letzte iPhone mit Home-Taste in Rente schicken. Es wird ja schon längere Zeit darüber spekuliert, dass auch das iPhone SE künftig auf die Taste mit integriertem Fing… [+1973 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "iphone-ticker.de › iPhone-News seit 2007"
            },
            "author": "chris",
            "title": "Homematic IP: Neue App, Zentrale und zahlreiches Zubehör im Anmarsch",
            "description": "Der Anbieter eQ-3 will mit seiner Smarthome-Lösung Homematic IP in diesem Jahr offenbar Vollgas geben. Neben einer neuen Steuerzentrale wurden zahlreiche weitere Neuerungen angekündigt, darunter auch LED-Lightstrips und Rolladenmotoren. Im Mittelpunkt der Neu…",
            "url": "https://www.iphone-ticker.de/homematic-ip-neue-app-zentrale-und-zahlreiches-zubehoer-im-anmarsch-230955/",
            "urlToImage": "https://images.iphone-ticker.de/wp-content/uploads/2024/03/homematic-ip-home-control-unit-feature.jpg",
            "publishedAt": "2024-03-04T07:23:26Z",
            "content": "Der Anbieter eQ-3 will mit seiner Smarthome-Lösung Homematic IP in diesem Jahr offenbar Vollgas geben. Neben einer neuen Steuerzentrale wurden zahlreiche weitere Neuerungen angekündigt, darunter auch… [+2206 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Génération NT"
            },
            "author": "Mathieu M.",
            "title": "Respect du DMA : 34 organisation se liguent contre Apple et ses arrangements avec la loi européenne",
            "description": "Le Digital Markets Act (DMA) doit entrer en application le 7 mars prochain, et face aux petits arrangements qu'a pris Apple avec la nouvelle loi européenne, un collectif de 34 organisations fait front.",
            "url": "https://www.generation-nt.com/actualites/dma-apple-face-34-organisations-europe-loi-2044933",
            "urlToImage": "https://img.generation-nt.com/apple-europe_0298000001695349.png",
            "publishedAt": "2024-03-04T06:10:01Z",
            "content": "Apple, comme toutes les entreprises, va devoir se conformer au DMA, la nouvelle loi européenne qui régit les marchés numériques, d'ici le 7 mars. Il s'agit principalement pour Apple d'ouvrir son écos… [+3073 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Telepolis.de"
            },
            "author": "Timo Rieg",
            "title": "Jugend in Gefahr? Der Einfluss von Hoss & Hopf auf junge Hörer",
            "description": "Wutbürger-Podcast? Wie zwei Finfluencer mit rechtslibertären Botschaften und Verschwörungstheorien die Jugend und die Medienlandschaft polarisieren.",
            "url": "https://www.telepolis.de/features/Jugend-in-Gefahr-Der-Einfluss-von-Hoss-Hopf-auf-junge-Hoerer-9644890.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/1/0/9/1/master_hh_2-0fd5c07214592605.jpeg",
            "publishedAt": "2024-03-04T07:15:00Z",
            "content": "Bild: Unsplash\r\nWutbürger-Podcast? Wie zwei Finfluencer mit rechtslibertären Botschaften und Verschwörungstheorien die Jugend und die Medienlandschaft polarisieren.\r\nIn den Charts steht der Podcast \"… [+7308 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Iculture.nl"
            },
            "author": "Benjamin Kuijten | iCulture.nl",
            "title": "Nieuw Yale Linus L2-slot werkt met NFC op je iPhone en (binnenkort) met Matter-over-Thread",
            "description": "Yale heeft het nieuwe slimme Linus L2-deurslot aangekondigd. Deze heeft een bijgewerkt ontwerp, heeft standaard wifi ingebouwd en vereist daardoor geen bridge. Met een toekomstige update werkt hij via Matter-over-Thread. \nHet artikel Nieuw Yale Linus L2-slot …",
            "url": "https://www.iculture.nl/nieuws/yale-linus-l2-deurslot-wifi-matter/",
            "urlToImage": "https://www.iculture.nl/wp-json/social-image-generator/v1/image/1385067/?v=13850761709544965",
            "publishedAt": "2024-03-04T08:36:00Z",
            "content": "Vorig jaar kon je op iCulture de review lezen van het slimme Yale Linus-deurslot, die standaard werkt met HomeKit. Het slot heeft diverse voordelen, zoals de eenvoudige installatie en de snelle react… [+2104 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Zive.cz"
            },
            "author": "Martin Chroust",
            "title": "Zesměšnění EU v přímém přenosu. Proti novým pravidlům Applu se postavilo Spotify, Epic Games a 32 dalších firem",
            "description": "Už 6. března začínají v EU platit nový pravidla DMA • 34 firem žádá Evropskou komisi o rychlou reakci proti Applu • Podle Spotify, Epic Games a dalších Apple jen zesměšňuje EU",
            "url": "https://mobilmania.zive.cz/clanky/zesmesneni-eu-v-primem-prenosu-proti-novym-pravidlum-applu-se-postavilo-spotify-epic-games-a-32-dalsich-firem/sc-3-a-1359603/default.aspx",
            "urlToImage": "https://mobilmania.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=464205841",
            "publishedAt": "2024-03-04T08:55:00Z",
            "content": "Hlas firem, který nejde jen tak ignorovat. U ve stedu 6. bezna vejdou v platnost pravidla DMA (Digital Markets Act), která jsou v mobilním svt velkou pekákou zejména pro Apple. Do App Storu musí pust… [+3173 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Zive.cz"
            },
            "author": "Martin Chroust",
            "title": "Zavírání aplikací na pozadí se přeceňuje. Smartphonům to nemusí pomoci, někdy jim to dokonce uškodí",
            "description": "Ukončování aplikací na pozadí se přeceňuje • Aplikace nenajíždějí z paměti ale musí se znovu spustit • Často poté zaberou větší část RAM a jsou náročnější na baterii",
            "url": "https://mobilmania.zive.cz/clanky/zavirani-aplikaci-na-pozadi-se-precenuje-smartphonum-to-nemusi-pomoci-nekdy-jim-to-dokonce-uskodi/sc-3-a-1359530/default.aspx",
            "urlToImage": "https://mobilmania.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=456488291",
            "publishedAt": "2024-03-04T06:25:00Z",
            "content": "Uivatelé iPhon jsou tém jednomysln pesvdeni, e zavením aplikací na pozadí vylepíte výkon telefonu, prodlouíte výdr baterie nebo zamezíte aplikacím ve sledování toho, co na telefonu dláte. Na Androidu… [+3100 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Xatakahome.com"
            },
            "author": "Jose Antonio Carmona",
            "title": "Cocinas que se pueden montar y desarmar fácilmente. Este invento español quiere acabar con la \"cocina para toda la vida\"",
            "description": "Si hay un elemento de la casa que prácticamente permanece inamovible durante toda nuestra vida, esa es la cocina. Se trata de una estancia en el hogar que suele tener los muebles a medida y que solo se cambia por el deterioro o porque simplemente nos apetece …",
            "url": "https://www.xatakahome.com/diseno-y-arquitectura/cocinas-que-se-pueden-montar-desarmar-facilmente-este-invento-espanol-quiere-acabar-cocina-para-toda-vida",
            "urlToImage": "https://i.blogs.es/419539/cocina/840_560.jpeg",
            "publishedAt": "2024-03-04T07:19:56Z",
            "content": "Si hay un elemento de la casa que prácticamente permanece inamovible durante toda nuestra vida, esa es la cocina. Se trata de una estancia en el hogar que suele tener los muebles a medida y que solo … [+4113 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ipadizate.com"
            },
            "author": "Ángel Roca",
            "title": "Apple no celebraría evento en marzo y presentaría nuevos dispositivos directamente esta semana",
            "description": "Desde hace tiempo se viene rumoreando sobre un posible evento de Apple en el mes de marzo en el que la compañía podría lanzar nuevos dispositivos. Ahora fuentes relevantes aseguran que este evento finalmente no se celebrará y que Apple podría presentar nuevos…",
            "url": "https://ipadizate.com/apple/apple-no-celebraria-evento-en-marzo-y-presentaria-nuevos-dispositivos-directamente-esta-semana",
            "urlToImage": "https://ipadizate.com/hero/2023/09/tim-cook-apple-event-keynote.1694083000.5709.1695977356.9324.jpg?width=1200",
            "publishedAt": "2024-03-04T06:44:54Z",
            "content": "No tendremos evento de Apple pero se podrían presentar muchas cosas esta misma semana\r\nDesde hace tiempo se viene rumoreando sobre un posible evento de Apple en el mes de marzo en el que la compañía … [+3006 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ipadizate.com"
            },
            "author": "Sergio J. Ortiz",
            "title": "Se revela el diseño final del iPhone SE 4",
            "description": "Fuentes cercanas a la industria indicaban que el iPhone SE 4 contaría con Face ID, USB-C y un procesador A15 Bionic. Además, varios rumores apuntaban a que contaría con un diseño totalmente renovado, con cambios muy interesantes en su módulo de cámaras y en o…",
            "url": "https://ipadizate.com/iphone/se-revela-el-diseno-final-del-iphone-se-4",
            "urlToImage": "https://ipadizate.com/hero/2024/03/iphone-se-4.1708094381.4821.1709538689.302.jpg?width=1200",
            "publishedAt": "2024-03-04T08:01:27Z",
            "content": "Se filtra el diseño del iPhone SE 4 de Apple\r\nFuentes cercanas a la industria indicaban que el iPhone SE 4 contaría con Face ID, USB-C y un procesador A15 Bionic. Además, varios rumores apuntaban a q… [+2744 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ilsoftware.it"
            },
            "author": "Marco Ponteprino",
            "title": "Apple: niente evento primaverile nonostante le tante novità",
            "description": "L'evento primaverile Apple salta: ecco quali sono le novità che l'azienda di Cupertino ha comunque in serbo per i suoi fan.",
            "url": "https://www.ilsoftware.it/apple-niente-evento-primaverile-nonostante-le-tante-novita/",
            "urlToImage": "https://cdn.ilsoftware.it/XP27W2AfBLBHhOBBlFTTISAzr2U=/2120x848/filters:format(webp)/https://www.ilsoftware.it/app/uploads/2024/01/Apple-2.jpg",
            "publishedAt": "2024-03-04T07:00:27Z",
            "content": "Il 2024 si preannuncia un anno ricco per Apple, con piani molto interessanti per quanto riguarda l’Intelligenza Artificiale e non solo.\r\nNonostante ciò, secondo quanto riportato da Mark Gurman di Blo… [+1661 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Ilsoftware.it"
            },
            "author": "Marco Ponteprino",
            "title": "SOS satellitare presto disponibile su telefoni Google Pixel?",
            "description": "SOS satellitare, alcuni indizi rivelano l'imminente introduzione su Pixel: ecco cosa ha scoperto il sito 9to5Google.",
            "url": "https://www.ilsoftware.it/sos-satellitare-presto-disponibile-su-telefoni-google-pixel/",
            "urlToImage": "https://cdn.ilsoftware.it/-IWG4Vvx9t1N7e33hB4Kw7qUN7g=/2120x1187/filters:format(webp)/https://www.ilsoftware.it/app/uploads/2024/02/bug-google-pixel-accesso-memoria-interna.jpg",
            "publishedAt": "2024-03-04T07:30:47Z",
            "content": "Nel corso del 2022 Apple ha introdotto la connettività satellitare su iPhone 14.\r\nDa quel momento, per quanto riguarda Android, si sono susseguite voci riguardo l’introduzione di tale funzionalità an… [+1716 chars]"
            }
            ]
        constructor(){
            super();
            this.state={
                articles:[],
                loading:false,
                page:1,
                totalResults:0
            }
        }
        static propTypes = {
          prop: PropTypes
        }
      async componentDidMount(){
        console.log("mount");
        this.setState({loading:true});
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=478fffde9c744c2bacec372275263102&page=1&pageSize=${this.props.pageSize}`
        let data=await fetch(url);
        let parseData=await data.json();
        this.setState({ articles:parseData.articles , totalResults:parseData.totalResults,loading:false})
      }
       handlePrevClick=async()=>{
        this.setState({loading:true});
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=478fffde9c744c2bacec372275263102&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
      
        let data=await fetch(url);
        let parseData=await data.json();
        this.setState({ 
          page:this.state.page-1,
          articles:parseData.articles,
          loading:false})
      }
     handleNextClick=  async()=>{
      if(!(Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page + 1)){
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=478fffde9c744c2bacec372275263102&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
          this.setState({loading:true});
          let data=await fetch(url);
          let parseData=await data.json();
          this.setState({ 
            page:this.state.page+1,
            articles:parseData.articles,
          loading:false})}
      }
      fetchMoreData = async() => {
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=478fffde9c744c2bacec372275263102&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        //   this.setState({loading:true});
         this.setState({page: this.state.page+1});
          let data=await fetch(url);
          let parseData=await data.json();
          this.setState({ 
            page:this.state.page+1,
            articles:this.state.articles.concat(parseData.articles),
            totalResults:parseData.totalResults
            // loading:false
        })
      };
      render() {
        console.log("consol");
        return (
          <div className='container my-3'>
            <h2 style={{margin:'35px 0px' , marginTop:'90px'}}>Top Headlines</h2>
            {this.state.loading && <Spinner/>}
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.totalResults}
          loader={<Spinner/>}>
            <div className="container">
            <div className='row'>
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}><NewsItem title={element.title?element.title.slice(0,45):""} description={element.description===null?"":element.description.slice(0,88)} imageUrl={element.urlToImage===null?"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg":element.urlToImage} newsUrl={element.url} author={element.author} date ={element.publishedAt}/></div>
            })}
            </div>
            </div>
            </InfiniteScroll>
            
            {/* <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
            <button  disabled={Math.ceil(this.state.totalResults/this.props.pageSize)<this.state.page + 1} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
    
          </div>
        )
  }
}
