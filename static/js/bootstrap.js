// non-Ink JavaScript required to bootstrap page functionality

const bind = (target, fName) => target[fName].bind(target);

document.getElementById('generateButton').addEventListener('click', () => generate());
document.getElementById('downloadButton').addEventListener('click', (evt) => {
    const canvas = document.querySelector('#canvas');
    const imageData = canvas.toDataURL('image/png');
    evt.target.href = imageData;
});
