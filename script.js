window.onload = async(event) => {
 

  const url = "https://microsoft-translator-text-api3.p.rapidapi.com/languages";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c52554a1d6mshca06cffbbef74a0p172932jsn29ccd0d52c71",
      "x-rapidapi-host": "microsoft-translator-text-api3.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    displayLang(result);
  } catch (error) {
    console.error("errer fatching languages :", error);
  }
};

function displayLang(data) {
  let { translation } = data;

  const fromLang = document.getElementById("from");
  const toLang = document.getElementById("to");
  fromLang.innerHTML =
    '<option value="" disabled selected>Select a language</option>';
  toLang.innerHTML =
    '<option value="" disabled selected>Select a language</option>';
  // Populate the fromLang dropdown
  for (const code in translation) {
    if (translation.hasOwnProperty(code)) {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = translation[code].name;
      fromLang.appendChild(option);
    }
    // console.log("code:", code);
  }
  console.log(result);
  // Populate the toLang dropdown
  for (const code in translation) {
    if (translation.hasOwnProperty(code)) {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = translation[code].name;
      toLang.appendChild(option);
    }
  }
 
}


document.querySelector("#translator-form").addEventListener('submit', async function(event){
event.preventDefault()
    const fromLang = document.querySelector("#from").value;
    const toLang = document.querySelector("#to").value;
    const textTranslator=document.querySelector("#text-translate").value;
   
    const url = `https://microsoft-translator-text-api3.p.rapidapi.com/translate?to=${toLang}&from=${fromLang}`;
    console.log("FL",fromLang,"toL",toLang,"texTT",textTranslator)
    
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': 'c52554a1d6mshca06cffbbef74a0p172932jsn29ccd0d52c71',
            'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ text: textTranslator }]) 
    };
    
    try {
        const response = await fetch(url, options);
        const resultTrans = await response.json();
        const resultTranL=document.querySelector("#result");
        const translations = resultTrans[0].translations; 
        if (translations.length > 0) {
            const translatedText = translations[0].text; 
            // console.log('Translated text:', translatedText);
            resultTranL.innerHTML =`<strong> Translated text:</strong> <br> ${translatedText}`; 
        } else {
            console.log('No translations found');
        }
    } catch (error) {
        console.error(error); 
    }
    
})


