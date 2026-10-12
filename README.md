# CreatorConnect AI

AI-powered marketplace connecting content creators with brands. Flask + SQLite backend, plain HTML/CSS/JS frontend.

## Run it

```bash
cd creatorconnect
python -m venv venv && source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env        # optional: add ANTHROPIC_API_KEY
python app.py
```

Open http://127.0.0.1:5000. The SQLite database (`creatorconnect.db`) and demo data are created automatically on first start.

## Demo accounts (password `Demo@1234`)

| Role | Email |
|---|---|
| Creator | demo.creator@creatorconnect.ai |
| Brand | demo.brand@creatorconnect.ai |

Nine more demo creators (`priya@`, `rohan@`, `meera@`, `kabir@`, `sara@`, `dev@`, `ananya@`, `nisha@`, `aditya@` + `demo.creatorconnect.ai`) are seeded too, with richer bios and content samples. The login page has one-click demo buttons.

## AI and demo mode

AI calls happen only in `app.py`, using `ANTHROPIC_API_KEY` from the environment. The browser never sees the key. With no key (or if the API fails), the portfolio builder, content generator and AI chatboard return template output with a clearly labelled **DEMO MODE** banner.

## Smart matching (transparent scoring)

Weights: niche 35, platform 20, skills 20, budget 15, audience 10. Blank requirements are excluded and the total is rescaled to 100. Each result lists points and a reason per criterion, and the UI labels scores as estimates, not guarantees.

## Structure

- `app.py` - routes, schema, seeding, AI proxy, scoring
- `static/index.html`, `static/css/style.css`, `static/js/app.js` - single-page UI (hash routing)

## Security notes

Passwords hashed (Werkzeug), parameterized SQL everywhere, HttpOnly SameSite cookies, JSON-only writes, HTML-escaped rendering, role checks on private routes, simple per-IP rate limit on AI routes. Set a strong `SECRET_KEY` and `COOKIE_SECURE=1` when deploying.
