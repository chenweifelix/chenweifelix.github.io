# Personal website

The rendered website is available at <https://chenweifelix.github.io/>.

The site is authored with R Markdown and [blogdown](https://pkgs.rstudio.com/blogdown/), rendered by Hugo, and hosted from the `docs/` directory with GitHub Pages.

## Local development

Preview the site from R:

```r
blogdown::serve_site()
```

Build the publishable site into `docs/`:

```r
blogdown::build_site()
```

Hugo is pinned to version 0.147.5 in `.Rprofile`.

# License

The bundled Red Rose theme is released under the [MIT License](https://github.com/httpsecure/hugo-theme-red-rose/blob/main/LICENSE).

