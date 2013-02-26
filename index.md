---
layout: page
title: 
tagline: Welcome home
---

{% for post in site.posts limit:10 %}
<div class="post-preview">
  <h1><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h1>
  <div class="excerpt">
    {{ post.content | split:'<!--more-->' | first }}
  </div>
  <a class="read-more" href="{{ BASE_PATH }}{{ post.url }}">Read the rest &#8594;</a>
  <div class="ribbon">
    <div>
      {{ post.date | date: '%b' }}<br />
      {{ post.date | date: '%d' }}
    </div>
  </div>
</div>
{% endfor %}

<div class="archive-block"><a href="/archive.html" class="archive-link">View entire archive</a></div>