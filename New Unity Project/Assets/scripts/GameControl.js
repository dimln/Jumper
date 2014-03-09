#pragma strict

//static var gameSpeed = 1;
var Block : Transform;

var obstacleSpawnDelay : float = 1.0;

private var spawnType : int;
private var spawnTime : float;
private var startTime : float;

function Start()
{
	Input.multiTouchEnabled = false;
	Time.timeScale = 1;
	spawnTime = Time.time;
	startTime = Time.time;	
}

function FixedUpdate () 
{	
	if (Time.time - spawnTime >= obstacleSpawnDelay)
	{
		spawnTime = Time.time;
		spawnType = Random.Range(0,2) % 2;
		switch (spawnType)
		{
		case 0:
			Instantiate(Block, Vector2(8, 0), Quaternion.identity);
			break;
		case 1:
			Instantiate(Block, Vector2(8, 0.45), Quaternion.identity);
			break;	
		}
	}
	obstacleSpawnDelay = 0.5 + 0.5*Mathf.Exp(-0.1*(Time.time - startTime));	
}