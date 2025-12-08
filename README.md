# Web_Hybrid_Mobiiliohjelmointi_Tehtavalista

## 📱 React Native — TodoList with Reducer

**Tekijä:** Sara Vehviläinen  
**Oppilaitos:** Oulun ammattikorkeakoulu  
**Kurssi:** Web- ja hybriditeknologiat mobiiliohjelmoinnissa (IN00CT08-3009)  
**Lukukausi:** Syksy 2025

---

## 🍀 Tehtävän kuvaus

Laajennetaan aikaisemman viikon **todo-sovellusta** käyttämään `useReducer`-hookia tehtävien hallintaan. Kaikki tila (state) ja siihen liittyvät funktiot toteutetaan custom hookina. Luodaan `hooks`-kansio ja sinne `useTodos` custom hook.

Tietojen tallennus tapahtuu muistissa käyttäen `useReducer`-hookia, joka myös toteuttaa toiminnot rivien lisäämiseen ja merkitsemiseen. Tietoja **ei tarvitse** pysyvästi tallentaa (esim. AsyncStorage).

---

## 📊 Toiminnallisuus

Käyttäjä syöttää **uuden tehtävän tekstikenttään**.

Sovellus lisää tehtävän listalle painiketta painamalla.

Tehtävää klikkaamalla sen tila vaihtuu (tehty/tekemätön).

Tehdyt tehtävät näytetään yliviivattuina ja vaaleammalla värillä.

---

## ⚙️ Käytetyt teknologiat ja komponentit

**React Native (Expo)**

**React Hook:** `useReducer`, `useState`, `useCallback`

**React Native Komponentit:** `View`, `Text`, `TextInput`, `TouchableOpacity`, `FlatList`, `StyleSheet`, `SafeAreaView`

---

### Olemassa olevan projektin käynnistys:

```bash
# Asenna riippuvuudet
npm install

# Käynnistä kehityspalvelin
npx expo start
```

---

### Sovelluksen testaaminen:

#### 📱 Mobiililaite:

1. Asenna **Expo Go** -sovellus (iOS App Store / Google Play)
2. Skannaa QR-koodi Expo Go -sovelluksella

#### 💻 Emulaattori/Simulaattori:

```bash
npm run android    # Android-emulaattori
npm run ios        # iOS-simulaattori
npm run web        # Verkkoselain
```

---

## 📂 Projektikansio

```
Web_Hybrid_Mobiiliohjelmointi_T5/
├─ README.md
└─ Tehtava5/
   └─ Todolist/
      ├─ App.tsx                # Sovelluksen pääkomponentti
      ├─ app.json               # Expo-konfiguraatio
      ├─ index.ts               # Sovelluksen käynnistyspiste
      ├─ package.json           # Projektin riippuvuudet
      ├─ package-lock.json      # Lukitut riippuvuusversiot
      ├─ tsconfig.json          # TypeScript-asetukset
      ├─ types.ts               # TypeScript-tyyppimäärittelyt
      ├─ .gitignore             # Git-ohitettavat tiedostot
      ├─ assets/                # Kuvat ja resurssit
      ├─ components/
      │  ├─ TaskInput.tsx       # Syötekomponentti uusille tehtäville
      │  └─ TaskItem.tsx        # Yksittäisen tehtävän komponentti
      └─ hooks/
         └─ useTodos.ts         # Custom hook useReducerilla
```

---

## 🎓 Oppimistavoitteet

- React Native -perusteet
- React Hooks (`useReducer`)
- Käyttäjäsyötteen käsittely ja validointi
- Reaaliaikalkainen laskenta
- TypeScript React Native -sovelluksessa

---

## 📖 Huomioita

- Sovellus käyttää `useReducer`-hookia tilan hallintaan `useState`-hookin sijaan
- Reducer toteuttaa kaksi toimintoa: **ADD** (lisää uusi tehtävä) ja **TOGGLE** (vaihda tehtävän tila)
- Kaikki logiikka on eristetty `useTodos` custom hookiin - parempi uudelleenkäytettävyys
- Tiedot tallennetaan vain muistiin, **ei** käytetä `AsyncStorage`-persistointia
- TypeScript varmistaa tyyppiturvallisuuden läpi sovelluksen

---

## 📚 Oppimisresurssit

### React Native dokumentaatio:

- [React Native Documentation](https://reactnative.dev/) - Virallinen dokumentaatio
- [React Native TextInput](https://reactnative.dev/docs/textinput) - Tekstinsyötteen käsittely
- [React Native StyleSheet](https://reactnative.dev/docs/stylesheet) - Tyylien määrittely
- [React Native View](https://reactnative.dev/docs/view) - Pohjakomponentti layoutille
- [React Native Text](https://reactnative.dev/docs/text) - Tekstin näyttäminen

### React Hooks:

- [React useReducer Hook](https://react.dev/reference/react/useReducer) - Tilanhallinen peruskomponentti
- [React Hooks Documentation](https://react.dev/reference/react) - Kaikki React Hooks

### Expo dokumentaatio:

- [Expo Documentation](https://docs.expo.dev/) - Expo-alustan dokumentaatio
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) - Komentorivityökalut
- [Expo Go App](https://expo.dev/client) - Sovelluksen testaus mobiililaitteella

### TypeScript:

- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript-dokumentaatio
- [TypeScript with React Native](https://reactnative.dev/docs/typescript) - TypeScript React Native -sovelluksissa

### Matematiikka ja laskentakaavat:

- [All you need about React useReducer Hook - Medium](https://medium.com/@AbidKazmi/all-you-need-about-react-usereducer-hook56f7183312df) - useReducer-hookiin tutustuminen
- [React useReducer - W3Schools](https://www.w3schools.com/react/react_usereducer.asp) - Esimerkkejä useReducerista

---

## 🛠️ Työkalut ja ympäristöt:

- [VS Code React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) - Kehitystyökalut
- [Android Studio](https://developer.android.com/studio) - Android-emulaattori
- [Xcode](https://developer.apple.com/xcode/) - iOS-simulaattori
