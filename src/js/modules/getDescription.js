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
      console.error("Error when executing the request:", request.statusText);
    }
  };

  request.onerror = function () {
    alert("A network error occurred while executing the request.");
  };

  request.send();
};
