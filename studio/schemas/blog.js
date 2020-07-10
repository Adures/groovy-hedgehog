export default {
    "type": "document",
    "name": "blog",
    "title": "Blog",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Page Title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "boolean",
            "name": "aside",
            "title": "Aside",
            "validation": null
        },
        {
            "type": "string",
            "name": "collectionpage",
            "title": "Collection page",
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
                    "blog"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Blog URL Path",
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
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}