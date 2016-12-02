function checkRoom(category){
	var room = require('RoomClass.js');
	var activities = ['meeting', 'games', 'quiet-time', 'learning', 'working'];

	if (activities.indexof(category)) == -1 {
		return "The category does not exist";
	} else {
		var myRoomList = room.initRoomList();
		var res = [];
		for (var i = 0; i < myRoomList.length; i++) {
			if(myRoomList[i].category == category){
				res.push(myRoomList[i]);
			}
		};

		return res;
	}


}