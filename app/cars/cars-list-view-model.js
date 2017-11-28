"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var observable_property_decorator_1 = require("../shared/observable-property-decorator");
var car_service_1 = require("./shared/car-service");
/* ***********************************************************
* This is the master list view model.
*************************************************************/
var CarsListViewModel = /** @class */ (function (_super) {
    __extends(CarsListViewModel, _super);
    function CarsListViewModel() {
        var _this = _super.call(this) || this;
        _this.cars = new observable_array_1.ObservableArray([]);
        _this.isLoading = false;
        _this._carService = car_service_1.CarService.getInstance();
        return _this;
    }
    CarsListViewModel.prototype.load = function () {
        var _this = this;
        this.isLoading = true;
        this._carService.load()
            .finally(function () { return _this.isLoading = false; })
            .subscribe(function (cars) {
            _this.cars = new observable_array_1.ObservableArray(cars);
            _this.isLoading = false;
        });
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", observable_array_1.ObservableArray)
    ], CarsListViewModel.prototype, "cars", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Boolean)
    ], CarsListViewModel.prototype, "isLoading", void 0);
    return CarsListViewModel;
}(observable_1.Observable));
exports.CarsListViewModel = CarsListViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1saXN0LXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLWxpc3Qtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QywwREFBd0Q7QUFHeEQseUZBQTZFO0FBRTdFLG9EQUFrRDtBQUVsRDs7OERBRThEO0FBQzlEO0lBQXVDLHFDQUFVO0lBTTdDO1FBQUEsWUFDSSxpQkFBTyxTQU1WO1FBSkcsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtDQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDekMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdkIsS0FBSSxDQUFDLFdBQVcsR0FBRyx3QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDOztJQUNoRCxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7YUFDbEIsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssRUFBdEIsQ0FBc0IsQ0FBQzthQUNyQyxTQUFTLENBQUMsVUFBQyxJQUFnQjtZQUN4QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksa0NBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUF2QnFCO1FBQXJCLGtEQUFrQixFQUFFO2tDQUFPLGtDQUFlO21EQUFNO0lBQzNCO1FBQXJCLGtEQUFrQixFQUFFOzt3REFBb0I7SUF1QjdDLHdCQUFDO0NBQUEsQUF6QkQsQ0FBdUMsdUJBQVUsR0F5QmhEO0FBekJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9zaGFyZWQvY29uZmlnXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vc2hhcmVkL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9zaGFyZWQvY2FyLW1vZGVsXCI7XG5pbXBvcnQgeyBDYXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2Nhci1zZXJ2aWNlXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIFRoaXMgaXMgdGhlIG1hc3RlciBsaXN0IHZpZXcgbW9kZWwuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGNsYXNzIENhcnNMaXN0Vmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGNhcnM6IE9ic2VydmFibGVBcnJheTxDYXI+O1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9jYXJTZXJ2aWNlOiBDYXJTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5jYXJzID0gbmV3IE9ic2VydmFibGVBcnJheTxDYXI+KFtdKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9jYXJTZXJ2aWNlID0gQ2FyU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIGxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9jYXJTZXJ2aWNlLmxvYWQoKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGNhcnM6IEFycmF5PENhcj4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGNhcnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=