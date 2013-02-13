/*/
 * Наблюдатель за клиентом и базой
 */
var Observer= module.exports= function (callback) {
    this.callback= callback
}
Observer.prototype.constructor= Observer

/*/
 * Обрабатывает обновление наблюдаемого
 *
 * @param {Observer} observable
 */
Observer.prototype.update= function (observable) {
    if (this.callback instanceof Function) {
        this.callback(null, observable)
    }
    return this
}