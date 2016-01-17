<script>

// PV veut dire Points de Vie
var PV = 12000000$;
var moin d'argent = 300$;
var paye = 200$;

function attaque() {
    PV = PV-degats;
    if(PV <= 0){
        alert("vous etes pauvre ! :-)");
    }
    else {
        alert("Le monstre a perdu "+degats+" PV. Il lui en reste "+PV);
    }
}

function soigne() {
    PV = PV+soins;
    if(PV >= 12){
        alert("Le monstre a ses points de vie déjà au maximum.");
    }
    else {
        alert("Le monstre a gagné "+soins+" PV. Il en a maintenant "+PV);
    }
}
</script>
<button onclick="attaque()">Attaque</button>
<button onclick="soigne()">Soigne</button>
