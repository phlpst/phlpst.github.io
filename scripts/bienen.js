var x = 0;
var y = 0;

var zielX = Math.floor(Math.random()*28)*20+20;
var zielY = 460;

var punkte = 0;
var siegpunkte = 5;

$(document).ready(function(){
	takt = window.setInterval(taktung, 1);
	
	$('#punkte').html('Punkte: '+punkte+'/'+siegpunkte)
	
	var spielbrett = document.getElementById('leinwand');
	var c = spielbrett.getContext('2d');
	 
	c.font='60px Arial';
	
	var spielfigur = new Image();
	spielfigur.src = 'images/spielfigur.png';
	 
	spielfigur.onload=function(){
		c.drawImage(spielfigur,x,y);
	}
	
	function zeichneZiel(){
		var zielFeld = new Image;
		zielFeld.src = 'images/zielbereich.png';
		zielFeld.onload = function (){
			c.drawImage(zielFeld,zielX,zielY);
		}
	}
	//zeichneZiel();
	
	function zielErreicht(){
		if(x == zielX && y == zielY){
			
			if(zielY == 460){
				zielY = 0;
			}
			else{
				zielY = 460;
			}
			zielX = Math.floor(Math.random()*28)*20+20;
			punkte++;
			
			$('#punkte').html('Punkte: '+punkte+'/'+siegpunkte);
			
			if(punkte == siegpunkte){
				window.clearInterval(takt);
				c.clearRect(0,0,600,480);
				c.fillText('Gewonnen!',150,100);
			}
		}
	}
	 
	function taktung(){
		console.log("Hallo, ");
		c.clearRect(0,0,600,480);
		zeichneZiel();
		c.drawImage(spielfigur,x,y);
		zielErreicht();
		
		
	} 
	
	$(document).bind('keydown', function(evt){
		console.log('Tastaturcode: '+evt.keyCode);
		
		switch(evt.keyCode){
			
			case 37:
				console.log('Pfeil nach links');
				
				x -= 20;
				
				if(x < 0){
					x=580;
				}
				
				console.log('x-Wert: '+x)
				return false;
				break;
			case 38:
				console.log('Pfeil nach oben');
				
				y -= 20;
				
				if(y < 0){
					y=460;
				}
				
				console.log('y-Wert: '+y)
				return false;
				break;
			case 39:
				console.log('Pfeil nach rechts');
				
				x += 20;
				
				if(x > 580){
					x=0;
				}
				console.log('x-Wert: '+x)
				return false;
				break;
			case 40:
				console.log('Pfeil nach unten');
				
				y += 20;
				
				if(y > 460){
					y=0;
				}
				
				console.log('y-Wert: '+y)
				return false;
				break;
		}
	})
	
	console.log("spielfigur: "+spielfigur.src);
});
