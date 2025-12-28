# 🚀 Deployment-Checkliste für ai-consult.one

**Version:** 2.0  
**Datum:** 28. Dezember 2025  
**Status:** ✅ Bereit für Deployment

---

## ✅ Vor dem Deployment: Finale Checks

### 1. Dateien hochladen
Folgende Dateien wurden geändert/erstellt und müssen hochgeladen werden:

```bash
# Geänderte Dateien
playground/index.html           # ✏️ AKTUALISIERT
playground/impressum.html       # ✏️ AKTUALISIERT
playground/datenschutz.html     # ✏️ AKTUALISIERT
playground/style.css            # ✏️ AKTUALISIERT
playground/script.js            # ✏️ AKTUALISIERT

# Neue Dateien
playground/sitemap.xml          # 🆕 NEU
playground/robots.txt           # 🆕 NEU
```

### 2. Domain in Code ersetzen
Falls die echte Domain NICHT `ai-consult.one` ist, suchen & ersetzen in:
- `index.html` (Meta-Tags, Schema.org)
- `sitemap.xml` (alle URLs)

```bash
# Suchen nach:
https://ai-consult.one

# Ersetzen durch:
https://IHRE-ECHTE-DOMAIN.de
```

---

## 📋 Nach dem Deployment: Sofort-Aufgaben

