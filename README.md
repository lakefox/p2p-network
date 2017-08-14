<p align="center">
<img src="https://cdn.rawgit.com/lakefox/LakeFox/4dfc27d8/lakefox.png">
</p>

# What is LakeFox?
Multiplayer video games are huge, they have millions to hundreds of millions of players playing at a time. Most game development companies focuses on the game development (which make sense), but fail to realize how much goes into making the game multiplayer. Some developers will give up on making their game multiplayer and just make their game single player, while some will go through the pain staking process of doing it them selves. If they do succeeded in building the server, they have to host the server which is expensive, which discourages the little guys from building games and forces the big guys to charge or put ads on their games. While creating a game we realized how hard this should be simple process of making a multiplayer game is, so we created LakeFox. LakeFox simplfies the networking for video games and makes a peer to peer network for each player to communicate with each other.

### Peer to Peer?
Most prebuild multiplayer server don't use p2p because having the player connect to 20 different computers (Full Mesh Topology) will slow their computers down taking away from the experince the game gives. The way they do it instead is a client server topology.

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/FullMeshNetwork.svg/2000px-FullMeshNetwork.svg.png" width="50%"><br>
  Full Mesh Topology<br>
  <img src="http://practice.geeksforgeeks.org/ckeditor/images/uploads/1491250148_client_server.png" width="50%"><br>
  Client Sever Topology
</p>

In this model all the clients send their game-state to the server, when the server gets all the game-states it sends all the clients the synced version. LakeFox Work by not connecting the players in a client server topology or full mesh topology, but a peer neighbor mesh topology.

<p align="center">
	<img src="https://cdn.rawgit.com/lakefox/LakeFox/76fedf98/topology.png" width="50%"><br>
  	Peer Neighbor Mesh Topology
</p>

In peer mesh toplogy each player (peer) is connected to two other players. When the (player) recives some data from another player (From) it keeps a copy of the data and sends the other player (To).

<p align="center">
	<img src="https://cdn.rawgit.com/lakefox/LakeFox/f7db608e/connections.png" width="50%"><br>
</p>

The network is self healing so when a player disconnects the server sends out a message to all the players in the room and they will automatically reconnect keeping the network running.

# How to use it?

Download [fox.js](https://github.com/lakefox/Fox/blob/master/fox.js)
``` shell
$ node fox LOBBY ROOM PORT (HOST)
```

LakeFox is setup to run multiple games on the same server for so the way the connections are broken up are through lobbies and rooms.

### Lobby
Lobbies are basically the game, so if I created a game called Ninja's vs. Cowboy's TM my lobby name could be njvscb
``` shell
$ node fox njvscb ROOM PORT (HOST)
```

### ROOM

Rooms are subcatagories for the lobbies, so in Ninja's vs. Cowboy's TM there are 2 v 2 room's that four people can fight each other. So I will create a room using a simple counter so the first room is room 0.

_Note these name's are just used as an example you can use anything for the LOBBY or ROOM_
``` shell
$ node fox njvscb 0 PORT (HOST)
```

### PORT

PORT is for

### (HOST)

HOST is for