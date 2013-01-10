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
        type:Object
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
 * @param {Function(err, db)} callback
 */
Client.connect= function (options, callback) {
    return new Client(options).connect(callback)
}

/*/
 * Подключается к базе данных
 *
 * @param {Object} options — параметры конструктора клиента
 * @param {Function(err, db)} callback
 */
Client.prototype.connect= function (callback) {
    var err= null
    callback(err, this)
    return this
}

/*/
 * Отправляет запрос к базе данных
 *
 * @param {Object} query — объект запроса
 * @param {Function(err, db)} callback
 */
Client.prototype.send= function (query, callback) {
    var err= null
    callback(err, this)
    return this
}

/*/
 *
 *
 * Загрузка и сохранение моделей. Интерфейс Model.Mapper
 */

/*/
 * Ищет и загружает данные в модели
 *
 * @param {Function} Model — Конструктор модели
 * @param {String} prefix — префикс для ключей к моделируемым данным
 * @param {String|Array} keys — один или несколько ключей 
 * @param {Function} callback
 */
Client.prototype.find= function(Model, prefix, keys, callback) {
    return this
}

/*/
 * Загружает данные в модель
 *
 * @param {Model} model — загружаемая модель
 * @param {Function} callback
 */
Client.prototype.load= function(model, callback) {
    return this
}

/*/
 * Сохраняет данные модели
 *
 * @param {Model} model — сохраняемая модель
 * @param {Function} callback
 */
Client.prototype.save= function(model, callback) {
    return this
}