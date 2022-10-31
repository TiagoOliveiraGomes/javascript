function talkAfter(seconds, phrase){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(phrase)
        }, seconds*1000)
    })
}

talkAfter(3, "That's cool")
.then(phrase => phrase.concat('?!?'))
.then(otherPhrase => console.log(otherPhrase))
.catch(e => console.log(e))