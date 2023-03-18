function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e){
	if(e.key === 'ArrowDown' || e.key === 'down'){ 
		moveVertical(avatar, 50);
	} 
	else if (e.key === 'ArrowUp' || e.key === 'up'){
		moveVertical(avatar, -50);
	} 
	else if (e.key === 'ArrowRight' || e.key === 'right'){
		moveHorizontal(avatar, 50);
		avatar.style.transform = 'scale(1,1)';
	} 
	else if (e.key === 'ArrowLeft' || e.key === 'left'){
		moveHorizontal(avatar, -50)
		avatar.style.transform = 'scale(-1,1)';
	}
	if (isTouching(avatar, coin)) moveCoin();
});

const moveVertical = (element, amount) => {
	const currTop = extractPos(element.style.top);	
	element.style.top = `${currTop + amount}px`
};
const moveHorizontal = (element, amount) => {
	const currLeft = extractPos(element.style.left);	
	element.style.left = `${currLeft + amount}px`;
};
const extractPos = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0,-2));
};
const moveCoin = () => {
	const x = Math.floor(window.innerWidth * Math.random());
	const y = Math.floor(window.innerHeight * Math.random());
	coin.style.left = `${x}px`
	coin.style.top = `${y}px`
};

moveCoin();