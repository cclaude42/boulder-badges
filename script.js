index = 0
containers = document.querySelectorAll('.container');
profiles = Array.from(containers).map(
    container => {
        return "." + container.classList[1];
    }
);


function mod (n, m) {
    return ((n % m) + m) % m;
}


function setProfile () {
    Array.from(containers).forEach(box => {
        if (box.classList.contains('visible')) {
            box.classList.remove('visible');
        }
    });

    var selected = profiles[mod(index, profiles.length)];
    document.querySelector(selected).classList.add('visible');
}

function prevProfile () {
    index++;
    setProfile();
}

function nextProfile () {
    index--;
    setProfile();
}
