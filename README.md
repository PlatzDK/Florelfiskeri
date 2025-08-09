Sprogkoden (lang) bruges af oversættelsesfilteret.  permalink sikrer, at siderne udgives med pæne URL’er som /en/index.html, /da/index.html osv.

Hvorfor denne arkitektur?

Statiske sider

Fordi Eleventy genererer statiske HTML-filer, er der ingen serverkode og ingen database at vedligeholde.  Det giver høj performance og meget lav attack‑overflade, hvilket øger sikkerheden ￼.  GitHub Pages eller Netlify kan hoste outputtet direkte.

Adskillelse af indhold og præsentation

Al tekst er samlet i ét oversættelsesmodul, hvilket gør det nemt for både mennesker og AI‑agenter at tilføje nye sprog eller rette formuleringer.  Skabelon og data er adskilt, så ændringer i layout eller stil ikke påvirker indholdet.

Genbrug via komponenter

Faciliteter og experiences defineres i datafiler og kan genbruges i forskellige sektioner.  Layoutet bruger loops til at vise disse elementer, hvilket reducerer duplikeret markup.

Minimal afhængighed

Udover Eleventy anvendes ingen build‑værktøjer eller tunge frameworks.  Skulle man senere ønske at tilføje Tailwind som PostCSS-plugin eller et headless CMS, kan det nemt integreres uden at bryde strukturen.

Sådan arbejder du videre (for AI‑assistenter)
	1.	Installér afhængigheder: Kør npm install i roden af projektet.  Eleventy installeres som devDependency.
	2.	Start udviklingsserver: npm start kompilere og serverer sitet lokalt med genindlæsning.  Besøg derefter localhost:8080/da/, en/, eller de/ for at se de forskellige sprog.
	3.	Tilføj nyt indhold:
	•	For nye faciliteter: opret en ny post i src/_data/features.js og tilføj oversættelsen til hver sprogsektion i translations.js.
	•	For nye sprog: tilføj et nyt sprogobjekt i translations.js, oversæt alle eksisterende nøgler og opret en mappe under src/ med et index.njk der angiver den nye sprogkode.
	•	For flere galleribilleder: læg billeder i src/assets/ og opdater billedstierne i layout.njk eller lav en datafil med billeder og loop over den.
	4.	SEO og schema.org: Tilføj meta‑tags og JSON‑LD i layout.njk for LodgingBusiness og FAQ, hvis ønsket.  Det kan gøres dynamisk med oversættelsesfilteret.
	5.	Deployment: Kør npm run build; outputtet ligger i docs/.  GitHub Pages kan konfigureres til at serve denne mappe.  Der kan også opsættes et GitHub Actions-workflow, der automatisk bygger og udgiver på push til main.

Versionering af dokumentationen

Denne fil indeholder versionsnummer og dato øverst.  Hver gang der foretages betydelige ændringer i arkitektur, layout eller build‑processer, bør versionsnummeret hæves (f.eks. 2.1.0) og ændringerne beskrives her.  På den måde kan AI‑assistenter og udviklere nemt se, hvilke funktioner og strukturer der er gældende for den aktuelle iteration.

⸻

Ved at følge denne arkitektur får du et hurtigt, overskueligt og udvideligt website for Florel Fiskeri, som både mennesker og AI kan forstå og vedligeholde.
