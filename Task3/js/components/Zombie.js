function Zombie(zombie) {
    this.zombie = zombie || null;
    this.zombie.health = this.zombie.health || 0;
    this.zombie.healthCurrent = this.zombie.health;
    this.zombie.healthPercent = 100;
    this.zombie.death = false;
    this.zombie.events = {
        'create': function() {}
    };

    this.element = document.createElement('div');
    this.healthElement = document.createElement('div');
    this.healthCurrentElement = document.createElement('div');

    this.element.classList.add('zombie');
    this.healthElement.classList.add('zombie-health');
    this.healthCurrentElement.classList.add('zombie-health-current');

    this.on = (event, callback) => {
        this.zombie.events[event] = callback;
    };

    this.zombie.getDamage = () => {
        if (this.zombie.healthCurrent > 0) {
            this.zombie.healthCurrent -= HIT_DAMAGE;
        }

        this.zombie.calculateHealth();
    };

    this.zombie.calculateHealth = () => {
        this.zombie.healthPercent = this.zombie.healthCurrent / this.zombie.health  * 100;

        if (this.zombie.healthPercent < 0) {
            this.zombie.healthPercent = 0;
        }
    };

    this.element.addEventListener('click', () => {
        if (this.zombie !== null) {
            this.zombie.getDamage();

            this.healthCurrentElement.style.width = `${this.zombie.healthPercent}%`;

            if (this.zombie.healthCurrent <= 0) {
                this.element.classList.add('dead');

                setTimeout(() => {
                    this.element.remove();
                    this.zombie.events['create']();
                    this.zombie = null;
                }, 2000)
            }
        }
    });

    this.healthElement.appendChild(this.healthCurrentElement);
    this.element.appendChild(this.healthElement);
}
