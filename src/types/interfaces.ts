export type Joke = {
    error: boolean,
    category: string,
    type: string,
    setup: string,
    delivery: string,
    flags: {
        nsfw: string,
        religious: string,
        racist: string,
        sexist: string,
        explicit: string,
    },
    id: number,
    safe: boolean,
    lang: string,
}

type CategoryAliases = {
    alias: string,
    resolved: string,
}

export interface SingleCategoryJokes {
    error: boolean,
    amount: number,
    jokes: Joke[],
}

export interface Categories {
    error: boolean,
    categories: string[],
    categoryAliases: CategoryAliases[],
}
