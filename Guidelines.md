# Content Authoring Guide for IEEE SB CETKR Website

## Table of Contents
- [Event Documentation](#event-documentation)
  - [Event Frontmatter](#event-frontmatter)
  - [Event Gallery](#event-gallery)
  - [Content Formatting](#event-content-formatting)
- [Newsletter Documentation](#newsletter-documentation)
  - [Newsletter Frontmatter](#newsletter-frontmatter)
  - [Content Features](#newsletter-content-features)
- [Advanced Features](#advanced-features)
- [Best Practices](#best-practices)

## Event Documentation

### Event Frontmatter

Event pages require specific frontmatter to be properly displayed. Here's a complete reference:

```yaml
---
# Required Fields
title: "Event Title"  # Keep it concise but descriptive (max 60 chars)
description: "Brief description for preview cards and SEO"  # 150-160 characters recommended
eventDate: "2023-12-31T18:00:00"  # Format: YYYY-MM-DDTHH:MM:SS

# Recommended Fields
pubDate: "2023-12-15"  # When the event was published
location: "Venue Name, Physical/Virtual"  # Physical address or "Online"
registrationLink: "https://example.com/register"  # Full URL to registration page
author: "Organizer Name"  # Defaults to "IEEE SB CETKR"
tags: ["workshop", "technical", "networking"]  # 3-5 relevant tags

# Media
image:  # Displayed as the header image
  url: "/images/events/2023/event-slug/cover.jpg"  # Recommended size: 1200×630px
  alt: "Students participating in [event name]"  # Descriptive alt text

# Gallery - Showcase multiple media items
gallery:
  # Image Example
  - type: "image"
    url: "/images/events/2023/event-slug/gallery/speaker1.jpg"
    alt: "Speaker John Doe presenting on stage"
    caption: "John Doe discussing emerging technologies"
    
  # Video Example (YouTube/Vimeo)
  - type: "video"
    url: "https://youtube.com/embed/VIDEO_ID"  # Must be embed URL
    alt: "Workshop recording: Introduction to AI"
    caption: "Full workshop recording available on our YouTube channel"
    
  # Local Video Example (hosted on our server)
  - type: "video"
    url: "/videos/events/2023/workshop.mp4"
    poster: "/images/events/2023/event-slug/video-poster.jpg"
    alt: "Workshop highlights"
    caption: "Highlights from the technical workshop"
---
```

### Event Gallery

The gallery system provides an interactive way to display media from your event. It supports both images and videos with the following features:

#### Image Gallery Items
```yaml
- type: "image"
  url: "/images/events/2023/workshop/session1.jpg"
  alt: "Students working on hands-on exercises"
  caption: "Participants engaged in practical session"
  # Optional: Specify dimensions for precise layout
  width: 1920
  height: 1080
```

#### Video Gallery Items
```yaml
- type: "video"
  # Supported sources:
  # - YouTube: https://youtube.com/embed/VIDEO_ID
  # - Vimeo: https://player.vimeo.com/video/VIDEO_ID
  # - Self-hosted: /videos/event-name.mp4
  url: "https://youtube.com/embed/VIDEO_ID"
  alt: "Keynote speech by Jane Smith"
  caption: "Watch the full keynote presentation"
  # Optional: Thumbnail for self-hosted videos
  poster: "/images/events/2023/event-slug/thumbnail.jpg"
```

#### Gallery Best Practices
1. **Organization**:
   - Store event media in `/public/images/events/YYYY/event-name/`
   - Use descriptive filenames: `opening-ceremony-group.jpg`
   - Create subfolders for different media types: `/gallery/`, `/speakers/`, `/sessions/`

2. **Image Specifications**:
   - Format: WebP (preferred) or JPG
   - Dimensions: 1920×1080px (16:9) for landscape, 1080×1350px (4:5) for portraits
   - Max file size: 500KB per image
   - Color profile: sRGB

3. **Video Specifications**:
   - Resolution: 1080p (1920×1080)
   - Format: MP4 with H.264 codec
   - Max length: 5 minutes per clip
   - Include captions (.vtt) for accessibility

4. **Accessibility**:
   - Always provide meaningful alt text
   - Include captions for videos
   - Ensure sufficient color contrast for any text overlays
   - Add ARIA labels for interactive elements

5. **Performance**:
   - Optimize images before uploading
   - Use responsive images with srcset when possible
   - Lazy load images below the fold
   - Consider using a CDN for high-traffic events

#### Gallery Display Options
Add these classes to customize gallery behavior:

```markdown
<!-- Grid layout (default) -->
:::gallery
gallery items here
:::

<!-- Carousel layout -->
:::gallery {.carousel}
gallery items here
:::

<!-- Masonry layout -->
:::gallery {.masonry}
gallery items here
:::
```

### Event Content Formatting

#### Headers
Use a clear hierarchy for better readability and SEO:

```markdown
# Event Title (H1 - auto-generated from frontmatter)
## Main Section (H2)
### Subsection (H3)
#### Minor Heading (H4)
```

#### Text Formatting
```markdown
**Bold text** for emphasis
*Italic text* for subtle emphasis
~~Strikethrough~~ for deprecated info
> Blockquote for important notes or testimonials
`inline code` for technical terms
```

#### Lists
```markdown
### Unordered Lists
- Primary item
  - Secondary item
    - Tertiary item
    - Another point
  - Back to secondary
- Next primary item

### Ordered Lists
1. First step
   1. Sub-step A
   2. Sub-step B
2. Second step

### Task Lists
- [x] Completed item
- [ ] Pending item
- [ ] Another task
```

#### Links and Buttons
```markdown
<!-- Basic link -->
[Link text](https://example.com)

<!-- Link with title -->
[IEEE Xplore](https://ieeexplore.ieee.org "Visit IEEE Xplore")

<!-- Button with custom styling -->
[Register Now](https://example.com/register){.btn .btn-primary}

<!-- Button with icon -->
[Download PDF](/documents/event-guide.pdf){.btn .btn-download}
```

#### Media

##### Images
```markdown
<!-- Basic image -->
![Alt text describing the image](/path/to/image.jpg)

<!-- Image with caption -->
<figure>
  <img 
    src="/images/events/2023/workshop/session.jpg" 
    alt="Students participating in workshop" 
    width="800"
    height="450"
    loading="lazy"
  />
  <figcaption>Students engage in hands-on activities during the workshop</figcaption>
</figure>

<!-- Image with link -->
[![Alt text](/path/to/thumbnail.jpg)](/path/to/fullsize.jpg)
```

##### Videos
```markdown
<!-- Embedded YouTube video -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  title="Video title"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
  loading="lazy"
></iframe>
```

#### Code Blocks
Use fenced code blocks with language specification for syntax highlighting:

````markdown
```python
def greet(name):
    """A simple greeting function"""
    return f"Hello, {name}!"

print(greet("IEEE Members"))
```

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```
````

#### Tables
Create responsive tables with proper headers:

```markdown
| Session | Time | Speaker |
|---------|------|---------|
| Opening Remarks | 10:00 AM | Dr. Smith |
| Keynote | 10:30 AM | Jane Doe |
| Workshop | 2:00 PM | Team IEEE |
```

#### Special Components

##### Info Cards
```markdown
:::card
### Session Details
- **Date:** October 15, 2023
- **Time:** 2:00 PM - 4:00 PM
- **Location:** Main Auditorium
- **Speaker:** Dr. Alan Turing
:::
```

##### Tabs
```markdown
:::tabs

### Tab 1
Content for tab 1

### Tab 2
Content for tab 2

### Tab 3
Content for tab 3

:::
```

## Newsletter Documentation

### Newsletter Frontmatter
```yaml
---
title: "Monthly Newsletter - January 2023"  # Keep under 60 characters
description: "Catch up with the latest updates, events, and achievements from IEEE SB CETKR"  # 150-160 chars
pubDate: "2023-01-31T18:00:00+05:30"  # Include timezone
author: "Editor Name"  # Optional
tags: ["monthly", "updates", "highlights"]  # 3-5 tags
image:
  url: "/images/newsletters/2023/jan-cover.jpg"
  alt: "January 2023 newsletter cover featuring [description]"
  width: 1200
  height: 630
---
```

### Newsletter Content Features

#### Responsive Layout
Newsletters use a responsive grid system. Structure your content with clear sections:

```markdown
## Section Title

### Subsection
Content goes here...

### Another Subsection
More content...
```

#### Custom Components

##### Call-to-Action Buttons
```markdown
[Primary Button](#){.btn .btn-primary}
[Secondary Button](#){.btn .btn-secondary}
[Outline Button](#){.btn .btn-outline}
```

##### Alerts and Notices
```markdown
:::note
Important information that readers should pay attention to.
:::

:::tip
Helpful suggestions or best practices.
:::

:::caution
Warnings about potential issues or requirements.
:::

:::important
Critical information that must be read and understood.
:::
```

##### Event Highlights
```markdown
:::event-highlight
### Upcoming Workshop: Web Development
**Date:** February 15, 2023  
**Time:** 2:00 PM - 5:00 PM  
**Location:** Computer Lab 3

[Register Now](#){.btn .btn-sm .btn-primary}
:::
```

##### Team Member Spotlight
```markdown
:::profile
![Member Name](/images/team/john-doe.jpg)

### John Doe
*Chapter Chair*

John is a final year Computer Science student with a passion for...
:::
```

##### Image Gallery
```markdown
:::gallery
- url: /images/gallery/photo1.jpg
  alt: Group photo from the workshop
  caption: Participants at our latest workshop
- url: /images/gallery/photo2.jpg
  alt: Speaker presenting
  caption: Engaging session by our guest speaker
:::
```

## Advanced Features

### Custom Shortcodes

#### YouTube Video
```markdown
{{< youtube VIDEO_ID >}}
```

#### Tweet Embed
```markdown
{{< tweet 123456789012345678 >}}
```

#### PDF Embed
```markdown
{{< pdf "/documents/report.pdf" >}}
```

### Dynamic Content

#### Event Countdown
```markdown
{{< countdown "2023-12-31T23:59:59" >}}
```

#### Social Media Feed
```markdown
{{< social-feed platform="twitter" username="ieeesbcetkr" limit=3 >}}
```

## Best Practices

### Content Organization
1. **File Structure**
   ```
   content/
   ├── events/
   │   └── 2023-12-workshop/
   │       ├── index.mdx
   │       └── images/
   └── newsletters/
       └── 2023-01-newsletter.mdx
   ```

2. **Naming Conventions**
   - Use lowercase with hyphens for filenames
   - Prefix dates: `2023-12-workshop-web-dev.mdx`
   - Keep image filenames descriptive: `opening-session-group-photo.jpg`

### Accessibility Guidelines
- **Images**: Always include meaningful alt text
- **Headings**: Maintain proper hierarchy (H1 > H2 > H3)
- **Links**: Use descriptive text (not "click here")
- **Color**: Ensure sufficient contrast (minimum 4.5:1)
- **Keyboard**: Ensure all interactive elements are keyboard-navigable

### Performance Optimization
1. **Images**
   - Use WebP format
   - Specify width and height
   - Use `loading="lazy"` for below-the-fold images
   - Implement responsive images with `srcset`

2. **Videos**
   - Host on external platforms (YouTube, Vimeo)
   - Use lazy loading
   - Provide captions and transcripts

3. **Code Splitting**
   - Break content into components
   - Use dynamic imports for heavy components

### SEO Best Practices
- **Meta Tags**: Fill all frontmatter fields
- **Structured Data**: Use JSON-LD for events and articles
- **Internal Linking**: Link to related content
- **URL Structure**: Use clean, descriptive URLs
- **Sitemap**: Keep sitemap updated

### Maintenance
1. **Broken Links**: Regularly check for and fix broken links
2. **Content Audit**: Review and update content quarterly
3. **Backup**: Maintain regular backups of all content
4. **Analytics**: Monitor user engagement and adjust content strategy

### Collaboration Workflow
1. **Drafting**: Create content in a feature branch
2. **Review**: Request peer review for accuracy and quality
3. **Preview**: Check the rendered output
4. **Publish**: Merge to main branch for deployment
5. **Archive**: Move old content to appropriate archive sections