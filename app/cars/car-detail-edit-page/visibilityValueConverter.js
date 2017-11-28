"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VisibilityValueConverter = /** @class */ (function () {
    function VisibilityValueConverter() {
    }
    VisibilityValueConverter.prototype.toView = function (value) {
        if (value) {
            return "collapsed";
        }
        else {
            return "visible";
        }
    };
    VisibilityValueConverter.prototype.toModel = function (value) {
        return value;
    };
    return VisibilityValueConverter;
}());
exports.VisibilityValueConverter = VisibilityValueConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eVZhbHVlQ29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlzaWJpbGl0eVZhbHVlQ29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQVlBLENBQUM7SUFYRyx5Q0FBTSxHQUFOLFVBQU8sS0FBYTtRQUNoQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQU8sR0FBUCxVQUFRLEtBQWE7UUFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWaXNpYmlsaXR5VmFsdWVDb252ZXJ0ZXIge1xuICAgIHRvVmlldyh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJjb2xsYXBzZWRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInZpc2libGVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvTW9kZWwodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG4iXX0=