var dirtCount=0;
var stoneCount=0;
var diamondCount=0;
var money=0;

function addDirt()
{
	dirtCount += 1;
	document.getElementById("dirtCount").innerHTML = "Dirt: " + dirtCount;
}

function addStone()
{
	stoneCount += 1;
	document.getElementById("stoneCount").innerHTML = "Stone: " + stoneCount;
}

function addDiamond()
{
	diamondCount += 1;
	document.getElementById("diamondCount").innerHTML = "Diamond: " + diamondCount;
}

function refresh()
{
	document.getElementById("dirtCount").innerHTML = "Dirt: " + dirtCount;
	document.getElementById("stoneCount").innerHTML = "Stone: " + stoneCount;
	document.getElementById("diamondCount").innerHTML = "Diamond: " + diamondCount;
	document.getElementById("money").innerHTML = "Money: $" + money;
}

function sell()
{
	money += (dirtCount*10)/100;
	money += (stoneCount*100)/100;
	money += (diamondCount*1000)/100;
	dirtCount = 0;
	stoneCount = 0;
	diamondCount = 0;
	refresh();
}