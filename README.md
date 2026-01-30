# Disorient Country Club

Hugo-based static site for Disorient Country Club events.

## Setup

## Viewing changes localy

```bash
hugo server
```

This will start a local web server at http://localhost:1313 that auto-reloads on file changes.
It will also rewrite files in `public/`.
See below for build and push instructions.

## Building the Site

```bash
hugo build
```

The generated site will be in `public/`.
Make sure to stop the server and rebuild the site with this command before pushing.

## Adding Content

All content is in markdown files under `content/`. No HTML editing required!

### Add a New Announcement

Create `content/announcements/YYYY-MM-DD-title.md`:

```yaml
---
title: "Your Announcement Title"
date: 2025-05-20
tags: ["category", "important"]
---

Your announcement content here...
```

### Update DJ Lineup

Edit `content/lineup/djs.md` and add to the artists list:

```yaml
---
title: "DJ Lineup"
venue: "Disorient Club House"
artists:
  - name: "DJ NAME"
    setTime: "Saturday 11PM"  # Optional
    bio: "Artist bio"         # Optional
  - name: "ANOTHER DJ"
---
```

### Update VJ Lineup

Edit `content/lineup/vjs.md` and add to the artists list:

```yaml
---
title: "VJ Lineup"
venue: "Disorient Club House"
artists:
  - name: "VJ NAME"
    setTime: "Saturday 11PM"  # Optional
    bio: "Artist bio"         # Optional
  - name: "ANOTHER VJ"
---
```

### Add an Art Installation

Create `content/art/piece-slug.md`:

```yaml
---
title: "Art Piece Name"
artist: "Artist Name"
location: "The Lake"
description: "Short description"
---

Detailed description and artist statement...
```

### Add a Theme Camp

Create `content/camps/camp-slug.md`:

```yaml
---
title: "Camp Name"
tagline: "Camp tagline"
hours: "Thursday - Sunday"
events:
  - "Saturday 4PM: Special Event"
  - "Sunday 2PM: Another Event"
---

Full camp description...
```

### Update Guide Pages

Edit files in `content/guide/`:
- `faq.md` - Frequently Asked Questions
- Add more guide pages as needed

## Directory Structure

```
countryclub/
├── content/           # All content (markdown files)
│   ├── announcements/ # Individual announcement posts
│   ├── lineup/
│   │   ├── djs.md    # DJ lineup (list in frontmatter)
│   │   └── vjs.md    # VJ lineup (list in frontmatter)
│   ├── art/          # Individual art pieces
│   ├── camps/        # Individual theme camps
│   └── guide/        # Guide pages
├── themes/
│   └── countryclub/  # Custom theme
│       ├── layouts/  # HTML templates
│       └── static/   # CSS and assets
├── public/           # Generated site (after build)
└── hugo.toml         # Site configuration
```

## Development

To preview the site locally:

```bash
hugo server
```

Then visit http://localhost:1313

## Theme Customizationf

The custom theme is in `themes/countryclub/`:
- **Layouts**: `themes/countryclub/layouts/` - HTML templates
- **Styles**:
  - `themes/countryclub/static/css/main.css` - Custom CSS styling

Content files remain untouched when updating the theme.

## Menu Configuration

The main navigation menu is configured in `hugo.toml`:

```toml
[[menus.main]]
  name = 'Section Name'
  url = '/section/'
  weight = 1  # Controls order
```
