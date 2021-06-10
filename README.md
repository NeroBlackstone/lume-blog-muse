# lume-blog-muse -- Lume blog template for musicians

`lume-blog-muse` is a out of box open source blog template powered by [lume](https://github.com/lumeland/lume). Lume is a Deno static site generator.

This blog template base on [base-blog](https://github.com/lumeland/base-blog/blob/master/README.md), but it is more beautiful, and has more built-in features.

- **Super lightweight.** Source code less than 2MB. **No need node_modules**. 
- **Easy to configure.** Only one configuration file, control all options.
- **Auto dark mode.** Light theme and dark theme will change according to your system settings. (Or you can choose which theme to use)
- **For musicians.** Built-in osmd support. Inserting MusicXML score in markdown is as easy as inserting image. Express your feelings about music freely.

## Installation

1. Please make sure you have installed [deno](https://deno.land/), [lume](https://lumeland.github.io/).
2. clike [here]() to create a new repository from `lume-blog-muse`.
3. `git clone` your own project

## Configuration

Here are all the files and folders you need pay attention to:

```
└── src
    ├── _data
    |   └── site.yml // This is your blog config file
    ├── img // image used by site
    ├── posts // Your blog posts markdown file
    |   └── image // image used by posts
    └── xml // Put all your MusicXML sheet here
```

## Run

Use `cd` commend open your project folder, then:

```
lume --serve
```

Now you can open your site at [localhost](http://localhost:3000/).

## Custom your blog

**Be sure to confirm these options before your first deployment.**

### Basic personal information 

Check `./src/_data/site.yml`, according your personal information to modify this file to. You can also change site theme in this file.

Disqus default statue is disable, you can enable it in this configuration file.

### Your site URL

Check `./_config.js`, replace your site url to in `lume()` function

## Write blog post

Check `./src/posts/MarkdownExample.md` to know how to write markdown.

If you need to insert MusicXML, put xml file into `./src/xml/`, for example, you have a `Beethoven.xml`, then you can use `osmd-container` label in markdown to render this xml file.

```
<osmd-container file="Beethoven"><osmd-container/>
```

## Deployment

This project 

Go [base-blog](https://github.com/lumeland/base-blog#deployment) to know how to deploy to more platforms.

## Thanks 

Thanks [Oscar Otero](https://github.com/oscarotero) who help me a lot. He is also the mainly maintainer of lume project.