let xhr = new XMLHttpRequest();

let method = "GET";
let uri = "https://reqres.in/api/users/";

xhr.open(method, uri);
xhr.responseType = "json";
xhr.onerror = (e) => console.log(e);
xhr.onload = (e) => {
  let posts = xhr.response;
  console.log(posts);

  posts = posts.data
    .map((p) => {
      return `  <div class="col">
    <div class="user">
        <a href="posts.html?userId=${p.id}">
          <h4 class="user-name"> ${p.first_name}  ${p.last_name}
          </h4>
          <p class="user-email">${p.email}</p>
          <img src="${p.avatar}" alt="userImg">
        </a>
    </div>
</div>`;
    })
    .join("");
  document.querySelector(".posts").innerHTML = posts;
};
xhr.send(null);
