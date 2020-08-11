` stdlib is implied `
f := format

` richer logging in the browser `
jslog := x => (console.log)(x)

` constants `
Width := 1000
Height := 1000

` make the canvas `
Canvas := bind(document, 'getElementById')('canvas')
Ctx := bind(Canvas, 'getContext')('2d')
Canvas.width := Width
Canvas.height := Height

` utilities `
rgb := (r, g, b) => f('rgb({{0}}, {{1}}, {{2}})', [r * 255.99, g * 255.99, b * 255.99])
rgba := (r, g, b, a) => f('rgb({{0}}, {{1}}, {{2}}, {{3}})'
	[r * 255.99, g * 255.99, b * 255.99, a])
randInt := (min, max) => min + floor(rand() * max)
randColor := () => rgb(rand(), rand(), rand())
randColorAlpha := () => rgba(rand(), rand(), rand(), rand())
randColorGreyscale := () => (
	r := rand()
	rgb(r, r, r)
)
randColorGreyscaleAlpha := () => (
	r := rand()
	rgba(r, r, r, rand())
)

` canvas functions `
clear := () => clearRect(0, 0, 1000, 1000)
setFill := color => Ctx.fillStyle := color
setStroke := color => Ctx.strokeStyle := color
fillRect := bind(Ctx, 'fillRect')
strokeRect := bind(Ctx, 'strokeRect')
clearRect := bind(Ctx, 'clearRect')

