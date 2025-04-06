// Menu

const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
const close = document.getElementById('close');

burger.addEventListener('click', () => {
  menu.classList.remove('hidden');
  close.classList.remove('hidden');
  burger.classList.add('hidden');
});

close.addEventListener('click', () => {
  menu.classList.add('hidden');
  close.classList.add('hidden');
  burger.classList.remove('hidden');
});


// Accordion

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const isActive = content.classList.contains("max-h-0");

        document.querySelectorAll(".max-h-0").forEach((item) => {
            item.classList.add("max-h-0");
            item.classList.remove("max-h-full");
        });

        if (isActive) {
            content.classList.remove("max-h-0");
            content.classList.add("max-h-full");
        } else {
            content.classList.remove("max-h-full");
            content.classList.add("max-h-0");
        }
    });
});
