let allTopicQuestions = [
    {
      "id": 1,
      "question": "Welches Keyword ermöglicht es, einer Variable später einen neuen Wert zuzuweisen?",
      "topic": "js",
      "options": [
        {"text": "const", "isCorrect": false, "feedback": "Falsch. const steht für 'constant' und verhindert eine Neuzuweisung."},
        {"text": "let", "isCorrect": true, "feedback": "Richtig! let erlaubt es, den Wert einer Variable später im Code zu ändern."},
        {"text": "static", "isCorrect": false, "feedback": "Nicht ganz. static wird für Klassenmethoden verwendet, nicht für normale Variablen."},
        {"text": "fixed", "isCorrect": false, "feedback": "Nein. Ein Keyword namens 'fixed' gibt es in JavaScript zur Deklaration nicht."}
      ]
    },
    {
      "id": 2,
      "question": "Wie sieht die korrekte Syntax für einen Ternary Operator aus?",
      "topic": "js",
      "options": [
        {"text": "condition : true ? false", "isCorrect": false, "feedback": "Falsch. Das Fragezeichen muss vor dem ersten Ausdruck stehen."},
        {"text": "condition ?? true", "isCorrect": false, "feedback": "Das ist der Nullish Coalescing Operator, nicht der Ternary Operator."},
        {"text": "if (condition) { true }", "isCorrect": false, "feedback": "Das ist ein normales if-Statement, kein Ternary Operator."},
        {"text": "condition ? true : false", "isCorrect": true, "feedback": "Genau! Es ist die Kurzform für ein if-else Statement."},

      ]
    },
    {
      "id": 3,
      "question": "Welche Methode wandelt einen JSON-String in ein JavaScript-Objekt um?",
      "topic": "js",
      "options": [
        {"text": "JSON.stringify()", "isCorrect": false, "feedback": "Knapp vorbei! stringify macht aus einem Objekt einen String."},
        {"text": "JSON.parse()", "isCorrect": true, "feedback": "Richtig! parse 'liest' den String und erstellt ein Objekt daraus."},
        {"text": "JSON.toObject()", "isCorrect": false, "feedback": "Diese Methode existiert in JavaScript nicht."},
        {"text": "JSON.convert()", "isCorrect": false, "feedback": "JavaScript nutzt parse() und stringify() für Konvertierungen."}
      ]
    },
    {
      "id": 4,
      "question": "Was ist das Ergebnis von '2' + 2?",
      "topic": "js",
      "options": [
        {"text": "4", "isCorrect": false, "feedback": "Leider nein. Da ein Operand ein String ist, findet kein Mathe statt."},
        {"text": "NaN", "isCorrect": false, "feedback": "NaN tritt auf, wenn Mathe fehlschlägt. Hier wird es aber einfach als Text behandelt."},
        {"text": "22", "isCorrect": true, "feedback": "Richtig! JavaScript verbindet (konkateniert) hier einfach die beiden Zeichen."},
        {"text": "Error", "isCorrect": false, "feedback": "Kein Error. JS ist flexibel (oder verrückt) genug, das zu berechnen."}
      ]
    },
    {
      "id": 5,
      "question": "Welche Methode prüft, ob ein Array einen bestimmten Wert enthält?",
      "topic": "js",
      "options": [
        {"text": "contains()", "isCorrect": false, "feedback": "Gibt es im DOM, aber nicht für Arrays."},
        {"text": "includes()", "isCorrect": true, "feedback": "Korrekt! includes() liefert true oder false zurück."},
        {"text": "has()", "isCorrect": false, "feedback": "has() wird für Sets oder Maps genutzt, nicht für Arrays."},
        {"text": "exists()", "isCorrect": false, "feedback": "Diese Methode gibt es standardmäßig nicht in JavaScript."}
      ]
    },
    {
      "id": 6,
      "question": "Was macht der strikte Vergleichsoperator '==='?",
      "topic": "js",
      "options": [
        {"text": "Prüft nur den Wert", "isCorrect": false, "feedback": "Das macht nur der doppelte Operator '=='."},
        {"text": "Prüft Wert und Datentyp", "isCorrect": true, "feedback": "Richtig! Das ist der sicherste Weg zu vergleichen."},
        {"text": "Weist einen Wert zu", "isCorrect": false, "feedback": "Zuweisungen erfolgen mit einem einfachen '='."},
        {"text": "Löscht eine Variable", "isCorrect": false, "feedback": "Nein, das hat nichts mit Vergleichen zu tun."}
      ]
    },
    {
      "id": 7,
      "question": "Wie sieht die Syntax einer Arrow-Function aus?",
      "topic": "js",
      "options": [
        {"text": "function() => {}", "isCorrect": false, "feedback": "Das Keyword 'function' wird bei Arrow Functions weggelassen."},
        {"text": "=> () {}", "isCorrect": false, "feedback": "Falsche Reihenfolge. Die Klammern kommen zuerst."},
        {"text": "call => {}", "isCorrect": false, "feedback": "Nein, das ist keine gültige Deklaration."},
        {"text": "() => {}", "isCorrect": true, "feedback": "Korrekt! Das ist die moderne Kurzschreibweise."},
      ]
    },
    {
      "id": 8,
      "question": "Welcher Wert ist 'falsy' (wird als false gewertet)?",
      "topic": "js",
      "options": [
        {"text": "[]", "isCorrect": false, "feedback": "Überraschung! Ein leeres Array ist in JavaScript immer 'truthy'."},
        {"text": "0", "isCorrect": true, "feedback": "Richtig! Die Zahl 0 wird in Bedingungen als false behandelt."},
        {"text": "'false'", "isCorrect": false, "feedback": "Ein String mit Inhalt (auch 'false') ist immer truthy."},
        {"text": "{}", "isCorrect": false, "feedback": "Leere Objekte sind in JavaScript truthy."}
      ]
    },
    {
      "id": 9,
      "question": "Was macht Array.map()?",
      "topic": "js",
      "options": [
        {"text": "Verändert das Original", "isCorrect": false, "feedback": "Nein, map() lässt das ursprüngliche Array unverändert."},
        {"text": "Erstellt ein neues Array", "isCorrect": true, "feedback": "Richtig! Jedes Element wird transformiert und in einem neuen Array gespeichert."},
        {"text": "Löscht Elemente", "isCorrect": false, "feedback": "Dafür nutzt man filter()."},
        {"text": "Sortiert Zahlen", "isCorrect": false, "feedback": "Dafür gibt es die sort() Methode."}
      ]
    },
    {
      "id": 10,
      "question": "Wie fügt man ein Element am Ende eines Arrays hinzu?",
      "topic": "js",
      "options": [
        {"text": "push()", "isCorrect": true, "feedback": "Korrekt! push() schiebt es ans Ende."},
        {"text": "pop()", "isCorrect": false, "feedback": "Nein, pop() entfernt das letzte Element."},
        {"text": "shift()", "isCorrect": false, "feedback": "shift() entfernt das erste Element."},
        {"text": "unshift()", "isCorrect": false, "feedback": "unshift() fügt es am Anfang hinzu."}
      ]
    },
    //HTML
    {
    "id": 11,
    "question": "Wofür steht die Abkürzung HTML?",
    "topic": "html",
    "options": [
      {"text": "Hypertext Markup Language", "isCorrect": true, "feedback": "Richtig! Es ist die Standard-Auszeichnungssprache für Dokumente im Web."},
      {"text": "Hyperlink und Text Management", "isCorrect": false, "feedback": "Falsch, das 'M' steht für Markup."},
      {"text": "Home Tool Markup Language", "isCorrect": false, "feedback": "Leider nein."},
      {"text": "Hyper Transfer Markup Language", "isCorrect": false, "feedback": "Nicht ganz, Hypertext ist der richtige Begriff."}
    ]
  },
  {
    "id": 12,
    "question": "Welches Tag wird verwendet, um die wichtigste Überschrift einer Seite zu definieren?",
    "topic": "html",
    "options": [
      {"text": "<h1>", "isCorrect": true, "feedback": "Korrekt! <h1> ist die hierarchisch höchste Überschrift."},
      {"text": "<head>", "isCorrect": false, "feedback": "Nein, <head> enthält Metadaten, keine sichtbaren Überschriften."},
      {"text": "<h6>", "isCorrect": false, "feedback": "Falsch, <h6> ist die kleinste/unwichtigste Überschriften-Ebene."},
      {"text": "<header>", "isCorrect": false, "feedback": "<header> ist ein Container für einleitende Inhalte."}
    ]
  },
  {
    "id": 13,
    "question": "Wie erstellt man einen Hyperlink in HTML?",
    "topic": "html",
    "options": [
      {"text": "<a href='url'>Text</a>", "isCorrect": true, "feedback": "Genau! Das <a> Tag mit dem href-Attribut erzeugt Links."},
      {"text": "<link url='url'>", "isCorrect": false, "feedback": "Falsch, <link> wird meist im Head für externe Ressourcen wie CSS genutzt."},
      {"text": "<a>url</a>", "isCorrect": false, "feedback": "Ohne href-Attribut führt der Link nirgendwohin."},
      {"text": "<href>url</href>", "isCorrect": false, "feedback": "href ist ein Attribut, kein eigenständiges Tag."}
    ]
  },
  {
    "id": 14,
    "question": "Welches Element wird für eine ungeordnete Liste (mit Aufzählungspunkten) verwendet?",
    "topic": "html",
    "options": [
      {"text": "<ul>", "isCorrect": true, "feedback": "Korrekt! <ul> steht für 'unordered list'."},
      {"text": "<ol>", "isCorrect": false, "feedback": "<ol> steht für 'ordered list' (nummeriert)."},
      {"text": "<li>", "isCorrect": false, "feedback": "<li> definiert die einzelnen Listeneinträge innerhalb einer Liste."},
      {"text": "<list>", "isCorrect": false, "feedback": "Ein <list> Tag existiert in HTML nicht."}
    ]
  },
  {
    "id": 15,
    "question": "Welches Attribut wird verwendet, um den Pfad zu einem Bild im <img>-Tag anzugeben?",
    "topic": "html",
    "options": [
      {"text": "src", "isCorrect": true, "feedback": "Richtig! src steht für 'source' (Quelle)."},
      {"text": "href", "isCorrect": false, "feedback": "href wird für Links verwendet, nicht für Bilder."},
      {"text": "alt", "isCorrect": false, "feedback": "alt definiert den Alternativtext, falls das Bild nicht geladen wird."},
      {"text": "link", "isCorrect": false, "feedback": "link ist kein Attribut des <img> Tags."}
    ]
  },
  {
    "id": 16,
    "question": "Welches Tag erzeugt einen Zeilenumbruch ohne einen neuen Absatz zu beginnen?",
    "topic": "html",
    "options": [
      {"text": "<br>", "isCorrect": true, "feedback": "Korrekt! <br> steht für 'break'."},
      {"text": "<break>", "isCorrect": false, "feedback": "Falsch, das Tag heißt nur <br>."},
      {"text": "<p>", "isCorrect": false, "feedback": "<p> erzeugt einen neuen Absatz mit Abstand."},
      {"text": "<lb>", "isCorrect": false, "feedback": "Dieses Tag existiert in HTML nicht."}
    ]
  },
  {
    "id": 17,
    "question": "Welches Element wird benutzt, um ein Formular-Eingabefeld zu erstellen?",
    "topic": "html",
    "options": [
      {"text": "<input>", "isCorrect": true, "feedback": "Richtig! Mit dem type-Attribut kann man verschiedene Felder definieren."},
      {"text": "<form>", "isCorrect": false, "feedback": "<form> ist der Container, der die Eingabefelder umschließt."},
      {"text": "<field>", "isCorrect": false, "feedback": "Falsch, das korrekte Tag ist <input>."},
      {"text": "<button>", "isCorrect": false, "feedback": "<button> erzeugt eine Schaltfläche, kein Texteingabefeld."}
    ]
  },
  {
    "id": 18,
    "question": "Was bewirkt das Attribut target='_blank' in einem Link?",
    "topic": "html",
    "options": [
      {"text": "Öffnet den Link in einem neuen Tab/Fenster", "isCorrect": true, "feedback": "Korrekt! Das ist der Standardweg für externe Links."},
      {"text": "Macht den Link unsichtbar", "isCorrect": false, "feedback": "Nein, das hat keinen Einfluss auf die Sichtbarkeit."},
      {"text": "Löscht den Inhalt des Links", "isCorrect": false, "feedback": "Falsch."},
      {"text": "Öffnet den Link im selben Fenster", "isCorrect": false, "feedback": "Das wäre das Standardverhalten (_self)."}
    ]
  },
  {
    "id": 19,
    "question": "Welches HTML-Element definiert den Titel einer Webseite, der im Browser-Tab erscheint?",
    "topic": "html",
    "options": [
      {"text": "<title>", "isCorrect": true, "feedback": "Richtig! Das <title> Tag gehört in den <head> Bereich."},
      {"text": "<head>", "isCorrect": false, "feedback": "<head> enthält den Titel, ist aber nicht der Titel selbst."},
      {"text": "<meta>", "isCorrect": false, "feedback": "<meta> Tags enthalten Informationen für Suchmaschinen, nicht den Tab-Titel."},
      {"text": "<header>", "isCorrect": false, "feedback": "Der <header> ist ein sichtbarer Bereich auf der Webseite."}
    ]
  },
  {
    "id": 20,
    "question": "Wie schreibt man einen Kommentar in HTML?",
    "topic": "html",
    "options": [
      {"text": "<!-- Kommentar -->", "isCorrect": true, "feedback": "Genau so werden Kommentare in HTML verfasst."},
      {"text": "// Kommentar", "isCorrect": false, "feedback": "Das ist ein einzeiliger Kommentar in JavaScript."},
      {"text": "/* Kommentar */", "isCorrect": false, "feedback": "Das ist die Kommentar-Syntax für CSS und JS."},
      {"text": "' Kommentar", "isCorrect": false, "feedback": "Das wird in HTML nicht als Kommentar erkannt."}
    ]
  },
  //CSS
  {
    "id": 31,
    "question": "Welche Eigenschaft bei einem Flex-Container definiert die Ausrichtung der Elemente aus der X-Achse?",
    "topic": "css",
    "options": [
      {"text": "justify-content", "isCorrect": true, "feedback": "Korrekt! Damit steuerst du Abstände und Ausrichtung auf der Hauptachse."},
      {"text": "align-items", "isCorrect": false, "feedback": "Nein, align-items steuert die Querachse Y-Achse."},
      {"text": "align-content", "isCorrect": false, "feedback": "Falsch, das wirkt nur bei mehrzeiligen Flex-Containern."},
      {"text": "flex-direction", "isCorrect": false, "feedback": "Das legt nur die Richtung der Achse fest, nicht die Ausrichtung der Inhalte."}
    ]
  },
  {
    "id": 32,
    "question": "Was bewirkt der Wert 'flex: 1;' bei einem Flex-Item?",
    "topic": "css",
    "options": [
      {"text": "Es lässt das Element den verfügbaren Platz gleichmäßig ausfüllen", "isCorrect": true, "feedback": "Richtig! Es ist die Kurzschreibweise für flex-grow: 1, flex-shrink: 1 und flex-basis: 0%."},
      {"text": "Es fixiert die Breite auf 1 Pixel", "isCorrect": false, "feedback": "Nein, das hat nichts mit Pixeln zu tun."},
      {"text": "Es macht das Element unsichtbar", "isCorrect": false, "feedback": "Falsch, das wäre opacity: 0 oder display: none."},
      {"text": "Es setzt die Ordnung des Elements auf 1", "isCorrect": false, "feedback": "Dafür nutzt man die Eigenschaft 'order'."}
    ]
  },
  {
    "id": 33,
    "question": "Wie verteilt man in einer Flexbox die Elemente so, dass das erste am Anfang und das letzte am Ende steht, während der Rest gleichmäßig dazwischen verteilt wird?",
    "topic": "css",
    "options": [
      {"text": "justify-content: space-between;", "isCorrect": true, "feedback": "Korrekt! space-between nutzt den gesamten Platz zwischen den Elementen."},
      {"text": "justify-content: space-around;", "isCorrect": false, "feedback": "Fast, aber space-around lässt auch an den äußeren Rändern Platz."},
      {"text": "justify-content: center;", "isCorrect": false, "feedback": "Nein, das würde alle Elemente in der Mitte zusammenrücken."},
      {"text": "align-content: stretch;", "isCorrect": false, "feedback": "Falsch, das bezieht sich auf die Querachse bei Mehrzeiligkeit."}
    ]
  },
  {
    "id": 34,
    "question": "Welcher Selektor spricht ein Element nur an, wenn man mit der Maus darüberfährt?",
    "topic": "css",
    "options": [
      {"text": ":hover", "isCorrect": true, "feedback": "Korrekt! Das ist eine Pseudoklasse für Interaktionen."},
      {"text": ":active", "isCorrect": false, "feedback": ":active gilt nur während des Klick-Moments."},
      {"text": ":focus", "isCorrect": false, "feedback": ":focus gilt, wenn ein Element (z. B. Input) angewählt ist."},
      {"text": ":visited", "isCorrect": false, "feedback": "Das gilt nur für bereits besuchte Links."}
    ]
  },
  {
  "id": 35,
  "question": "Ein Element hat 'position: absolute; top: 0;'. Woran orientiert es sich bei der Positionierung?",
  "topic": "css",
  "options": [
    {"text": "Am nächsten Elternelement mit einer Positionierung ungleich 'static'", "isCorrect": true, "feedback": "Korrekt! Es sucht das nächste Eltern-Element mit 'relative', 'absolute' oder 'fixed'."},
    {"text": "Immer am direkt übergeordneten HTML-Element", "isCorrect": false, "feedback": "Falsch, ist das Eltern-Element 'static' (Standard), wird es ignoriert."},
    {"text": "Immer am Browserfenster (Viewport)", "isCorrect": false, "feedback": "Nein, das wäre das Verhalten von 'position: fixed'."},
    {"text": "An der aktuellen Textzeile", "isCorrect": false, "feedback": "Falsch, das wäre eher das Verhalten von Inline-Elementen."}
  ]
  },
  {
    "id": 36,
    "question": "Welche Eigenschaft verhindert, dass ein Flex-Item kleiner wird als sein Inhalt?",
    "topic": "css",
    "options": [
      {"text": "flex-shrink: 0;", "isCorrect": true, "feedback": "Korrekt! Damit unterbindest du das Schrumpfen des Elements innerhalb einer Flexbox."},
      {"text": "flex-grow: 0;", "isCorrect": false, "feedback": "Das verhindert nur das automatische Ausdehnen."},
      {"text": "overflow: hidden;", "isCorrect": false, "feedback": "Das versteckt nur den überstehenden Inhalt."},
      {"text": "display: block;", "isCorrect": false, "feedback": "Das ändert nur das generelle Verhalten, schützt aber nicht vor Flex-Kompression."}
    ]
  },
  {
    "id": 37,
    "question": "Was bewirkt 'box-sizing: border-box;'?",
    "topic": "css",
    "options": [
      {"text": "Padding und Border werden in die Breite/Höhe eingerechnet", "isCorrect": true, "feedback": "Richtig! Das macht Layout-Berechnungen viel einfacher und intuitiver."},
      {"text": "Das Element wird automatisch zentriert", "isCorrect": false, "feedback": "Nein, das hat keinen Einfluss auf die Position."},
      {"text": "Der Außenabstand (Margin) wird ignoriert", "isCorrect": false, "feedback": "Margin ist nie Teil der Größenberechnung von border-box."},
      {"text": "Es macht das Element quadratisch", "isCorrect": false, "feedback": "Leider nein."}
    ]
  },
  {
  "id": 38,
  "question": "Welches Problem tritt häufig auf, wenn man 'height: 100vh;' auf mobilen Browsern verwendet?",
  "topic": "css",
  "options": [
    {"text": "Die Adressleiste des Browsers kann Teile des Inhalts verdecken", "isCorrect": true, "feedback": "Richtig! 'vh' berücksichtigt die dynamischen UI-Elemente wie die Adressleiste nicht. 'dvh' (dynamic view height) löst dieses Problem heute oft."},
    {"text": "Das Element wird automatisch nur 50% hoch", "isCorrect": false, "feedback": "Nein, 100vh entspricht theoretisch immer der vollen Viewport-Höhe."},
    {"text": "Die Breite des Elements wird ebenfalls auf 100% gesetzt", "isCorrect": false, "feedback": "Falsch, 'vh' bezieht sich ausschließlich auf die Höhe."},
    {"text": "Die Einheit wird von mobilen Browsern nicht unterstützt", "isCorrect": false, "feedback": "Doch, 'vh' wird unterstützt, führt aber zu den genannten Layout-Problemen."}
  ]
},
  {
    "id": 39,
    "question": "Welche Eigenschaft ermöglicht es, ein Element sanft von einem Zustand in einen anderen zu überführen?",
    "topic": "css",
    "options": [
      {"text": "transition", "isCorrect": true, "feedback": "Richtig! Damit kannst du Dauer und Art einer Änderung festlegen."},
      {"text": "animation", "isCorrect": false, "feedback": "Animationen sind komplexer und nutzen Keyframes; für einfache Wechsel ist transition besser."},
      {"text": "transform", "isCorrect": false, "feedback": "Transform verändert das Aussehen (Größe, Drehung), steuert aber nicht die Zeitdauer."},
      {"text": "change-style", "isCorrect": false, "feedback": "Diese Eigenschaft gibt es nicht."}
    ]
  },
  {
    "id": 40,
    "question": "Wozu dient eine 'Media Query'?",
    "topic": "css",
    "options": [
      {"text": "Um CSS-Regeln abhängig von der Bildschirmgröße anzuwenden", "isCorrect": true, "feedback": "Genau! Das ist die Grundlage für Responsive Web Design."},
      {"text": "Um Videos in die Webseite einzubinden", "isCorrect": false, "feedback": "Dafür nutzt man das HTML <video> Tag."},
      {"text": "Um Bilder zu komprimieren", "isCorrect": false, "feedback": "CSS kann keine Bilder komprimieren."},
      {"text": "Um eine Datenbank-Abfrage zu starten", "isCorrect": false, "feedback": "CSS hat keinen Zugriff auf Datenbanken."}
    ]
  }
];