rectGrid := () => (
	setFill('transparent')

	each(range(0, Width, 50), x => (
		each(range(0, Height, 50), y => (
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
		randCenterBias(0, Width, 6)
		randCenterBias(0, Height, 6)
	])
	drawPaths(randomPoints)
)

rainbowDiagonals := () => (
	setLineWidth(2)
	randomPoints := map(range(0, 1000, 1), () => [
		randCenterBias(0, Width, 5)
		randCenterBias(0, Height, 5)
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
		target := [randRange(0, Width), randRange(0, Height)]
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

maze := () => (
	CellSize := 50
	jitter := (coinflip() :: {
		true -> () => 2
		_ -> () => randInt(1, 4)
	})
	setStroke(rgb(0.1, 0.1, 0.1))
	each(range(0, Width, CellSize), x => (
		each(range(0, Height, CellSize), y => (
			coinflip() :: {
				true -> (
					setLineWidth(1)
					drawLine([x, y], [x + CellSize, y + CellSize / jitter()])
				)
			}
			coinflip() :: {
				true -> (
					setLineWidth(5)
					drawLine([x + CellSize, y], [x, y + CellSize])
				)
			}
		))
	))
)

radar := () => (
	Center := [500, 500]
	MaxRadius := 710 ` close to diagonal length `
	each(range(10, MaxRadius, 10), r => (
		setLineWidth(floor((1 - r / MaxRadius) * 12))

		start := randRange(0, Tau)
		strokeArc(Center.0, Center.1, r, start, start + randRange(0, Pi * 0.7))

		start := randRange(0, Tau)
		strokeArc(Center.0, Center.1, r, start, start + randRange(0, Pi * 0.7))
	))
)

fans := () => (
	Center := [500, 500]
	MaxRadius := 710 ` close to diagonal length `
	setLineWidth(6)
	each(range(10, MaxRadius, 6), r => (
		setStroke(rgba(rand(), rand(), rand(), r / MaxRadius))
		start := randRange(0, Tau)
		strokeArc(Center.0, Center.1, r, start, start + randRange(0, Pi * 1.5))
	))
)

options := [
	rectGrid
	diagonals
	rainbowDiagonals
	flowerbed
	maze
	radar
	fans
]

` pick a random style and generate `
generate := () => (
	clearRect(0, 0, Width, Height)
	setFill(rgb(0, 0, 0))
	setStroke(rgb(0, 0, 0))
	(options.randInt(0, len(options)))()
)
generate()
