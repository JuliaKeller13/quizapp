let questions = [
{
  "quizTitle": "Modern JavaScript Mastery",
  "questions": [
    {
      "id": 1,
      "question": "Welches Keyword ermöglicht es, einer Variable später einen neuen Wert zuzuweisen?",
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
      "options": [
        {"text": "condition ? true : false", "isCorrect": true, "feedback": "Genau! Es ist die Kurzform für ein if-else Statement."},
        {"text": "condition : true ? false", "isCorrect": false, "feedback": "Falsch. Das Fragezeichen muss vor dem ersten Ausdruck stehen."},
        {"text": "if (condition) { true }", "isCorrect": false, "feedback": "Das ist ein normales if-Statement, kein Ternary Operator."},
        {"text": "condition ?? true", "isCorrect": false, "feedback": "Das ist der Nullish Coalescing Operator, nicht der Ternary Operator."}
      ]
    },
    {
      "id": 3,
      "question": "Welche Methode wandelt einen JSON-String in ein JavaScript-Objekt um?",
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
      "options": [
        {"text": "4", "isCorrect": false, "feedback": "Leider nein. Da ein Operand ein String ist, findet kein Mathe statt."},
        {"text": "22", "isCorrect": true, "feedback": "Richtig! JavaScript verbindet (konkateniert) hier einfach die beiden Zeichen."},
        {"text": "NaN", "isCorrect": false, "feedback": "NaN tritt auf, wenn Mathe fehlschlägt. Hier wird es aber einfach als Text behandelt."},
        {"text": "Error", "isCorrect": false, "feedback": "Kein Error. JS ist flexibel (oder verrückt) genug, das zu berechnen."}
      ]
    },
    {
      "id": 5,
      "question": "Welche Methode prüft, ob ein Array einen bestimmten Wert enthält?",
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
      "options": [
        {"text": "function() => {}", "isCorrect": false, "feedback": "Das Keyword 'function' wird bei Arrow Functions weggelassen."},
        {"text": "() => {}", "isCorrect": true, "feedback": "Korrekt! Das ist die moderne Kurzschreibweise."},
        {"text": "=> () {}", "isCorrect": false, "feedback": "Falsche Reihenfolge. Die Klammern kommen zuerst."},
        {"text": "call => {}", "isCorrect": false, "feedback": "Nein, das ist keine gültige Deklaration."}
      ]
    },
    {
      "id": 8,
      "question": "Welcher Wert ist 'falsy' (wird als false gewertet)?",
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
      "options": [
        {"text": "push()", "isCorrect": true, "feedback": "Korrekt! push() schiebt es ans Ende."},
        {"text": "pop()", "isCorrect": false, "feedback": "Nein, pop() entfernt das letzte Element."},
        {"text": "shift()", "isCorrect": false, "feedback": "shift() entfernt das erste Element."},
        {"text": "unshift()", "isCorrect": false, "feedback": "unshift() fügt es am Anfang hinzu."}
      ]
    }
  ]
}
];