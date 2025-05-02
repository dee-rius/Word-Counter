const textarea = document.querySelector("textarea");

textarea.addEventListener('change', () => {console.log(textarea.value.split(" "));});

