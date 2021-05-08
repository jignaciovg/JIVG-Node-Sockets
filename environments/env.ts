export default {
    API: {
        PORT: 3003
    },
    MONGODB: {
        HOST: 'localhost',
        PORT: '27017',
        USER_NAME: '',
        USER_PASSWORD: '',
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