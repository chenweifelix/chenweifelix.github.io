---
layout: home
permalink: /
title: "Felix (Chen-Wei) Yu"
description: "Felix (Chen-Wei) Yu is a PhD candidate at Northwestern University studying emotion regulation and its consequences for well-being, relationships, and society."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero" aria-labelledby="home-heading">
  <p class="eyebrow">Emotion · motivation · human development</p>
  <h1 id="home-heading">How do emotions shape the lives we build together?</h1>
  <p class="home-hero__lead">I am a PhD candidate in Human Development and Social Policy at Northwestern University. I study why people regulate emotion, how those choices shape well-being and relationships, and how emotion moves through public life.</p>
  <div class="home-actions">
    <a class="btn btn--primary" href="{{ '/research/' | relative_url }}">Explore my research</a>
    <a class="btn btn--secondary" href="{{ '/files/Felix_Yu_CV.pdf' | relative_url }}">View my CV <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="home-section" aria-labelledby="themes-heading">
  <div class="section-heading">
    <p class="eyebrow">Research agenda</p>
    <h2 id="themes-heading">Three levels of emotional life</h2>
  </div>
  <div class="theme-grid">
    <article class="theme-card">
      <span class="theme-card__number" aria-hidden="true">01</span>
      <h3>Individuals</h3>
      <p>How emotion-regulation motives and strategies contribute to short-term experiences and long-term well-being.</p>
    </article>
    <article class="theme-card">
      <span class="theme-card__number" aria-hidden="true">02</span>
      <h3>Relationships</h3>
      <p>How people regulate emotion with and around one another, and what that means for connection and shared goals.</p>
    </article>
    <article class="theme-card">
      <span class="theme-card__number" aria-hidden="true">03</span>
      <h3>Society</h3>
      <p>How emotion is expressed, interpreted, and translated into consequences across public discourse and policy.</p>
    </article>
  </div>
</section>

<section class="home-section selected-work" aria-labelledby="selected-heading">
  <div class="section-heading section-heading--split">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2 id="selected-heading">Recent and ongoing research</h2>
    </div>
    <a class="text-link" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">→</span></a>
  </div>
  {% assign featured_publications = site.publications | where: "featured", true | sort: "featured_order" %}
  <div class="featured-publications">
    {% for publication in featured_publications %}
      {% include publication-card.html publication=publication compact=true %}
    {% endfor %}
  </div>
</section>

<section class="home-contact" aria-labelledby="contact-heading">
  <p class="eyebrow">Conversation and collaboration</p>
  <h2 id="contact-heading">Interested in a related question?</h2>
  <p>I welcome conversations about emotion, well-being, social relationships, and computational approaches to behavioral science.</p>
  <a class="text-link" href="mailto:felix.chenwei@u.northwestern.edu">felix.chenwei@u.northwestern.edu <span aria-hidden="true">→</span></a>
</section>
