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
    REPLICASET:{
        mongodb:'dba-root:mongoadmin@localhost:27017,localhost:27018,localhost:27019/?replicaSet=mongodb-replicaset'
    }
};