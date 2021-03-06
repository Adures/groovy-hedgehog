export default {
    "type": "document",
    "name": "page",
    "title": "Page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "feature_text",
            "title": "Feature text",
            "validation": null
        },
        {
            "type": "image",
            "name": "feature_image",
            "title": "Feature image",
            "validation": null
        },
        {
            "type": "string",
            "name": "excerpt",
            "title": "Excerpt",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "aside",
            "title": "Aside",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "indexing",
            "title": "Indexing",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "sitemap",
            "title": "Sitemap",
            "validation": null
        },
        {
            "type": "string",
            "name": "permalink",
            "title": "Permalink",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Page URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}