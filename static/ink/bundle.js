
f = format;
jslog = x => {return (() => {return (() => {let __ink_acc_trgt = __as_ink_string(console); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[log] || null : (__ink_acc_trgt.log !== undefined ? __ink_acc_trgt.log : null)})()})()(x)};
Width = 1000;
Height = 1000;
Canvas = bind(document, __Ink_String(`getElementById`))(__Ink_String(`canvas`));
Ctx = bind(Canvas, __Ink_String(`getContext`))(__Ink_String(`2d`));
(() => {let __ink_assgn_trgt = __as_ink_string(Canvas); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(width, Width) : (__ink_assgn_trgt.width) = Width; return __ink_assgn_trgt})();
(() => {let __ink_assgn_trgt = __as_ink_string(Canvas); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(height, Height) : (__ink_assgn_trgt.height) = Height; return __ink_assgn_trgt})();
rgb = (r, g, b) => {return f(__Ink_String(`rgb({{0}}, {{1}}, {{2}})`), [(r * 255.99000000), (g * 255.99000000), (b * 255.99000000)])};
rgba = (r, g, b, a) => {return f(__Ink_String(`rgb({{0}}, {{1}}, {{2}}, {{3}})`), [(r * 255.99000000), (g * 255.99000000), (b * 255.99000000), a])};
randCenterBias = (min, max, resolution) => (() => {let parts = map(range(0, resolution, 1), () => {return (rand() / resolution)}); return __as_ink_string(min + (reduce(parts, (a, b) => {return __as_ink_string(a + b)}, 0) * (() => {return (max - min)})()))})();
randRange = (min, max) => {return __as_ink_string(min + (rand() * (() => {return (max - min)})()))};
randInt = (min, max) => {return floor(randRange(min, max))};
randColor = () => {return rgb(rand(), rand(), rand())};
randColorAlpha = () => {return rgba(rand(), rand(), rand(), rand())};
randColorGreyscale = () => (() => {let r = rand(); return rgb(r, r, r)})();
randColorGreyscaleAlpha = () => (() => {let r = rand(); return rgba(r, r, r, rand())})();
clear = () => {return clearRect(0, 0, 1000, 1000)};
setFill = color => {return (() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(fillStyle, color) : (__ink_assgn_trgt.fillStyle) = color; return __ink_assgn_trgt})()};
setLineWidth = width => {return (() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(lineWidth, width) : (__ink_assgn_trgt.lineWidth) = width; return __ink_assgn_trgt})()};
setStroke = color => {return (() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(strokeStyle, color) : (__ink_assgn_trgt.strokeStyle) = color; return __ink_assgn_trgt})()};
fillRect = bind(Ctx, __Ink_String(`fillRect`));
strokeRect = bind(Ctx, __Ink_String(`strokeRect`));
clearRect = bind(Ctx, __Ink_String(`clearRect`));
beginPath = bind(Ctx, __Ink_String(`beginPath`));
moveTo = bind(Ctx, __Ink_String(`moveTo`));
lineTo = bind(Ctx, __Ink_String(`lineTo`));
stroke = bind(Ctx, __Ink_String(`stroke`));
drawLine = (start, end) => (() => {beginPath(); moveTo((() => {let __ink_acc_trgt = __as_ink_string(start); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(start); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[1] || null : (__ink_acc_trgt[1] !== undefined ? __ink_acc_trgt[1] : null)})()); lineTo((() => {let __ink_acc_trgt = __as_ink_string(end); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(end); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[1] || null : (__ink_acc_trgt[1] !== undefined ? __ink_acc_trgt[1] : null)})()); return stroke()})();
drawSinglePath = points => (() => {beginPath(); let start = (() => {let __ink_acc_trgt = __as_ink_string(points); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})(); moveTo((() => {let __ink_acc_trgt = __as_ink_string(start); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(start); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[1] || null : (__ink_acc_trgt[1] !== undefined ? __ink_acc_trgt[1] : null)})()); each(slice(points, 1, len(points)), next => {return lineTo((() => {let __ink_acc_trgt = __as_ink_string(next); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(next); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[1] || null : (__ink_acc_trgt[1] !== undefined ? __ink_acc_trgt[1] : null)})())}); return stroke()})();
drawPaths = points => {return reduce(slice(points, 1, len(points)), (last, next) => (() => {drawLine(last, next); return next})(), (() => {let __ink_acc_trgt = __as_ink_string(points); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})())}
rectGrid = () => (() => {setFill(__Ink_String(`transparent`)); return each(range(0, 1000, 50), x => (() => {return each(range(0, 1000, 50), y => (() => {setLineWidth(randRange(1, 6)); setStroke(randColorGreyscale()); let radius = randRange(2, 25); let margin = (25 - radius); strokeRect(__as_ink_string(x + margin), __as_ink_string(y + margin), (2 * radius), (2 * radius)); setLineWidth(randRange(1, 6)); setStroke(randColorAlpha()); radius = randRange(2, 25); margin = (25 - radius); return strokeRect(__as_ink_string(x + margin), __as_ink_string(y + margin), (2 * radius), (2 * radius))})())})())})();
diagonals = () => (() => {setLineWidth(2); setStroke(rgba(randRange(0.30000000, 0.90000000), randRange(0.30000000, 0.90000000), randRange(0.30000000, 0.90000000), 0.30000000)); let randomPoints = map(range(0, 1000, 1), () => {return [randCenterBias(0, 1000, 6), randCenterBias(0, 1000, 6)]}); return drawPaths(randomPoints)})();
rainbowDiagonals = () => (() => {setLineWidth(2); let randomPoints = map(range(0, 1000, 1), () => {return [randCenterBias(0, 1000, 5), randCenterBias(0, 1000, 5)]}); return reduce(slice(randomPoints, 1, len(randomPoints)), (last, next) => (() => {setStroke(rgba(randRange(0.20000000, 0.80000000), randRange(0.20000000, 0.80000000), randRange(0.20000000, 0.80000000), randRange(0.20000000, 0.60000000))); drawLine(last, next); return next})(), (() => {let __ink_acc_trgt = __as_ink_string(randomPoints); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[0] || null : (__ink_acc_trgt[0] !== undefined ? __ink_acc_trgt[0] : null)})())})();
options = [rectGrid, diagonals, rainbowDiagonals];
generate = () => (() => {clearRect(0, 0, Width, Height); return (() => {return (() => {let __ink_acc_trgt = __as_ink_string(options); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[randInt(0, len(options))] || null : (__ink_acc_trgt[randInt(0, len(options))] !== undefined ? __ink_acc_trgt[randInt(0, len(options))] : null)})()})()()})();
generate()
