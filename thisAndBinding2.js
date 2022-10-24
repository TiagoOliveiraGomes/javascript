function Human () {
    this.years = 0

    const self = this

    setInterval(function () {
        self.years++
        console.log(self.years)
    }/*.bind(this)*/, 1000)
}

new Human