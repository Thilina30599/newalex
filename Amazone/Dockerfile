FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Thilina30599/Newbot /root/ales
WORKDIR /root/ales/
RUN git clone https://github.com/tenuh/Config
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
