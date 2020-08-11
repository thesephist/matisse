// non-Ink JavaScript required to bootstrap page functionality

const bind = (target, fName) => target[fName].bind(target);

document.getElementById('generateButton').addEventListener('click', () => generate());
