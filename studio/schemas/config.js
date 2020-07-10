export default {
    "type": "document",
    "name": "config",
    "title": "Config",
    "fields": [
        {
            "type": "string",
            "name": "theme",
            "title": "Theme",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Site Title",
            "validation": null
        },
        {
            "type": "image",
            "name": "logo",
            "title": "Site Logo",
            "validation": null
        },
        {
            "type": "string",
            "name": "baseurl",
            "title": "Base URL",
            "description": "Serve the website from the given base URL",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "permalink",
            "title": "Permalink",
            "description": "The output path for your pages, posts, or collections.",
            "hidden": false,
            "initialValue": "/posts/:slug:output_ext",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "/posts/:slug:output_ext"
                ]
            }
        },
        {
            "type": "object",
            "name": "collections",
            "title": "collections",
            "validation": null,
            "fields": [
                {
                    "type": "object",
                    "name": "posts",
                    "title": "posts",
                    "validation": null,
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Collection Title",
                            "validation": null
                        },
                        {
                            "type": "boolean",
                            "name": "output",
                            "title": "Output",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "description",
                            "title": "Collection Description",
                            "validation": null
                        },
                        {
                            "type": "markdown",
                            "name": "feature_text",
                            "title": "Collection Feature Text",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "feature_image",
                            "title": "Collection Feature Image",
                            "validation": null
                        }
                    ]
                }
            ]
        },
        {
            "type": "array",
            "name": "navigation_header",
            "title": "Header Navigation",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Button title",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "url",
                            "title": "URL",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "array",
            "name": "navigation_footer",
            "title": "Footer Navigation",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Button title",
                            "validation": Rule => Rule.required()
                        },
                        {
                            "type": "string",
                            "name": "url",
                            "title": "URL",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "email",
            "title": "Site Email",
            "validation": null
        },
        {
            "type": "object",
            "name": "social_links",
            "title": "Social Links",
            "description": "Leave empty to hide",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "Twitter",
                    "title": "Twitter",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "LinkedIn",
                    "title": "LinkedIn",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "Googleplus",
                    "title": "Google+",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "GitHub",
                    "title": "GitHub",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "link",
                    "title": "link",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "RSS",
                    "title": "RSS",
                    "validation": null
                }
            ]
        },
        {
            "type": "object",
            "name": "sharing_links",
            "title": "Sharing Links",
            "description": "Leave empty to hide",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "Twitter",
                    "title": "Twitter",
                    "validation": null,
                    "options": {
                        "list": [
                            {
                                "title": "Disabled",
                                "value": ""
                            },
                            {
                                "title": "Enabled",
                                "value": "#0d94e7"
                            }
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "facebook",
                    "title": "facebook",
                    "validation": null,
                    "options": {
                        "list": [
                            {
                                "title": "Disabled",
                                "value": ""
                            },
                            {
                                "title": "Enabled",
                                "value": "#3B5998"
                            }
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "Googleplus",
                    "title": "Google+",
                    "validation": null,
                    "options": {
                        "list": [
                            {
                                "title": "Disabled",
                                "value": ""
                            },
                            {
                                "title": "Enabled",
                                "value": "#DC4E41"
                            }
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "Pinterest",
                    "title": "Pinterest",
                    "validation": null,
                    "options": {
                        "list": [
                            {
                                "title": "Disabled",
                                "value": ""
                            },
                            {
                                "title": "Enabled",
                                "value": "#BD081C"
                            }
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "LinkedIn",
                    "title": "LinkedIn",
                    "validation": null,
                    "options": {
                        "list": [
                            {
                                "title": "Disabled",
                                "value": ""
                            },
                            {
                                "title": "Enabled",
                                "value": "#0077B5"
                            }
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "tumblr",
                    "title": "tumblr",
                    "validation": null,
                    "options": {
                        "list": [
                            {
                                "title": "Disabled",
                                "value": ""
                            },
                            {
                                "title": "Enabled",
                                "value": "#36465D"
                            }
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "Reddit",
                    "title": "Reddit",
                    "validation": null,
                    "options": {
                        "list": [
                            {
                                "title": "Disabled",
                                "value": ""
                            },
                            {
                                "title": "Enabled",
                                "value": "#FF4500"
                            }
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "HackerNews",
                    "title": "Hacker News",
                    "validation": null,
                    "options": {
                        "list": [
                            {
                                "title": "Disabled",
                                "value": ""
                            },
                            {
                                "title": "Enabled",
                                "value": "#ff6600"
                            }
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "DesignerNews",
                    "title": "Designer News",
                    "validation": null,
                    "options": {
                        "list": [
                            {
                                "title": "Disabled",
                                "value": ""
                            },
                            {
                                "title": "Enabled",
                                "value": "#2D72D9"
                            }
                        ]
                    }
                },
                {
                    "type": "boolean",
                    "name": "Email",
                    "title": "Email",
                    "validation": null
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "_config.yml"
                ]
            }
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
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true
}