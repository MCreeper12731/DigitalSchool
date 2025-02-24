# Python - Seznami in zanke
## Uvod
### Seznami
Tip spremenljivke, kjer lahko v eni spremenljivki hranimo več vrednosti. Definiramo ga tako, da med oglata oklepaja [ ] naštejemo vrednosti, ločene z vejico.
```python
seznam_stevil = [3, 5, 8]
mesan_seznam = ["a", 1, True]
```
Seznam lahko izpišemo v celoti ali pa samo del
```python
print(seznam_stevil)        # [3, 5, 8]
print(seznam_stevil[1])     # 5
```
V seznam lahko dodajamo nove elemente
```python
seznam_stevil.append(13)
print(seznam_stevil)        # [3, 5, 8, 13]
```

### Zanke
Zanke se uporabljajo, da določen kos kode ponovimo večkrat. `for` zanke
se pogosto uporabljajo s seznami. Primer izpisa elementov seznama:
```python
seznam_jezikov = ["HTML", "CSS", "Java", "Python", "Scratch"]
for jezik in seznam_jezikov:
	print(jezik)
```
```lua
HTML
CSS
Java
Python
Scratch
```

Na tak način se `for` zanke 'sprehodijo' čez vse elemente seznama\
`seznam_jezikov`, kjer ima vsako ponovitev zanke spremenljivka `jezik`
naslednjo vrednost v seznamu (najprej `"HTML"`, potem `"CSS"`, ...).

V zankah lahko uporabimo tudi spremenljivke, ki smo jih definirali izven
zank. Primer vsote vseh elementov seznama:
```python
seznam_stevil = [10, 20, 30, 40]
# spremenljivke morajo vedno vsebovati neko vrednost,
# zato na začetku nastavimo na 0
vsota = 0
for stevilo in seznam_stevil:
	vsota += stevilo
print(f"Vsota seznama: {vsota}")
```
```lua
Vsota seznama: 100
```
Ker v tem primeru želimo izračunati vsoto, potrebujemo spremenljivko, ki
se ne bo ponastavila vsako ponovitev zanke. Spremenljivke, definirane
znotraj zank bodo vedno ponovno ustvarjene z vrednostjo, ki jo
definiramo.
```python
for stevilo in seznam_stevil:
	# ta spremenljivka bo vsako ponovitev ponastavljena
	# na 10 tudi, če v zanki spremenimo vrednost
	spremenljivka_v_zanki = 10
	spremenljivka_v_zanki += stevilo
	print(spremenljivka_v_zanki)
```
```lua
20
30
40
50
```
Druga pomembna stvar pri seštevanju z zankami je operator `+=`. Ta
operator, namesto da prepiše vrednost spremenljivke `vsota`, prišteje
vrednosti, ki je že v spremenljivki.
```python
seznam_stevil = [10, 20, 30, 40]
vsota = 0
for stevilo in seznam_stevil:
	# v prvi ponovitvi bo vsota enaka 10, nato 20 in na koncu
	# zadnjemu elementu seznama - 40
	vsota = stevilo
print(f"Vsota seznama: {vsota}")
```
```lua
Vsota seznama: 40
```

## Naloge
### 1. Naloga - Skupna cena nakupa v trgovini
- Input: cene izdelkov ob nakupu (list)
- Output: vsota vseh cen (int)
- Tests:
```lua
[2.30, 4.70] -> 7.0
[5.50, 6.40, 7.20, 3.30, 4.20] -> 26.6
```

### 2. Naloga - Povprečna cena izdelka v trgovini
- Input: cene izdelkov v trgovini (list)
- Output: povprečna cena (int)
- Tests:
```lua
[2.30, 4.70] -> 3.5
[5.50, 6.40, 7.20, 3.30, 4.20] -> 5.28
```

### 3. Naloga - Vsebovanje elementa
- Input: seznam elementov (list), element
- Output: Ali je element v seznamu (bool)
- Tests:
```lua
["Cat", "Dog", "Hamster"], "Cat" -> True
[20, 50, -20], 40 -> False
["BMW, "Audi", "Toyota"], "Toyota" -> True
```

