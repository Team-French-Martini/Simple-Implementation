function ExitState(gameStateManagerObj){
    this.layer = new Kinetic.Layer(),
    this.gameStateManager = gameStateManagerObj,
    this.background = new ExitBackground(),
    this.restartButton = new RestartButton(),
    this.exitButton = new ExitButton(),
    this.render = function () {
        this.layer.batchDraw();
    },
    this.update = function(){
        // exit state does not need update
    },

    attatchExitStateButtonsEvents(this);

    this.layer.add(this.background.backgroundImage);
    this.layer.add(this.restartButton.buttonImage);
    this.layer.add(this.exitButton.buttonImage);

    this.gameStateManager.stage.add(this.layer);
}