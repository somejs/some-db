var Model= require('some-model')
,   Client=     require('./Client')
,   Query=      require('./Query')



/*/
 * Интерфейс базы данных
 *
 * @constructor
 * @param {Object} properties - описания или значения свойств
 * @return {Function|Object} - конструктор или экземпляр модели
 */
var Db= module.exports= Client({

    /*/
     * Клиенты к базе
     */
    clients: Model.Property({ enumerable: false,
        type: Array,
    }),

    /*/
     * Наблюдатель за клиентами
     */
    observer: Model.Property({ enumerable: false,
        type: Client.Observer
    }),

})

Db.prototype.init= function(options) {
    Client.prototype.init.call(this, options)
    this.observer.callback= function () {
        console.log('база обрабатывает сообщение клиента', arguments)
    }
}

/*/
 * Регистрирует клиента для использования
 *
 * @param {Db.Client} client
 */
Db.prototype.use= function (client) {
    if (!(this instanceof Db.Client)) {
        throw Error('client must be an instance of Db.Client')
    }
    client.attach(
        this.observer
    )
    this.clients.push(
        client
    )
    return this
}



/*/
 *
 *
 * Подключение к базе данных (реализует интерфейс Db.Client)
 */

/*/
 * Интерфейс клиента
 *
 * @exports Client as Db.Client
 */
Db.Client= Client

/*/
 * Интерфейс наблюдателя
 *
 * @exports Db.Client.Observer as Db.Observer
 */
Db.Observer= Client.Observer

/*/
 * Инстанцирует базу данных и подключается к ней
 *
 * @param {Object} options — параметры конструктора базы
 * @param {Function(err,db)} callback
 */
Db.connect= function (options, callback) {
    return new Db(options).connect(callback)
}

/*/
 * Подключается к базе данных
 *
 * @param {Object} options — параметры конструктора клиента
 * @param {Function(err,db)} callback
 */
Db.prototype.connect= function (options, callback) {
    if (2 === arguments.length) {
        if (options= arguments[0]) {
            this.options= options
        }
        callback= arguments[1]
    } else {
        if (1 === arguments.length) {
            callback= arguments[0]
        } else {
            throw Error('bad arguments')
        }
    }
    var err= null
    var client= new this.constructor.Client(options)
    var db= this
    client.connect(function (err, client) {
        if (!err) {
            db.use(client)
            if (true == client.ready) {
                db.ready == true
            }
        }
        callback(err, db)
    })
    return this
}


/*/
 *
 *
 * Запросы к базе данных (реализует интерфейс Db.Client)
 */

/*/
 * Интерфейс запроса
 *
 * @exports Query as Db.Query
 */
Db.Query= Query

/*/
 * Выполняет запрос к базе данных
 *
 * @param {Object} query — объект запроса
 * @param {Function(err,result)} callback
 *
Db.prototype.query= function (query, callback) {
   Наследует у Db.Client
}
 */

/*/
 * Отправляет запрос к базе данных
 *
 * @param {Object} query — объект запроса
 * @param {Function(err,result)} callback
 */
Db.prototype.send= function (query, callback) {
    this.clients.map(function (client) {
        if (true == client.ready) {
            return client.send(query, callback)
        }
    })
    return this
}



/*/
 *
 *
 * Загрузка и сохранение моделей (реализует интерфейс Db.Client (Model.Mapper))
 */

/*/
 * Загружает все данные в модели
 *
 * @param {Function} Model — Конструктор модели
 * @param {String} prefix — префикс для ключей к моделируемым данным
 * @param {Function(err,models)} callback
 */
Db.prototype.all= function(Model, prefix, keys, callback) {
    this.clients.map(function (client) {
        if (client.ready) {
            client.all(Model, prefix, keys, callback)
        }
    })
    return this
}

/*/
 * Ищет и загружает данные в модели
 *
 * @param {Function} Model — Конструктор модели
 * @param {String} prefix — префикс для ключей к моделируемым данным
 * @param {String|Array} keys — один или несколько ключей 
 * @param {Function(err,models)} callback
 */
Db.prototype.find= function(Model, prefix, keys, callback) {
    this.clients.map(function (client) {
        if (client.ready) {
            client.find(Model, prefix, keys, callback)
        }
    })
    return this
}

/*/
 * Загружает данные в модель
 *
 * @param {Object} unloaded — карта незагруженных свойств
 * @param {Model} model — загружаемая модель
 * @param {Function(err,model)} callback
 */
Db.prototype.load= function(unloaded, model, callback) {
    this.clients.map(function (client) {
        if (client.ready) {
            client.load(unloaded, model, callback)
        }
    })
    return this
}

/*/
 * Сохраняет данные модели
 *
 * @param {Object} unsaved — карта несохраненных свойств
 * @param {Model} model — сохраняемая модель
 * @param {Function(err,model)} callback
 */
Db.prototype.save= function(unsaved, model, callback) {
    this.clients.map(function (client) {
        if (client.ready) {
            client.save(unsaved, model, callback)
        }
    })
    return this
}