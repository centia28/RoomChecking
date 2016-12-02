var Room = function (number,name,category,availability) {
	this.number = number;
	this.name = name;
	this.category = category;
	this.availability = availability;
};

function initRoomList(){
	var roomList = [];

	//3 meetings rooms
	var mandela = new RoomClass(1,"Nelson Room","meeting","Free");
	var obama = new RoomClass(1,"Obama Room","meeting","Free");
	var clinton = new RoomClass(1,"Clinton Room","meeting","Occupied");
	roomList.push(mandela);
	roomList.push(obama);
	roomList.push(clinton);

	//1 games room
	var angry = new RoomClass(1,"Fun Room","games","Free");
	roomList.push(angry);

	//2 quiet-time rooms
	var coelho = new RoomClass(1,"Coelho Room","quiet-time","Free");
	var dalai = new RoomClass(1,"DalaiLama Room","quiet-time","Occupied");
	roomList.push(coelho);
	roomList.push(dalai);

	//5 learning rooms
	var program = new RoomClass(1,"Program Room","learning","Free");
	var database = new RoomClass(1,"Database Room","learning","Free");
	var design = new RoomClass(1,"Design Room","learning","Occupied");
	var concept = new RoomClass(1,"Conception Room","learning","Free");
	var tech = new RoomClass(1,"Tech Room","learning","Occupied");
	roomList.push(program);
	roomList.push(database);
	roomList.push(design);
	roomList.push(concept);
	roomList.push(tech);

	//5 working rooms
	var python = new RoomClass(1,"Python Room","working","Occupied");
	var brain = new RoomClass(1,"Brainstorming Room","working","Occupied");
	var debate = new RoomClass(1,"Debate Room","working","Free");
	var science = new RoomClass(1,"SCience Room","working","Occupied");
	var test = new RoomClass(1,"Testing Room","working","Free");
	roomList.push(python);
	roomList.push(brain);
	roomList.push(debate);
	roomList.push(science);
	roomList.push(test);

	return roomList;
}

module.exports = RoomClass;