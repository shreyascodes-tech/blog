/// <reference lib="dom" />
let _dev_id;
async function reload() {
  console.log("Server restarted");
  const newHtml = await (await fetch(location.href)).text();
  const newDoc = new DOMParser().parseFromString(newHtml, "text/html");
  document.head.replaceWith(newDoc.head);
  const newRoot = newDoc.querySelector("#root");
  root.replaceWith(newRoot);
}

setInterval(async () => {
  const res = await fetch("/__reload__").then((res) => res.text());
  if (!_dev_id) {
    _dev_id = res;
  } else if (_dev_id !== res) {
    _dev_id = res;
    reload();
  }
}, 500);
