function PlayState(gameStateManagerObj){
    this.layer = new Kinetic.Layer();
    this.gameStateManager = gameStateManagerObj,
    this.background = new PlayBackground(),
    this.player = new Player(),
    this.playerLives = GameConstants.StartingLives,
    this.playerPoints = GameConstants.StartingPoints,
    this.initListOfCoins = function() {
        var c1 = new CoinOne();
        var c2 = new CoinOne();
        var c3 = new CoinOne();
        var c4 = new CoinOne();
        var c5 = new CoinTwo();
        var c6 = new CoinTwo();

        return [c1, c2, c3, c4, c5, c6];
    },
    this.initListOfRocks = function() {
        var r1 = new Rock();
        var r2 = new Rock();
        var r3 = new Rock();
        var r4 = new Rock();
        var r5 = new Rock();
        var r6 = new Rock();

        return [r1, r2, r3, r4, r5, r6];
    },
    this.listOfCoins = this.initListOfCoins(),
    this.listOfRocks = this.initListOfRocks(),
    this.points = new PointsText(),
    this.lives = new LivesText(),
    this.render = function () {
        this.layer.batchDraw();
    },
    this.update = function() {
        this.player.update();
        for (var i = 0; i < this.listOfCoins.length; i += 1) {
            var currentCoin = this.listOfCoins[i];
            currentCoin.moveDown();
            var collisionDetected = detectCollision(currentCoin, this.player);
            if(collisionDetected){
                this.playerPoints += currentCoin.coinValue;
                var newText = 'Player points: ' + this.playerPoints;
                this.points.text.setText(newText);
                currentCoin.respawn();
            }
        }

        for (var i = 0; i < this.listOfRocks.length; i += 1) {
            var currentRock = this.listOfRocks[i];
            currentRock.moveDown();
            var collisionDetected = detectCollision(currentRock, this.player);
            if(collisionDetected){
                this.playerLives -= 1;
                if(this.playerLives === 0){
                  localStorage.setItem("High-score: ",JSON.stringify(this.playerPoints));
                    var nextState = new ExitState(this.gameStateManager);
                    this.gameStateManager.states.push(nextState);
                }
                var newText = 'Lives left: ' + this.playerLives;
                this.lives.text.setText(newText);
                currentRock.respawn();
            }
        }
    },

    this.layer.add(this.background.backgroundImage);
    this.layer.add(this.player.playerSprite);
    attatchPlayerEventsWalking(this.player);
    attatchPlayerEventsJumping(this.player);
    attatchPlayStateEvents(this);
    this.player.playerSprite.start();
    this.layer.add(this.points.text);
    this.layer.add(this.lives.text);
    for (var i = 0; i < this.listOfCoins.length; i += 1) {
        var coin = this.listOfCoins[i];
        this.layer.add(coin.image);
    }
    for (var i = 0; i < this.listOfRocks.length; i += 1) {
        var rock = this.listOfRocks[i];
        this.layer.add(rock.image);
    }
    this.gameStateManager.stage.add(this.layer);

}

