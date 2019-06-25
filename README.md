# Libre Solar website

Hosted on <http://libre.solar>.

The Libre Solar website was built using the Jekyll static site builder
and the [Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/)
by Michael Rose.

## How to develop

requirements:

* [Ruby](https://www.ruby-lang.org/)
* [Jekyll](https://jekyllrb.com/)
* [bundler](https://bundler.io/)
* [git](https://git-scm.com/)
* sources in this repo

On a modern (Debian based) Linux system,
you can get all of it like this:

```bash
# install ruby (including `gem` and git)
sudo apt-get install -z ruby git
# clone this repo to the local machine
git clone https://github.com/LibreSolar/libresolar.github.io.git
cd libresolar.github.io.git
# install bundler
gem install bundler
# install dependencies (including jekyll)
bundler install
```

You can now host a local version of the website with:

```bash
bundle exec jekyll serve
```

It should then be visible at <http://127.0.0.1:4000>,
and will update whenever you change the sources.

