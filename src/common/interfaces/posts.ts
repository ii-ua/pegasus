interface BlogPostTranslation {
    id: number
    posts_id: number
    title: string
    languages_code: string
    content_short: string
    content: string
}

export interface BlogPostResponse {
    id: number
    slug_url: string
    cover: string
    translations: BlogPostTranslation[]
    date_created: string
};