# Python - Slovarji

## Uvod
Do sedaj smo spoznali sezname, kjer so elementi dostopni z indeksi. Včasih pa bi bil bolj smiselen dostop s katerim drugim podatkovnim tipom, recimo s `string`-om. Vzemimo za primer trgovino, kjer bi nas zanimala cena točno določenega izdelka. Jasno, bomo do blagajničarke prišli z imenom izdelka, recimo jogurt, ne pa z zaporedno številko izdelka na polici. V tem primeru je jogurt **ključ**, njegova cena pa **vrednost**.
Python nam v ta namen ponudi slovarje, kjer lahko hranimo pare **ključ-vrednost**. Kot ključ lahko uporabimo katerikoli *nespremenljiv* tip, od katerih smo do sedaj spoznali `string`-e in `intiger`-je, kot vrednost pa katerokoli tip, vključno s seznami in slovarji.
```python
izdelki = {
	"ananas": 2.5,
	"banana": 1.1,
	"grozdje": 1.7
}
```
*primer slovarja, kjer imena izdelka predstavlja **ključ**, cena izdelka pa **vrednost***

Vrednost iz slovarja lahko dobimo na podoben način kot pri seznamih.
```python
print(izdelki["banana"])
```
```lua
1.1
```
*primer uporabe slovarja, kjer nas zanima vrednost (cena) ključa **banana***

Če želimo vrednosti ključa, ki ne obstaja, pride do napake. V ta namen, lahko podobno, kot pri seznamih, uporabimo `in`.
```python
print("banana" in izdelki)
print("jagode" in izdelki)
```
```lua
True
False
```
*primer uporabe besede* `in` *za preverjanje prisotnosti ključa*

V slovar lahko izdelke tudi dodajamo, oziroma jih zamenjamo. Ker so ključi v slovarju unikatni (se ne smejo ponoviti), bo stara vrednost prepisana z novo.
```python
izdelki["ananas"] = 1.8 # Cena se zamenja, ker ključ 'ananas' že obstaja
izdelki["jagode"] = 3.1 # Cena se doda, ker ključ 'jagode' še ne obstaja
print(izdelki)
```
```lua
{'ananas': 1.8, 'banana': 1.1, 'grozdje': 1.7, 'jagode': 3.1}
```
*primer menjave in dodajanja vrednosti*

Čez slovarje se lahko sprehodimo na 3 različne načine.
```python
for kljuc in izdelki:
	print(kljuc)
```
```lua
ananas
banana
grozdje
jagode
```
*primer sprehoda po ključih - pogosto uporabljen, do posameznih vrednosti še vedno lahko dostopamo s spremenljivko* `kljuc`

```python
for vrednost in izdelki.values():
	print(vrednost)
```
```lua
1.8
1.1
1.7
3.1
```
*primer sprehoda po vrednostih - redko uporabljen*

```python
for kljuc, vrednost in izdelki.items():
	print(f"{kljuc}: {vrednost}")
```
```lua
ananas: 1.8
banana: 1.1
grozdje: 1.7
jagode: 3.1
```
*primer sprehoda po ključih in vrednostih hkrati - za veliko primerov najenostavnejši način*

## Naloge
### 1. Naloga - Ustvarjanje slovarja
Ustvarite nov **slovar**, ki vsebuje **5 izdelkov** iz trgovine in si za njih izmislite **cene**. Slovar še izpišite
**Primer**
```python
{'ananas': 2.5, 'banana': 1.1, 'grozdje': 1.7, 'jagode': 3.1, 'borovnice': 1.7}
```

### 2. Naloga - Dodajanje izdelkov
Dodajte možnost dodajanja novega idelka in njegove cene. Program naj vpraša po **imenu** in **ceni izdelka** in to doda v slovar. Slovar še enkrat izpišite
**Primer**
```lua
Vnesi nov izdelek: maline
Vnesi ceno: 3.6
{'ananas': 2.5, 'banana': 1.1, 'grozdje': 1.7, 'jagode': 3.1, 'borovnice': 1.7, 'maline': 3.6}
```

### 2. Naloga - Dodatna
Nadgradite 2. nalogo tako, da lahko vnesete **koliko** novih izdelkov želite dodati
**Primer**
```lua
Koliko novih izdelkov? 2
Vnesi nov izdelek: avokado
Vnesi ceno: 4.5
Vnesi nov izdelek: češnje
Vnesi ceno: 2.5
{'ananas': 2.5, 'banana': 1.1, 'grozdje': 1.7, 'jagode': 3.1, 'borovnice': 1.7, 'avokado': 4.5, 'češnje': 2.5}
```

### 3. Naloga - Najdražji izdelki
Iz trenutnih izdelkov želimo le dražje. Program naj vas vpraša po **ceni**, nato pa izpišite **imena** vseh izdelkov, ki so **dražja kot vnešena cena**.
**Primer**
```lua
Vnesi ceno: 2.2
Izdelki dražji od 2.2 evrov:
ananas
jagode
```

### 3. Naloga - Dodatna
Zanimajo nas najdražji izdelki. Iz slovarja izluščite izdelek z **najvišjo ceno**. Če je takih izdelkov več, **izpišite vse**.
**Primer**
```lua
Najdražji izdelki:
['jagode']
```

