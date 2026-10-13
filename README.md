# Creatorly — AI Content Creator Marketplace

A Flask + SQLite hackathon prototype for discovering AI-native creators, reviewing their portfolios and workflows, and publishing structured creative briefs.

## Features

- Search creators by keywords, skills, tools, specialty and aspect ratio.
- Creator profiles with portfolio concepts, AI tools/models, skills, workflow notes, formats, indicative rates and visible verification signals.
- Structured brand brief form with commercial-use requirements, budget and delivery date.
- AI-assisted brief builder endpoint and UI. The included helper is a deterministic template-based prototype; it does not call an external AI model.
- SQLite persistence for published briefs.
- Responsive layout for desktop and mobile.
- `/health` endpoint for deployment health checks.

## Run locally in VS Code

1. Install Python 3.10 or newer.
2. Extract this ZIP and open the `ai_creator_marketplace` folder in VS Code.
3. Open Terminal → New Terminal.
4. Create a virtual environment:

   **Windows**
   ```powershell
   py -m venv .venv
   .venv\Scripts\Activate.ps1
   ```

   If PowerShell blocks activation, run:
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   .venv\Scripts\Activate.ps1
   ```

   **macOS / Linux**
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

5. Install packages:
   ```bash
   pip install -r requirements.txt
   ```
6. Start the app:
   ```bash
   python app.py
   ```
7. Open `http://127.0.0.1:5000`.

The app creates `marketplace.db` automatically. Use `/health` to check that the server is responding.

## Deploy on Render

1. Push the extracted project to a GitHub repository.
2. In Render, choose **New → Web Service** and connect the repository.
3. Use:
   - **Build command:** `pip install -r requirements.txt`
   - **Start command:** `gunicorn app:app`
4. Add environment variable `SECRET_KEY` with a long random value.
5. Deploy and open the Render-provided URL.

### SQLite note for deployment

Some hosting services use ephemeral filesystems, which can reset SQLite data during redeploys/restarts. For a demo this is fine. For persistent production data, attach a persistent disk and set `DATABASE_PATH` to a file path on that disk, or replace SQLite with managed PostgreSQL.

## Data model note

**Creator profile** (currently seeded in `app.py`):
- `name`, `handle`, `role`, `location`, `bio`
- `skills[]`, `tools[]`, `specialty`, `formats[]`
- `workflow`, `commercial`, `rate`, `projects`, `rating`
- `verified[]` (prototype trust labels)

**Brief** (SQLite `briefs` table):
- `brand`, `title`, `description`
- `content_type`, `style`, `format`, `usage`
- `budget`, `deadline`, `created_at`

For a real marketplace, creator data should move to database tables and verification should be evidence-backed rather than self-reported.

## Important prototype limitations

- Creator profiles and artwork are sample/demo data. Replace them with creator-approved portfolio work and accurate claims before public launch.
- Verification badges are illustrative UI signals only; the app does not independently verify tools, identity, past work or licensing.
- No authentication, payment processing, messaging, file upload, moderation or real AI API is wired in.
- The brief builder is template-based. It can later be connected to an LLM using a server-side API key stored in environment variables. Never commit API keys to GitHub.
