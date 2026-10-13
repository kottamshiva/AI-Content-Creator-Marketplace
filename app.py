import os
import sqlite3
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "dev-only-change-this-secret")
DB_PATH = os.environ.get("DATABASE_PATH", os.path.join(os.path.dirname(__file__), "marketplace.db"))

CREATORS = [
    {
        "name": "Mira Studios", "handle": "@miramakes", "role": "AI Filmmaker",
        "location": "Mumbai, India", "rate": "₹18,000–₹35,000 / project",
        "specialty": "Cinematic brand films", "tools": ["Runway", "Midjourney", "DaVinci Resolve"],
        "skills": ["AI filmmaking", "Cinematic lighting", "Storyboarding", "Color grading"],
        "formats": ["16:9", "9:16"], "commercial": "Available",
        "bio": "I turn early-stage ideas into cinematic, story-led films using a documented generative workflow.",
        "workflow": "Moodboard → keyframes → generation passes → edit → color grade",
        "verified": ["Tools", "Workflow", "Portfolio"], "rating": "4.9", "projects": 24,
        "color": "violet", "art": "film"
    },
    {
        "name": "Pixel & Prompt", "handle": "@pixelprompt", "role": "Generative Designer",
        "location": "Hyderabad, India", "rate": "₹8,000–₹20,000 / project",
        "specialty": "Product visuals & campaign art", "tools": ["Midjourney", "Adobe Firefly", "Photoshop"],
        "skills": ["Product visuals", "Art direction", "Image generation", "Retouching"],
        "formats": ["1:1", "4:5", "16:9"], "commercial": "Available",
        "bio": "Bold, production-ready campaign imagery for brands that need a consistent visual world.",
        "workflow": "Reference research → prompt system → image selection → retouching → export",
        "verified": ["Tools", "Portfolio"], "rating": "4.8", "projects": 31,
        "color": "orange", "art": "product"
    },
    {
        "name": "FrameShift Lab", "handle": "@frameshift", "role": "AI Animator",
        "location": "Bengaluru, India", "rate": "₹22,000–₹50,000 / project",
        "specialty": "Motion & character animation", "tools": ["Blender", "Runway", "Kling"],
        "skills": ["AI animation", "Motion design", "Character design", "Compositing"],
        "formats": ["16:9", "9:16", "1:1"], "commercial": "Ask first",
        "bio": "I build expressive short-form motion pieces that mix 3D craft with generative tools.",
        "workflow": "Animatic → style frames → motion tests → compositing → delivery",
        "verified": ["Workflow", "Portfolio"], "rating": "4.9", "projects": 18,
        "color": "blue", "art": "motion"
    },
    {
        "name": "Aarav Visual Co.", "handle": "@aaravvisualco", "role": "AI Content Creator",
        "location": "Pune, India", "rate": "₹6,000–₹15,000 / project",
        "specialty": "Social-first content", "tools": ["Adobe Firefly", "CapCut", "ChatGPT"],
        "skills": ["Social content", "UGC concepts", "Prompt writing", "Short-form video"],
        "formats": ["9:16", "4:5", "1:1"], "commercial": "Available",
        "bio": "Fast, platform-native creative concepts for launches, reels and always-on social campaigns.",
        "workflow": "Audience angle → hook variations → generation → edit → platform exports",
        "verified": ["Tools"], "rating": "4.7", "projects": 15,
        "color": "green", "art": "social"
    },
    {
        "name": "Softlight Atelier", "handle": "@softlightatelier", "role": "AI Art Director",
        "location": "Delhi, India", "rate": "₹15,000–₹32,000 / project",
        "specialty": "Lifestyle & beauty imagery", "tools": ["Midjourney", "Photoshop", "Magnific"],
        "skills": ["Art direction", "Beauty imagery", "Image generation", "Visual consistency"],
        "formats": ["4:5", "1:1", "9:16"], "commercial": "Available",
        "bio": "Soft, tactile visual worlds for beauty, wellness and lifestyle brands.",
        "workflow": "Visual strategy → prompt library → generation → cleanup → usage handoff",
        "verified": ["Tools", "Workflow", "Portfolio"], "rating": "5.0", "projects": 27,
        "color": "pink", "art": "beauty"
    },
    {
        "name": "Northstar Motion", "handle": "@northstarmotion", "role": "AI Filmmaker",
        "location": "Chennai, India", "rate": "₹25,000–₹60,000 / project",
        "specialty": "Product launch films", "tools": ["Kling", "Runway", "After Effects"],
        "skills": ["AI filmmaking", "Product visuals", "Motion design", "Sound design"],
        "formats": ["16:9", "9:16"], "commercial": "Negotiable",
        "bio": "High-impact launch films built around a strong product story and repeatable visual language.",
        "workflow": "Script → shot plan → generated plates → edit and sound → final masters",
        "verified": ["Workflow", "Portfolio"], "rating": "4.8", "projects": 21,
        "color": "teal", "art": "launch"
    }
]

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS briefs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                brand TEXT NOT NULL,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                content_type TEXT NOT NULL,
                style TEXT NOT NULL,
                format TEXT NOT NULL,
                usage TEXT NOT NULL,
                budget TEXT NOT NULL,
                deadline TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)

