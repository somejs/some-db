var Model= require('some-model')

,   Client= require('./Client')

/*/
 * База данных
 *
 * @constructor
 * @param {Object} properties - описания или значения свойств
 * @return {Function|Object} - конструктор или экземпляр модели
 */
var Db= module.exports= Client({

    /*/
     * Клиенты к базе данных
     */
    clients: Model.Property({ type:Array, 
        enumerable:false,
    }),

})

/*/
 * Инициализирует экземпляр клиента
 *
 * @param {Object} options — параметры конструктора
 */
Client.prototype.init= function (options) {
    this.options= options
    return this
}

/*/
 * Интерфейс клиента
 *
 * @exports Client as Db.Client
 */
Db.Client= Client

/*/
 * Инстанцирует экземпляр клиента к базе данных
 *
 * @param {Object} options — параметры конструктора
 * @return {Db.Client}
 */
Db.createClient= function (options) {
    return new Db.Client(options)
}

/*/
 * Регистрирует клиента для использования
 *
 * @param {Db.Client} client
 */
Db.prototype.use= function (client) {
    this.clients.push(
        client
    )
    return this
}

/*/
 *
 *
 * Подключение к базе данных. Интерфейс Db.Client
 */

/*/
 * Подключается к базе данных
 *
 * @param {Object} db — база данных
 * @param {String} prefix — префикс для ключей
 * @return {Db}
 */
Db.connect= function (options, callback) {
    return (new Db).connect(options, callback)
}
Db.prototype.connect= function (options, callback) {
    this.options= options
    var err= null
    callback(err, this)
    return this
}

/*/
 *
 *
 * Загрузка и сохранение моделей. Интерфейс Db.Client (Model.Mapper)
 */

/*/
 * Ищет и загружает данные в модели
 *
 * @param {Function} Model — Конструктор модели
 * @param {String} prefix — префикс для ключей к моделируемым данным
 * @param {String|Array} keys — один или несколько ключей 
 * @param {Function} callback
 */
Db.prototype.find= function(Model, prefix, keys, callback) {
    return this
}

/*/
 * Загружает данные в модель
 *
 * @param {Model} model — загружаемая модель
 * @param {Function} callback
 */
Db.prototype.load= function(model, callback) {
    return this
}

/*/
 * Сохраняет данные модели
 *
 * @param {Model} model — сохраняемая модель
 * @param {Function} callback
 */
Db.prototype.save= function(model, callback) {
    return this
}