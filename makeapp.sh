docker rm -f ol-app
docker rmi -f heojj97/ourletter:0.1
docker build --tag heojj97/ourletter:0.1 .
docker run -t -d --name ol-app -p 80:3000 --link ol-mysql:db -e DATABASE_HOST=db heojj97/ourletter:0.1