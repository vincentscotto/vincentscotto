function placeElementAbove(targetClass, referenceClass) {
	const targetElement = document.querySelector(`.${targetClass}`);
	const referenceElement = document.querySelector(`.${referenceClass}`);

	if (targetElement && referenceElement) {
		referenceElement.parentNode.insertBefore(targetElement, referenceElement);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	placeElementAbove("bar", "article-content-headline");
});
