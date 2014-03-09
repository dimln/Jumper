#pragma strict

private var isFalling = false;
private var click = false;
private var owner : GameObject;
private var showGUI = false;
private var startTime : float;

var jumpImpulse : float = 0.12;
var gravityForce : float = 0.008;
var jumpSpeed : float = 0;

function Start()
{

	owner = GameObject.Find("Hero");
	transform.position.x = owner.transform.position.x + 0.252;
	transform.position.y = owner.transform.position.y + 0.286;
	startTime = Time.time;
}

function Update()
{
	if (Input.GetMouseButtonDown(1))
	{
		click = true;
	}
}

function FixedUpdate() 
{	
	if (click && !isFalling)
	{
		isFalling = true;
		transform.position.y += jumpImpulse;
		jumpSpeed = jumpImpulse;
		click = false;
	}
//	if (Input.GetTouch(0).position.x <= Screen.width/2 && !isFalling) 
//	{
//		//isFalling = true;
//		transform.position.y += jumpImpulse;
//		jumpSpeed = jumpImpulse;
//	}
	if (isFalling)
	{
		transform.position.y += jumpSpeed;
		jumpSpeed -= gravityForce;
	}
	else
	{
		transform.position.x = owner.transform.position.x + 0.252;
		transform.position.y = owner.transform.position.y + 0.286;
		isFalling = false;
	}
}

function OnTriggerEnter2D(other : Collider2D) 
{
	if (other.gameObject.name == "Hero")
	{
		isFalling = false;
		jumpSpeed = 0;
		transform.position.x = owner.transform.position.x + 0.252;
		transform.position.y = owner.transform.position.y + 0.286;
	}
	if (other.gameObject.tag == "Obstacle")
	{
		Time.timeScale = 0;
		showGUI = true;
	}
}

function OnGUI()
{
	GUI.Label(Rect (10, 10, 100, 50), (Mathf.Floor(Time.time - startTime)).ToString());
	if (showGUI)
	{	
		var windowRect = Rect(0.5*(Screen.width - 0.5*Screen.width), 
						  	  0.5*(Screen.height - 0.75*Screen.height), 
						  	  0.5*Screen.width, 0.75*Screen.height);
		GUI.Window(0, windowRect, WindowFunction, "Score");
		
	}
}

function WindowFunction(windowID : int) 
{
	var scoreRect = Rect(30,30,100,60);
	var restart = GUI.Button(Rect(30,30,100,60),"Restart");
	var quit = GUI.Button(Rect(160,30,100,60),"Quit");
	if (restart)
	{
		if (Time.timeScale != 1)
		{
			Time.timeScale = 1;
		}
		Application.LoadLevel(Application.loadedLevel);
	}
	if (quit)
	{
		Application.Quit();
	}
}