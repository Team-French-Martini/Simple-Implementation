attatchPlayerEventsWalking = function(playerObj){
    document.addEventListener("keydown", function (e) {
        if(e.keyCode == GameConstants.LeftArrow && !playerObj.isJumping){
            playerObj.motionState = PlayerConstants.Motion.MovingLeft;
            playerObj.playerSprite.setAnimation('moving_Left');
        }

        if(e.keyCode == GameConstants.RightArrow && !playerObj.isJumping){
            playerObj.motionState = PlayerConstants.Motion.MovingRight;
            playerObj.playerSprite.setAnimation('moving_Right');
        }
    });

    document.addEventListener("keyup", function (e) {
        if(e.keyCode == GameConstants.LeftArrow && !playerObj.isJumping){
            playerObj.playerSprite.setAnimation('standing_Left');
            playerObj.motionState = PlayerConstants.Motion.StandingLeft;
        }

        if(e.keyCode == GameConstants.RightArrow && !playerObj.isJumping){
            playerObj.playerSprite.setAnimation('standing_Right');
            playerObj.motionState = PlayerConstants.Motion.StandingRight;
        }
    });
};

attatchPlayerEventsJumping = function(playerObj){
    var listener = new window.keypress.Listener();
    listener.simple_combo("left up", function() { 
        if(!playerObj.isJumping){
            playerObj.isJumping = true;
            playerObj.motionState = PlayerConstants.Motion.RisingUpLeft;
            playerObj.playerSprite.setAnimation('jumping_Left');
        }
    });
    listener.simple_combo("right up", function() { 
        if(!playerObj.isJumping){
            playerObj.isJumping = true;
            playerObj.motionState = PlayerConstants.Motion.RisingUpRight;
            playerObj.playerSprite.setAnimation('jumping_Right');
        }
    });
    listener.simple_combo("up", function() { 
        if(!playerObj.isJumping){
            playerObj.isJumping = true;
            if(playerObj.motionState == PlayerConstants.Motion.StandingLeft){
                playerObj.playerSprite.setAnimation('jumping_Left');
                playerObj.motionState = PlayerConstants.Motion.RisingUpStraightFaceLeft;
            }
            else if(playerObj.motionState == PlayerConstants.Motion.StandingRight){
                playerObj.playerSprite.setAnimation('jumping_Right');
                playerObj.motionState = PlayerConstants.Motion.RisingUpStraightFaceRight;
            }
        }
    });
};

attatchPlayStateEvents = function(playStateObj){
    document.addEventListener("keydown", function (e) {
        if(e.keyCode == GameConstants.Esc){
            playStateObj.layer.remove();
            playStateObj.gameStateManager.states.pop();
        }
    });
};

attatchMenuStateButtonsEvents = function(menuStateObj){
    menuStateObj.playButton.buttonImage.addEventListener('click', function(){
        var nextState = new PlayState(menuStateObj.gameStateManager);
        menuStateObj.gameStateManager.states.push(nextState);
    });
    menuStateObj.highScoresButton.buttonImage.addEventListener('click', function(){
        //read high scores from txt file
    });
    menuStateObj.exitButton.buttonImage.addEventListener('click', function(){
        window.close();
    });
};

attatchExitStateButtonsEvents = function(exitStateObj){
    exitStateObj.restartButton.buttonImage.addEventListener('click', function(){
        //clears exit state
        exitStateObj.gameStateManager.currentState().layer.remove();
        exitStateObj.gameStateManager.states.pop();
        //clears previous play state
        exitStateObj.gameStateManager.currentState().layer.remove();
        exitStateObj.gameStateManager.states.pop();

        // starting next play
        var nextState = new PlayState(exitStateObj.gameStateManager);
        exitStateObj.gameStateManager.states.push(nextState);
    });

    exitStateObj.exitButton.buttonImage.addEventListener('click', function(){
        window.close();
    });
};