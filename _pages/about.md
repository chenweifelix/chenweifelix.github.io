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

<section class="home-overview" aria-labelledby="home-heading">
  <div class="home-overview__intro">
    <p class="eyebrow">emotion • well-being • social functioning</p>
    <h1 id="home-heading">How do emotions shape the lives we build together?</h1>
    <p class="home-overview__lead">
      I study the core social-emotional processes that underlie human connection and collaboration, specifically focusing on
      <strong>how people express their emotions and how others interpret and respond to the expressions.</strong> I take
      a multi-level approach to unpacking why emotion expressions can sometimes facilitate connection and promote well-being,
      while at other times sever relationships and create social tension. My research combines experimental,
      observational, and computational methods to understand these social-emotional processes across
      individuals, relationships, and society.
      <br><br>
      I work with <a href="https://williamjbrady.com/" target="_blank" rel="noopener noreferrer">Billy Brady</a> at
      <a href="https://sites.google.com/u.northwestern.edu/mind-technology-lab" target="_blank" rel="noopener noreferrer">Mind and Technology Lab</a>
      and with <a href="https://sesp.northwestern.edu/people/faculty/claudia-haase.html" target="_blank" rel="noopener noreferrer">Claudia Haase</a> at
      <a href="https://haaselab.sesp.northwestern.edu/" target="_blank" rel="noopener noreferrer">Life Span Development Lab</a> at Northwestern University.
    </p>
    <div class="home-actions">
      <a class="btn btn--primary" href="{{ '/research/' | relative_url }}">Explore my research</a>
      <a class="btn btn--secondary" href="{{ '/files/Felix_Yu_CV.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">View my CV <span aria-hidden="true">↗</span></a>
    </div>
  </div>

  <div class="home-overview__agenda" aria-labelledby="agenda-heading">
    <div class="section-heading">
      <p class="eyebrow">Research agenda</p>
      <h2 id="agenda-heading">Social emotional processes across levels</h2>
    </div>
    <div class="theme-grid">
      <a class="theme-card" href="{{ '/research/#research-1' | relative_url }}">
        <span class="theme-card__number" aria-hidden="true">01</span>
        <h3>Micro-level well-being</h3>
        <p>How does emotion expression shape individuals' short-term and long-term well-being?</p>
        <span class="theme-card__cue">Explore this stream <span aria-hidden="true">→</span></span>
      </a>
      <a class="theme-card" href="{{ '/research/#research-2' | relative_url }}">
        <span class="theme-card__number" aria-hidden="true">02</span>
        <h3>Macro-level social functioning</h3>
        <p>How do emotion expressions spread in networks and shape group dynamics?</p>
        <span class="theme-card__cue">Explore this stream <span aria-hidden="true">→</span></span>
      </a>
      <a class="theme-card" href="{{ '/research/#research-3' | relative_url }}">
        <span class="theme-card__number" aria-hidden="true">03</span>
        <h3>Social emotional processes & AI</h3>
        <p>How do emerging AI systems shape social emotional processes?</p>
        <span class="theme-card__cue">Explore this stream <span aria-hidden="true">→</span></span>
      </a>
    </div>
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
  <p>I welcome conversations about emotion, well-being, social relationships, group dynamics, and computational approaches to social science.</p>
  <a class="text-link" href="mailto:felix.chenwei@u.northwestern.edu">felix.chenwei@u.northwestern.edu <span aria-hidden="true">→</span></a>
</section>
