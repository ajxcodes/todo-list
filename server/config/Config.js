module.exports = {
    DB: {
        URL: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://todolistuser:@ds034348.mlab.com:34348/alvinjorrel-todo-list',
        USER: 'todolistuser',
        PASSWORD: '1a^5Uh8FTt#NMF4D',
    },
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
  };