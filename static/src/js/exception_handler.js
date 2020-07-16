/* Copyright 2020 Pafnow */
odoo.define('web_db_exception_handler.exception_handler', function (require) {
    'use strict';

    var core = require('web.core');
    var _t = core._t;
    var WarningDialog = require('web.CrashManager').WarningDialog;

    var DBExceptionHandler = core.Class.extend({
        init: function(parent, error) {
            this.error = error;
        },
        display: function() {
            this.error.message = this.error.data.message;
            var dialog = new WarningDialog(this,{
                title: _t("Odoo Error Database Exception"),
            },this.error).open();
        }
    });

    core.crash_registry.add('psycopg2.errors.RaiseException', DBExceptionHandler);

    return DBExceptionHandler;
});
