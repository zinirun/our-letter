docker rm -f ol-mysql
docker rmi -f heojj97/ol-db:0.1
docker build --tag heojj97/ol-db:0.1 .
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=sw32164959@ --name ol-mysql heojj97/ol-db:0.1 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci