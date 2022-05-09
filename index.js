const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: []
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: "",
    capsLock: false
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add("keyboard");
    this.elements.keysContainer.classList.add("keyboard__bottoms");
    this.elements.keysContainer.appendChild(this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__bottom");

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll(".use-keyboard-input").forEach(element => {
      element.addEventListener("focus", () => {
        this.open(element.value, currentValue => {
          element.value = currentValue;
        });
      });
    });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = {
      'en':[
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "ru", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
        "space"
      ],
      'ru':[
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
        "q", "w", "i", "i", "i", "i", "i", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "ru", "ru", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
        "space"
      ]
    }

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    let supportedLanguages = Object.values(keyLayout)

    let arr = []
    
   let lang =supportedLanguages[0]
   let lang2 =supportedLanguages[1]
      function hg (e) {
    
    /*    console.log(lang)
        e=lang
        if(lang==supportedLanguages[0]) {
          e=supportedLanguages[1]
          lang = supportedLanguages[1]
          console.log(1);
    
        }
        else if (lang==supportedLanguages[1]){
          console.log(11)
        e = supportedLanguages[0]
        lang = supportedLanguages[0]
        }
        */
      e.forEach(key => {
       
      const keyElement = document.createElement("button");
      const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__bottom");

    

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__bottom--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            Keyboard.properties.value = Keyboard.properties.value.substring(0, Keyboard.properties.value.length - 1);
            Keyboard._triggerEvent("oninput");
            console.log(Keyboard.properties)
          });

          break;

        case "caps":
          keyElement.classList.add("keyboard__bottom--wide", "keyboard__bottom--activatable");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          keyElement.addEventListener("click", () => {
            Keyboard._toggleCapsLock();
            keyElement.classList.toggle("keyboard__bottom--active", Keyboard.properties.capsLock);
          });

          break;

        case "enter":
          keyElement.classList.add("keyboard__bottom--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          keyElement.addEventListener("click", () => {
            Keyboard.properties.value += "\n";
            Keyboard._triggerEvent("oninput");
          });

          break;

        case "space":
          keyElement.classList.add("keyboard__bottom--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          keyElement.addEventListener("click", () => {
            Keyboard.properties.value += " ";
            Keyboard._triggerEvent("oninput");
          });

          break;

        case "ru":
          keyElement.classList.add("lang");
          keyElement.innerHTML = 'ru';
          keyElement.addEventListener("click", ddd)
/*
          keyElement.addEventListener("click", (e) => {
            if(e.target.innerHTML=="ru") {
             
                      (e.target.innerHTML="en")
              console.log(e.target.innerHTML)
            }
            else if (e.target.innerHTML=="en"){
            (e.target.innerHTML="ru")
            }
           
          });*/

          break;

        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener("click", () => {
            Keyboard.properties.value += Keyboard.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            Keyboard._triggerEvent("oninput");
          });

          break;
      }
      
      
      /*
      for(let i=0;i<btn.length;i++) {
        if (btn.innerHTML==ru) {
          console.log ('Ehf')
        }
      }*/
/*
      toogleTheme.addEventListener("click", themeToogle);
      function getTranslate(lang) {
  

        localStorage.setItem("lang", lang);
        elements.forEach((e) => {
          const key = e.getAttribute("data-i18");
          const translation = i18Obj[lang][key];
          e.innerText = translation;
          if (e.placeholder) {
            e.placeholder = translation;
            e.textContent = "";
          }
        });
      }
*/
      arr.push(fragment.appendChild(keyElement));
      
     
      
      
      

      
      



      
      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });
  //  console.log(lang)
    }
  
 
  
  //hg(keyLayout[0].[0])
 /* let supportedLanguages = Object.keys(keyLayout)
  for (var i = 0; i < supportedLanguages.length; i++) {
    var lang = supportedLanguages[i];
   
    //console.log ( hg(lang))
    }*/
   
  
  console.log("zzzz"+ hg(lang))
  function ddd (e) {
    if(e.target.innerHTML=="ru") {
      
      //lang = supportedLanguages[0]
      
     hg(lang2),
    
     // console.log(lang)
      e.target.innerHTML="en"
     // console.log(hg(keyLayout[1]))
    }
    else if (e.target.innerHTML=="en"){
   e.target.innerHTML="ru",
   hg(lang)
    }
   
  };
  //console.log(ddd)
  
    return fragment;
    
  },







  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },
  

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
   
  },

  close() {
    this.properties.value = "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
let btn = document.querySelector(".lang");
     
      console.log (btn)
     