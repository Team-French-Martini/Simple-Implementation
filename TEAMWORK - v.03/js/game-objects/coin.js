function CoinOne(imagesObj){
    this.image = new Kinetic.Image({
        x: Math.floor((Math.random() * CoinConstants.CoinSideLimit)),
        y: Math.floor((Math.random() * CoinConstants.CoinUpperLimit)),
        width: CoinConstants.CoinOneWidth,
        height: CoinConstants.CoinOneHeight,
        image: Images.CoinOne,
    });
    this.coinValue = CoinConstants.CoinValueOne;
    this.respawn = function (){
        var newX = Math.floor(Math.random() * CoinConstants.CoinSideLimit);
        var newY = Math.floor(Math.random() * CoinConstants.CoinUpperLimit);
        this.image.setX(newX);
        this.image.setY(newY);
    },
    this.moveDown = function (){
        this.image.move(CoinConstants.VelocityDown);
        var currentY = this.image.getY();
        if(currentY >= CoinConstants.CoinVerticalLimit){
            this.respawn();
        }
    }
}

function CoinTwo(imagesObj){
    this.image = new Kinetic.Image({
        x: Math.floor((Math.random() * CoinConstants.CoinSideLimit)),
        y: Math.floor((Math.random() * CoinConstants.CoinUpperLimit)),
        width: CoinConstants.CoinTwoWidth,
        height: CoinConstants.CoinTwoHeight,
        image: Images.CoinTwo,
    });
    this.coinValue = CoinConstants.CoinValueTwo;
    this.respawn = function (){
        var newX = Math.floor(Math.random() * CoinConstants.CoinSideLimit);
        var newY = Math.floor(Math.random() * CoinConstants.CoinUpperLimit);
        this.image.setX(newX);
        this.image.setY(newY);
    },
    this.moveDown = function (){
        this.image.move(CoinConstants.VelocityDown);
        var currentY = this.image.getY();
        if(currentY >= CoinConstants.CoinVerticalLimit){
            this.respawn();
        }
    }
}



    


