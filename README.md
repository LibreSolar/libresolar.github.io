# Libre Solar website

This repository hosts the Libre Solar website (https://libre.solar) built with VuePress.

You can contribute by cloning the repository to your private GitHub workspace and sending pull-requests with upates you made.

For local deployment run the following commands:

    npm install
    npm run dev

install [VuePress](https://vuepress.vuejs.org/) and run `yarn docs:dev` in the root directory of this repository. Afterwards, you can see the result in your favourite web browser at `http://localhost:8080`.

## Style Guide

### Git usage

- Better make several small [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit#Atomic_commit_convention) than a single big one
- Use meaningful commit messages. Tell *what* was changed and not that *something* was changed. "Grid stability: Voltage graph added" is much better than "Updates".

### Text

- All content must be original. As the document is published under CC-BY-SA license, it's not allowed to reuse any content from external sources unless it is published as public domain or a compatible CC license. Make sure to include correct references for attribution, if necessary.
- Headings should be short and precise, not an entire sentence.
- Emphasize important words with bold *or* italic type, but [not both](https://practicaltypography.com/bold-or-italic.html).
- References to other documents (e.g. scientific papers) should be listed at the bottom of each chapter indicated with a number within the text.

### Images

If possible, images should be in Inkscape SVG (scalable vector graphics) format. All modern browsers can embed SVG images directly. This allows others to edit the images. JPEG is **only** allowed for photos, not for graphs.

### JavaScript coding style

- Indentation: 4 spaces (no tabs)
- .vue file names all lower-case, words connected with dashes
- Graph border width should be 2px

### Colors (preliminary)

Only the following colors should be used:

**Dark blue** for headers and highlighting

![#005e85](https://placehold.it/100x15/005e85/000000?text=+) #005e85 / rgb(0, 94, 133)

**Light blue**

![#5c9aaf](https://placehold.it/100x15/5c9aaf/000000?text=+) #5c9aaf / rgb(92, 154, 175)

**Yellow** as contrast to blue colors

![#fbbe59](https://placehold.it/100x15/fbbe59/000000?text=+) #fbbe59 / rgb(251, 190, 89)

**Dark grey**

![#262626](https://placehold.it/100x15/262626/000000?text=+) #262626 / rgb(38, 38, 38)

**Medium grey**

![#6b6b6b](https://placehold.it/100x15/6b6b6b/000000?text=+) #6b6b6b / rgb(107, 107, 107)

**Light grey**

![#d3d5cc](https://placehold.it/100x15/d3d5cc/000000?text=+) #d3d5cc / rgb(211, 213, 204)
