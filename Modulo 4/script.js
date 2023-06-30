
var names=new Array(); 
names[0]="Sheme";
names[1]="Juan";
names[2]="Julio";
names[3]="jimmy";
names[4]="Mochi";
names[5]="Soto";
names[6]="Oswal";
names[7]="Manersh";
names[8]="Mahli";
names[9]="jason";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}