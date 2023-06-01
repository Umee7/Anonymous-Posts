import os
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import UUID, String, Text, Column, JSON


app = Flask(__name__, static_folder='dist', static_url_path='/', template_folder='dist')
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URI')

db = SQLAlchemy(app)
class Post(db.Model):
    __tablename__ = "posts"
    id = Column(UUID(as_uuid=True), primary_key=True)
    title = Column(String(101))
    username = Column(String(33))
    content = Column(Text())
    files = Column(JSON())
    country = Column(String(64))
    category = Column(String(32))
    reference_id = Column(String(72))

    def __repr__(self):
        return "<Post>"


@app.errorhandler(404)
def path_not_found(path):
    return render_template(
        "index.html",
        title="Not found"
    ), 404


@app.route("/")
def index():
    return render_template(
        "index.html",
    )


@app.route("/new")
def new_post():
    return render_template(
        "index.html",
        title="New post",
    )


@app.route("/faqs")
def faqs():
    return render_template(
        "index.html",
        title="FAQs",
    )


@app.route("/p/<reference_id>")
def specific_post(reference_id):
    post = Post.query.filter(Post.reference_id == reference_id).first()
    images = []
    videos = []
    if post is not None:
        title = post.title.strip()
        description = (post.content or "")[:140].strip()
        if len(post.content) > 140:
            description += "..."
        status = 200
        for file in post.files:
            if file['type'].startswith('image'):
                images.append(file)
            else:
                videos.append(file)
    else:
        title = "Post not found!"
        description = None
        status = 404

    return render_template(
        "index.html",
        title=title,
        description=description,
        images=images,
        videos=videos
    ), status
