export const getDescription = (selectorForText) => {
  const text = document.getElementById(selectorForText);

  const request = new XMLHttpRequest();
  const requestUrl = "https://baconipsum.com/api/?type=lucky";

  request.open("GET", requestUrl, true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let data = JSON.parse(request.responseText);

      text.textContent = data[0];
    } else {
      console.error("Ошибка при выполнении запроса:", request.statusText);
    }
  };

  request.onerror = function () {
    alert("Сетевая ошибка при выполнении запроса.");
  };

  request.send();
};
