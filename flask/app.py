import time
from flask import Flask

app:Flask = Flask(__name__)

if __name__ == "main":
    app.run()
    
@app.route("/GET_SLEEP",methods=['GET'])
def get_sleep_route():
    time.sleep(1/50)
    return "RESP",200