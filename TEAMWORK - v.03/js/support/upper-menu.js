function PointsText(){
    this.text = new Kinetic.Text({
        x: 100,
        y: 100,
        text: 'Player points: ' + GameConstants.StartingPoints,
        fontSize: 36,
        fontFamily: 'Calibri',
        width:300 ,
        align: 'center',    
        fill: 'red'
    });
}

function LivesText(){
    this.text = new Kinetic.Text({
        x: 700,
        y: 100,
        text: 'Lives left: ' + GameConstants.StartingLives,
        fontSize: 36,
        fontFamily: 'Calibri',
        width:300 ,
        align: 'center',    
        fill: 'red'
    });
}