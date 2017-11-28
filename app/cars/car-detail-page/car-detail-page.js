"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var car_detail_view_model_1 = require("./car-detail-view-model");
/* ***********************************************************
* This is the item details code behind in the master-detail structure.
* This code behind retrieves the passed parameter from the master list component,
* finds the data item by this parameter and displays the detailed data item information.
*************************************************************/
/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    /* ***********************************************************
    * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
    * Skipping the re-initialization on back navigation means the user will see the
    * page in the same data state that he left it in before navigating.
    *************************************************************/
    if (args.isBackNavigation) {
        return;
    }
    var page = args.object;
    page.bindingContext = new car_detail_view_model_1.CarDetailViewModel(page.navigationContext);
}
exports.onNavigatingTo = onNavigatingTo;
/* ***********************************************************
* The back button is essential for a master-detail feature.
*************************************************************/
function onBackButtonTap() {
    frame_1.topmost().goBack();
}
exports.onBackButtonTap = onBackButtonTap;
/* ***********************************************************
* The master-detail template comes with an example of an item edit page.
* Check out the edit page in the /cars/car-detail-edit-page folder.
*************************************************************/
function onEditButtonTap(args) {
    var bindingContext = args.object.bindingContext;
    frame_1.topmost().navigate({
        moduleName: "cars/car-detail-edit-page/car-detail-edit-page",
        context: bindingContext.car,
        animated: true,
        transition: {
            name: "slideTop",
            duration: 200,
            curve: "ease"
        }
    });
}
exports.onEditButtonTap = onEditButtonTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbC1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyLWRldGFpbC1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQW1DO0FBR25DLGlFQUE2RDtBQUU3RDs7Ozs4REFJOEQ7QUFFOUQ7OzhEQUU4RDtBQUM5RCx3QkFBK0IsSUFBbUI7SUFDOUM7Ozs7a0VBSThEO0lBQzlELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQUVELElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLDBDQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFiRCx3Q0FhQztBQUVEOzs4REFFOEQ7QUFDOUQ7SUFDSSxlQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN2QixDQUFDO0FBRkQsMENBRUM7QUFFRDs7OzhEQUc4RDtBQUM5RCx5QkFBZ0MsSUFBSTtJQUNoQyxJQUFNLGNBQWMsR0FBdUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFFdEUsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2YsVUFBVSxFQUFFLGdEQUFnRDtRQUM1RCxPQUFPLEVBQUUsY0FBYyxDQUFDLEdBQUc7UUFDM0IsUUFBUSxFQUFFLElBQUk7UUFDZCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsVUFBVTtZQUNoQixRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxNQUFNO1NBQ2hCO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWJELDBDQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmltcG9ydCB7IENhckRldGFpbFZpZXdNb2RlbCB9IGZyb20gXCIuL2Nhci1kZXRhaWwtdmlldy1tb2RlbFwiO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBUaGlzIGlzIHRoZSBpdGVtIGRldGFpbHMgY29kZSBiZWhpbmQgaW4gdGhlIG1hc3Rlci1kZXRhaWwgc3RydWN0dXJlLlxuKiBUaGlzIGNvZGUgYmVoaW5kIHJldHJpZXZlcyB0aGUgcGFzc2VkIHBhcmFtZXRlciBmcm9tIHRoZSBtYXN0ZXIgbGlzdCBjb21wb25lbnQsXG4qIGZpbmRzIHRoZSBkYXRhIGl0ZW0gYnkgdGhpcyBwYXJhbWV0ZXIgYW5kIGRpc3BsYXlzIHRoZSBkZXRhaWxlZCBkYXRhIGl0ZW0gaW5mb3JtYXRpb24uXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBVc2UgdGhlIFwib25OYXZpZ2F0aW5nVG9cIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgdGhlIHBhZ2UgYmluZGluZyBjb250ZXh0LlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKTogdm9pZCB7XG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFRoZSBcIm9uTmF2aWdhdGluZ1RvXCIgZXZlbnQgaGFuZGxlciBsZXRzIHlvdSBkZXRlY3QgaWYgdGhlIHVzZXIgbmF2aWdhdGVkIHdpdGggYSBiYWNrIGJ1dHRvbi5cbiAgICAqIFNraXBwaW5nIHRoZSByZS1pbml0aWFsaXphdGlvbiBvbiBiYWNrIG5hdmlnYXRpb24gbWVhbnMgdGhlIHVzZXIgd2lsbCBzZWUgdGhlXG4gICAgKiBwYWdlIGluIHRoZSBzYW1lIGRhdGEgc3RhdGUgdGhhdCBoZSBsZWZ0IGl0IGluIGJlZm9yZSBuYXZpZ2F0aW5nLlxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgaWYgKGFyZ3MuaXNCYWNrTmF2aWdhdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBDYXJEZXRhaWxWaWV3TW9kZWwocGFnZS5uYXZpZ2F0aW9uQ29udGV4dCk7XG59XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIFRoZSBiYWNrIGJ1dHRvbiBpcyBlc3NlbnRpYWwgZm9yIGEgbWFzdGVyLWRldGFpbCBmZWF0dXJlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkJhY2tCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgdG9wbW9zdCgpLmdvQmFjaygpO1xufVxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBUaGUgbWFzdGVyLWRldGFpbCB0ZW1wbGF0ZSBjb21lcyB3aXRoIGFuIGV4YW1wbGUgb2YgYW4gaXRlbSBlZGl0IHBhZ2UuXG4qIENoZWNrIG91dCB0aGUgZWRpdCBwYWdlIGluIHRoZSAvY2Fycy9jYXItZGV0YWlsLWVkaXQtcGFnZSBmb2xkZXIuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uRWRpdEJ1dHRvblRhcChhcmdzKTogdm9pZCB7XG4gICAgY29uc3QgYmluZGluZ0NvbnRleHQgPSA8Q2FyRGV0YWlsVmlld01vZGVsPmFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0O1xuXG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJjYXJzL2Nhci1kZXRhaWwtZWRpdC1wYWdlL2Nhci1kZXRhaWwtZWRpdC1wYWdlXCIsXG4gICAgICAgIGNvbnRleHQ6IGJpbmRpbmdDb250ZXh0LmNhcixcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl19