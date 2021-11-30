---
id: practices #match the md file name
title: Diving In to DevOps Practices #this is like the H1 Title
sidebar_label: DevOps Practices #Usually one or two words as it will appear on the right.
---
___
<img src='../../img/practice/cliff_diving.jpg' alt="Diving In" align="right" />

## Practices and Principles Employed

*Here is what we did and what worked what didn't.*

### Kanban / Agile: Iterations, iterations, iterations

- Went from SwiftKanban to CA Agile (Rally) to GitHub.
- Eventually landed on our own form of Scrumban on GitHub.

### Stand-ups, Demos, Retrospectives, Post Mortems

- Some of this is easier in theory than practice.
- This is the stuff that really takes a commitment to perform.

### ChatOps (alerts, notifications, visibility)

- Created a number of integrations in *Flowdock*.
- It's hard for some to embrace.

### *Everything* as Code (in GitHub)

- Documentation, Notes, Issues, Projects.

### Failure is always an Option

- Know when to pivot!
- Learn from it as a group (PIR)
- Self Healing failure story.

___

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::note Notes:

<Tabs
  defaultValue="notes"
  values={[
    {label: 'Expand', value: 'expand'},
    {label: 'Collapse', value: 'collapse'}
  ]}>
  <TabItem value="expand">

  These are some of the DevOps Practices and Principles that we employed. All were not without their challenges and I'd like to go through some of them. 

### Kanban

  Most of us were familar enough with Kanban and Agile and brought that into our practices for Chef. As a company we were embracing Agile, although like any good organization, modified it to fit the higher ups ideas of Agile. It was loosely based on the Scaled Agile Framework. We moved from Swift Kanban to CA's Rally. We had a scrum master assigned to us and those early days of figuring out what we needed to do really benefitted by writing solid Capabilities, Features and User Stories. One of the difficulties with strict Agile is that our engineer and some ops folks had a tough time using it for daily work. It is a real culture shift for someone who is used to doing what is needed when it is needed and planning is difficult. Another issue with Agile is that you really have to work to get operations tasks planned for, especially break fix. We had an 80% rule which allowed for some flexibility as well as made sure to plan for those on call to be unavailable during their week. 
  
  As time went on, we lost our scrum master and had split up those duties among ourselves. This required folks that didn't generally do planning and writing user stories and owning features to add that into the work schedule. We were also putting more and more work into Github so after a lot of trial and error, we comfortably landed on just using GitHub for issues and Project kanban tracking. We were pretty much practicing Scrumban which is exactly what it sounds like - Scrum with Kanban. 

### Scrumban / Agile Stuffs

  One of the things that was important (and is with Agile) is Iterations. Working in small amounts, getting a little bit done and not being afraid to change the things that aren't working. So along with the tools that we used, we also put into practice daily stand ups. This took a variaty of forms and methods, we did it daily on the phone to a couple of times a week and sprinkled in some "virtual stand ups" using Flowdock, our Chat tool. This was something I picked up from a DevOpsDays Open Spaces discussion. Regardless of the approach, just keep doing it! Over and over and over. That goes for any of these practices and principles. They call it a practice for a reason, because you have to do it over and over again.

  Along with those Stand Ups we did weekly Demos to showcase our work. It gave everyone a chance to show off what they did and hopefully share some lessons learned. This also is a great tool to provide visibility and accountability. It also was a great place to have corrections and spawned ideas for continued enhancements. Sometimes we'd come away from demos with 3 or 4 new ideas to continuously improve the products. We later offered to have these 100% opened to the community as it helped us show our internal customers the work we were doing.

  Lastly the Post Mortems which we preffered to call them Blameless Post Incident Reviews. We typically would only do these as needed and tried to find a non-biased person on our team or another to host them. We stuck with a form created internally to gather the information and set the plan forward. The most important thing is to keep them blameless.

### ChatOps

  One of my favorite practices that I picked up at DevOpsDays was ChatOps. Personally I have always been a "social Internet" user - even before the Internet. I ran a BBS specifically so folks could chat with the "SysOp" and in college I spend many hours in the lab on a telnet-based chat forum and even running an IRC server on our Vax. So it was pretty natural to find it so appealing. There were other folks at our organization starting use Flowdock - also a CA tool - and we jumped on that right away. We created some integrations with Rally, GitHub and our monitoring platform.

  ChatOps was actually one of our most successful practices. Some folks on the team struggled with communications, but having that open to them allowed them to be who they were. It made for more transparent conversations and I always encouraged folks to "ask in public". It greatly reduced my email, or at least the ones I cared about. Flowdock became the center to our Chef community and we ended up created a number of custom Bot integrations for Chef, our pipeline and support functions. One of the few struggles was getting everyone to participate - at least a little bit. Our virtual stand ups helped with that to some degree.

### Everything as Code

  Everything as Code is one of my newer favorite practices. It was something that I didn't really learn until I was about 3 years into leading the team. One of the challenges with DevOps - especially for former server operations folks such as myself - is that they are just not comfortable with source code management. I have been scripting stuff for as long as I have been in IT. Even back in college, I had a job at the first public Internet Service Providers in Cincinnati. I would write code using a tool called "Expect" that would log in to systems and pull information from them that we used for billing and other things. I would always write code and save it to some network storage and then test and execute it from there. Using a source code tool was never a part of my culture.  It was suggested to me that we start doing all of our documentation in markdown because we kept changing wiki platforms and it was a matter of rewriting content. Markdown would become our last content format. That process opened my eyes to all that markdown could be used for. I started putting all of my notes into a GitHub repo using Visual Studio Code - moving them from One Note. Public documentation was put together in markdown and wrapped into a GitHub pages form using Docusaurus. Issues and issue templates were created - which drove GitHub usage as we transitioned from Rally to GitHub projects. My world became everything as code and I started living life as a developer. Still to this day, presentations like this one are done with markdown (with react.js extensions) using Docusaurus to generate the content you see here! It really helped me learn and embrace the DEV in DevOps.

### Failure *is* an option

  It was important for us to remember - to embed in our new DevOps culture - that failure is always an option. Without failures, we cannot make improvements. What was critical to the success was that we learned from those failures and changed from the path. The sooner you can do that, the less time is wasted. This is one of the critical pieces of the Demos, Retrospectives, PIRs, everything we just did above.

  Story time! One of the times that we failed to fail fast enough was when we were working on a large self-healing project. Our team had gotten larger with more developers and it was a period that we were not communicating the best - especially with standups and demos. Our engineer at the time missed a few and we just were not as good about doing them on a scheduled basis - mostly because we were all doing a lot of work. The developers started going down a path with a simple principle in mind - that they were going to basically create a "watchdog" service that ran on the systems that would then run commands locally to fix the broken Chef agents. About 6 months of effort went into the design both on the watchdog agent as well as an API and database functions built around it. During a demo when it was completed, our engineer flatly stated that it would not pass a security review and getting that to pass would be a monumental effort. It was something that was taken for granted that it was doable but really never discussed in preplanning. Eventually about 50% of the work was scrapped. There were a LOT of take aways from that effort and while we did lose about 3 months of work, we learned some very valuable lessons as a team. In the end we had a better product to support our Chef Clients.

  </TabItem>
</Tabs>

:::
