function Person () {
    this.year = 0

    setInterval(()=> {
        this.year++
        console.log(this.year)
    }, 1000)
}

new Person