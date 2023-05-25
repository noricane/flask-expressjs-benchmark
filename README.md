# flask-expressjs-benchmark
Feel free to clone this repo and benchmarking the behavior.
I decided on spawning 64 workers, to change 
this value change the number after the -w flag in 
the command. 
Make sure you have gunicorn installed, this guide was
followed to setup gunicorn:
https://flask.palletsprojects.com/en/2.3.x/deploying/gunicorn/

To run the servers from project directory:
( cd express ; npm run dev ) 
( cd flask ; gunicorn -w 64 'app:app' )

## Benchmarking 
The program used for benchmarking was JMeter.
### Results from running Thread Group - 2
|Label                    |# Samples|Average|Median|90% Line|95% Line|99% Line|Min|Max  |Error %|Throughput|Received KB/sec|Sent KB/sec|
|-------------------------|---------|-------|------|--------|--------|--------|---|-----|-------|----------|---------------|-----------|
|GET_SLEEP 8080           |10000    |146    |27    |118     |261     |472     |19 |31407|0.160% |169.50014 |38.35          |20.66      |
|GET 8080                 |10000    |13     |3     |35      |55      |246     |0  |355  |0.000% |169.71878 |37.79          |19.72      |
|GET_SLEEP 8000 - gunicorn|10000    |924    |83    |513     |1926    |25907   |0  |26005|16.670%|169.65543 |89.32          |17.26      |
|GET 8000 - gunicorn      |10000    |888    |47    |483     |1911    |25903   |0  |26023|15.260%|169.83984 |85.04          |16.73      |
|TOTAL                    |40000    |493    |30    |282     |517     |19527   |0  |31407|8.023% |677.38057 |249.98         |74.22      |
