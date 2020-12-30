FROM mysql:5.7
## The maintainer name and email
LABEL zinirun <github.com/zinirun>
# database = test and password for root = password
ENV MYSQL_DATABASE=ourletter_db \
    MYSQL_ROOT_PASSWORD=
COPY ./makedb.sql /docker-entrypoint-initdb.d/