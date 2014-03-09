#pragma strict

var runSpeed = 0.15;
private var offset : float;

function Start()
{
	renderer.material.mainTexture.wrapMode = TextureWrapMode.Repeat;
}

function FixedUpdate() 
{
	offset = Time.fixedTime * runSpeed;
	renderer.material.mainTextureOffset = Vector2(offset, 0);
}