### 4. Naloga - Štetje elementa
- Input: seznam elementov (list), element
- Output: Kolikokrat se element pojavi v seznamu (int)
- Tests:
```lua
["Cat", "Dog", "Hamster"], "Cat" -> 1
["Cat", "Dog", "Cat", "Hamster", "Cat"], "Cat" -> 3
[20, 30, 40, 30, 70, 30], 50 -> 0
```

### 5. Naloga - Dvakratnik števil
- Input: seznam števil (list)
- Output: seznam dvakratnikov števil prvega seznama (list)
- Tests:
```lua
[0, 1, 3] -> [0, 2, 6]
[2, 4, 6, 8, 10] -> [4, 8, 12, 16, 20]
```

### 6. Naloga - Največje število
- Input: seznam števil (list)
- Output: največje število seznama (int)
- Tests:
```lua
[10, 30, 20] -> 30
[10, 50, -20, 30] -> 50
[-20, -10, -30, -50] -> -10
```

### 7. Naloga - Urejenost seznama
- Input: seznam števil (list)
- Output: ali je število v naraščajočem vrstnem redu (bool)
- Tests:
```lua
[0, 2, 5] -> True
[10, 20, 20, 30] -> True
[10, 30, 20, 20] -> False
[-10, 0, 10] -> True
```

## Dodatne naloge
### 5. Naloga - Množenje števil
- Input: seznam števil (list), število (int)
- Output: seznam, kjer so vsa števila pomnožena s številom (list)
- Tests:
```lua
[0, 1, 3] -> [0, 2, 6]
[2, 4, 6, 8, 10] -> [4, 8, 12, 16, 20]
```

### 6. Naloga - Najmanjše število
- Input: seznam števil (list)
- Output: najmanjše število seznama (int)
- Tests:
```lua
[10, 20, 30] -> 10
[10, 50, -20, 30] -> -20
[-20, -10, -30, -50] -> -50
```

## Rešitve
### 1. Naloga
```python
seznam = [2.30, 4.70]
vsota = 0
for element in seznam:
	vsota += element
print(vsota)
```

### 2. Naloga
```python
seznam = [2.30, 4.70]
vsota = 0
for element in seznam:
	vsota += element
povprecje = vsota / len(seznam)
print(povprecje)
```

### 3. Naloga
```python
seznam = ["Cat", "Dog", "Hamster"]
iskan_element = "Cat"
is_in_list = False
for element in seznam:
	if (element == iskan_element):
		is_in_list = True
print(is_in_list)
```

### 4. Naloga
```python
seznam = ["Cat", "Dog", "Hamster"]
iskan_element = "Cat"
stevec = 0
for element in seznam:
	if (element == iskan_element):
		stevec = stevec + 1   # alternativno: stevec += 1
print(stevec)
```

### 5. Naloga
```python
star_seznam = [0, 1, 3]
nov_seznam = []
for element in star_seznam:
	nov_element = element * 2 
	nov_seznam.append(nov_element)
print(nov_seznam)
```

### 5. Naloga - Dodatna
```python
star_seznam = [0, 1, 3]
faktor = int(input("Vnesi število za množenje"))
nov_seznam = []
for element in star_seznam:
	nov_element = faktor * element 
	nov_seznam.append(nov_element)
print(nov_seznam)
```

### 6. Naloga
```python
seznam = [0, 1, 2]
najvecji_element = seznam[0]
for element in seznam:
	if (element > najvecji_element)
		najvecji_element = element
print(najvecji_element)
```

### 6. Naloga - Dodatna
```python
seznam = [0, 1, 2]
najmanjsi_element = seznam[0] 
for element in seznam:
	if (element < najmanjsi_element)
		najmanjsi_element = element
print(najmanjsi_element)
```

### 7. Naloga
```python
seznam = [0, 2, 5]
prejsnji_element = seznam[0]
narascajoce = True
for element in seznam:
	if (prejsnji_element > element):
		narascajoce = False
	prejsnji_element = element
print(narascajoce)
```