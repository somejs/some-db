var Db= require('../lib/Db')

var db= new Db()
console.log(
    db instanceof Db, db instanceof Db.Client,
    db.clients instanceof Array,
    db.ready == false
)
console.log(
    db.connect instanceof Function,
    db.connect.length === 2
)
console.log(
    db.query instanceof Function,
    db.query.length === 2
)
console.log(
    db.send instanceof Function,
    db.send.length === 2
)

var client= new Db.Client
console.log(
    client instanceof Db.Client,
    client.ready == false
)

var options= {}
var db= Db.connect(options, function (err, db) {
    console.log(
        !!err,
        db instanceof Db.Client
    )
})
console.log(
    db instanceof Db
)

// Клиент базы данных
console.log( // является конструктором
    Db.Client instanceof Function
)
console.log( // конструктором определенной схемы
    Db.Client.properties.type instanceof Db.Client.Property,
    Db.Client.properties.observers instanceof Db.Client.Property,
    Db.Client.properties.options instanceof Db.Client.Property,
    Db.Client.properties.ready instanceof Db.Client.Property
)
var client= new Db.Client
console.log(
    client.options instanceof Object,
    client.ready === false,
    client.observers instanceof Array, client.observers.length === 0
)