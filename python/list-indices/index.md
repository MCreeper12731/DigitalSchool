# Python - Indeksi
## Naloge
V tem sklopu nalog bomo sestavili preprost sistem za beleženje učencev. 
### 1. Naloga - Beleženje imen
S funkcijo `input()` želimo prebrati imena učencev. Kot prvo vrednost preberemo število imen, nato pa preberemo toliko imen in jih shranimo v seznam. Na koncu seznam še izpišemo.<br>**Primer**
Vhod:
```lua
Marija
Janez
Ana
```
Izhod:
```lua
["Marija", "Janez", "Ana"]
```

### 2. Naloga - Naštevanje imen
Podan imamo seznam učencev, katerega želimo izpisati z zaporednimi številkami. Izpis naj se začne s številko 1.<br>**Primer**
Vhod:
```lua
["Marija", "Janez", "Ana"]
```
Izhod:
```lua
1. Marija
2. Janez
3. Ana
```

### 3. Naloga - Delitev v 3 skupine
Učence sedaj želimo razdeliti v 3 skupine tako, da gre prvi učenec v skupino 1, drugi v skupino 2, tretji v skupino 3, četrti ponovno v skupino 1, peti v skupino 2, itd. Na koncu vsako skupino izpišemo.<br>**Primer**
Vhod:
```lua
["Marija", "Janez", "Ana", "Martin", "Sara", "Luka"]
```
Izhod:
```lua
Skupina 1: ["Marija", "Martin"]
Skupina 2: ["Janez", "Sara"]
Skupina 3: ["Ana", "Luka"]
```

### 4. Naloga - Beleženje prisotnosti
Na začetku ure si želimo zapisati kateri učenci so prisotni. Za vsakega učenca v seznamu preberemo `True`, če je prisoten, ali `False`, če ni. Na koncu za pregled izpišemo samo prisotne učence.<br>**Primer**
Vhod:
```lua
["Marija", "Janez", "Ana"]
True
True
False
```
Izhod:
```lua
Danes so prisotni:
Marija
Janez
```

### 5. Naloga - Ocene
Po odpisanem testu si za vsakega učenca želimo zapisati dobljeno oceno. Za vsakega učenca izpiši njegovo zaporedno številko in število točk (1-100).<br>**Primer**
```lua
["Marija", "Janez", "Ana"]
98
56
78
```
```lua
1. Marija, točke: 98
2. Janez, točke: 56
3. Ana, točke: 78
```

## Dodatne naloge		
### 3. Naloga - Delitev v skupine
V nekaterih učilnicah želimo imeti različno število skupin. Preden učence razdelimo v skupine preberemo število skupin.<br>**Primer**
Vhod:
```lua
2
["Marija", "Janez", "Ana", "Martin", "Sara", "Luka"]
```
```lua
Skupina 1: ["Marija", "Ana", "Sara"]
Skupina 2: ["Janez", "Martin", "Luka"]
```

### 4. Naloga - Boljši izpis prisotnosti
Poleg izpisa prisotnih učencev, podobno kot pri nalogi 1, izpišemo še zaporedne številke.<br>**Primer**
Vhod:
```lua
["Marija", "Janez", "Ana"]
True
False
True
```
Izhod:
```lua
Danes so prisotni:
1. Marija
2. Ana
```

### 5. Naloga - Največ točk
Najboljšega učenca želimo nagraditi, zato na koncu želimo izpisati še učenca z največ točkami. Če je takih učencev več, naj se izpiše katerikoli.<br>**Primer**
Vhod:
```lua
["Marija", "Janez", "Ana"]
98
56
78
```
Izhod:
```lua
Največ točk je zbrala Marija
```

## Rešitve
### 1. Naloga
```python
st_ucencev = int(input("Vnesi stevilo ucencev: "))
seznam_imen = []
for i in range(st_ucencev):
	ime = input("Vnesi ime: ")
	seznam_imen.append(ime)
```

### 2. Naloga
```python
for i in range(st_ucencev):
	print(f"{i + 1}. {seznam_imen[i]}")
```

### 3. Naloga
```python
skupina_1 = []
skupina_2 = []
skupina_3 = []

for i in range(st_ucencev):
	if (i % 3 == 0):
		skupina_1.append(seznam_imen[i])
	elif (i % 3 == 1):
		skupina_2.append(seznam_imen[i])
	else:
		skupina_3.append(seznam_imen[i])
```

### 3. Naloga - Dodatna
```python
skupine = []

stevilo_skupin = int(input("Vnesi stevilo skupin: "))

for i in range(stevilo_skupin):
	skupine.append([])
	
for i in range(st_ucencev):
	stevilka_skupine = i % stevilo_skupin
	skupine[stevilka_skupine].append(seznam_imen[i])

for i in range(stevilo_skupin):
	print(f"Skupina {i + 1}: {skupine[i]}")
```

### 4. Naloga
```python
seznam_prisotnosti = []

for i in range(st_ucencev):
	prisoten = input(f"Ali je {seznam_imen[i]} prisoten/a? ")
	if (prisoten == "True"):
		seznam_prisotnosti.append(True)
	else:
		seznam_prisotnosti.append(False)

print("Danes so prisotni:")
for i in range(st_ucencev):
	if (seznam_prisotnosti[i]):
		print(seznam_imen[i])
```

### 5. Naloga
```python
seznam_ocen = []

for i in range(st_ucencev):
	ocena = int(input(f"Vnesi oceno za {seznam_imen[i]}: "))
	seznam_ocen.append(ocena)
	
for i in range(st_ucencev):
	print(f"{i + 1}. {seznam_imen[i]}, tocke: {seznam_ocen[i]}")
```

### 5. Naloga - Dodatna
```python
index_najvecje_ocene = 0

for i in range(st_ucencev):
	if (seznam_ocen[i] > seznam_ocen[index_najvecje_ocene]):
		index_najvecje_ocene = i

print(f"Najvec tock je zbral/a {seznam_imen[i]}")
```