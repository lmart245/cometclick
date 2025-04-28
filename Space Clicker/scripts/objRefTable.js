const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Plugins.Mouse,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Acts.Wait
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{CreditsText: 0},
	{Button: 0},
	{isPopping: 0},
	{originalScaleX: 0},
	{originalScaleY: 0},
	{Tween: 0},
	{ClickPlanet: 0},
	{Mouse: 0},
	{TiledBackground3: 0},
	{Credits: 0},
	{CreditsPerSecond: 0},
	{CreditsPerClick: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	CreditsText: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	ClickPlanet: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {}
}