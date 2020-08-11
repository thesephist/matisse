
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
randInt = (min, max) => {return __as_ink_string(min + floor((rand() * max)))};
randColor = () => {return rgb(rand(), rand(), rand())};
randColorAlpha = () => {return rgba(rand(), rand(), rand(), rand())};
randColorGreyscale = () => (() => {let r = rand(); return rgb(r, r, r)})();
randColorGreyscaleAlpha = () => (() => {let r = rand(); return rgba(r, r, r, rand())})();
clear = () => {return clearRect(0, 0, 1000, 1000)};
setFill = color => {return (() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(fillStyle, color) : (__ink_assgn_trgt.fillStyle) = color; return __ink_assgn_trgt})()};
setStroke = color => {return (() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(strokeStyle, color) : (__ink_assgn_trgt.strokeStyle) = color; return __ink_assgn_trgt})()};
fillRect = bind(Ctx, __Ink_String(`fillRect`));
strokeRect = bind(Ctx, __Ink_String(`strokeRect`));
clearRect = bind(Ctx, __Ink_String(`clearRect`))
setFill(__Ink_String(`transparent`));
each(range(0, 1000, 50), x => (() => {return each(range(0, 1000, 50), y => (() => {(() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(lineWidth, randInt(1, 6)) : (__ink_assgn_trgt.lineWidth) = randInt(1, 6); return __ink_assgn_trgt})(); setStroke(randColorGreyscale()); let radius = randInt(2, 25); let margin = (25 - radius); strokeRect(__as_ink_string(x + margin), __as_ink_string(y + margin), (2 * radius), (2 * radius)); (() => {let __ink_assgn_trgt = __as_ink_string(Ctx); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(lineWidth, randInt(1, 6)) : (__ink_assgn_trgt.lineWidth) = randInt(1, 6); return __ink_assgn_trgt})(); setStroke(randColorAlpha()); radius = randInt(2, 25); margin = (25 - radius); return strokeRect(__as_ink_string(x + margin), __as_ink_string(y + margin), (2 * radius), (2 * radius))})())})())
