const imgs = document.querySelectorAll(".img");
const imgURLs = [
	"1621847468516-1ed5d0df56fe",
	"1610528816441-f309483d887a",
	"1472214103451-9374bd1c798e",
	"1454372182658-c712e4c5a1db",
	"1682687218608-5e2522b04673",
	"1552083375-1447ce886485",
	"1682685797208-c741d58c2eff",
	"1621846846625-f0bde2eb7c3c",
	"1563387852482-f88a02e0e047",
	"1528184039930-bd03972bd974"
];
let xPos = 0;

gsap
	.timeline()
	.set(".ring", { rotationY: 180, cursor: "grab" }) //set initial rotationY so the parallax jump happens off screen
	.set(imgs, {
		// apply transform rotations to each image
		rotateY: (i) => i * -36,
		transformOrigin: "50% 50% 500px",
		z: -500,
		backgroundImage: (i) =>
			"url(https://images.unsplash.com/photo-" + imgURLs[i] + "?q=50&w=600)",
		backgroundPosition: (i) => getBgPos(i),
		backfaceVisibility: "hidden"
	})
	.from(imgs, {
		duration: 1.5,
		y: 200,
		opacity: 0,
		stagger: 0.1,
		ease: "expo"
	})
	.add(() => {
		imgs.forEach((img) => {
			img.addEventListener("mouseenter", (e) => {
				let current = e.currentTarget;
				gsap.to(".img", {
					opacity: (i, t) => (t == current ? 1 : 0.5),
					ease: "power3"
				});
			});
			img.addEventListener("mouseleave", (e) => {
				gsap.to(".img", { opacity: 1, ease: "power2.inOut" });
			});
		});
	}, "-=0.5");

window.addEventListener("mousedown", dragStart);
window.addEventListener("touchstart", dragStart);
window.addEventListener("mouseup", dragEnd);
window.addEventListener("touchend", dragEnd);

function dragStart(e) {
	if (e.touches) e.clientX = e.touches[0].clientX;
	xPos = Math.round(e.clientX);
	gsap.set(".ring", { cursor: "grabbing" });
	window.addEventListener("mousemove", drag);
	window.addEventListener("touchmove", drag);
}

function drag(e) {
	if (e.touches) e.clientX = e.touches[0].clientX;

	gsap.to(".ring", {
		rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
		onUpdate: () => {
			gsap.set(".img", { backgroundPosition: (i) => getBgPos(i) });
		}
	});

	xPos = Math.round(e.clientX);
}

function dragEnd(e) {
	window.removeEventListener("mousemove", drag);
	window.removeEventListener("touchmove", drag);
	gsap.set(".ring", { cursor: "grab" });
}

function getBgPos(i) {
	//returns the background-position string to create parallax movement in each image
	return (
		100 -
		(gsap.utils.wrap(
			0,
			360,
			gsap.getProperty(".ring", "rotationY") - 180 - i * 36
		) /
			360) *
			500 +
		"px 0px"
	);
}
