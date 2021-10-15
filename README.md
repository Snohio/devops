# DevOps - A Journey to the Stars

## Introduction

This is a presentation for leadership planned for my former employer and beyond. It is, more or less, a slide deck written as documentation as code using Docusaurus as it's generation engine, modelled after a training site I created in the past. This method is to allow for modifications as code, and have a DevOps feel as it is *as code*. It is intended to be a four part, 30ish minute per part presentation given over a period of a week or a month, or just follow along and through at your own pace, kinda.

This presentation is very business-agnostic, stripped of references to organizations, people, places, etc. in order that it may be used beyond UHG such as DevOps Conferences. One (or some) tool(s) are named because this is really is about my experiences with DevOps as it is tied to Chef specifically. The takeaways here are that you can substitute Chef for many tools (Puppet, Ansible, Jenkins, GitHub, any tool that enables DevOps practices,) but my experience is around Chef - and to be honest, I really like Chef as a product.

The overview of the presentation is [here](overview.md) and I hope to have it completed by years end to present in 2022.
___

## MD Tools

Utilizing Microsoft Visual Studio Code with some Markdown plugins, and Docusaurus as the webpage generator, hosted on GitHub with ghpages, either internally or externally.

### Document Requirements

Each markdown file will need a heading as you add them. It should start like this:

```markdown
---
id: <idname> #match the md file name
title: <Title> #this is like the H1 Title
sidebar_label: <Sidebar Name> #Usually one or two words as it will appear on the right.
---
___

## Description
```

## Markdown Examples

Really, this stuff is just a reminder of some quick tips for Markdown

### Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| Chef          | is neat       |    $1 |

### Lines

Three or more... \-\-\-

---

Hyphens

`***`

Asterisks \*\*\*

`___`

Underscores \_\_\_

### Code / Syntax Highlighting

Inline `code` has `back-ticks around` it.

blocks of code use \`\`\` [ code here ] \`\`\` to open/close the block

```code
This
is
code
```

### Links

Links are easy:

`[Title Here](link_here)`

[This link to Google!](https://www.google.com)

## Maintainers (Authors)

- [Mike Butler](mailto:mbutler@optum.com) on [GitHub](https://github.optum.com/mbutl11)

or alternately:

- [snohio](mailto:snohio@gmail.com) on [GitHub](https://github.com/snohio)