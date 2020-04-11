function Zombie(zombie) {
    zombie.healthCurrent = zombie.health;
    zombie.healthPercent = 100;
    this.events = {
        'dead': function() {}
    };

    this.element = document.createElement('div');
    this.healthElement = document.createElement('div');
    this.healthCurrentElement = document.createElement('div');

    this.element.classList.add('zombie');
    this.healthElement.classList.add('zombie-health');
    this.healthCurrentElement.classList.add('zombie-health-current');

    this.on = (event, callback) => {
        this.events[event] = callback;
    };

    this.getDamage = () => {
        if (zombie.healthCurrent > 0) {
            zombie.healthCurrent -= HIT_DAMAGE;
        }

        this.calculateHealth();
    };

    this.calculateHealth = () => {
        zombie.healthPercent = zombie.healthCurrent / zombie.health  * 100;

        if (zombie.healthPercent < 0) {
            zombie.healthPercent = 0;
        }
    };

    this.element.addEventListener('click', () => {
        if (zombie !== null) {
            this.getDamage();

            this.healthCurrentElement.style.width = `${zombie.healthPercent}%`;

            if (zombie.healthCurrent <= 0) {
                this.element.classList.add('dead');
                zombie = null;

                setTimeout(() => {
                    this.element.remove();
                    this.events['dead']();
                }, 2000)
            }
        }
    });

    this.healthElement.appendChild(this.healthCurrentElement);
    this.element.appendChild(this.healthElement);
}
