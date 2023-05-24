import time
from flask import Flask

app:Flask = Flask(__name__)


@app.route("/GET_SLEEP",methods=['GET'])
def get_sleep_route():
    try:
        print("HERE1")
        time.sleep(1/50)
        print("HERE2")
        return "RESP",200
    except:
        return "RESP",500


@app.route("/GET",methods=['GET'])
def get_route():
    return "RESP",200

if __name__ == "__main__":
    app.run()
    