### Schritt 1: Google Search Console Setup (15 Min)
1. ☐ Gehen Sie zu [Google Search Console](https://search.google.com/search-console)
2. ☐ Website hinzufügen: `https://ai-consult.one`
3. ☐ Domain-Inhaberschaft bestätigen (DNS oder HTML-Datei)
4. ☐ Sitemap einreichen: `https://ai-consult.one/sitemap.xml`
5. ☐ URL-Prüfung für alle 4 Seiten anfordern

**Erwartung:** Indexierung innerhalb 24-48 Stunden

---

### Schritt 2: Rich Results Test (5 Min)
1. ☐ [Google Rich Results Test](https://search.google.com/test/rich-results)
2. ☐ URL eingeben: `https://ai-consult.one`
3. ☐ Prüfen: Organization Schema erkannt?
4. ☐ Bei Fehlern: Anpassen und neu testen

**Erwartung:** "Dieser Link ist für Rich-Suchergebnisse geeignet"

---

### Schritt 3: Social Media Preview Tests (10 Min)

#### Facebook/LinkedIn
1. ☐ [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. ☐ URL eingeben und testen
3. ☐ "Erneut scrapen" klicken, wenn nötig
4. ☐ Preview-Bild und Titel prüfen

#### Twitter/X
1. ☐ [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. ☐ URL eingeben
3. ☐ Preview prüfen

**Problem?** Möglicherweise fehlt ein Open Graph Image. Erstellen Sie:
- `og-image.jpg` (1200x630px)
- Twitter-Bild (1200x675px)

---

### Schritt 4: Mobile & Accessibility Tests (15 Min)

#### Mobile-Friendly Test
☐ [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)  
☐ Ergebnis: "Seite ist für Mobilgeräte geeignet"

#### Lighthouse Audit (Chrome DevTools)
1. ☐ Chrome öffnen → F12 → Lighthouse Tab
2. ☐ "Generate Report" für Desktop & Mobile
3. ☐ Zielwerte:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 90+
   - SEO: 95+

#### WAVE Accessibility Test
☐ [WAVE Tool](https://wave.webaim.org/)  
☐ Keine kritischen Fehler (0 Errors erlaubt)

---

### Schritt 5: Browser-Tests (20 Min)

#### Desktop
- ☐ Chrome (neueste Version)
- ☐ Firefox (neueste Version)
- ☐ Safari (neueste Version)
- ☐ Edge (neueste Version)

#### Mobile
- ☐ iPhone Safari
- ☐ Android Chrome
- ☐ Tablet (iPad/Android)

**Prüfen:**
- ☐ Navigation funktioniert
- ☐ Hamburger-Menü öffnet/schließt
- ☐ Cookie-Banner erscheint (nur beim ersten Besuch)
- ☐ Beide Cookie-Buttons funktionieren
- ☐ Skip-Navigation funktioniert (Tab-Taste drücken)
- ☐ Alle Links funktionieren
- ☐ KI-Rechner erreichbar

---

## 🔍 Testing-Protokoll

### SEO-Tests
| Test | Tool | Ergebnis | Status |
|------|------|----------|--------|
| Meta-Tags | View Source | ☐ Alle vorhanden | ⏳ |
| Schema.org | Rich Results Test | ☐ Valid | ⏳ |
| Sitemap | GSC | ☐ Indexiert | ⏳ |
| Robots.txt | `/robots.txt` | ☐ Erreichbar | ⏳ |
| Open Graph | FB Debugger | ☐ Valid | ⏳ |
| Twitter Cards | Twitter Validator | ☐ Valid | ⏳ |

### Accessibility-Tests
| Test | Tool | Zielwert | Ergebnis | Status |
|------|------|----------|----------|--------|
| A11y Score | Lighthouse | 95+ | ☐ ___ | ⏳ |
| WAVE Scan | WAVE | 0 Errors | ☐ ___ | ⏳ |
| Keyboard Nav | Manuell | Funktional | ☐ | ⏳ |
| Screen Reader | NVDA/JAWS | Verständlich | ☐ | ⏳ |
| Focus Indicators | Visuell | Sichtbar | ☐ | ⏳ |

### Performance-Tests
| Metrik | Tool | Zielwert | Ergebnis | Status |
|--------|------|----------|----------|--------|
| LCP | PageSpeed | <2.5s | ☐ ___s | ⏳ |
| FID | PageSpeed | <100ms | ☐ ___ms | ⏳ |
| CLS | PageSpeed | <0.1 | ☐ ___ | ⏳ |
| Overall Score | PageSpeed | 90+ | ☐ ___ | ⏳ |

### Legal Compliance
| Prüfpunkt | Status | Notizen |
|-----------|--------|---------|
| ☐ Impressum vollständig | ⏳ | HRB, USt-ID, Tel OK? |
| ☐ Datenschutz aktuell | ⏳ | Hosting-Provider genannt? |
| ☐ Cookie-Banner funktional | ⏳ | Beide Buttons testen |
| ☐ Externe Links `rel` | ⏳ | noopener noreferrer? |

---

## 🐛 Bekannte Probleme & Lösungen

### Problem 1: Cookie-Banner erscheint nicht
**Ursache:** LocalStorage noch gesetzt vom Testing  
**Lösung:** 
```javascript
// In Browser-Konsole (F12):
localStorage.removeItem('cookieChoice');
location.reload();
```

### Problem 2: Sitemap nicht gefunden (404)
**Ursache:** Datei nicht hochgeladen oder falsche Berechtigung  
**Lösung:**
```bash
# SSH zum Server:
cd /pfad/zu/playground/
ls -la sitemap.xml robots.txt
# Falls nicht vorhanden: Hochladen
# Falls Berechtigung falsch:
chmod 644 sitemap.xml robots.txt
```

### Problem 3: Schema.org nicht erkannt
**Ursache:** JSON-LD Syntax-Fehler  
**Lösung:**
1. [JSON-LD Playground](https://json-ld.org/playground/) öffnen
2. JSON-LD Code aus `index.html` kopieren
3. Auf Fehler prüfen
4. Korrigieren und neu deployen

### Problem 4: Open Graph Bild wird nicht angezeigt
**Ursache:** Bild-URL falsch oder Bild nicht vorhanden  
**Lösung:**
1. `Design.svg` ist aktuell als OG-Image gesetzt
2. Besser: JPG/PNG erstellen (1200x630px)
3. Hochladen nach `/playground/og-image.jpg`
4. In `index.html` anpassen:
```html
<meta property="og:image" content="https://ai-consult.one/og-image.jpg">
```

---

## 📊 Monitoring nach Deployment

### Woche 1
- ☐ Täglich Google Search Console prüfen
- ☐ Indexierungs-Status beobachten
- ☐ Crawling-Fehler beheben (falls vorhanden)

### Woche 2-4
- ☐ Search Console: Impressions & Klicks tracken
- ☐ Position für Haupt-Keywords notieren
- ☐ Core Web Vitals überwachen

### Monat 2-3
- ☐ SEO-Rankings vergleichen (vorher/nachher)
- ☐ Organischer Traffic analysieren
- ☐ Conversion-Rate messen

**Erwartete Verbesserungen:**
- Woche 2: Indexierung aller Seiten
- Monat 1: +10-20% mehr Impressions
- Monat 2-3: +30-50% mehr organischer Traffic

---

## 🔧 Optionale Post-Deployment-Aufgaben

### Kurzfristig (nächste Woche)
1. ☐ **Favicon-Varianten erstellen**
   - Tools: [Favicon Generator](https://realfavicongenerator.net/)
   - Upload: favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png

2. ☐ **Open Graph Image erstellen**
   - Größe: 1200x630px
   - Format: JPG oder PNG
   - Inhalt: Logo + Slogan
   - Tool: Canva, Figma, Photoshop

3. ☐ **Google Analytics / Matomo einrichten**
   - DSGVO-konform (Cookie-less)
   - Event-Tracking für CTA-Buttons
   - Conversion-Tracking für KI-Rechner

### Mittelfristig (nächster Monat)
4. ☐ **Kontaktformular implementieren**
   - Alternative zu mailto-Link
   - SPAM-Schutz (Honeypot oder CAPTCHA)
   - Formular-Validierung

5. ☐ **FAQ-Sektion erstellen**
   - 8-10 häufige Fragen
   - Schema.org FAQPage
   - SEO-optimiert

6. ☐ **CSS/JS minimieren**
   - style.min.css erstellen
   - script.min.js erstellen
   - Performance-Boost: 10-20%

### Langfristig (nächste 3 Monate)
7. ☐ **Blog aufsetzen**
   - WordPress, Ghost oder statisch
   - Content-Plan erstellen
   - SEO für jeden Artikel

8. ☐ **Case Studies erweitern**
   - Eigene Seiten für jedes Projekt
   - Vorher/Nachher-Grafiken
   - Detaillierte Prozessbeschreibung

9. ☐ **Newsletter-System**
   - Mailchimp, Sendinblue oder Brevo
   - Double Opt-In
   - DSGVO-konform

---

## ✅ Deployment-Abnahme

**Vor Go-Live unterschreiben:**

```
☐ Alle Dateien hochgeladen
☐ Domain-Einstellungen korrekt
☐ SSL-Zertifikat aktiv (HTTPS)
☐ Google Search Console eingerichtet
☐ Sitemap eingereicht
☐ Basis-Tests durchgeführt (Mobile, Desktop)
☐ Cookie-Banner getestet
☐ Impressum & Datenschutz geprüft
☐ Backup der alten Version erstellt

Unterschrift: _________________  Datum: __________
```

---

## 📞 Support & Kontakt

### Bei technischen Problemen:
1. **Server-Logs prüfen** (Hosting-Provider)
2. **Browser-Konsole** prüfen (F12 → Console)
3. **Google Search Console** "URL-Prüfung"

### Bei SEO-Fragen:
1. **Google Search Console** → Leistung
2. **Ahrefs / Semrush** für Keyword-Analyse
3. **Screaming Frog** für technisches SEO

### Bei Rechtsfragen:
1. **Anwalt für IT-Recht** konsultieren
2. **IHK-Beratung** für Gewerbefragen
3. **Datenschutzbeauftragter** (falls erforderlich)

---

## 🎉 Deployment erfolgreich!

**Was Sie gerade erreicht haben:**
- ✅ Rechtssichere Website (Impressum, Datenschutz)
- ✅ SEO-optimiert (Meta-Tags, Schema.org, Sitemap)
- ✅ Barrierefrei (WCAG 2.1 konform)
- ✅ Performance-optimiert
- ✅ Mobile-friendly
- ✅ DSGVO-konform

**Nächste Milestones:**
1. Google-Indexierung (7-14 Tage)
2. Erste SEO-Rankings (4-8 Wochen)
3. Messbare Traffic-Steigerung (2-3 Monate)

**Viel Erfolg! 🚀**

---

**Dokumentversion:** 1.0  
**Letzte Aktualisierung:** 28. Dezember 2025  
**Verantwortlich:** ai-consult.one Team

