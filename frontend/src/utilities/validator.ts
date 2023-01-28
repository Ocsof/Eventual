// A custom validation macros.
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