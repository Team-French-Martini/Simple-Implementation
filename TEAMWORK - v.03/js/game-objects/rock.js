function Rock(){
    this.image = new Kinetic.Image({
        x: Math.floor((Math.random() * RockConstants.RockSideLimit)),
        y: Math.floor((Math.random() * RockConstants.RockUpperLimit)),
        width: RockConstants.RockWidth,
        height: RockConstants.RockHeight,
        image: Images.Rock,
    });

    this.respawn = function() {
        var newY = Math.floor(Math.random() * RockConstants.RockUpperLimit);
        var newX = Math.floor(Math.random() * RockConstants.RockSideLimit);
        this.image.setX(newX);
        this.image.setY(newY);
    }

    this.moveDown = function() {
        this.image.move(RockConstants.VelocityDown);
        var currentY = this.image.getY();
        if(currentY >= RockConstants.RockVerticalLimit){
            this.respawn();
        }
    }
}