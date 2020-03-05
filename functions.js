let amountOfSaves = 0;

function saveTitle() {
  console.log(document.getElementById("title").value);
  localStorage.setItem("novelTitle", document.getElementById("title").value);
  document.getElementById("demo").innerHTML = localStorage.getItem(
    "novelTitle"
  );
  localStorage.setItem("skinColor", opac);
  localStorage.setItem("loudness", loudness * 100);
  if (amountOfSaves < 6) {
    amountOfSaves++;
  } else {
    amountOfSaves = 1;
  }

  localStorage.setItem("amountOfSaves", amountOfSaves);
  window.open("./Novel/novel.html", "_blank");
}

// CLEAR DATA

function clearData() {
  localStorage.clear();
  document.getElementById("demo").innerHTML = localStorage.getItem(
    "novelTitle"
  );
}

function onClick() {
  console.log("HEJ");
}

function handleChange() {
  document.getElementById("demo").innerHTML = document.getElementById(
    "title"
  ).value;
}

function checkTitle() {
  if (localStorage.getItem("novelTitle") != null) {
    document.getElementById("demo").innerHTML = localStorage.getItem(
      "novelTitle"
    );
  }
}
