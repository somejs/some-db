var assert= require('chai').assert

module.exports= function (Db) { return function () {

    describe('Db constructor', function () {
        it('should be instance of function', function () {
            assert.isFunction(
                Db
            )
        })
    })

}}