"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var chalk_1 = __importDefault(require("chalk"));
var Logger = /** @class */ (function () {
    function Logger(options) {
        this.ctx = new chalk_1.default.Instance({ level: options === null || options === void 0 ? void 0 : options.colorLevel });
        var m = moment_1.default();
        var d = this.ctx.cyan(m.format('DD/MM/YYYY'));
        var t = this.ctx.magenta(m.format('hh:mm:ss'));
        this.timestamp = '[' + this.ctx.magenta(d) + ' ' + this.ctx.cyan(t) + ']';
    }
    Logger.prototype.ts = function () {
        console.log(this.timestamp);
    };
    Logger.prototype.error = function (message) {
        var identifier = this.ctx.bgRed('  ERROR  ');
        var msg = this.timestamp + " " + identifier + " " + this.ctx.red(message);
        console.log(msg);
    };
    Logger.prototype.warn = function (message) {
        var identifier = this.ctx.bgYellow.black(' WARNING ');
        var msg = this.timestamp + " " + identifier + " " + this.ctx.yellow(message);
        console.log(msg);
    };
    Logger.prototype.log = function (message) {
        var identifier = this.ctx.inverse('   LOG   ');
        var msg = this.timestamp + " " + identifier + " " + message;
        console.log(msg);
    };
    return Logger;
}());
exports.Logger = Logger;
/*
Error: Red
Warning: Yellow
Debug: Blue
Regular: White

Timestamp: Magenta/Cyan
*/
