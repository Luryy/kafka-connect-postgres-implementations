<h1 align="center">Kafka-connect Postgres implementation :loudspeaker: </h1>

![Kafka Postgres](https://cdn-images-1.medium.com/max/800/0*g7nkAq1IzW8Xzyvo.png)



_This project have the implementation of a_ [Kafka-Connect](https://docs.confluent.io/platform/current/connect/index.html) _with_ [Postgres](https://www.postgresql.org/) 
_This application will **listen all changes** that happens at our database_

I made a **tutorial** were you can see step by step how to inicialize this application. You can check at this [LINK](xxxx)

## Usage

This application will only log the changes that happens at our postgres database

## Project Config :nut_and_bolt:

_Here you could see the inicial set up of this project, but if want see the project working, I recommend to follow the_ [Tutorial](xxx) _referenced above_

* [Node](https://nodejs.org/en/) v-_^12.18_
* [Yarn](https://yarnpkg.com/) v-_^1.22_
* [Docker-compose](https://docs.docker.com/compose/) v-_^1.27_

### Steps

- Clone the project:
```
git clone https://github.com/Luryy/kafka-connect-postgres-implementations.git
cd kafka-connect-postgres-implementations
```

- Create a **.env**
```
Create a .env using the .env.example as model
Alter only the HOST variable with your machine ID
```

- Start the containers
```
docker-compose -f docker-compose.yml up -d 
```

- Start the application
```
yarn install
yarn start
```

- Now you could see the next steps at the [Tutorial](xxx)



## Autor

👤 **Lucas Yuri**

- Github: [Luryy](https://github.com/luryy)
- LinkedIn: [Lucas Yuri](https://linkedin.com/in/lucas-yuri)


## 📝 License

Copyright © 2021 [Lucas Yuri](https://github.com/luryy).
This project is [MIT](LICENSE) licensed.