def brief_from_idea(idea, content_type, style, format_ratio, usage, budget):
    idea = (idea or "").strip()
    if not idea:
        idea = "Create a memorable campaign for our brand."
    return {
        "title": f"{content_type} concept for {idea[:48].rstrip()}",
        "description": (
            f"Objective: {idea}\n\n"
            f"Creative direction: Create a clear, distinctive {style.lower()} visual direction "
            f"that feels right for the target audience. Include 2–3 initial creative routes, "
            f"then refine the selected route after feedback.\n\n"
            f"Deliverables: {content_type}; format/aspect ratio: {format_ratio}; "
            f"commercial use: {usage}; target budget: {budget}.\n\n"
            "Please include the proposed AI tools/models, key workflow stages, revision count, "
            "delivery timeline, source-file availability, and any licensing or third-party asset "
            "limitations in your proposal."
        )
    }

@app.route("/")
def index():
    init_db()
    query = request.args.get("q", "").strip().lower()
    skill = request.args.get("skill", "").strip()
    tool = request.args.get("tool", "").strip()
    content_type = request.args.get("specialty", "").strip()
    format_ratio = request.args.get("format", "").strip()
    creators = CREATORS[:]
    if query:
        creators = [c for c in creators if query in " ".join([
            c["name"], c["role"], c["specialty"], c["bio"], c["location"],
            " ".join(c["skills"]), " ".join(c["tools"])
        ]).lower()]
    if skill:
        creators = [c for c in creators if skill in c["skills"]]
    if tool:
        creators = [c for c in creators if tool in c["tools"]]
    if content_type:
        creators = [c for c in creators if content_type.lower() in c["specialty"].lower() or content_type.lower() in c["role"].lower()]
    if format_ratio:
        creators = [c for c in creators if format_ratio in c["formats"]]
    all_skills = sorted({s for c in CREATORS for s in c["skills"]})
    all_tools = sorted({t for c in CREATORS for t in c["tools"]})
    all_specialties = sorted({c["specialty"] for c in CREATORS})
    all_formats = sorted({f for c in CREATORS for f in c["formats"]})
    with get_db() as conn:
        brief_count = conn.execute("SELECT COUNT(*) FROM briefs").fetchone()[0]
    return render_template("index.html", creators=creators, query=query, skill=skill, tool=tool,
                           specialty=content_type, format_ratio=format_ratio, skills=all_skills,
                           tools=all_tools, specialties=all_specialties, formats=all_formats,
                           brief_count=brief_count)

@app.route("/creator/<handle>")
def creator_detail(handle):
    creator = next((c for c in CREATORS if c["handle"].lstrip("@") == handle.lstrip("@")), None)
    if not creator:
        return render_template("404.html"), 404
    return render_template("creator.html", creator=creator)

@app.route("/briefs", methods=["GET", "POST"])
def briefs():
    init_db()
    if request.method == "POST":
        brand = request.form.get("brand", "").strip()
        title = request.form.get("title", "").strip()
        description = request.form.get("description", "").strip()
        content_type = request.form.get("content_type", "").strip()
        style = request.form.get("style", "").strip()
        format_ratio = request.form.get("format", "").strip()
        usage = request.form.get("usage", "").strip()
        budget = request.form.get("budget", "").strip()
        deadline = request.form.get("deadline", "").strip()
        if not all([brand, title, description, content_type, style, format_ratio, usage, budget]):
            flash("Please complete all required fields before publishing.", "error")
            return redirect(url_for("briefs"))
        with get_db() as conn:
            conn.execute("""INSERT INTO briefs
                (brand,title,description,content_type,style,format,usage,budget,deadline)
                VALUES (?,?,?,?,?,?,?,?,?)""",
                (brand, title, description, content_type, style, format_ratio, usage, budget, deadline))
        flash("Your brief has been published to this demo marketplace.", "success")
        return redirect(url_for("briefs"))
    with get_db() as conn:
        rows = conn.execute("SELECT * FROM briefs ORDER BY id DESC").fetchall()
    return render_template("briefs.html", briefs=rows)

@app.route("/api/brief-builder", methods=["POST"])
def brief_builder():
    data = request.get_json(silent=True) or {}
    result = brief_from_idea(
        data.get("idea"), data.get("content_type", "Campaign video"),
        data.get("style", "Cinematic"), data.get("format", "16:9"),
        data.get("usage", "Paid ads and social media"), data.get("budget", "₹10,000–₹25,000")
    )
    return jsonify(result)

@app.route("/health")
def health():
    return {"status": "ok"}

if __name__ == "__main__":
    init_db()
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=os.environ.get("FLASK_DEBUG") == "1")
