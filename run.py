import os
import json
from flask import Flask, render_template, request, flash

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")
    
@app.route('/home')
def home():
    return render_template("home.html")

@app.route('/awards')
def awards():
    return render_template("awards.html")
    
@app.route('/committee')
def committee():
    return render_template("committee.html")
    
@app.route('/fixtures')
def fixtures():
    return render_template("fixtures.html")
    
@app.route('/hockeyuk')
def hockeyuk():
    return render_template("hockeyuk.html")
    
@app.route('/social')
def social():
    return render_template("social.html")
    
@app.route('/sponsors')
def sponsors():
    return render_template("sponsors.html")
    
@app.route('/where')
def where():
    return render_template("where.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/enquiry', methods=["GET", "POST"])
def enquiry():
    if request.method == "POST":
        flash("Thanks {}, we have received your message".format(
            request.form["name"]
        ))
    return render_template("enquiry.html", page_title="Enquiry")
    
@app.route('/teams/chiefs')
def chiefs():
    return render_template("chiefs.html")

@app.route('/teams/eagles')
def eagles():
    return render_template("eagles.html")
    
@app.route('/teams/falcons')
def falcons():
    return render_template("falcons.html")
    
@app.route('/teams/flames')
def flames():
    return render_template("flames.html")
    
@app.route('/teams/kestrels')
def kestrels():
    return render_template("kestrels.html")
    
@app.route('/teams/kubz')
def kubz():
    return render_template("kubz.html")
    
@app.route('/teams/redskins')
def redskins():
    return render_template("redskins.html")

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)