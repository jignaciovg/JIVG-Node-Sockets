export default {
    API: {
        PORT: 3003
    },
    ANGULAR:{
        URL: 'http://localhost:4200'
    },
    MONGODB: {
        HOST: '192.168.1.181',
        PORT: '27017',
        USER_NAME: 'dba-root',
        USER_PASSWORD: 'mongoadmin',
        DATABASE: 'dbsockets'
    },
    TOKEN: {
        EXPIRES: 60 * 60 * 4 // 4 Horas
    },
    REPLICASET:{
        mongodb:'dba-root:mongoadmin@192.168.1.181:27017,192.168.1.181:27018,192.168.1.181:27019/?replicaSet=mongodb-replicaset',
        DATABASE: 'dbsockets'
    }
};