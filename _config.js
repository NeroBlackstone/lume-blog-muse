import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import base_path from "lume/plugins/base_path.ts";
import { parse } from "https://deno.land/std/encoding/yaml.ts";

const text = await Deno.readTextFile("./src/_data/site.yml")
const data = parse(text)

const site = lume({
  src:"src",
  location: new URL(data.author.url),
});

site.script("watchSass","sass --watch src/sass/darkstyles.scss:src/css/darkstyles.css src/sass/lightstyles.scss:src/css/lightstyles.css --no-source-map")

site.ignore("README.md");
site.ignore("sass")
site.copy("img");
site.copy("posts/image","image")
site.copy("xml")
site.copy("script")
site.copy("css")
site.copy("midi")
site.copy("favicon.ico");
site.copy("favicon-32x32.png");

site.use(postcss());
site.use(date());
site.use(code_highlight());
site.use(base_path());

site.filter(
  "head",
  (array = [], n) => (n < 0) ? array.slice(n) : array.slice(0, n),
);
site.filter("min", (...numbers) => Math.min.apply(null, numbers));

// calculate post words and the time required to read it (by minutes),support Chinese and English
site.preprocess(
  [".md"],
  (page) => {
    let words
    let minutes
    const mdContent = page.data.content
    let chinese = mdContent.match(/[\u4e00-\u9fa5]/g)
    chinese = chinese ? chinese.length : 0
    // calculate words
    if (chinese > 0){
      words = chinese
    }else{
      let english = mdContent.match(/[A-Za-z\u00C0-\u017F]+|[\u0400-\u04FF\u0500–\u052F]+|[\u0370-\u03FF\u1F00-\u1FFF]+|[\u4E00–\u9FFF]|\d+/g)
      english = english ? english.length : 0
      words = english
    }
    minutes = Math.floor(words / 200)+1;
    page.data.mdLength={words,minutes}
  }
)

export default site;
