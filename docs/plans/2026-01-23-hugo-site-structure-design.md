# Hugo Site Structure Design
**Date:** 2026-01-23
**Project:** Disorient Country Club Website Migration to Hugo

## Overview
Migrate the existing single-page HTML site to Hugo static site generator, establishing a content-driven structure where updates can be made by adding/editing markdown files in `countryclub/content/` without touching HTML or layouts.

## Goals
- Enable easy content updates via markdown files
- Support frequent updates to event announcements, DJ lineups, and art installations
- Create reusable structure for current event (one event at a time approach)
- Establish foundation for future styling improvements

## Content Types
Based on requirements, the site will support:
1. **Event announcements** - News and updates (blog-style, date-ordered)
2. **DJ/performer lineups** - DJs and VJs with set times and venues
3. **Art & theme camps** - Art installations and theme camp descriptions
4. **Guide pages** - Static informational content (FAQ, survival guide, logistics)

## Site Structure

### Content Organization
```
countryclub/content/
├── _index.md                 # Homepage content
├── announcements/            # Event announcements (blog-style)
│   ├── _index.md
│   └── [YYYY-MM-DD-title].md
├── lineup/                   # DJ/VJ performers
│   ├── djs/
│   │   ├── _index.md
│   │   └── [artist-slug].md
│   └── vjs/
│       ├── _index.md
│       └── [artist-slug].md
├── art/                      # Art installations
│   ├── _index.md
│   └── [piece-slug].md
├── camps/                    # Theme camps
│   ├── _index.md
│   └── [camp-slug].md
└── guide/                    # Static guides
    ├── faq.md
    ├── survival-guide.md
    ├── getting-there.md
    └── schedule.md
```

### Theme Structure
Custom lightweight theme in `themes/countryclub/`:
```
themes/countryclub/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html       # Base template with header/nav/footer
│   │   ├── single.html       # Individual content pages
│   │   └── list.html         # List pages (auto-shows all items)
│   ├── index.html            # Homepage layout
│   └── partials/
│       ├── head.html         # <head> section
│       ├── header.html       # Site header/navigation
│       └── footer.html       # Site footer
└── static/
    └── css/
        └── main.css          # Basic responsive styles
```

## Content Frontmatter Schema

### Announcements
```yaml
---
title: "Important Update About Gate Hours"
date: 2025-05-15
tags: ["logistics", "important"]
---
Announcement content in markdown...
```

### DJ/VJ Performers
```yaml
---
name: "PIPPI SONGDROPPING"
type: "dj"  # or "vj"
venue: "Disorient Club House"
setTime: "Saturday 10PM"
---
Optional bio or description...
```

### Art Installations
```yaml
---
title: "Pyramid On The Sea"
artist: "A Dreamy Sol"
location: "The Lake"
description: "A lit pyramid floating on the lake"
---
Additional details and artist statement...
```

### Theme Camps
```yaml
---
title: "Camp Boozehole"
tagline: "Ye Olde Rootin' Tootin' Saloon"
hours: "Late Thursday - Sunday Night"
events:
  - "Saturday 4-8PM: Cannibal Snacks & Potluck Party"
---
Full camp description and activities...
```

### Guide Pages
```yaml
---
title: "FAQ"
weight: 1  # Controls menu order
---
Guide content...
```

## Content Update Workflow

### Adding a New DJ
1. Create `countryclub/content/lineup/djs/artist-name.md`
2. Add frontmatter with name, venue, set time
3. Run `hugo build`
4. DJ automatically appears on lineup page

### Adding an Art Piece
1. Create `countryclub/content/art/piece-name.md`
2. Add frontmatter with title, artist, location
3. Run `hugo build`
4. Art piece automatically appears on art page

### Posting Announcement
1. Create `countryclub/content/announcements/YYYY-MM-DD-title.md`
2. Add frontmatter with date and tags
3. Run `hugo build`
4. Announcement appears on homepage/announcements feed

### Updating Guide Info
1. Edit relevant markdown file in `countryclub/content/guide/`
2. Run `hugo build`
3. Changes reflected on guide page

## Template Behavior

### List Pages
- `content/lineup/djs/_index.md` → Shows all DJ markdown files
- `content/art/_index.md` → Shows all art pieces
- Layouts automatically iterate through content and display using frontmatter

### Single Pages
- Individual content items use `_default/single.html`
- Template reads frontmatter fields and displays them consistently
- Markdown content rendered in main area

### Homepage
- Uses `index.html` layout
- Can show recent announcements
- Links to main sections (lineup, art, camps, guide)

## Navigation
- Main navigation defined in `hugo.toml` config
- Points to major sections: Lineup, Art, Camps, Guide
- Responsive mobile menu
- Auto-generated from site structure

## Styling Approach
- Minimal functional CSS for initial launch
- Basic responsive layout that works across devices
- Foundation for future styling improvements
- Styles can be updated without touching content

## Build Process
```bash
cd countryclub/
hugo build
```
- Generates static site in `countryclub/public/`
- Can be deployed to any static hosting
- Fast builds, even with many content files

## Future Considerations
- Event archival: When ready for next year's event, archive current content
- Enhanced styling: Replace minimal CSS with custom design
- Asset management: Images stored in `static/` directory
- Search functionality: Can add later if needed

## Technical Decisions

### Why Custom Theme?
- Full control over structure and styling
- No unnecessary bloat from pre-built themes
- Easy to understand and modify
- Matches existing site's unique aesthetic

### Why Frontmatter-Driven?
- Non-technical users can add content
- Structured data ensures consistency
- Templates handle all presentation logic
- Easy to extend with new fields

### Why Flat Content Structure?
- Simple to understand and navigate
- Easy to add new content types
- No complex taxonomies to manage initially
- Can evolve structure as needs grow
