document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.zombies');
    const status = document.querySelector('.zombies-status');
    const numberZombie = document.querySelectorAll('.zombies-status span')[0];
    const allZombies = document.querySelectorAll('.zombies-status span')[1];
    let counter = 0;
    let zombie = null;

    allZombies.textContent = zombies.length;

    function createZombie() {
        if (zombies.length && zombies.length > counter) {
            if (zombies[counter].type === ZOMBIE_TYPE.SMALL) {
                zombie = new ZombieSmall(zombies[counter]);
            } else if (zombies[counter].type === ZOMBIE_TYPE.MAD) {
                zombie = new ZombieMad(zombies[counter]);
            } else if (zombies[counter].type === ZOMBIE_TYPE.STRONG) {
                zombie = new ZombieStrong(zombies[counter]);
            }

            zombie.on('create', () => {
                createZombie();
            });

            counter++;
            numberZombie.textContent = counter;

            container.appendChild(zombie.element);
        } else {
            status.textContent = 'Done';
        }
    }

    createZombie();
});
