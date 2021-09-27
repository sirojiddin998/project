document.querySelector(".btn").onclick = function () {
  const name = document.querySelector("#name").value,
    age = document.querySelector("#age").value,
    locate = document.querySelector("#locate").value,
    user = {
      ism: name,
      yosh: age,
      manzil: locate,
    };
  if (name === "" || age === "" || locate === "") {
    alert("malumotni kriting");
  } else {
    document.querySelector(".myRow").innerHTML +=
      '<tr><td class="p-0"> <img width="70px" height="70px" src="./media/user.jpg" alt="" /></td><td class="mt-2">ismingiz:' +
      user.ism +
      '</td><td class="mt-2">yoshingiz:' +
      user.yosh +
      '</td><td class="mt-2">manzilingiz:' +
      user.manzil +
      "</td></tr>";
  }
  document.querySelector("#name").value = "";
  document.querySelector("#age").value = null;
  document.querySelector("#locate").value = "";
};
function del() {
  document.querySelector(".myRow");
}
