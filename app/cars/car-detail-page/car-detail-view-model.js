"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
/* ***********************************************************
* This is the item details view model.
*************************************************************/
var CarDetailViewModel = /** @class */ (function (_super) {
    __extends(CarDetailViewModel, _super);
    function CarDetailViewModel(_car) {
        var _this = _super.call(this) || this;
        _this._car = _car;
        return _this;
    }
    Object.defineProperty(CarDetailViewModel.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    return CarDetailViewModel;
}(observable_1.Observable));
exports.CarDetailViewModel = CarDetailViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbC12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyLWRldGFpbC12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBSTdDOzs4REFFOEQ7QUFDOUQ7SUFBd0Msc0NBQVU7SUFDOUMsNEJBQW9CLElBQVM7UUFBN0IsWUFDSSxpQkFBTyxTQUNWO1FBRm1CLFVBQUksR0FBSixJQUFJLENBQUs7O0lBRTdCLENBQUM7SUFFRCxzQkFBSSxtQ0FBRzthQUFQO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFDTCx5QkFBQztBQUFELENBQUMsQUFSRCxDQUF3Qyx1QkFBVSxHQVFqRDtBQVJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7IENhciB9IGZyb20gXCIuLi9zaGFyZWQvY2FyLW1vZGVsXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIFRoaXMgaXMgdGhlIGl0ZW0gZGV0YWlscyB2aWV3IG1vZGVsLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCBjbGFzcyBDYXJEZXRhaWxWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jYXI6IENhcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBjYXIoKTogQ2FyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcjtcbiAgICB9XG59XG4iXX0=