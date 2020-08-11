all: run

# compile + output Ink sources
run:
	september translate src/000.ink | tee /dev/stderr > static/ink/000.js

# compile + output whenever Ink sources change
watch:
	ls src/* | entr make
w: watch

# run formatter and save
fmt:
	inkfmt fix src/*.ink
f: fmt

fmt-check:
	inkfmt src/*.ink
fk: fmt-check
