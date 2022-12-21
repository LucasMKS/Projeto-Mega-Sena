document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});


const chk = document.getElementById('chk')
const navprin = document.getElementById("navprinc");

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
})

// Recupera o estado armazenado do checkbox e define o valor do checkbox de acordo
const checkboxState = localStorage.getItem('checkboxState');
chk.checked = (checkboxState === 'true');

// Armazena o estado do checkbox a cada clique
chk.addEventListener('click', function () {
    localStorage.setItem('checkboxState', chk.checked);
});

const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    document.body.classList.add('dark');
    navprin.setAttribute('class', 'navbar navbar-expand-lg navbar-dark bg-dark');
}


function ModTema() {
    if (navprin.className == 'navbar navbar-expand-lg navbar-dark bg-dark') {
        setTimeout(() => {
            navprin.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light');
        }, 20);
        

    } else {
        setTimeout(() => {
            navprin.setAttribute('class', 'navbar navbar-expand-lg navbar-dark bg-dark');
        }, 20);
        
    }
}

