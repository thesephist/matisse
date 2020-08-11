setFill('transparent')

each(range(0, 1000, 50), x => (
	each(range(0, 1000, 50), y => (
		` grey rects `
		Ctx.lineWidth := randInt(1, 6)
		setStroke(randColorGreyscale())

		radius := randInt(2, 25)
		margin := 25 - radius
		strokeRect(x + margin, y + margin, 2 * radius, 2 * radius)

		` color rect `
		Ctx.lineWidth := randInt(1, 6)
		setStroke(randColorAlpha())

		radius := randInt(2, 25)
		margin := 25 - radius
		strokeRect(x + margin, y + margin, 2 * radius, 2 * radius)
	))
))
