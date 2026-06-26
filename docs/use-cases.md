# Use Cases

M8Shift is designed for workflows where a single AI assistant is not enough, or where
splitting the work between specialized roles produces better results.

Instead of asking one agent to do everything in one pass, M8Shift lets multiple AI
teammates collaborate with clear ownership, handoffs, task notes, and validation.

<div class="m8-usecase-gallery">
  <a class="m8-usecase-image-card" href="#write-a-book">
    <img src="/use-cases/write-book.svg" alt="">
    <span class="m8-usecase-image-card__body">
      <span class="m8-usecase-image-card__title"><i class="fa-solid fa-pen-fancy" aria-hidden="true"></i><strong>Writing</strong></span>
      <span class="m8-usecase-image-card__text">Coordinate planning, drafting, reviewing, editing, and manuscript cleanup.</span>
    </span>
  </a>
  <a class="m8-usecase-image-card" href="#build-software">
    <img src="/use-cases/build-software.svg" alt="">
    <span class="m8-usecase-image-card__body">
      <span class="m8-usecase-image-card__title"><i class="fa-solid fa-terminal" aria-hidden="true"></i><strong>Software</strong></span>
      <span class="m8-usecase-image-card__text">Split planning, implementation, review, tests, docs, and release notes.</span>
    </span>
  </a>
  <a class="m8-usecase-image-card" href="#generate-documentation">
    <img src="/use-cases/documentation.svg" alt="">
    <span class="m8-usecase-image-card__body">
      <span class="m8-usecase-image-card__title"><i class="fa-solid fa-book-open" aria-hidden="true"></i><strong>Documentation</strong></span>
      <span class="m8-usecase-image-card__text">Turn scattered project knowledge into guides, references, and onboarding material.</span>
    </span>
  </a>
  <a class="m8-usecase-image-card" href="#design-a-website">
    <img src="/use-cases/website.svg" alt="">
    <span class="m8-usecase-image-card__body">
      <span class="m8-usecase-image-card__title"><i class="fa-solid fa-layer-group" aria-hidden="true"></i><strong>Websites</strong></span>
      <span class="m8-usecase-image-card__text">Coordinate information architecture, copy, docs, FAQ, and implementation-ready content.</span>
    </span>
  </a>
  <a class="m8-usecase-image-card" href="#create-marketing-and-product-content">
    <img src="/use-cases/marketing.svg" alt="">
    <span class="m8-usecase-image-card__body">
      <span class="m8-usecase-image-card__title"><i class="fa-solid fa-bullhorn" aria-hidden="true"></i><strong>Marketing</strong></span>
      <span class="m8-usecase-image-card__text">Keep product messaging consistent across pages, launch notes, and comparisons.</span>
    </span>
  </a>
  <a class="m8-usecase-image-card" href="#research-and-synthesis">
    <img src="/use-cases/research.svg" alt="">
    <span class="m8-usecase-image-card__body">
      <span class="m8-usecase-image-card__title"><i class="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i><strong>Research</strong></span>
      <span class="m8-usecase-image-card__text">Gather sources, compare approaches, identify risks, and produce decision notes.</span>
    </span>
  </a>
  <a class="m8-usecase-image-card" href="#review-and-quality-control">
    <img src="/use-cases/review.svg" alt="">
    <span class="m8-usecase-image-card__body">
      <span class="m8-usecase-image-card__title"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i><strong>Review</strong></span>
      <span class="m8-usecase-image-card__text">Separate production from validation so one agent is not the only approver.</span>
    </span>
  </a>
  <a class="m8-usecase-image-card" href="#automate-multi-step-workflows">
    <img src="/use-cases/automation.svg" alt="">
    <span class="m8-usecase-image-card__body">
      <span class="m8-usecase-image-card__title"><i class="fa-solid fa-gears" aria-hidden="true"></i><strong>Automation</strong></span>
      <span class="m8-usecase-image-card__text">Break complex work into turns, track progress, validate output, and finish cleanly.</span>
    </span>
  </a>
</div>

