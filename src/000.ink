rectGrid := () => (
	setFill('transparent')

	each(range(0, 1000, 50), x => (
		each(range(0, 1000, 50), y => (
			` grey rects `
			setLineWidth(randRange(1, 6))
			setStroke(randColorGreyscale())

			radius := randRange(2, 25)
			margin := 25 - radius
			strokeRect(x + margin, y + margin, 2 * radius, 2 * radius)

			` color rect `
			setLineWidth(randRange(1, 6))
			setStroke(randColorAlpha())

			radius := randRange(2, 25)
			margin := 25 - radius
			strokeRect(x + margin, y + margin, 2 * radius, 2 * radius)
		))
	))
)

diagonals := () => (
	setLineWidth(2)
	setStroke(rgba(
		randRange(0.3, 0.9)
		randRange(0.3, 0.9)
		randRange(0.3, 0.9)
		0.3
	))
	randomPoints := map(range(0, 1000, 1), () => [
		randCenterBias(0, 1000, 6)
		randCenterBias(0, 1000, 6)
	])
	drawPaths(randomPoints)
)

rainbowDiagonals := () => (
	setLineWidth(2)
	randomPoints := map(range(0, 1000, 1), () => [
		randCenterBias(0, 1000, 5)
		randCenterBias(0, 1000, 5)
	])
	reduce(slice(randomPoints, 1, len(randomPoints)), (last, next) => (
		setStroke(rgba(
			randRange(0.2, 0.8)
			randRange(0.2, 0.8)
			randRange(0.2, 0.8)
			randRange(0.2, 0.6)
		))
		drawLine(last, next)
		next
	), randomPoints.0)
)

flowerbed := () => (
	Center := [500, 500]
	PuffLen := 36
	MaxDist := distance(Center, [40, 40])
	each(range(0, randRange(6, 100), 1), () => (
		target := [randRange(50, 950), randRange(50, 950)]
		dist := distance(Center, target)
		setLineWidth(2)
		setStroke(rgba(0, 0, 0, 1 - dist / MaxDist))
		drawLine(Center, target)

		` spikes `
		setLineWidth(5)
		setStroke(rgba(0.99, 0.2, 0.2, 1 - dist / MaxDist))
		each(range(0, 5, 1), () => drawLine(target, [
			target.0 + randRange(0, PuffLen) - PuffLen / 2
			target.1 + randRange(0, PuffLen) - PuffLen / 2
		]))
	))
)

options := [
	rectGrid
	diagonals
	rainbowDiagonals
	flowerbed
]

` pick a random style and generate `
generate := () => (
	clearRect(0, 0, Width, Height)
	(options.randInt(0, len(options)))()
)
generate()
