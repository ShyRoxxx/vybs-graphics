# Arbeitsanweisungen für dieses Repository

Interne Hinweise für die Entwicklung und Wartung der Website von Vybs Graphics. Diese Datei ist keine
Dokumentation für die Website selbst und wird nicht veröffentlicht.

## Wartung: jede Änderung ins Bilbao-CRM

Diese Website ist das Kundenprojekt „Vybs Graphics — Website“ von Bilbao Consulting (Projekt-ID im CRM: `1f17fd29-9af8-45c9-8bcd-c592f90ae312`).

Jede Änderung, die live geht – auch eine kleine, auch auf kurzen Zuruf im Chat –, wird nach dem erfolgreichen Deployment mit dem Connector „Bilbao CRM“ festgehalten. Das ist Pflicht und braucht keine Rückfrage:

- `log_website_change` mit `project_id: "1f17fd29-9af8-45c9-8bcd-c592f90ae312"`.
- `summary`: ein Satz für den Kunden, ohne Fachbegriffe – was sich für ihn oder seine Besucher geändert hat (z. B. „Öffnungszeiten für die Weihnachtstage ergänzt“, „Sicherheitsupdates eingespielt“).
- `details`: das Technische für uns (Dateien, Ursache, Versionen). Geht nie an den Kunden.
- `category` passend wählen, `pull_request_url` und `deployment_url` mitgeben.
- Was in einer Sitzung zusammengehört, ist ein Eintrag. Interne Arbeit ohne sichtbare Wirkung (Aufräumen, Tests) mit `include_in_report: false`.
- Danach in der Abschlussnachricht bestätigen: „Im Wartungsprotokoll eingetragen: …“. Klappt der Eintrag nicht, das ausdrücklich sagen.

Aus diesen Einträgen entsteht der monatliche Wartungsbericht an den Kunden – als Entwurf, der vor dem Versand geprüft wird.
