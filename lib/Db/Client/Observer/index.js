var Observer= module.exports= function () {
    this.callback= null
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