```mermaid
flowchart LR
    C["coordinator<br/>frames the work"] --> P["producer<br/>creates the artifact"]
    P --> R["reviewer<br/>checks quality"]
    R --> I["integrator<br/>finalizes the result"]
    I --> C

    classDef agent fill:#7c3aed22,stroke:#7c3aed;
    classDef review fill:#22c55e22,stroke:#16a34a;
    classDef done fill:#ff7a1822,stroke:#fb923c;
    class C,P agent
    class R review
    class I done
```

## Write a Book

Use M8Shift to organize long-form writing projects with several roles:

- a coordinator defines the concept, audience, constraints, and chapter plan;
- a writer drafts sections or chapters;
- a reviewer checks structure, pacing, consistency, and missing arguments;
- an editor polishes the final Markdown or manuscript files.

Typical workflow:

- define the book concept and target audience;
- generate a detailed outline;
- write chapters section by section;
- keep tone, terminology, and structure consistent;
- review clarity, pacing, and factual claims;
- prepare export-ready Markdown or manuscript files.

M8Shift helps avoid the "one huge prompt, one chaotic answer" pattern by making each
turn narrow, traceable, and reviewable.

## Build Software

M8Shift can coordinate coding work across specialized AI roles:

- a planner breaks down the feature;
- a coder implements changes;
- a reviewer inspects the diff;
- a tester proposes or runs validation steps;
- an integrator prepares the final handoff, commit notes, or release text.

Typical workflow:

- analyze the repository;
- define the task plan;
- create or update source files;
- write or update tests;
- review diffs and edge cases;
- detect regressions;
- prepare commit messages and documentation.

This fits automation scripts, internal tools, websites, CLI utilities, and larger
projects where correctness matters more than a single fast answer.

## Generate Documentation

M8Shift can turn scattered project information into structured documentation.

Typical workflow:

- generate project documentation;
- create setup and installation guides;
- write API or CLI references;
- maintain changelogs and release notes;
- document architecture decisions;
- produce onboarding material for contributors;
- run a technical review before publishing.

The important split is simple: one role writes, another verifies. Documentation still
needs maintenance, but the review loop makes drift easier to catch.

## Design a Website

M8Shift is useful for Markdown-based static sites and developer documentation sites.

Typical workflow:

- define the site structure;
- write landing page copy;
- create use case pages;
- draft documentation pages;
- generate FAQ sections;
- review messaging consistency;
- prepare content for VitePress, Astro, Docusaurus, or a similar framework.

One agent can focus on information architecture, another on copy, another on technical
accuracy, and another on implementation details.

## Create Marketing and Product Content

Use M8Shift when product messaging must stay consistent across pages and formats.

Typical workflow:

- write landing pages;
- create product descriptions;
- generate launch announcements;
- draft comparison pages;
- prepare social posts;
- produce release notes;
- adapt tone for different audiences.

Each role can focus on a different angle: clarity, persuasion, technical accuracy, or
brand consistency.

## Research and Synthesis

M8Shift can coordinate research workflows where information must be collected,
summarized, compared, and turned into usable output.

Typical workflow:

- gather source material;
- extract key points;
- compare approaches;
- identify risks and trade-offs;
- produce summaries;
- generate decision notes;
- prepare structured reports.

This is useful for technical research, product decisions, competitive analysis, and
internal knowledge management.

## Review and Quality Control

M8Shift separates production from validation. The agent that creates an artifact does
not have to be the only one approving it.

Typical workflow:

- review generated code;
- check documentation accuracy;
- validate writing style;
- detect missing requirements;
- compare output against project rules;
- request corrections before finalization.

The goal is fewer unchecked assumptions, fewer missing requirements, and a clearer
record of what was approved or sent back for revision.

## Automate Multi-Step Workflows

M8Shift is useful when a task needs several steps, different skills, or controlled
delegation between agents.

Typical workflow:

- split a complex request into smaller tasks;
- assign each task to the right role or agent;
- track progress in the task ledger;
- collect outputs;
- validate results;
- produce the final deliverable.

This makes M8Shift suitable for content production, software development,
documentation maintenance, website preparation, research, and project coordination.

## Why It Matters

Most AI tools make it easy to ask one assistant for everything at once. M8Shift takes a
different approach: define roles, separate responsibilities, control the work window,
and validate outputs.

That structure matters when tasks become too large, too sensitive, or too complex for a
single prompt.
