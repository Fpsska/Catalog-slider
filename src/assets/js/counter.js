const minusButtons = document.querySelectorAll('.counter__button_minus');
const plusButtons = document.querySelectorAll('.counter__button_plus');

// /. variables

function increaseCount(targetCount) {
    if (targetCount >= 999) {
        return targetCount;
    }
    return ++targetCount;
}

function decreaseCount(targetCount) {
    if (targetCount - 1 > 0) {
        return --targetCount;
    }
    return 0;
}

// /. functions

minusButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        //
        const targetCountEl =
            this.parentElement.querySelector('.counter__number');

        targetCountEl.innerText = decreaseCount(
            parseInt(targetCountEl.innerText, 10)
        );
    });
});

plusButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        //
        const targetCountEl =
            this.parentElement.querySelector('.counter__number');

        targetCountEl.innerText = increaseCount(
            parseInt(targetCountEl.innerText, 10)
        );
    });
});

// /. listeners
