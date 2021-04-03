---
title: "2021 Redesign: Objectives"
date: 2021-01-26
published: true
slug: 2021-redesign/objectives
description: Another year, another redesign of Brody.com to give me the chance to iterate upon the design, improve my front-end skillz and try out a shiny new tool or two.
og_image:
tags:
  - design
  - development
  - redesign
---

Another year, another redesign of Brody.com to give me the chance to iterate upon the design, improve my front-end skillz and try out a shiny new tool or two.

I thought I'd jot down the objectives & principles for the 2021 redesign to use as the guiding stars when designing and developing.

## My space of the internet

My aim is to create a space to post videos, quotes, links, images and also longer blog posts, which I never seem to get around to finishing 😬. I'm thinking something like a Tumblog, tagged to filter down by type & topic.

Alongside the posts, I'd like to create a timeline library of the TV shows, movies, courses, books & video games I complete with a basic rating system similarly filterable by type to see just the latest movies I've watched, for example. Currently, I use the Letterboxd API for this exact thing on my about page but with the mixed content, I think it might be cleaner to do that manually for this section.

## Ease to post

The friction of jumping onto my laptop, launching iTerm, changing directory, opening the directory in VS Code, firing up Gridsome, creating a new file, futzing with the front matter, previewing, pushing code to Github — you get the gist. It's a whole effort to post and now that I want to post more short-form content, the current workflow to post is too cumbersome. { #excerpt }

~~

There a few options I have in mind — [IA Writer](https://ia.net/writer) now can post directly to [Ghost](https://ghost.org/docs/jamstack/), [Wordpress](https://www.smashingmagazine.com/2018/10/headless-wordpress-decoupled/) & [Micropub](https://indieweb.org/Micropub) which would make throwing up a quick link quick and easy. Alternatively, a couple of [Alfred](https://www.alfredapp.com/) workflows & snippets on laptop & a combo of IA Writer and [Working Copy](https://workingcopy.app/) when on the go could do the trick.

Either way, a bit of upfront prep can drastically reduce the friction.

## Balance of simple & distinctive

I'm keen to retain a simple design but want to bring a little more personality so it doesn't look and feel like any other minimally designed blog.

I'm currently thinking a slightly unique font-face, use of color and a little javascript flair could strike the right balance. Stay tuned.

## Accessible as a priority

It's needless to say that the refreshed design & implementation will have a focus on accessibility, but I also want to dive deeper than just covering the basics of color contrast, alt attribute for images and focus states. I'm looking forward to researching modern best practices and finding the balance between form and function.

## Lightweight

I intend to make the site lightning fast by purging unused CSS, using SVGs where possible, lazying loading images and all that good stuff.

I will most likely opt for a locally hosted [variable font](https://v-fonts.com/) to take advantage of the speed and versatility from loading a single file.

## Toolbox

I specifically created the 2020 version of Brody.com using [Vue](https://vuejs.org/) & [Gridsome](https://gridsome.org/) as a way of skilling up on the front-end framework of choice of my work at the time, Deputy, but I'm now open to trying out something new.

It goes without saying that I'll be sticking with [Tailwind CSS](https://tailwindcss.com/) and most likely pairing that with [Alpine JS](https://github.com/alpinejs/alpine).

I'm currently leaning towards [11ty](https://www.11ty.dev/) as the framework/static site generator as I enjoyed using [Jekyll](https://jekyllrb.com/) in the past and 11ty looks to be a similar but more flexible alternative.

---

More to come...
