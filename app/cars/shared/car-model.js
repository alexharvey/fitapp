"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(options) {
        var _this = _super.call(this) || this;
        _this._name = options.name;
        _this._imageUrl = options.imageUrl;
        _this.id = options.id;
        _this.seats = options.seats;
        _this.luggage = Number(options.luggage);
        _this.class = options.class;
        _this.hasAC = options.hasAC;
        _this.doors = Number(options.doors);
        _this.price = Number(options.price);
        _this.transmission = options.transmission;
        _this.imageStoragePath = options.imageStoragePath;
        _this.updateDependentProperties();
        return _this;
    }
    Object.defineProperty(Car.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (this._name === value) {
                return;
            }
            this._name = value;
            this.notifyPropertyChange("name", value);
            this.updateDependentProperties();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "imageUrl", {
        get: function () {
            return this._imageUrl;
        },
        set: function (value) {
            if (this._imageUrl === value) {
                return;
            }
            this._imageUrl = value;
            this.notifyPropertyChange("imageUrl", value);
            this.updateDependentProperties();
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.updateDependentProperties = function () {
        this.isModelValid = !!this._name && !!this._imageUrl;
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], Car.prototype, "id", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], Car.prototype, "imageStoragePath", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], Car.prototype, "seats", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Number)
    ], Car.prototype, "luggage", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], Car.prototype, "class", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Boolean)
    ], Car.prototype, "hasAC", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Number)
    ], Car.prototype, "doors", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Number)
    ], Car.prototype, "price", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], Car.prototype, "transmission", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Boolean)
    ], Car.prototype, "isModelValid", void 0);
    return Car;
}(observable_1.Observable));
exports.Car = Car;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDLDRGQUFnRjtBQUVoRjtJQUF5Qix1QkFBVTtJQWUvQixhQUFZLE9BQVk7UUFBeEIsWUFDSSxpQkFBTyxTQWdCVjtRQWRHLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMxQixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFbEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLEtBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUN6QyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBRWpELEtBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDOztJQUNyQyxDQUFDO0lBRUQsc0JBQUkscUJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFTLEtBQWE7WUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV6QyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNyQyxDQUFDOzs7T0FYQTtJQWFELHNCQUFJLHlCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYSxLQUFhO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFN0MsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDckMsQ0FBQzs7O09BWEE7SUFhTyx1Q0FBeUIsR0FBakM7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3pELENBQUM7SUFqRXFCO1FBQXJCLGtEQUFrQixFQUFFOzttQ0FBWTtJQUNYO1FBQXJCLGtEQUFrQixFQUFFOztpREFBMEI7SUFDekI7UUFBckIsa0RBQWtCLEVBQUU7O3NDQUFlO0lBQ2Q7UUFBckIsa0RBQWtCLEVBQUU7O3dDQUFpQjtJQUNoQjtRQUFyQixrREFBa0IsRUFBRTs7c0NBQWU7SUFDZDtRQUFyQixrREFBa0IsRUFBRTs7c0NBQWdCO0lBQ2Y7UUFBckIsa0RBQWtCLEVBQUU7O3NDQUFlO0lBQ2Q7UUFBckIsa0RBQWtCLEVBQUU7O3NDQUFlO0lBQ2Q7UUFBckIsa0RBQWtCLEVBQUU7OzZDQUFzQjtJQUNyQjtRQUFyQixrREFBa0IsRUFBRTs7NkNBQXVCO0lBeURoRCxVQUFDO0NBQUEsQUFuRUQsQ0FBeUIsdUJBQVUsR0FtRWxDO0FBbkVZLGtCQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FyIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGlkOiBzdHJpbmc7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGltYWdlU3RvcmFnZVBhdGg6IHN0cmluZztcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgc2VhdHM6IHN0cmluZztcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgbHVnZ2FnZTogbnVtYmVyO1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBjbGFzczogc3RyaW5nO1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBoYXNBQzogYm9vbGVhbjtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgZG9vcnM6IG51bWJlcjtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHJpY2U6IG51bWJlcjtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgdHJhbnNtaXNzaW9uOiBzdHJpbmc7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGlzTW9kZWxWYWxpZDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF9pbWFnZVVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fbmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICAgICAgdGhpcy5faW1hZ2VVcmwgPSBvcHRpb25zLmltYWdlVXJsO1xuXG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zLmlkO1xuICAgICAgICB0aGlzLnNlYXRzID0gb3B0aW9ucy5zZWF0cztcbiAgICAgICAgdGhpcy5sdWdnYWdlID0gTnVtYmVyKG9wdGlvbnMubHVnZ2FnZSk7XG4gICAgICAgIHRoaXMuY2xhc3MgPSBvcHRpb25zLmNsYXNzO1xuICAgICAgICB0aGlzLmhhc0FDID0gb3B0aW9ucy5oYXNBQztcbiAgICAgICAgdGhpcy5kb29ycyA9IE51bWJlcihvcHRpb25zLmRvb3JzKTtcbiAgICAgICAgdGhpcy5wcmljZSA9IE51bWJlcihvcHRpb25zLnByaWNlKTtcbiAgICAgICAgdGhpcy50cmFuc21pc3Npb24gPSBvcHRpb25zLnRyYW5zbWlzc2lvbjtcbiAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2VQYXRoID0gb3B0aW9ucy5pbWFnZVN0b3JhZ2VQYXRoO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGVwZW5kZW50UHJvcGVydGllcygpO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX25hbWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJuYW1lXCIsIHZhbHVlKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURlcGVuZGVudFByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICBnZXQgaW1hZ2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlVXJsO1xuICAgIH1cblxuICAgIHNldCBpbWFnZVVybCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbWFnZVVybCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2ltYWdlVXJsID0gdmFsdWU7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJpbWFnZVVybFwiLCB2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEZXBlbmRlbnRQcm9wZXJ0aWVzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEZXBlbmRlbnRQcm9wZXJ0aWVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzTW9kZWxWYWxpZCA9ICEhdGhpcy5fbmFtZSAmJiAhIXRoaXMuX2ltYWdlVXJsO1xuICAgIH1cbn1cbiJdfQ==