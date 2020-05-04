window.onload = function(e) {
    function generateRandom(min, max) {
        var randomValue = Math.random() * (max - min) + min;
        return randomValue;
    }

    var squares = document.querySelector('.floating-squares');
    if (squares) {
        for (var i = 0; i <= 8; i++) {
            var li = document.createElement('li');

            var leftPosition = generateRandom(0, 100);
            li.style.left = leftPosition + "vw";

            var size = generateRandom(40, 200);
            li.style.width = size + "px";
            li.style.height = size + "px";
            li.style.bottom = - size + "px";

            var delay = generateRandom(1, 5);
            li.style.animationDelay = delay + "s";

            var duration = generateRandom(3, 8);
            li.style.animationDuration = duration + "s";

            squares.appendChild(li);
        }
    }
}
