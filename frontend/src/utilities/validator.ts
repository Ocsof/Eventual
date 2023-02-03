// A custom validation macros lists.

export function categoryGenerator(category: string){
    switch (category) {
        case 'o':
            return "organizer"
        case 'p':
            return "participant"
        case 'a':
            return "admin"
    }
}

export function categoryGeneratorForDatabase(category: string){
    switch (category) {
        case "organizer":
            return "o"
        case "participant":
            return "p"
        case "admin":
            return "a"
    }
}

export function dateStringFormatter(date: String){
    return date.substring(0,10)
}

export function imgForCategoryFormatter(category: string){
    switch (category) {
        case 'concert':
            return "/img/concert.jpg"
        case 'birthday':
            return "/img/birthday.jpg"
        case 'party':
            return "/img/party.jpg"

    }
}