<p align="center">
<img src="https://cdn.rawgit.com/lakefox/LakeFox/4dfc27d8/lakefox.png">
</p>

# What is LakeFox?
Multiplayer video games are huge, they have millions to hundreds of millions of players playing at a time. Most game development companies focuses on the game development (which make sense), but fail to realize how much goes into making the game multiplayer. Some developers will give up on making their game multiplayer and just make their game single player, while some will go through the pain staking process of doing it them selves. If they do succeeded in building the server, they have to host the server which is expensive, which discourages the little guys from building games and forces the big guys to charge or put ads on their games. While creating a game we realized how hard this should be simple process of making a multiplayer game is, so we created LakeFox. LakeFox simplfies the networking for video games and makes a peer to peer network for each player to communicate with each other.

### Peer to Peer?
Most prebuild multiplayer server don't use p2p because having the player connect to 20 different computers will slow their computers down taking away from the experince the game gives. The way they do it instead is a client server client model.

<p align="center">
<img src="http://practice.geeksforgeeks.org/ckeditor/images/uploads/1491250148_client_server.png"><br>
  Client Sever Client Model
</p>

In this model all the clients send their game-state to the server, when the server gets all the game-states it sends all the clients the synced version.