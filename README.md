# lume-blog-muse -- Lume blog template for musicians

`lume-blog-muse` is a out of box open source blog template powered by [lume](https://github.com/lumeland/lume). Lume is a Deno static site generator. 

[See template live demo](https://lume-blog-muse.pages.dev/)

[See developer's blog using this template](https://neroblackstone-blog.pages.dev/)

[see developer's blog repository, learn how to configure in action](https://github.com/NeroBlackstone/lume-blog)

This blog template base on [base-blog](https://github.com/lumeland/base-blog/), but it is more beautiful, and has more built-in features.

- **Super lightweight.** Source code less than 2MB. **No need node_modules**. 
- **Easy to configure.** Only one configuration file, control all options.
- **Auto dark mode.** Light theme and dark theme will change according to your system settings. (Or you can choose which theme to use)
- **For musicians.** Built-in [OSMD](https://opensheetmusicdisplay.org/) support. Inserting MusicXML score in markdown is as easy as inserting image. Express your feelings about music freely.
- **MIDI Player.** Built-in [midi player](https://github.com/cifkao/html-midi-player) and visualizer.
- **Disqus** comment system.
- **CloudFlare** web Analytics.
- **Forestry.io** headless cms.  

## Installation

1. Please make sure you have installed [deno](https://deno.land/) and [lume](https://lumeland.github.io/).
2. clike [here](https://github.com/NeroBlackstone/lume-blog-muse/generate) to create a new repository from `lume-blog-muse`.
3. `git clone` your own project /  **Recommend: If you don't want to configure your site locally, you can also go [forestry.io](https://forestry.io/)  and configure all settings in wabpage gui.**

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
    └── about.md // your self-introduction
```

## Run

Use `cd` change the current working directory to `lume-blog-muse`, then:

```
lume --serve
```

Now you can preview your site at [localhost](http://localhost:3000/).

## Custom your blog

**Be sure to confirm these options before your first deployment.**

### Basic page content

Check `./src/_data/site.yml`, according your page content to modify this file. You can also change site theme in this file.

Disqus and Cloudflare Web Analytics default statue is disable, you can enable it in this configuration file.

## Write a blog post

Check `./src/posts/MarkdownExample.md` to know how to write markdown.

If you need to insert MusicXML, put xml file into `./src/xml/`, for example, you have a `Beethoven.xml`, then you can use `osmd-container` label in markdown to render this xml file. 

```
<osmd-container file="Beethoven"><osmd-container/>
```

If you want to insert midi-player, put midi file into `./src/midi/`, for example, you have a `sample.mid`, then you can use `midi-container` label in markdown to play this midi file.

```
<midi-container file="sample"><midi-container/>
```

There are three kinds of visualizer that can be attached to player: `piano-roll`, `waterfall`, `staff`.

```
<midi-container file="sample" type="piano-roll"><midi-container/>
```

## Deployment

Here is tutorial for deploy this lume project to [Cloudflare Pages](https://pages.cloudflare.com/):

### Edit site.yml

First of all, open `./src/_data/site.yml`, then edit `url` :

```
author:
  url: https://lume-blog-muse.pages.dev/
```



This is your site url. Cloudflare pages provide free domain for your site. For example, you will create a cloudflare pages project name `my-blog`, then free domain will be `https://my-blog.pages.dev/`, so replace `url`:

```
author:
  url: https://my-blog.pages.dev/
```

> What happended behind this: `_config.js` will read this value and put it in `lume({location: new URL("www.example.com"),})`

Commit changes, push to your blog repository.

### Create Cloudflare Pages Project

Go to your Cloudflare dashboard, click "Pages" -> "Create a project".

Create a project from your lume blog repository.

At "Set up builds and deployments" step, fill in the following:

1. Project name: `my-blog`
2. Build command:

```
curl -fsSL https://deno.land/x/install/install.sh | sh && /opt/buildhome/.deno/bin/deno run -A https://deno.land/x/lume/ci.ts
```

If you forget what `url` you write in `site.yml`, or prompt "A project with this name already exists", you can also use `--location=` overriding url settings. 

For example, now Cloudflare Pages project name is `my-blog2`, then use this build command:

```
curl -fsSL https://deno.land/x/install/install.sh | sh && /opt/buildhome/.deno/bin/deno run -A https://deno.land/x/lume/ci.ts --location=https://my-blog2.pages.dev/
```

3. Build output directory: `_site`

That's all, click "Save and Deploy".

Whenever your blog repository updated, deployment will auto start and keep your site up to date. You don't have to repeat this step again and again.

### More platforms

Go [base-blog](https://github.com/lumeland/base-blog#deployment) to learn how to deploy to more platforms.

## Thanks 

Thanks [Oscar Otero](https://github.com/oscarotero) who help me a lot. He is also the mainly maintainer of lume project.
