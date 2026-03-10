export interface BlogPostTranslation {
    id: number
    posts_id: number
    title: string
    languages_code: string
    content_short: string
    content: string
}

export interface BlogPostSeo {
    title?: string
    meta_description?: string
    og_image?: string
    no_index?: boolean
    keywords?: string | string[]
    meta_keywords?: string | string[]
    additional_fields?: Record<string, unknown>
}

export interface BlogPostResponse {
    id: number
    slug_url: string
    cover: string
    seo?: BlogPostSeo
    translations: BlogPostTranslation[]
    date_created: string
};
