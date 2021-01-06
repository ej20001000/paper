from flask import Flask, render_template, url_for
from forms import RegistrationForm, LoginForm
app = Flask(__name__)

app.config['SECRET_KEY'] = '0ace39f6f752fc4b0f8f05106b322ae0'

rt = render_template
posts = [
    {
        'author' : 'Corey Schafer',
        'title' : 'Blog Post 1',
        'content' : 'First post content',
        'date_posted' : 'April 20, 2018'
    },
    {
        'author' : 'Jane Doe',
        'title' : 'Blog Post 2',
        'content' : 'Second post content',
        'date_posted' : 'April 21, 2018'
    }
]

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', posts=posts)

@app.route('/about')
def about():
    return rt('about.html', title='about')

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    return rt('register.html', title='Register', form=form)

@app.route('/login')
def login():
    form = LoginForm()
    return rt('login.html', title='Login', form=form)


if __name__ == '__main__':
    app.run(debug = True)
    