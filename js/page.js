window.addEventListener('load', () => {
	const el = document.querySelector('#typing-target');
	typingEffect(el, ['applications', 'experiences', 'pages', 'interfaces'], {
		typeSpeed: 80,
		deleteSpeed: 50,
		holdTime: 2000,
	});
});

function typingEffect(el, words, {
	typeSpeed = 80,
	deleteSpeed = 50,
	holdTime = 2000,
} = {}) {
	let wordIndex = 0;
	let charIndex = words[0].length;
	let deleting = true; // word is already shown in full — next step is delete

	el.textContent = words[0];

	const tick = () => {
		const currentWord = words[wordIndex];

		if (!deleting) {
			charIndex++;
			el.textContent = currentWord.slice(0, charIndex);

			if (charIndex === currentWord.length) {
				deleting = true;
				setTimeout(tick, holdTime);
				return;
			}
		} else {
			charIndex--;
			el.textContent = currentWord.slice(0, charIndex);

			if (charIndex === 0) {
				deleting = false;
				wordIndex = (wordIndex + 1) % words.length;
				charIndex = 0;
			}
		}

		setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
	};

	setTimeout(tick, holdTime);
}