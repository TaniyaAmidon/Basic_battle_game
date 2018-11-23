let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },

    resetPlayer: function(classType) {
        switch(classType) {
            case "Pikachu":
                player = new Player(classType, 200, 0, 200, 100, 50)
                break;
            case "Squirtle":
                player = new Player(classType, 100, 0, 100, 150, 200)
                break;
            case "Charmander":
                player = new Player(classType, 80, 0, 50, 200, 50)
                break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="images/' + classType.toLowerCase() + '.png" + class="img-avatar"><div><h3>' + classType + '</h3><p class=".health-player">Health: ' + player.health + '</p>' + '<p>Mana: ' + player.mana + '</p>' + '<p>Strength: ' + player.strength + '</p>' + '<p>Aglility: ' + player.agility + '</p>' + '<p>Speed: ' + player.speed + '</p></div>'; 
    },

    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
 
        getHeader.innerHTML = '<p>Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";

    },

    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // create enemy
        let enemy00 = new Enemy("Evil-Cat", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Dragon", 200, 0, 150, 80, 100);

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
            switch (chooseRandomEnemy) {
                case 0:
                    enemy = enemy00;
                    break;
                case 1:
                    enemy = enemy01;
                break;
            }

        getHeader.innerHTML ='<p>Task: Choose your move!</p>';
        getActions.innerHTML ='<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        //enemy
        getEnemy.innerHTML = '<img src="images/' + enemy.enemyType.toLowerCase() + '.png" + class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p>' + '<p>Mana: ' + enemy.mana + '</p>' + '<p>Strength: ' + enemy.strength + '</p>' + '<p>Aglility: ' + enemy.agility + '</p>' + '<p>Speed: ' + enemy.speed + '</p></div>'; 
        }

}