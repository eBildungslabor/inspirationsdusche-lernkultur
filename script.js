// Liste der Impulse
const impulseListe = [
    "Wir haben an unserer Schule einen Schulentwicklungstag mit Eltern, Lehrkräften und Lernenden organisiert. Das war toll, weil wir gemeinsam ganz viele Ideen entwickelt haben.",
    "Bei uns planen die Lernenden am Anfang jeder Woche ihr Lernen mithilfe von Wochenplänen. So wird selbstbestimmtes Lernen ermöglicht.",
    "Im Kontext von forschendem Lernen können Lernende ihre Lernprozesse ausgehend von eigenen Fragen und Interessen gestalten.",
    "Natürlich müssen wir Lernende auf Prüfungen vorbereiten, aber wir versuchen trotzdem, Noten und Prüfungen so wenig Gewicht wie möglich beizumessen und machen das auch gegenüber den Lernenden transparent.",
    "Wir sind uns im Kollegium einig, dass es unser übergeordnetes Ziel in allen Bereichen ist, Lernfreude zu fördern und Selbstlernkompetenz zu entwickeln. Daran richten wir unsere Lehre vor allem aus.",
    "Das Internet gehört bei uns zum Lernen selbstverständlich dazu. Die Lernenden können es im Rahmen ihrer Lernprozesse offen nutzen. Anschließend reflektieren wir gemeinsam darüber.",
    "Wir haben einen guten Trick für Prüfungen entwickelt: Lernende können, wenn sie mit einem Ergebnis nicht zufrieden sind, einen ‘Request to Retest’ stellen. Das bedeutet, dass sie aufschreiben, warum die Prüfung aus ihrer Sicht gescheitert ist und was sie machen wollen bzw. gemacht haben, dass es beim nächsten Mal besser klappt. Wenn das überzeugend ist, kann der zweite Versuch gestartet werden.",
    "Wir machen bei uns ‘Open Book’ Klausuren. Das bedeutet, dass Lernende alle Hilfsmittel, d.h. auch ihre Aufzeichnungen nutzen dürfen - so wie das im ‘normalen’ Leben auch wäre. Natürlich müssen Prüfungsaufgaben dann entsprechend anders gestaltet sein.",
    "Durch die Einbindung von Expertinnen und Experten aus verschiedenen Bereichen können wir den Schülern Einblicke in reale Berufsfelder geben und ihre Lernmotivation steigern.",
    "Bei uns gibt es zahlreiche ‘Raus ins Leben’-Tage, an denen Lernende außerhalb der Schule lernen können. Wir nutzen dazu außerschulische Lernorte, wie Museen, Theater oder Bibliotheken, aber auch Unternehmen, Parks oder die Natur.",
    "Unsere Schule fördert eine Kultur des Teilens, in der Lehrkräfte und Lernende ihre Erfahrungen und Erkenntnisse miteinander teilen, um voneinander zu lernen.",
    "Wir versuchen, uns vom Einzelkämpfertum im Lehrberuf zu verabschieden, indem zum Beispiel gemeinsam über Herausforderungen im Unterricht reflektiert wird oder wir uns gegenseitig im Unterricht besuchen und Feedback geben.",
    "So oft wie möglich arbeiten wir an fächerverbindenden Projekten. Dadurch können wir auch den starren Zeitplan einer Stundentafel aufheben und erhalten Projektzeit.",
    "Wir haben für uns das Projekt Frei-Day entdeckt. Das ist ein Projekt, bei dem Lernende an einem Tag der Woche an selbstgewählten Projekten arbeiten können. Von der Initiative gibt es Unterstützung bei der Umsetzung.",
    "Wir versuchen, dass Lernende und Lehrkräfte immer mal wieder an anderen Schulen hospitieren können, um dann mit neuen Impulsen und Ideen zu uns zurückzukommen.",
    "Wir senden gezielt Kundschafter*innen aus, die zum Beispiel an bundesweiten Barcamps oder anderen Veranstaltungen teilnehmen, um die Learnings dann wieder an unsere Schule zurückzutragen.",
    "Wir ermutigen unsere Schüler dazu, ihre eigenen Lernziele zu setzen und regelmäßig zu reflektieren, um ihre Fortschritte zu verfolgen und anzupassen.",
    "Kollaborative Lernprojekte ermöglichen es den Lernenden, von den unterschiedlichen Stärken ihrer Mitschüler zu profitieren und gemeinsam bessere Ergebnisse zu erzielen. Nebenbei wird die Kompetenz der Kollaboration entwickelt.",
    "Nach einer Prüfung werden die besten Fehler gesammelt und vorgestellt. Denn aus Fehlern können alle lernen. Entweder präsentiert die Lehrkraft eine Auswahl an Fehlern - oder Lernende teilen Fehler, von denen sie denken, dass sie auch für andere hilfreich sind."
];

// Funktion, um einen zufälligen Impuls anzuzeigen
function neuerZufallsimpuls() {
    // Zufällige Nummer generieren
    const randomIndex = Math.floor(Math.random() * impulseListe.length);
    // Den zufälligen Impuls auswählen
    const randomImpuls = impulseListe[randomIndex];
    // Den Impuls im HTML anzeigen
    document.getElementById('article').innerHTML = "<p>" + randomImpuls + "</p>";
}

// Den Event Listener zum Button hinzufügen
document.querySelector('input[type="button"]').addEventListener('click', neuerZufallsimpuls);
