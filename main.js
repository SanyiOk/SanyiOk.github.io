document.getElementById('counter').addEventListener(
  'click',
  function handleCounterClicked(e) {
    const counter = e.target
    counter.innerText = String(Number(counter.innerText) + 1)
  })
