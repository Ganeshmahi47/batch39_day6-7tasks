// class movie{
//     constructor(title,studio,rating){
//         this.title=title
//         this.studio=studio
//         this.rating=rating
//     }

//     getMovieDetail(){
//         return (`the movie name is ${this.title} and it is produced by ${this.studio}and has rating of ${this.rating}`)
//     }
//     getPg
// }

// let movie1 =new movie ("Casino Royale","Eon Productions","PG­13")
// let movie2 =new movie ("Master","Lyca","PG7")
// let movie3 =new movie ("VIkram","BODYSODA","PG")

// console.log(movie1.getMovieDetail())
// console.log(movie2.getMovieDetail())
// console.log(movie3.getMovieDetail())

class movie{
    constructor(title,studio,rating){
        this.title=title
        this.studio=studio
        this.rating=this.rating
    }

    getMovieDetail(){
        return (`the movie name is ${this.title} and it is produced by ${this.studio}and has rating of ${this.rating}`)
    }
    
}

let movie1 =new movie ("Casino Royale","Eon Productions","PG­13")
let movie2 =new movie ("Master","Lyca","PG7")
let movie3 =new movie ("VIkram","BODYSODA",)

console.log(movie1.getMovieDetail())
console.log(movie2.getMovieDetail())
console.log(movie3.getMovieDetail())
