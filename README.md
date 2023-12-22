# Modul 295 Prüfung

**Autor:** Mischa Barmettler

## Anleitung 

1. Installieren Sie Node.js
2. Installieren Sie Docker
3. Öffnen Sie das Projekt und starten Sie es mit einem Node.js Container
4. Installieren Sie die gegebenen Module
5. Wechseln Sie in das Verzeichnis "src"
6. Starten Sie die Anwendung mit dem Befehl 'node main.js'

## Endpunkte

### 1. Alle Tasks auflisten

- **URL:** `/tasks`
- **Methode:** `GET`
- **Authentifizierung:** Erforderlich
- **Beschreibung:** Stellt alle Tasks in der Liste dar.

### 2. Einen Task hinzufügen

- **URL:** `/tasks`
- **Methode:** `POST`
- **Authentifizierung:** Erforderlich
- **Beschreibung:** Fügt einen neuen Task zur Liste hinzu.

### 3. Task mit ID auflisten

- **URL:** `/tasks/:taskID`
- **Methode:** `GET`
- **Authentifizierung:** Erforderlich
- **Beschreibung:** Zeigt einen Task mit der angegebenen ID an.

### 4. Task aktualisieren

- **URL:** `/tasks/:taskID`
- **Methode:** `PATCH`
- **Authentifizierung:** Erforderlich
- **Beschreibung:** Aktualisiert einen spezifischen Task mit der angegebenen ID.

### 5. Task löschen

- **URL:** `/tasks/:taskID`
- **Methode:** `DELETE`
- **Authentifizierung:** Erforderlich
- **Beschreibung:** Löscht einen Task mit der angegebenen ID.

### 6. Benutzer Login

- **URL:** `/login`
- **Methode:** `POST`
- **Authentifizierung:** Nicht Erforderlich
- **Beschreibung:** Meldet einen Benutzer mit den richtigen Anmeldeinformationen an. (Erfordert eine E-Mail-Adresse).

### 7. Benutzer verifizieren

- **URL:** `/verify`
- **Methode:** `GET`
- **Authentifizierung:** Erforderlich
- **Beschreibung:** Überprüft, ob ein Benutzer angemeldet ist.

### 8. Benutzer Logout

- **URL:** `/logout`
- **Methode:** `DELETE`
- **Authentifizierung:** Erforderlich
- **Beschreibung:** Meldet einen angemeldeten Benutzer ab.
