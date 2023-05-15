# Tech 101 Webshop

Välkommen till Tech 101 – ett skolprojekt där vi har skapat en modern och funktionell webshop för teknikentusiaster. Vår webbapplikation är utvecklad med hjälp av populära teknologier och bibliotek som React, TypeScript och Mantine.

## Funktioner och Tekniker

Vi har implementerat flera avancerade tekniker och funktioner för att uppnå en sömlös användarupplevelse, inklusive:

- State management
- Routing med React-router
- Användning av Context

En av våra huvudfunktioner är möjligheten för administratörer att "logga in" och redigera, lägga till eller ta bort befintliga produkter i webshoppen. Vi har även strävat efter att återskapa känslan som finns hos andra stora tech shop-giganter.

## Live Demo
[Tech 101](https://tech-101-webshop.netlify.app/)

## Teamet bakom Tech 101

- [Sebastian Johansson](https://github.com/Sebastianjohansson123)
- [Emil Helgesson](https://github.com/Emil-Helge)
- [Gabriel Lugo Méndez](https://github.com/gabriel-lugo)
- [Hampus Isebring](https://github.com/Isebring)

## Ytterligare Resurser

För mer information om Mantine, besök [deras dokumentation](https://mantine.dev/pages/getting-started/).

## Instruktioner för utvecklare

För att komma igång med utveckling, följ dessa steg:

1. Klona ner projektet till din lokala maskin.
2. Öppna en terminal och navigera till projektets rotmapp.
3. Kör följande kommandon:

`npm install` <Br/>
`npm run dev`

Därefter bör projektet vara igång och köra på din lokala utvecklingsserver.

## Kravlista

### Krav för Godkänt

- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] Uppgiften lämnas in i tid!

**Home**

- [x] Ska ha en övergripande layout med header, main & footer.
- [x] Startsidan ska lista samtliga produkter.
- [x] Det ska gå att lägga till produkter i kundvagnen (header + toast + ls).
- [x] Det ska gå att klicka på en produkt och komma till en detaljsida.
- [x] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Produkt**

- [x] Ska ha en övergripande layout med header, main & footer.
- [x] Detaljsidan ska visa all info om en produkt.
- [x] Det ska gå att lägga till produkten i kundvagnen (header + toast + ls).
- [x] Sidan ska vara responsiv och gå att använda på mobil, tablet & desktop.

**Kundvagn & Checkout**

- [x] Ska ha en övergripande layout med header, main & footer.
- [x] Det ska gå att gå till checkoutsidan och se innehållet i kundvagnen (knapp & url).
- [x] Det ska gå att se det totala priset i kundvagnen.
- [x] Det ska gå att ändra produkterna i kundvagnen (header + vyn + pris + ls).
- [x] Det ska gå att ange leveransuppgifter i ett formulär.
- [x] Samtliga fält för checkoutsidans formulär ska ha valideringsregler.
- [x] Formulären vid utcheckningen ska gå att automatiskt fyllas i. (ej klar)
- [x] Bekräftelsesidan ska visa orderdetaljer och leveransuppgifter. (delvis klar)

_Gjorda krav ska kryssas för._

### Krav för Väl Godkänt

- [x] Ett designsystem/komponentbibliotek används nästintill helt uteslutande för att bygga sidan (ex: MUI, ChakraUI, Mantine, etc).

**Admin**

- [x] Det finns en admin-sida för produkthantering
- [x] Det ska gå att se alla produkter på admin sidan
- [x] Det går att lägga till produkter via admin sidan + ls
- [x] Det går att ta bort produkter via admin sidan + ls
- [x] Det går att redigera produkter via admin sidan + ls
- [x] Samtliga fält för adminsidans formulär ska ha valideringsregler
