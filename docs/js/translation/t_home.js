
const t_home = {
    "t_home_title": {
        "en": "Home",
        "fr": "Acceuil",
    },
    "t_home_information": {
        "en": `<strong>Information:</strong> This page is under development.
To avoid plagiarism at my former university, my projects will not be shared on GitHub. Instead, I will provide executables, descriptions, and screenshots here.
Many of my personal projects are a continuation of school projects.
Thank you for your understanding.`,
        "fr": `<strong>Information :</strong> Cette page est en cours de développement.
Pour éviter tout risque de plagiat à mon ancienne université, mes projets ne seront pas partagés sur GitHub. À la place, je mettrai à disposition des exécutables, des descriptions et des captures d’écran ici.
De nombreux projets personnels que j'ai réalisé sont la continuité des projets effectués à l’université.
Merci de votre compréhension.`
    }
}

const SetHomeLang = (lang) => {
    if (!supported_lang.includes(lang)) 
        return;

    Object.entries(t_home).forEach(([key, trads]) => {
        const element = document.getElementById(key);
        if(element == null) return;

        element.classList.add("fade-out");
        
        setTimeout(() => {
            if (element.tagName.toLowerCase() === "input") {
                element.placeholder = trads[lang];
            } else {
                element.innerHTML = trads[lang];
            }

            element.classList.remove("fade-out");
        }, 300);
    })
}