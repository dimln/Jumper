#pragma strict

private var isFalling = false;
private var click = false;
private var touchMoved = false;
var jumpImpulse : float = 200;

function Update()
{
	if (Input.GetMouseButtonDown(0))
	{
		click = true;
	}
}

function FixedUpdate () 
{
	if (click && !isFalling)
	{
		rigidbody2D.AddForce(Vector2.up * jumpImpulse);
		isFalling = true;
		click = false;
	}
//	if (Input.GetTouch(0).position.x > Screen.width/2 && !isFalling) 
//	{ 
//		rigidbody2D.AddForce(Vector2.up * jumpImpulse);
//		isFalling = true;
//	}
}

function OnCollisionEnter2D (collision : Collision2D)
{
	if (collision.collider.gameObject.tag == "Obstacle")
		isFalling = false;
}
