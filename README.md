# AI Content Creator Marketplace

A lightweight prototype for an AI-native creator marketplace that helps brands discover AI creators, review AI-specific portfolios, and publish structured creative briefs.

## What this prototype includes

- Creator discovery with search and filters
- Portfolio preview cards and portfolio modal
- Brief builder with AI-assisted suggestions
- Demo section showing how the marketplace works
- Sample data model for creator profiles and briefs

## Run locally

Because this is a static frontend prototype, you can open `index.html` directly in a browser. For a simple local server:

```bash
cd AI-Content-Creator-Marketplace
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Data model notes

### Creator profile model

```json
{
  "id": 1,
  "name": "Lena Torres",
  "title": "AI Film Director",
  "location": "New York, USA",
  "rating": 4.9,
  "tools": ["Runway", "Midjourney", "Pika"],
  "skills": ["Cinematic video", "Storyboarding", "Brand storytelling"],
  "specializations": ["Commercials", "Product Launch", "Brand Storytelling"],
  "contentTypes": ["Video", "Animation"],
  "format": ["16:9", "9:16"],
  "commercialUse": ["Commercial rights", "Global paid social"],
  "verification": ["Verified tools", "Workflow review", "Portfolio validation"],
  "workflow": "Prompt design + shot planning + final polish in post-production",
  "portfolio": [
    { "title": "Aster Lab launch film", "type": "Cinematic trailer", "image": "..." }
  ]
}
```

### Brief model

```json
{
  "id": "brief_101",
  "campaignName": "Nova Launch Campaign",
  "objective": "Create a cinematic launch sequence for a premium wearable device.",
  "contentType": "Video",
  "style": "Luxury cinematic",
  "format": "Horizontal",
  "aspectRatio": "16:9",
  "commercialUse": "Global paid social + paid media",
  "requirements": [
    "High-end product cinematography",
    "Motion overlays for key features",
    "Three versions: hero, cutdown, social teaser"
  ]
}
```

## Prototype approach

The experience is designed to mirror the challenge requirements:

- Discovery: brands can search filters by specialty, tools, and content format.
- Evaluation: verified indicators and portfolio previews help assess creator quality.
- Briefing: a structured builder turns rough ideas into clear campaign requirements.
- Presentation: the demo flow communicates the marketplace value clearly and quickly.

## Suggested next steps

- Add real authentication and creator dashboards
- Store profiles and briefs in a backend database
- Add search persistence and API-based filtering
- Connect portfolio galleries to actual media files
- Add chat or messaging between brands and creators

