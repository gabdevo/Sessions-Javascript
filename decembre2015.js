<script>

// PV veut dire Points de Vie
var PV = 12;
var estVivant = (PV > 0);
var estMort = !estVivant;
var hasFullLife = (PV >= 12);

function attaque() {
    if (estMort) {
    	// Si le monstre est mort
        alert("Le monstre est mort ! :-)");
    }
    else {
    	var degats = getRandomMinMax(1, 5);
    	PV = PV - degats;
        if (PV < 0) {
        	PV = 0;
        }
        alert("Le monstre a perdu "+degats+" PV. Il lui en reste "+PV);
    }
}

function soigne() {
	if (PV=0) {
    	alert("Le monstre est déjà mort.");
    }
    else if (hasFullLife) {
    	//si le monstre a tout ses pv
        alert("Le monstre a ses points de vie déjà au maximum.");
    }
    else {
    	var soins = getRandomMinMax(1, 3);
    	PV = PV+soins;
        if (hasFullLife){
        	PV = 12; 
        }
    	alert("Le monstre a gagné "+soins+" PV. Il en a maintenant "+PV);
    }
}

function getRandomMinMax(min, max)
{
    var nombreAleatoire = Math.floor(Math.random()*(max-min)) + min;
	return nombreAleatoire;
}
	function Creeper()    
</script>
<button onclick="attaque()">Attaque</button>
<button onclick="soigne()">Soigne</button>
<button onclick="creeper()">Creeper</button>
<img src="http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/1113/minecraft-real-life-creeper.jpg" />
