// Animate highlights when user scrolls to text

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
//		Reanimate any time viewport comes into view - commenting out for now, but may be useful in the future
//		else {
//            entry.target.classList.remove('show')
//        }
    })
})

const hiddenElements = document.querySelectorAll('mark');
hiddenElements.forEach((element) => observer.observe(element));