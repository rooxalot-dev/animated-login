window.onload = function(e) {
    var loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        try {
            var data = new FormData(e.target);
            for (let [name, value] of data) {
                if (!!value) {
                    throw new Error('Preencha todos os campos!');
                }
            }
        } catch (error) {
            console.log('Erro no formulário: ', error);
            var currentTarget = e.currentTarget;
            
            currentTarget.parentElement.classList.add('has-error');
            setTimeout(function() {
                currentTarget.parentElement.classList.remove('has-error');
            }, 1000);
        }
    });

    var squares = document.querySelector('.floating-squares');
    if (squares) {
        for (var i = 0; i <= 12; i++) {
            var li = document.createElement('li');

            var leftPosition = generateRandom(0, 100);
            li.style.left = leftPosition + "vw";

            var size = generateRandom(40, 200);
            li.style.width = size + "px";
            li.style.height = size + "px";
            li.style.bottom = - (size + 50) + "px";

            var delay = generateRandom(1, 5);
            li.style.animationDelay = delay + "s";

            var duration = generateRandom(3, 8);
            li.style.animationDuration = duration + "s";

            li.style.animationDirection = (i % 2 === 0) ? "alternate" : "alternate-reverse";

            squares.appendChild(li);
        }
    }
}

function generateRandom(min, max) {
    var randomValue = Math.random() * (max - min) + min;
    return randomValue;
}