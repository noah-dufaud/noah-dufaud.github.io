const t_cb = {
    "t_cb_title": {
        "en": "Climbings plants simulation.",
        "fr": "Simulation de plantes grimpantes.",
    },
    "t_cb_table_plat": {
        "en": "Platform",
        "fr": "Platforme",
    },
    "t_cb_table_req": {
        "en": "Requirements",
        "fr": "Prérequis",
    },
    "t_cb_table_vers": {
        "en": "Version",
        "fr": "Version",
    },
    "t_cb_table_size": {
        "en": "Size",
        "fr": "Taille",
    },
    "t_cb_table_link": {
        "en": "File",
        "fr": "Fichier",
    },
    "t_cb_table_1_plat": {
        "en": "Windows/Linux",
        "fr": "Windows/Linux",
    },
    "t_cb_table_1_req": {
        "en": "Processing X.X",
        "fr": "Processing X.X",
    },
    "t_cb_table_1_vers": {
        "en": "0.1",
        "fr": "0.1",
    },
    "t_cb_table_1_size": {
        "en": "14kb",
        "fr": "14kb",
    },
    "t_cb_table_1_link": {
        "en": "climb-plants-sim-0_1.exe",
        "fr": "sim-plates-grimpantes-0_1.exe",
    },
}

const SetCBLang = (lang) => {
    if (!supported_lang.includes(lang)) 
        return;


    Object.entries(t_cb).forEach(([key, trads]) => {
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

    console.log("HHHHHEY")

}