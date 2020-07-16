/* Copyright 2020 Pafnow */
odoo.define('web_db_exception_handler.exception_handler', function (require) {
    'use strict';

    var core = require('web.core');

    var DBExceptionHandler = core.Class.extend({
        init: function(parent, error) {
            this.error = error;
        },
        display: function() {
            alert('Database Exception:\n' + error.data.message);
        }
    });

    core.crash_registry.add('psycopg2.errors.RaiseException', DBExceptionHandler);

    return DBExceptionHandler;
});
