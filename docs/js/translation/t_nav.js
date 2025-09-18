const supported_lang = ["en", "fr"]

const t_nav = {
    "t_projects": {
        "en": "Projects",
        "fr": "Projets",
    },
    "t_clmplant": {
        "en": "Climbings plants simulation",
        "fr": "Simulation de lierre",
    },
    "t_3dengine": {
        "en": "3D Engine",
        "fr": "Moteur 3D",
    },
    "t_search": {
        "en": "Not working",
        "fr": "Non fonctionnel",
    },
}

const SetNavLang = (lang) => {
    if (!supported_lang.includes(lang)) 
        return;

    Object.entries(t_nav).forEach(([key, trads]) => {
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