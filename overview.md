# My DevOps Journey with Chef

## Version 21.8.26

## Mike's DevOps Transformation Experiences presentation

- Introduction
- Background on how we worked.
  - Developers / Applications Teams and OS Managed Services
  - HPSA Model of Work (Our deploying and upgrading of tools and services on Servers)
  - Scale and cost cutting became a problem.
- When I got the Aha Moment
- How I build the team around a DevOps model
  - Including International efforts

## How DevOps helped drive Chef

### aka Putting what I learned into Practice

- My mantras
  - No Handoffs.
  - Make Work Visible to Everyone.
  - Communication Makes the Team Work!
- DevOps Practices and Principles that we employed. What worked, what didn't.
  - *Everything* as Code (in GitHub). Documentation, Notes, Issues, Projects.
  - Kanban / Agile: Iterations, iterations, iterations.
  - ChatOps (alerts, notifications, visibility)
  - Stand-ups, Demos, Celebrations, Retrospectives, Post Incident Reviews
    - Some of this is easier in theory than practice.
    - This is the stuff that really takes practice.
- Development of DoesAPI - What it started as, what it became
- Chef Pipeline and the Jenkins Rebuild from Scratch story
- Self Healing failure story
  - Failing is an Option and how and when to pivot.
- Building a Community of Practice

## DevOps Transformation - Where can you start?

- Start Small. Iterations are everything in Agile Delivery and DevOps! Why should the transformation be different.
- Kanban of Some Sort. I'd advocate for GitHub because it is a good common tool that everyone should know the basics of.
- Start Stand-ups and Demos (Retrospectives).
- Take simple issues and practice a Post Incident Review.
  - Create Issues in a Repository
- Developing something!
  - Everything as Code (in GitHub)
    - Start with Issues and Documentation
    - Learn markdown (literally takes 5 minutes)
    - Create Documentation.
      - Just markdown at first then try Docusaurus
  - This all starts the Development Pattern.
- Embrace Infrastructure as Code

## How Chef can help drive DevOps

- Infrastructure and Policy as Code is a great start!
- Remember, all of this below is iterative
- Start with the Tests!
  - Inspec with Test Kitchen is a great tool for checking your outcomes, even if it is not Chef.
- Hands Off Servers (No SSH/RDP) Should be a goal
- Long term goal is immutability.
  - Yes, you can have immutability with managed VMs with Chef!
- Communities of Practice
  - Hold Office Hours
- Create common Community Cookbooks
  - Great for Shared LOB Application Support
- Special notes!
