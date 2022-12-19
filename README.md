# Pápay Honlap Projekt

[![Deploy Hugo site to Pages](https://github.com/papay-iskola/papay-iskola.github.io/actions/workflows/hugo.yml/badge.svg)](https://github.com/papay-iskola/papay-iskola.github.io/actions/workflows/hugo.yml)

Hát akkor kérem, itt a kollaboratív friss új iskolai weblap gyártósora.

## Statikus, hivatalos dokumentumok
A kötelező dokumentumok helye itt van: [site/content/hungarian/dokumentum](https://github.com/papay-iskola/papay-iskola.github.io/tree/main/content/hungarian/dokumentum)

Az ezekhez tartozó képek helye itt van: [site/static/images/dokumentum](https://github.com/papay-iskola/papay-iskola.github.io/tree/main/static/images/dokumentum)

Az ehhez tartozó PDF-ek helye pedig itt: [site/static/pdfs/dokumentum](https://github.com/papay-iskola/papay-iskola.github.io/tree/main/static/pdfs/dokumentum)

---

https://github.com/themefisher/meghna-hugo a theme forrása, doksija

Itt van a theme dokumentációja: https://docs.gethugothemes.com/meghna/

### Táblázatok

Markdown formátumban illik: 

Megjelenítés szempontjából bootstrap lehetőségeiből lehet válogatni: https://getbootstrap.com/docs/4.3/content/tables/

### Videó beágyazás

Csak youtube
```
{{< youtube HYguXbuft34 >}}
```
### Fotóalbum beágyazás

Meg kell osztani az albumot,
- le kell korlátozni a megosztást, hogy ne kommenteljenek, meg semmit ne csináljanak.
- ki kell másolni a "hash"-t, és azt használni.

Egyelőre csak a linket rakja ki:

```
{{<gphoto "CbTXTDtGfQf2h5se6">}}
```

### Permalinkek

@TODO még erősen átgondolandó

A permalinkek /év/hónap/cím formátumban jönnek létre.

Ezzel biztosítjuk a jövőbeli hozzáférhetőséget.

Emellett `alias`okat vezetünk be, hogy az aktuális tartalmat a rövid, dátum nélküli címek alapján is el lehessen érni.

Pl. a Fejelsztő iskola leírása a 2022/09/fejleszto-iskola cím alatt lehet elérni, ha változás áll be rajta, akkor pl. a 2023/09/fejleszto-iskola alatt lesz a jövőbeli url, de az alias miatt a /fejleszto-iskola alatt lehet elérni, így nem kell az `iskola` szekció adatán változtani, az mindig a /fejleszto-iskola linkre mutat.

@TODO kell-e felkészülni az egy hónapon belüli tartalom változtatások követésére?
pl. egy cikk módosul egy helyesírási hiba, vagy tartalmi pontosság miatt. Kell-e megtartanunk a honlapon is a régebbi verziót? (a git szerencsére tartalmazni fogja!!!)



---

Staging env:

https://papay-iskola.github.io/

---

Lokális fejlesztő környezet indítás:

```bash
hugo server --watch
open http://localhost:1313
```



