` std is implied `
f := format

` richer logging in the browser `
jslog := x => (console.log)(x)

` make the canvas `
Canvas := bind(document, 'getElementById')('canvas')
Ctx := bind(Canvas, 'getContext')('2d')
Canvas.width := 1000
Canvas.height := 1000

` utilities `
rgb := (r, g, b) => f('rgb({{0}}, {{1}}, {{2}})', [r * 255.99, g * 255.99, b * 255.99])
rgba := (r, g, b, a) => f('rgb({{0}}, {{1}}, {{2}}, {{3}})'
	[r * 255.99, g * 255.99, b * 255.99, a])
randInt := (min, max) => min + floor(rand() * max)
randColor := () => rgb(rand(), rand(), rand())
randColorAlpha := () => rgba(rand(), rand(), rand(), rand())

` canvas functions `
clear := () => clearRect(0, 0, 1000, 1000)
setFill := color => Ctx.fillStyle := color
setStroke := color => Ctx.strokeStyle := color
fillRect := bind(Ctx, 'fillRect')
strokeRect := bind(Ctx, 'strokeRect')
clearRect := bind(Ctx, 'clearRect')

` draw `
setFill('transparent')
each(range(0, 100, 1), n => (
	Ctx.lineWidth := randInt(1, 8)
	setStroke(randColorAlpha())
	strokeRect(randInt(10, 880), randInt(10, 880), 100, 100)
))

