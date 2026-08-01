# Academy Lesson Frontmatter Format

This file documents the YAML frontmatter fields supported by the Academy lesson markdown files.

When a lesson markdown file contains YAML frontmatter, the fields below are read and merged into the lesson metadata at runtime. No fields are required — if a lesson omits any of these fields, the lesson will render normally without errors.

Supported fields

- `title` (string)
  - Optional: overrides the lesson `title` from the course metadata.

- `estimatedTime` (string)
  - Optional: maps to the lesson `duration` value used in the UI (e.g. "10 min").

- `plate` (object)
  - `src` (string) — required if `plate` is present. A path under `/academy/plates/...` pointing to the technical plate image.
  - `alt` (string) — optional alt text for the image.

- `objectives` (array of strings)
  - Optional per-lesson learning objectives. Example:

```yaml
objectives:
  - Identify the correct temperature gradient for the species
  - Select an appropriate heat source and thermostat
```

- `keyTakeaways` (array of strings)
  - Optional per-lesson key takeaways. Example:

```yaml
keyTakeaways:
  - Maintain a thermal gradient for thermoregulation
  - Use thermostats to avoid overheating
```

- `worksheet` (string)
  - Optional URL or relative path to a worksheet or supplemental file to download.

- `downloads` (array of objects)
  - Each item should be an object with `label` and `href`:

```yaml
downloads:
  - label: "Sample enclosure checklist"
    href: "/downloads/enclosure-checklist.pdf"
```

- `references` (array of objects)
  - Each item may include `label` and/or `href`:

```yaml
references:
  - label: "Paper on thermoregulation"
    href: "https://example.org/paper"
  - label: "Local vet list"
```

Notes

- Do not include placeholder content. Only add these fields when you have real, verifiable content.
- `estimatedTime` maps to the UI's `duration` field. If both are present the frontmatter value takes precedence for that lesson.
- Filenames and plate paths should match files in `public/academy/plates/<course-slug>/`.

Where this is enforced

- Lesson loading is performed by `app/academy/lib/loadLesson.ts` which returns `{ content, data }` using `gray-matter`.
- The lesson route merges frontmatter into the lesson object in `app/academy/[slug]/lessons/[lesson]/page.tsx`.
- The lesson UI consumes these fields in `app/academy/lib/lessonPage.tsx`.

Examples

A minimal example that adds a plate and worksheet:

```yaml
---
plate:
  src: "/academy/plates/your-course/01-technical-plate.webp"
  alt: "Technical plate"
worksheet: "/worksheets/lesson-02-worksheet.pdf"
---

# Lesson content here
```
