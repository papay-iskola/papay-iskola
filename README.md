# Pápay Honlap Projekt

[![Deploy Hugo site to Pages](https://github.com/papay-iskola/papay-iskola.github.io/actions/workflows/hugo.yml/badge.svg)](https://github.com/papay-iskola/papay-iskola.github.io/actions/workflows/hugo.yml)

Hát akkor kérem, itt a kollaboratív friss új iskolai weblap gyártósora.

https://github.com/themefisher/meghna-hugo a theme forrása, doksija

Itt van a theme dokumentációja: https://docs.gethugothemes.com/meghna/


# Cikkek

## Cikkírás környezetének kialakítása

@TODO:

- github codespace
- iskolai google drive
- iskolai feladatkezelő (trello?)
- email (nem javasolt)

## Cikkek írása

A cikkeket a `/content/hirek` alatti könyvtár tartalmazza. A könyvtár alkönyvtárakra van bontva, amik az egyes tanéveket reprezentálják. ld: [archívum](archívum)

Egy cikket egy alkönyvtár reprezentál `content/hirek` alatt.
- alkönyvtár neve: cikk url-jének vége a honlapon
  - pl. `mikulas-nap` a `2022-23` tanévben: alkönyvtár teljes útvonala: `/content/hirek/2022-23/mikulas-nap`

Az alkönyvtár elemei:
- **index.md**: ebben van a cikk
- **index.kek.md** (opcionális): ebben van a cikk könnyen érthető kommunikáció (KÉK) fordítása
- **borito.png** (opcionális): a cikk tetején megjelenítendő kép

## Frontmatter

Minden cikk egy előzékkel kezdődik, amiben a cikkhez tartozó metaadatokat rögzítjük.

A címkéket (tags) egymás alá kell írni, kettő szóközzel indítva, kötőjellel kezdve, szükség esetén idéző jelek közé téve.

például:

```
tags:
  - iskolaújság
  - "Együtt-Értük Alapítvány"
```

Igyekezzünk már meglévő címkék közül válogatni, ne hozzunk létre új címkét, ha azt sejtjük,
hogy az alatt a címke alatt nem lesz sok cikk.

- **title**: a cikk megjeleníthető címe
- **author**: a cikk szerzője
- **date**: a cikk megjelenítésének dátuma *2022-09-25* formában
- **tags**: címkék felsorolása

## Formázások

A cikk törzsének formázása Markdown formátumban történik. A Markdown egy napjainkban nagyon elterjed szöveg formázó leíró nyelv.
Sima szövegben is jól olvasható, láthatóak a kiemelések, a szöveg formai tagolása.

Több változata van elterjedve, de az alap formázások mindenhol egyformák. Érdemes a [CommonMark](https://commonmark.org/help/) oldalon megismerni a legalapvetőbb
formázásokkal, többre nincs is szükség egy cikk írásához.

Többek között, ez a README.md is markdown formátumban van írva.

### Táblázatok

Markdown formátumban illik: 

Megjelenítés szempontjából bootstrap lehetőségeiből lehet válogatni: https://getbootstrap.com/docs/4.3/content/tables/

### Videó beágyazás

Csak youtube
```
{{< youtube HYguXbuft34 >}}
```
### Fotóalbum beágyazás

A google photos oldalon meg kell osztani az albumot,
- le kell korlátozni a megosztást, hogy ne kommenteljenek, meg semmit ne csináljanak.
- ki kell másolni a "hash"-t, a megosztás URL-jének utolsó karaktersorozatát, és azt használni.

Egyelőre csak a linket rakja ki:

```
{{<gphoto "CbTXTDtGfQf2h5se6">}}
```

### Hivatkozások (linkek)

A más weboldalra történő hivatkozás:

```
[Hivatkozás, amit a látogató olvashat](a hivatkozás url-je)
```

pl.:

```
Ide [kattintva](https://www.hup.hu) a magyar unix felhasználók oldalát látogathatja meg.
```

megjelenítve:

Ide [kattintva](https://www.hup.hu) a magyar unix felhasználók oldalát látogathatja meg.


---
# Környezetek

## helyi fejlesztés


Lokális fejlesztő környezet indítás:

```bash
hugo server --watch
open http://localhost:1313
```

## staging környezet

Kiadás előtti (staging) környezet, mindig az aktuális állapotot mutatja:

https://papay-iskola.github.io/

A deployment automatikusan történik a github-ra történő push, vagy a github-on történt main ágba történt commit után.

## production környezet

Honlap generálás:

```
hugo -b https://mvdiakotthon.edu.hu/
```

Feltöltés: FileZilla

```
public -> www
```

A KIFÜ tárhelyére automatikusan kerül ki, de csak stabil kiadások (Release-ek), amiket [szemantikus verziózás](https://semver.org/) módszerével rakunk ki.

- **major version**: nagyon nagy változás, a teljes honap átalakításakor változik
- **minor version**: új tartalom kerül ki az oldalra, új funkció kerül ki az oldalra (keresés, archívum)
- **patch version**: javítások, elgépelések, tartalom javításai, kékítések

pl:

**1.1.2** -> **`major.minor.patch`**

**1. (major)** hugo alapú új honlap,

**1. (minor)** második kiadás, eseménynaptár, archívum, címkefelhő került ki az oldalra,

**2. (patch)** második javítás történt az tartalmakban.
