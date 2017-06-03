/* Mystery game 

Four rooms		: the ballroom, gallery, billiards room, and dining room,
Four weapons	: poison, a trophy, a pool stick, and a knife,
Four suspects	: Mr. Chaudhury, Mr. Singh, Mrs. Sharma, Mrs. Khan.

the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.

Mr. Chaudhury was located in the dining room.
Mrs. Sharma was located in the gallery.
Mr. Singh was located in the billiards room.
Mrs. Khan was located in the ballroom.

*/
var room = "ballroom";
var suspect = "Mrs. Khan";
var weapon;
var solved;

if (room === "dining room" && suspect === "Mr. Chaudhury") {
	weapon = "knife";
} else if (room === "gallery" && suspect === "Mrs. Sharma") {
	weapon = "trophy";
} else if (room === "billiards room" && suspect === "Mr. Singh") {
	weapon = "pool stick";
} else if (room === "ballroom" && suspect === "Mrs. Khan") {
	weapon = "poison";
	solved = true;
} else {
	solved = false;
}
	
if (solved) {
	console.log(suspect + " did it in the " + room + " with the " +  weapon + "!");
}
