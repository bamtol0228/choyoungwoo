window.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        rootMargin: "0px 0px 100px 0px",
        threshold: 0
    }

    const io1 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('preup')
                entry.target.classList.add('up')
                observer.unobserve(entry.target)
            }
        })
    }, options)

    const list1 = document.querySelectorAll('.preup')
    list1.forEach(element => {
        io1.observe(element)
    })

    const io2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                for (let i = 1; i <= 4; i++) {
                    document.getElementById(`a${i}`).style.animation = `AppearUp 0.8s ease-out ${0.25 + (i / 4)}s 1 normal both`
                }
                observer.disconnect()
            }
        })
    })

    io2.observe(document.getElementById("trigger"))
})