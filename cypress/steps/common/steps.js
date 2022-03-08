"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Steps = void 0;
var Steps = /** @class */ (function () {
    function Steps(previousSteps) {
        if (previousSteps != null) {
            this._commandState = previousSteps._commandState;
        }
    }
    return Steps;
}());
exports.Steps = Steps;
