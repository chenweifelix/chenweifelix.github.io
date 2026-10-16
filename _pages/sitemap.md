---
layout: single
title: "Sitemap"
permalink: /sitemap/
description: "A concise index of pages on Felix Yu's website."
author_profile: false
---

- [Home]({{ '/' | relative_url }})
- [Research]({{ '/research/' | relative_url }})
- [Publications]({{ '/publications/' | relative_url }})
- [CV]({{ '/files/Felix_Yu_CV.pdf' | relative_url }}){: target="_blank" rel="noopener noreferrer" }

## Publication detail pages

{% assign detail_publications = site.publications | where: "detail_page", true | sort: "order" %}
{% for publication in detail_publications %}
- [{{ publication.title }}]({{ publication.url | relative_url }})
{% endfor %}

An [XML sitemap]({{ '/sitemap.xml' | relative_url }}) is available for search engines.
