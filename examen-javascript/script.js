function gout(){
            document.getElementsByClassName(".body").style.grid-column-gap: 10px;
        }
        function tailleh1(){
            var taille = document.getElementById("slide").value;
            document.getElementById("h1").style.fontSize = taille;
        }
        function rgbaleat(){
            var random ="#" + (Math.random()*0xFFFFFF<<0).toString(16);
            document.getElementById("coulaleat").style.backgroundColor = random;
        }
        function ajoutmot(){
            var mot = document.getElementById("mot").value;
            document.getElementById("groupemot").value += mot;
        }
        function resolution(){
            var width = window.screen.width;
            var height = window.screen.height;
            alert("width "+ width +" height "+ height);
        }
        function resdiv2(){
            var width = window.screen.width /2;
            var height = window.screen.height /2;
            alert("width "+ width +" height "+ height);
        }
        function arrondi (){
            var dec = document.getElementById("decimal");
            var decres = dec.value -0.00001;
            var ent = Math.round(decres);
            document.getElementById("entier").value = ent;
        }
        function convyuantoeuro(){
            var y = document.getElementById("yuan");
            var yres = y.value;
            var resu = yres*1.3;
            document.getElementById("euro").value = resu;
        }
        function conveurotoyuan(){
            var e = document.getElementById("euro");
            var eres = e.value;
            var resu = eres*7.83;
            alert(resu +" yuan");
        }
        function convgrtol(){
            var g = document.getElementById("gramme");
            var gres = g.value;
            var resu = gres/100;
            document.getElementById("litre").value = resu;
        }
        function convltogr(){
            var l = document.getElementById("litre");
            var lres = l.value;
            var resu = lres*1000;
            alert(resu +" grammes");
        }
        function valenter(){
            var numb1 = document.getElementById("nb1");
            var nb1 = numb1.value;
            var numb2 = document.getElementById("nb2");
            var nb2 = numb2.value;
            var diviser = nb1 / nb2;
            alert(diviser);
        }
        function multiplication(){
            var nb = document.getElementById("resultat");
            var nbres = nb.value;
            var result = nbres * 5;
            document.getElementById("resultat").value = result;
            alert(resu);
        }
        function division(){
            var nb = document.getElementById("resultat");
            var nbres = nb.value;
            var resu = nbres / 2;
            document.getElementById("resultat").value = resu;
        }
        function divi4(){
            var nb = document.getElementById("resultat");
            var nbres = nb.value;
            var resu = nbres / 4;
            document.getElementById("resultat").value = resu;
        }
        function calcullong (){
            var nb = document.getElementById("resultat");
            var nbres = nb.value;
            var nbdiv10 = nbres /10;
            var nbfois2 = nbdiv10 *2;
            var resu = nbfois2 -20;
            document.getElementById("resultat").value = resu;
        }
        function incrémentationde2(){
            var nb = document.getElementById("resultat");
            var nbres = nb.value + 2;
            document.getElementById("resultat").value = nbres;
            
        }
        function nb0(){
            var verif = document.getElementById("resultat").value;
            var nb = document.getElementById("chiffre0");
            var nbres = nb.value;
            document.getElementById("resultat").value = nbres;
            
        }
        function nb1(){
            var nb = document.getElementById("chiffre1");
            var nbres = nb.value;
            document.getElementById("resultat").value = nbres;
        }
        function nb2(){
            var nb = document.getElementById("chiffre2");
            var nbres = nb.value;
            document.getElementById("resultat").value = nbres;
        }
        function nb3(){
            var nb = document.getElementById("chiffre3");
            var nbres = nb.value;
            document.getElementById("resultat").value = nbres;
        }
        function nb4(){
            var nb = document.getElementById("chiffre4");
            var nbres = nb.value;
            document.getElementById("resultat").value = nbres;
        }
        function nb5(){
            var nb = document.getElementById("chiffre5");
            var nbres = nb.value;
            document.getElementById("resultat").value = nbres;
        }
        function nb6(){
            var nb = document.getElementById("chiffre6");
            var nbres = nb.value;
            document.getElementById("resultat").value = nbres;
        }
        function nb7(){
            var nb = document.getElementById("chiffre7");
            var nbres = nb.value;
            document.getElementById("resultat").value = nbres;
        }
        function nb8(){
            var nb = document.getElementById("chiffre8");
            var nbres = nb.value;
            document.getElementById("resultat").value = nbres;
        }
        function nb9(){
            var nb = document.getElementById("chiffre9");
            var nbres = nb.value;
            document.getElementById("resultat").value = nbres;
        }
        