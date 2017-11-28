"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("nativescript-plugin-firebase");
var Rx_1 = require("rxjs/Rx");
var car_model_1 = require("./car-model");
var editableProperties = [
    "doors",
    "imageUrl",
    "luggage",
    "name",
    "price",
    "seats",
    "transmission",
    "class"
];
var CarService = /** @class */ (function () {
    function CarService() {
        this._cars = [];
        if (CarService._instance) {
            throw new Error("Use CarService.getInstance() instead of new.");
        }
        CarService._instance = this;
    }
    CarService.getInstance = function () {
        return CarService._instance;
    };
    CarService.cloneUpdateModel = function (car) {
        return editableProperties.reduce(function (a, e) { return (a[e] = car[e], a); }, {}); // tslint:disable-line:ban-comma-operator
    };
    CarService.prototype.load = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            var path = "cars";
            var onValueEvent = function (snapshot) {
                var results = _this.handleSnapshot(snapshot.value);
                observer.next(results);
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).catch(this.handleErrors);
    };
    CarService.prototype.update = function (carModel) {
        var updateModel = CarService.cloneUpdateModel(carModel);
        return firebase.update("/cars/" + carModel.id, updateModel);
    };
    CarService.prototype.uploadImage = function (remoteFullPath, localFullPath) {
        return firebase.uploadFile({
            localFullPath: localFullPath,
            remoteFullPath: remoteFullPath,
            onProgress: null
        });
    };
    CarService.prototype.handleSnapshot = function (data) {
        this._cars = [];
        if (data) {
            for (var id in data) {
                if (data.hasOwnProperty(id)) {
                    this._cars.push(new car_model_1.Car(data[id]));
                }
            }
        }
        return this._cars;
    };
    CarService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    CarService._instance = new CarService();
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXItc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUEwRDtBQUMxRCw4QkFBcUM7QUFFckMseUNBQWtDO0FBRWxDLElBQU0sa0JBQWtCLEdBQUc7SUFDdkIsT0FBTztJQUNQLFVBQVU7SUFDVixTQUFTO0lBQ1QsTUFBTTtJQUNOLE9BQU87SUFDUCxPQUFPO0lBQ1AsY0FBYztJQUNkLE9BQU87Q0FDVixDQUFDO0FBRUY7SUFhSTtRQUZRLFVBQUssR0FBZSxFQUFFLENBQUM7UUFHM0IsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFFRCxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBbEJNLHNCQUFXLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUljLDJCQUFnQixHQUEvQixVQUFnQyxHQUFRO1FBQ3BDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFsQixDQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMseUNBQXlDO0lBQ2pILENBQUM7SUFZRCx5QkFBSSxHQUFKO1FBQUEsaUJBVUM7UUFURyxNQUFNLENBQUMsSUFBSSxlQUFVLENBQUMsVUFBQyxRQUFhO1lBQ2hDLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUVwQixJQUFNLFlBQVksR0FBRyxVQUFDLFFBQWE7Z0JBQy9CLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQztZQUNGLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsTUFBSSxJQUFNLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sUUFBYTtRQUNoQixJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBUyxRQUFRLENBQUMsRUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksY0FBc0IsRUFBRSxhQUFxQjtRQUNyRCxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2QixhQUFhLGVBQUE7WUFDYixjQUFjLGdCQUFBO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLG1DQUFjLEdBQXRCLFVBQXVCLElBQVM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNQLEdBQUcsQ0FBQyxDQUFDLElBQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU8saUNBQVksR0FBcEIsVUFBcUIsS0FBZTtRQUNoQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBMURjLG9CQUFTLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQTJENUQsaUJBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbmltcG9ydCB7IENhciB9IGZyb20gXCIuL2Nhci1tb2RlbFwiO1xyXG5cclxuY29uc3QgZWRpdGFibGVQcm9wZXJ0aWVzID0gW1xyXG4gICAgXCJkb29yc1wiLFxyXG4gICAgXCJpbWFnZVVybFwiLFxyXG4gICAgXCJsdWdnYWdlXCIsXHJcbiAgICBcIm5hbWVcIixcclxuICAgIFwicHJpY2VcIixcclxuICAgIFwic2VhdHNcIixcclxuICAgIFwidHJhbnNtaXNzaW9uXCIsXHJcbiAgICBcImNsYXNzXCJcclxuXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBDYXJTZXJ2aWNlIHtcclxuICAgICAgICByZXR1cm4gQ2FyU2VydmljZS5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDYXJTZXJ2aWNlID0gbmV3IENhclNlcnZpY2UoKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjbG9uZVVwZGF0ZU1vZGVsKGNhcjogQ2FyKTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gZWRpdGFibGVQcm9wZXJ0aWVzLnJlZHVjZSgoYSwgZSkgPT4gKGFbZV0gPSBjYXJbZV0sIGEpLCB7fSk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6YmFuLWNvbW1hLW9wZXJhdG9yXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FyczogQXJyYXk8Q2FyPiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChDYXJTZXJ2aWNlLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2UgQ2FyU2VydmljZS5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENhclNlcnZpY2UuX2luc3RhbmNlID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBcImNhcnNcIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hZGRWYWx1ZUV2ZW50TGlzdGVuZXIob25WYWx1ZUV2ZW50LCBgLyR7cGF0aH1gKTtcclxuICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGNhck1vZGVsOiBDYXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZU1vZGVsID0gQ2FyU2VydmljZS5jbG9uZVVwZGF0ZU1vZGVsKGNhck1vZGVsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLnVwZGF0ZShgL2NhcnMvJHtjYXJNb2RlbC5pZH1gLCB1cGRhdGVNb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkSW1hZ2UocmVtb3RlRnVsbFBhdGg6IHN0cmluZywgbG9jYWxGdWxsUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgIGxvY2FsRnVsbFBhdGgsXHJcbiAgICAgICAgICAgIHJlbW90ZUZ1bGxQYXRoLFxyXG4gICAgICAgICAgICBvblByb2dyZXNzOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTbmFwc2hvdChkYXRhOiBhbnkpOiBBcnJheTxDYXI+IHtcclxuICAgICAgICB0aGlzLl9jYXJzID0gW107XHJcblxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWQgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2Fycy5wdXNoKG5ldyBDYXIoZGF0YVtpZF0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuIl19