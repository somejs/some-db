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
    db.connect instanceof Function,
    db.connect.length === 2
)

var client= new Db.Client
console.log(
    client instanceof Db.Client,
    client.ready == false
)

var options= {}
var db= Db.connect(options, function (err, db) {
    console.log(
        err === null,
        db instanceof Db.Client
    )
})
console.log(
    db instanceof Db
)