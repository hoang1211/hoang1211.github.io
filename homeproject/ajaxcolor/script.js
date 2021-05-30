let xhr = new XMLHttpRequest();

let method = "GET";

let uri = "https://reqres.in/api/unknown";

xhr.open(method, uri);
xhr.responseType = "json";
xhr.onerror = (e) => console.log(e);
xhr.onload = (e) => {
  let upData = xhr.response.data;
  upData = upData
    .map((p) => {
      return ` <div class="col">
        <div class="color">
          <a href="singlepost.html?colorId=${p.id}">
              <div class="color-main" style="background-color:${p.color}"><h1 class="color-year">${p.year}</h1></div>
              <div class="color-infor">
                  <h4>${p.name}</h4>
                  <span class = "color-value">${p.pantone_value}</span>
              </div>
          </a>
        </div>
      </div>`;
    })
    .join("");
  document.querySelector(".colorcell").innerHTML = upData;
};
xhr.send(null);
