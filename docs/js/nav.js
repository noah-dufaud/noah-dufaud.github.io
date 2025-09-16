const div = document.getElementById('navigation-pannel');
const margin = document.getElementById('margin-pannel');
const button = document.getElementById('navigation-burger');
const fields = div.querySelectorAll('.navigation-field');
const content = document.getElementById("page-content");

let expanded = false;

document.addEventListener('click', (e) => {
    if(expanded && e.clientX > window.innerHeight * 0.40 + 10){
      //ChangeE();
    }
});

div.addEventListener('click', (e) => {
    if(!expanded){
      ChangeE();
  }
});

button.addEventListener("click", e => {
  e.stopPropagation();
});


const ChangeE = () => {
  expanded = !expanded;
  if(!expanded)
  {
    fields.forEach((f, i) => {
      f.classList.remove('show');
    });
  
    setTimeout(() => {
      div.classList.toggle('expanded');
      margin.classList.toggle('expanded');
    }, 200)
  }
  else {
    div.classList.toggle('expanded');
    margin.classList.toggle('expanded');
  }
  if(expanded){
    // Fade in après la transition de taille
    fields.forEach((f, i) => {
    setTimeout(() => {
      f.classList.add('show');
    }, (i + 0.5) * 200) // correspond à la durée de transition
    });
  }
};

const StartHome = () => {
    content.classList.add("fade-out");
    fetch("home.html")
    .then(res => res.text())
    .then(html => {
        setTimeout(() => {
          document.getElementById("page-content").innerHTML = html;
          StartHomeJs();
          content.classList.remove("fade-out");
        }, 300);
    })
    .then(() =>
    {
      const url = new URL(window.location);
      url.searchParams.set("page", "home");
      history.pushState("home", "", url);
    })
    setTimeout(() => {
      content.classList.remove("fade-out");
    }, 300);
}

const StartCB = () => {
    content.classList.add("fade-out");
    fetch("cb.html")
    .then(res => res.text())
    .then(html => {
        setTimeout(() => {
          document.getElementById("page-content").innerHTML = html;
          StartCBJs();
          content.classList.remove("fade-out");
        }, 300);
    })
    .then(() =>
    {
      const url = new URL(window.location);
      url.searchParams.set("page", "climbing-plants");
      history.pushState("climbing-plants", "", url);
    })
}

const StartHomeJs = () => {
  console.log("Hey")
}

const StartCBJs = () => {
  console.log("Hey cb")
}

window.addEventListener("popstate", e => {
  const page = e.state?.page || "home";
  switch(page) {
    case "climbing-plants":
      StartCB();
      break;
    default:
      StartHome();
  }
});


function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

window.addEventListener("load", () => {
  const page = getQueryParam("page");
  switch(page) {
    case "climbing-plants":
      StartCB();
      break;
    default:
      StartHome();
  }
});

StartHome();
ChangeE();
