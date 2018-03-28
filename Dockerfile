FROM fishead/nginx-pushstate
LABEL maintainer zhangchuan@jcble.com


COPY ./build /usr/share/nginx/html