### 4. Naloga -  Nakup
Sedaj se odpravimo v trgovino po nakupih. Program naj vpraša po **številu izdelkov**, ki jih želite nakupiti in nato še po **izdelkih**. Program naj na koncu izpiše **vsoto cen vseh vnesenih izdelkov**. Če slovar izdelka nima, naj ga preskoči.
**Primer**
```lua
Število izdelkov: 3
Vnesi izdelek: ananas
Vnesi izdelek: jagode
Vnesi izdelek: solata
Skupna cena: 5.6
```

### 4. Naloga - Dodatna
V trgovini ponavadi ne kupimo le ene stvari, zato nadgradite program s tem, da vas vpraša še po **količini izdelka**.
**Primer**
```lua
Število izdelkov: 3
Vnesi izdelek: ananas
Vnesi količino: 2
Vnesi izdelek: jagode
Vnesi količino: 3
Vnesi izdelek: solata
Vnesi količino: 5
Skupna cena: 14.3
```

### 5. Naloga - Podražitev
Prišlo je do podražitve izdelkov. Program naj vas vpraša po **ceni**, za katero podraži vse izdelke. Izpiši nov slovar.
**Primer**
```lua
Vnesi podražitev: 1.5
{'ananas': 4.0, 'banana': 2.6, 'grozdje': 3.2, 'jagode': 4.6, 'borovnice': 3.2}
```

### 5. Naloga - Dodatna
Pri spreminjanju cen si želimo več nadzora. Program naj za vsak izdelek izpeše **ime**, **trenutno ceno** in vpraša po **novi ceni**. Če nove cene ne podamo, naj se ne spremeni.
**Primer**
```lua
Izdelek: ananas, trenutna cena: 2.5
Vnesi novo ceno: 1
Izdelek: banana, trenutna cena: 1.1
Vnesi novo ceno: 2
Izdelek: grozdje, trenutna cena: 1.7
Vnesi novo ceno: 3
Izdelek: jagode, trenutna cena: 3.1
Vnesi novo ceno: 5
Izdelek: borovnice, trenutna cena: 1.7
Vnesi novo ceno: 8
{'ananas': 1, 'banana': 2, 'grozdje': 3, 'jagode': 5, 'borovnice': 8}
```

## Rešitve
### 1. Naloga
```python
izdelki = {
	"ananas": 2.5,
	"banana": 1.1,
	"grozdje": 1.7,
	"jagode": 3.1,
	"borovnice": 1.7
}
```

### 2. Naloga
```python
izdelek = input("Vnesi nov izdelek: ")
cena = input("Vnesi ceno: ")

izdelki[izdelek] = cena
print(izdelki)
```

### 2. Naloga - Dodatna
```python
stevilo_izdelkov = int(input("Koliko novih izdelkov? "))
for i in range(stevilo_izdelkov):
    ime = input("Vnesi nov izdelek: ")
    izdelki[ime] = float(input("Vnesi ceno: "))

print(izdelki)
```

### 3. Naloga
```python
mejna_cena = float(input("Vnesi ceno: "))

print(f"Izdelki dražji od {mejna_cena} evrov:")
for izdelek, cena in izdelki.items():
    if (cena > mejna_cena):
        print(izdelek)
```

### 3. Naloga - Dodatna
```python
most_expensive = []
for izdelek, cena in izdelki.items():
    if (len(most_expensive) == 0):
        most_expensive.append(izdelek) # Ce je seznam prazen, dodamo element
    elif cena > izdelki[most_expensive[0]]:
        most_expensive = [izdelek] # Ce je trenutna cena višja, seznam prepišemo s trenutnim izdelkom
    elif cena == izdelki[most_expensive[0]]:
        most_expensive.append(izdelek) # Ce je trenutna cena enaka, izdelek dodamo

print(most_expensive)
```

### 4. Naloga
```python
stevilo_izdelkov = int(input("Število izdelkov: "))
skupna_vsota = 0
for i in range(stevilo_izdelkov):
    izdelek = input("Vnesi izdelek: ")
    if izdelek in izdelki:
        skupna_vsota += izdelki[izdelek]
        
print(skupna_vsota)
```

### 4. Naloga - Dodatna
```python
stevilo_izdelkov = int(input("Število izdelkov: "))
skupna_vsota = 0
for i in range(stevilo_izdelkov):
    izdelek = input("Vnesi izdelek: ")
    kolicina = int(input("Vnesi kolicino: "))
    if izdelek in izdelki:
        skupna_vsota += izdelki[izdelek] * kolicina
        
print(skupna_vsota)
```

### 5. Naloga
```python
podrazitev = float(input("Vnesi podražitev: "))
for izdelek, cena in izdelki.items():
    izdelki[izdelek] = cena + podrazitev
    
print(izdelki)
```

### 5. Naloga - Dodatna
```python
for izdelek, cena in izdelki.items():
    print(f"Izdelek: {izdelek}, trenutna cena: {cena}")
    nova_cena = input("Vnesi novo ceno: ")
    if (nova_cena != ""):
        nova_cena = int(nova_cena)
        izdelki[izdelek] = nova_cena

print(izdelki)
```
