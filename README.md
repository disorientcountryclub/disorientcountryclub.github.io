# Disorient Country Club

Hugo-based static site for Disorient Country Club events.

## Setup

First time setup:

```bash
cd countryclub/
npm install
```

## Building the Site

```bash
hugo build
```

The generated site will be in `public/`. Hugo automatically processes Tailwind CSS during the build.

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

## Theme Customization

The custom theme is in `themes/countryclub/`:
- **Layouts**: `themes/countryclub/layouts/` - HTML templates
- **Styles**:
  - `assets/css/tailwind.css` - Tailwind CSS source (processed by Hugo)
  - `themes/countryclub/static/css/main.css` - Custom CSS styling

Content files remain untouched when updating the theme.

### Using Tailwind CSS

Tailwind CSS is integrated with Hugo and automatically processes utility classes from your templates:

1. **Add utility classes** directly in your HTML templates in `themes/countryclub/layouts/`
2. **Custom theme colors** are defined in `assets/css/tailwind.css`:
   - `electric-pink` (#ff1493)
   - `cyber-blue` (#00ffff)
   - `neon-purple` (#b026ff)
   - `hot-magenta` (#ff00ff)
   - `deep-violet` (#4a0e78)
   - `midnight` (#0a0015)

3. **Custom utility classes** available:
   - `.text-gradient-vaporwave` - Gradient text effect
   - `.glow-cyan` - Cyan glow text shadow
   - `.glow-pink` - Pink glow text shadow

4. **Hugo automatically**:
   - Scans templates for Tailwind classes
   - Generates optimized CSS with only used utilities
   - Fingerprints CSS in production builds

Example usage in templates:
```html
<div class="bg-midnight text-cyber-blue p-4 rounded-lg">
  <h1 class="text-gradient-vaporwave text-4xl font-display">
    Country Club XIV
  </h1>
</div>
```

## Menu Configuration

The main navigation menu is configured in `hugo.toml`:

```toml
[[menus.main]]
  name = 'Section Name'
  url = '/section/'
  weight = 1  # Controls order
```
