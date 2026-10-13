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
- [CV]({{ '/files/Felix_Yu_CV.pdf' | relative_url }})

## Publication records

{% assign sorted_publications = site.publications | sort: "order" %}
{% for publication in sorted_publications %}
- [{{ publication.title }}]({{ publication.url | relative_url }})
{% endfor %}

An [XML sitemap]({{ '/sitemap.xml' | relative_url }}) is available for search engines.
