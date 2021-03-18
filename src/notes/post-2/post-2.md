---
title: Post 2
date: 2019-09-01
featured_image: cover.jpg
tags: design
---

_This post isn't finished, it's a living document._

[ExifTool](https://exiftool.org/) is an incredibly powerful piece of software that reads, writes, and edits metadata to and from files.

ExifTool is a command-line tool that to start with can look very complicated. I tend to re-use the same snippets over and over.

![Image title](https://placeimg.com/820/500/abstract)

It’s worth noting; this is a personal note, it’s not a tutorial - it’s somewhere I can dump my snippets to use later.

## Filenames based on timestamps

Rename all files recursively from the current dir to `YEAR-MONTH-DAY_HOURSMINSSECS.ext` eg: `2020-06-10_093033.jpg`

~~


```bash
exiftool "-FileName<datetimeoriginal" -d "%Y-%m-%d_%H%M%S%%-c.%%e" -r  $PWD/${1#./}
```
