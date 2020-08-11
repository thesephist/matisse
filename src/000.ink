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

options := [
	rectGrid
	diagonals
	rainbowDiagonals
]

` pick a random style and generate `
generate := () => (
	clearRect(0, 0, Width, Height)
	(options.randInt(0, len(options)))()
)
generate()
