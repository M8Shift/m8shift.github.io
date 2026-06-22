# Content + image + review workflow

A writer and an image generator can work concurrently when their write environments
are isolated.

```text
Claude / writer       Codex / image_generator
feat/content          feat/assets
      \                  /
       \                /
        Claude / integrator
          feat/integrated
                 |
          Gemini / reviewer
```

The image task should report:

- generated file paths;
- prompt used;
- dimensions and format;
- asset manifest;
- known limitations.

The reviewer checks visual consistency, file references, accessibility text, technical
format, and whether the output satisfies the brief.
