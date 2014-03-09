#pragma strict

var speed : float = 0.9;

function FixedUpdate () 
{
	transform.position.x -= speed*Time.fixedDeltaTime;
	if (transform.position.x < -8)
	{
		Destroy(this.gameObject);
	}
}