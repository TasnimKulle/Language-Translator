document
  .querySelector("#translator-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
  const from=document.getElementById('from');
    const url =
      "https://microsoft-translator-text-api3.p.rapidapi.com/languages";
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

      displayLang(result.translation)
    } catch (error) {
      console.error("errer fatching languages :",error);
    }
  });

function displayLang(translations) {
  const fromLang = document.getElementById("from");
  fromLang.innerHTML ='';
  translations.forEach(translation => {
    fromLang.innerHTML=`<option value="${translation[0]}">${translation.name}</option>`
    console.log(fromLang)
  });

}
