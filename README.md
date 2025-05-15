# Einheitsrechner

Das bei uns gebräuchliche [metrische System]() verwendet Masseinheiten, die sich jeweils um den Faktor zehn voneinander unterscheiden. (Beispiel: ein Meter sind zehn Dezimeter; ein Dezimenter sind zehn Zentimeter; ein Zentimeter sind zehn Millimeter.)

Das [imperiale System]() hingegen, das noch in den USA gebräuchlich ist, verwendet jedoch andere Umrechnungsregeln. Die Umrechnung von einer Einheit (z.B. Meile) in eine andere (z.B. Yard) ist daher nicht trivial und erfordert eine Umrechentabelle für diese Einheiten.

## Aufgabe

In der Datei `src/conversion.ts` ist die Umrechnung von verschiedenen imperialen Längenmassen in Meter implementiert (Funktion `convertToMeters`). Hierzu kommt die `conversionTable` zum Einsatz.

Der Code ist aber recht repetitiv. Möchte man eine weitere Einheit, z.B. _Furlong_ (entspricht 22 Yards) unterstützen, muss sehr viel Code dupliziert werden. Das ginge sicherlich einfacher.

Nehme ein Refactoring vor, um die Implementierung der Funktion `convertToMeters` besser erweiterbar zu machen. Kriterium: Kann eine weitere Längeneinheit unterstützt werden, ohne den Code der Funktion `convertToMeters` anzupassen, ist das Refactoring geglückt!

Schreibe hierzu Testfälle in `src/conversion.test.ts`. Ein Test ist bereits vorgegeben.

Um das Refactoring zu überprüfen, füge einen neuen Testfall für das Längenmass _Furlong_ (entspricht 22 Yards) ein. Gehe dabei gemäss TDD vor.
