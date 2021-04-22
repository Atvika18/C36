class Player{
    constructor()
    {

    }
    getCount()
    {
var playerCountRef = db.ref('playerCount')
playerCountRef.on("value", function(value)
{
    playerCount = value.val()
})
    }
    updateCount(count)
    {
db.ref("/").update({playerCount:count})
    }
    updatePlayer(name)
    {
var playerIndex = "player"+playerCount
db.ref(playerIndex).set({name:name})
    }
}