const html = document.documentElement;
const canvas = document.querySelector('.scrolling');
const context = canvas.getContext('2d');

const currentFrame = index => (
    `frames/${index.toString().padStart(4, '0')}.png`
)

const frameCount = 240;

canvas.height = 1080;
canvas.width = 1080;
const img = new Image();
img.src = currentFrame(2);
img.onload = function(){
    context.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
    
    requestAnimationFrame( () => updateImage(frameIndex + 1))
})