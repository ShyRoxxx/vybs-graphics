/**
 * Rechtstexte. Quelle: CRM-Texte für diesen Kunden, wortgetreu übernommen.
 * Eingaben in eckigen Klammern sind offene Pflichtangaben und werden auf der Seite sichtbar markiert.
 */

export type LegalSection = { heading: string; paragraphs: string[] };

export const legalUpdated = "12.10.2026";

export const imprint: LegalSection[] = [
  {
    heading: "Angaben gemäß § 5 DDG",
    paragraphs: [
      "Phillip Franke Grafikdesign\nAuftritt als Vybs Graphics",
      "Hoher Kamp 40, 30855 Langenhagen",
      "[Handelsregistereintrag, sofern vorhanden, einfügen]",
    ],
  },
  { heading: "Vertreten durch", paragraphs: ["Phillip Franke"] },
  { heading: "Kontakt", paragraphs: ["Telefon: +49 176 60193983", "E-Mail: phillip.creates@icloud.com"] },
  {
    heading: "Umsatzsteuer-ID",
    paragraphs: ["[Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz einfügen, sofern vorhanden]"],
  },
  { heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV", paragraphs: ["Phillip Franke"] },
  {
    heading: "Streitbeilegung",
    paragraphs: [
      "Die Europäische Kommission hat ihre Plattform zur Online-Streitbeilegung (OS-Plattform) im Juli 2025 eingestellt; ein entsprechender Link ist seither nicht mehr erforderlich.",
      "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. [Anpassen, falls eine Teilnahmepflicht oder -bereitschaft besteht.]",
    ],
  },
  {
    heading: "Haftung für Inhalte",
    paragraphs: [
      "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Die Haftungsprivilegierung für fremde Inhalte (Mere Conduit, Caching, Hosting) richtet sich seit Inkrafttreten des Digital Services Act nach Art. 4 bis 6 der Verordnung (EU) 2022/2065 in Verbindung mit § 7 Abs. 2 DDG. Nach Art. 8 der Verordnung (EU) 2022/2065 sind wir nicht verpflichtet, die von uns übermittelten oder gespeicherten Informationen allgemein zu überwachen oder aktiv nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir die betroffenen Inhalte umgehend.",
    ],
  },
  {
    heading: "Haftung für Links",
    paragraphs: [
      "Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
    ],
  },
  {
    heading: "Urheberrecht",
    paragraphs: [
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    ],
  },
];

export const privacy: LegalSection[] = [
  {
    heading: "1. Verantwortlicher",
    paragraphs: [
      "Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
      "Phillip Franke Grafikdesign (Vybs Graphics), Hoher Kamp 40, 30855 Langenhagen. E-Mail: phillip.creates@icloud.com, Telefon: +49 176 60193983.",
      "Ein Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen dafür (§ 38 BDSG) nicht vorliegen. [Falls doch ein Datenschutzbeauftragter bestellt ist: Name und Kontaktdaten hier angeben.]",
    ],
  },
  {
    heading: "2. Überblick und Rechtsgrundlagen",
    paragraphs: [
      "Wir verarbeiten personenbezogene Daten der Besucherinnen und Besucher dieser Website nur, soweit dies zur Bereitstellung einer funktionsfähigen Website, unserer Inhalte und Leistungen oder zur Beantwortung Ihrer Anfragen erforderlich ist. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können, z. B. Name, E-Mail-Adresse oder IP-Adresse.",
      "Rechtsgrundlagen sind je nach Zweck: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Erfüllung eines Vertrages oder vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO), die Erfüllung rechtlicher Pflichten (Art. 6 Abs. 1 lit. c DSGVO) oder unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Für das Speichern von Informationen auf Ihrem Endgerät oder den Zugriff darauf gilt zusätzlich § 25 des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG).",
    ],
  },
  {
    heading: "3. Hosting und Server-Logdateien",
    paragraphs: [
      "Diese Website wird bei Vercel Inc., Covina (Kalifornien), USA gehostet und über dessen Server und Content-Delivery-Netzwerk ausgeliefert. Bei jedem Aufruf verarbeitet der Hoster automatisch Daten, die Ihr Browser übermittelt (Server-Logdateien): IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL, Browsertyp und -version sowie Betriebssystem.",
      "Die Verarbeitung ist technisch erforderlich, um die Website auszuliefern und ihre Sicherheit und Stabilität zu gewährleisten (z. B. zur Abwehr von Angriffen). Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung (Art. 6 Abs. 1 lit. f DSGVO). Die Logdaten werden nur so lange gespeichert, wie es für diese Zwecke erforderlich ist, und anschließend automatisch gelöscht; eine Zusammenführung mit anderen Datenquellen findet nicht statt.",
      "Mit dem Hoster besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). Vercel kann Daten auch in den USA verarbeiten. Die Übermittlung in die USA erfolgt auf Grundlage des Angemessenheitsbeschlusses der EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO), soweit der Anbieter danach zertifiziert ist, und ergänzend auf Grundlage der Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).",
    ],
  },
  {
    heading: "4. Technische Betreuung der Website",
    paragraphs: [
      "Die Erstellung, das Hosting und die Wartung dieser Website übernimmt für uns Bilbao Consulting, An der Beeke 12A, 30916 Isernhagen. Soweit dabei personenbezogene Daten verarbeitet werden (z. B. Server-Logdaten oder Anfragen über das Kontaktformular), geschieht dies ausschließlich in unserem Auftrag und nach unseren Weisungen auf Grundlage eines Vertrages zur Auftragsverarbeitung (Art. 28 DSGVO).",
    ],
  },
  {
    heading: "5. SSL- bzw. TLS-Verschlüsselung",
    paragraphs: [
      "Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung, z. B. für Anfragen, die Sie über das Kontaktformular an uns senden. Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.",
    ],
  },
  {
    heading: "6. Kontaktaufnahme",
    paragraphs: [
      "Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir die Angaben aus dem Formular (z. B. Name, E-Mail-Adresse, Telefonnummer und Ihre Nachricht), um Ihre Anfrage zu bearbeiten und für Anschlussfragen. Pflichtangaben sind als solche gekennzeichnet; ohne sie können wir Ihre Anfrage nicht bearbeiten.",
      "Die Formulareingaben werden uns per E-Mail zugestellt. Für den Versand setzen wir den E-Mail-Dienst Resend (Plus Five Five, Inc.), San Francisco (Kalifornien), USA als Auftragsverarbeiter ein (Art. 28 DSGVO). Die Übermittlung in die USA erfolgt auf Grundlage des Angemessenheitsbeschlusses der EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO), soweit der Anbieter danach zertifiziert ist, und ergänzend auf Grundlage der Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).",
      "Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben einschließlich der daraus hervorgehenden personenbezogenen Daten zum Zweck der Bearbeitung Ihres Anliegens.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist; in allen übrigen Fällen unser berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Ihre Daten löschen wir, sobald Ihr Anliegen abschließend bearbeitet ist, es sei denn, gesetzliche Aufbewahrungsfristen (z. B. für Geschäftsbriefe nach Handels- und Steuerrecht bis zu sechs bzw. zehn Jahre) stehen dem entgegen. Wir geben diese Daten nicht ohne Ihre Einwilligung weiter.",
    ],
  },
  {
    heading: "7. Cookies und Speicherung auf Ihrem Endgerät",
    paragraphs: [
      "Diese Website setzt keine Cookies und speichert keine Informationen auf Ihrem Endgerät, die nicht für den Betrieb der Website technisch unbedingt erforderlich sind (§ 25 Abs. 2 Nr. 2 TDDDG). Ein Cookie-Banner ist deshalb nicht erforderlich.",
    ],
  },
  {
    heading: "8. Analyse- und Tracking-Tools",
    paragraphs: ["Wir setzen auf dieser Website keine Analyse-, Tracking- oder Werbe-Tools ein und erstellen keine Nutzungsprofile."],
  },
  {
    heading: "9. Schriftarten und externe Inhalte",
    paragraphs: [
      "Die auf dieser Website verwendeten Schriftarten werden lokal von unserem eigenen Server geladen. Beim Aufruf der Website wird dafür keine Verbindung zu Servern von Google oder anderen Drittanbietern hergestellt.",
      "Diese Website enthält Links zu externen Websites (z. B. sozialen Netzwerken). Diese sind einfache Verlinkungen: Erst wenn Sie einen Link anklicken, werden Sie auf die Seite des jeweiligen Anbieters weitergeleitet, für deren Datenverarbeitung dieser selbst verantwortlich ist.",
    ],
  },
  {
    heading: "10. Speicherdauer",
    paragraphs: [
      "Soweit in dieser Datenschutzerklärung keine speziellere Speicherdauer genannt ist, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Verarbeitung entfällt. Machen Sie ein berechtigtes Löschersuchen geltend oder widerrufen Sie eine Einwilligung, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); in diesen Fällen erfolgt die Löschung nach Fortfall dieser Gründe.",
    ],
  },
  {
    heading: "11. Ihre Rechte",
    paragraphs: [
      "Sie haben jederzeit das Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16 DSGVO), auf Löschung (Art. 17 DSGVO), auf Einschränkung der Verarbeitung (Art. 18 DSGVO) und auf Datenübertragbarkeit (Art. 20 DSGVO).",
      "Widerspruchsrecht (Art. 21 DSGVO): Verarbeiten wir Ihre Daten auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO), können Sie dieser Verarbeitung aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen. Wir verarbeiten Ihre Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen, die Ihre Interessen überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
      "Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO); die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.",
      "Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO), insbesondere in dem Bundesland Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder unseres Sitzes.",
      "Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an die in Ziffer 1 genannten Kontaktdaten.",
    ],
  },
  {
    heading: "12. Automatisierte Entscheidungen",
    paragraphs: ["Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt."],
  },
  {
    heading: "13. Aktualität dieser Datenschutzerklärung",
    paragraphs: [
      "Stand: 12.10.2026. Wir passen diese Datenschutzerklärung an, sobald sich die Website oder die zugrunde liegende Rechtslage ändert. Es gilt jeweils die auf dieser Website veröffentlichten Fassung.".replace("veröffentlichten", "veröffentlichte"),
    ],
  },
];
