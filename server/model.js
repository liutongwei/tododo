const Seq = require('sequelize');

const seq = new Seq('tododo', null, null, {
    dialect: 'sqlite',
    storage: 'tododo.db'
});

const Task = seq.define('task', {
    title: Seq.STRING,
    importance: Seq.INTEGER,
    done: Seq.BOOLEAN,
    canceled: Seq.BOOLEAN,
    content: Seq.TEXT,
    deadLine: Seq.DATE
});

const User = seq.define('user', {
    email: Seq.STRING,
    password: Seq.STRING,
    isAdmin: Seq.BOOLEAN
});

Task.belongsTo(User);
User.hasMany(Task);

exports.Task = Task;
exports.User = User;
exports.dbContext = seq;