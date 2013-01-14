var Model= require('some-model')

,   Query= require('../Query')

/*/
 * Клиент базы данных
 *
 * @param {Object} options — параметры конструктора
 */
var Client= module.exports= Model.Mapper({

    /*/
     * Настройки
     */
    options: Model.Property({
        type: Object
    }),

    /*/
     * Индикатор готовности
     */
    ready: Boolean
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
 *
 *
 * Подключение к базе данных
 */

/*/
 * Конструирует клиента и подключается к базе данных
 *
 * @param {Object} options — параметры конструктора клиента
 * @param {Function(err,client)} callback
 */
Client.connect= function (options, callback) {
    return new Client(options).connect(callback)
}

/*/
 * Подключается к базе данных
 *
 * @param {Object} options — параметры конструктора клиента
 * @param {Function(err,client)} callback
 */
Client.prototype.connect= function (callback) {
    callback('not implemented', this)
    return this
}



/*/
 *
 *
 * Запросы к базе данных
 */

/*/
 * Выполняет запрос к базе данных
 *
 * @param {Object} query — объект запроса
 * @param {Function(err,result)} callback
 */
Client.prototype.query= function (query, callback) {
    this.send(query, callback)
    return this
}

/*/
 * Отправляет запрос к базе данных
 *
 * @param {Object} query — объект запроса
 * @param {Function(err,result)} callback
 */
Client.prototype.send= function (query, callback) {
    callback('not implemented', this)
    return this
}



/*/
 *
 *
 * Загрузка и сохранение моделей (интерфейс Model.Mapper)
 */

/*/
 * Ищет и загружает данные в модели
 *
 * @param {Function} Model — Конструктор модели
 * @param {String} prefix — префикс для ключей к моделируемым данным
 * @param {Function(err,models)} callback
 */
Client.prototype.all= function(Model, prefix, keys, callback) {
    var res= {}
    callback('not implemented', res)
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
Client.prototype.find= function(Model, prefix, keys, callback) {
    var res= {}
    callback('not implemented', res)
    return this
}

/*/
 * Загружает данные в модель
 *
 * @param {Object} unloaded — карта незагруженных свойств
 * @param {Model} model — загружаемая модель
 * @param {Function(err,model)} callback
 */
Client.prototype.load= function(unloaded, model, callback) {
    callback('not implemented', model)
    return this
}

/*/
 * Сохраняет данные модели
 *
 * @param {Object} unsaved — карта несохраненных свойств
 * @param {Model} model — сохраняемая модель
 * @param {Function(err,model)} callback
 */
Client.prototype.save= function(unsaved, model, callback) {
    callback('not implemented', model)
    return this
}