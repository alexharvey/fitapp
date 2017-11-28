"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var cars_list_view_model_1 = require("./cars-list-view-model");
/* ***********************************************************
* This is the master list code behind in the master-detail structure.
* This code behind gets the data, passes it to the master view and displays it in a list.
* It also handles the navigation to the details page for each item.
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
    var viewModel = new cars_list_view_model_1.CarsListViewModel();
    page.bindingContext = viewModel;
    viewModel.load();
}
exports.onNavigatingTo = onNavigatingTo;
/* ***********************************************************
* Use the "itemTap" event handler of the <RadListView> to navigate to the
* item details page. Retrieve a reference for the data item (the id) and pass it
* to the item details page, so that it can identify which data item to display.
* Learn more about navigating with a parameter in this documentation article:
* http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
*************************************************************/
function onCarItemTap(args) {
    var tappedCarItem = args.view.bindingContext;
    frame_1.topmost().navigate({
        moduleName: "cars/car-detail-page/car-detail-page",
        context: tappedCarItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
exports.onCarItemTap = onCarItemTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1saXN0LXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLWxpc3QtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtDQUFtQztBQUduQywrREFBMkQ7QUFHM0Q7Ozs7OERBSThEO0FBRTlEOzs4REFFOEQ7QUFDOUQsd0JBQStCLElBQW1CO0lBQzlDOzs7O2tFQUk4RDtJQUM5RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQztJQUNYLENBQUM7SUFFRCxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQU0sU0FBUyxHQUFHLElBQUksd0NBQWlCLEVBQUUsQ0FBQztJQUUxQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNoQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckIsQ0FBQztBQWZELHdDQWVDO0FBRUQ7Ozs7Ozs4REFNOEQ7QUFDOUQsc0JBQTZCLElBQXVCO0lBQ2hELElBQU0sYUFBYSxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBRXBELGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNmLFVBQVUsRUFBRSxzQ0FBc0M7UUFDbEQsT0FBTyxFQUFFLGFBQWE7UUFDdEIsUUFBUSxFQUFFLElBQUk7UUFDZCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLE1BQU07U0FDaEI7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBYkQsb0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcblxuaW1wb3J0IHsgQ2Fyc0xpc3RWaWV3TW9kZWwgfSBmcm9tIFwiLi9jYXJzLWxpc3Qtdmlldy1tb2RlbFwiO1xuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4vc2hhcmVkL2Nhci1tb2RlbFwiO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBUaGlzIGlzIHRoZSBtYXN0ZXIgbGlzdCBjb2RlIGJlaGluZCBpbiB0aGUgbWFzdGVyLWRldGFpbCBzdHJ1Y3R1cmUuXG4qIFRoaXMgY29kZSBiZWhpbmQgZ2V0cyB0aGUgZGF0YSwgcGFzc2VzIGl0IHRvIHRoZSBtYXN0ZXIgdmlldyBhbmQgZGlzcGxheXMgaXQgaW4gYSBsaXN0LlxuKiBJdCBhbHNvIGhhbmRsZXMgdGhlIG5hdmlnYXRpb24gdG8gdGhlIGRldGFpbHMgcGFnZSBmb3IgZWFjaCBpdGVtLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogVXNlIHRoZSBcIm9uTmF2aWdhdGluZ1RvXCIgaGFuZGxlciB0byBpbml0aWFsaXplIHRoZSBwYWdlIGJpbmRpbmcgY29udGV4dC5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSk6IHZvaWQge1xuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgXCJvbk5hdmlnYXRpbmdUb1wiIGV2ZW50IGhhbmRsZXIgbGV0cyB5b3UgZGV0ZWN0IGlmIHRoZSB1c2VyIG5hdmlnYXRlZCB3aXRoIGEgYmFjayBidXR0b24uXG4gICAgKiBTa2lwcGluZyB0aGUgcmUtaW5pdGlhbGl6YXRpb24gb24gYmFjayBuYXZpZ2F0aW9uIG1lYW5zIHRoZSB1c2VyIHdpbGwgc2VlIHRoZVxuICAgICogcGFnZSBpbiB0aGUgc2FtZSBkYXRhIHN0YXRlIHRoYXQgaGUgbGVmdCBpdCBpbiBiZWZvcmUgbmF2aWdhdGluZy5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGlmIChhcmdzLmlzQmFja05hdmlnYXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBuZXcgQ2Fyc0xpc3RWaWV3TW9kZWwoKTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2aWV3TW9kZWw7XG4gICAgdmlld01vZGVsLmxvYWQoKTtcbn1cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogVXNlIHRoZSBcIml0ZW1UYXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSA8UmFkTGlzdFZpZXc+IHRvIG5hdmlnYXRlIHRvIHRoZVxuKiBpdGVtIGRldGFpbHMgcGFnZS4gUmV0cmlldmUgYSByZWZlcmVuY2UgZm9yIHRoZSBkYXRhIGl0ZW0gKHRoZSBpZCkgYW5kIHBhc3MgaXRcbiogdG8gdGhlIGl0ZW0gZGV0YWlscyBwYWdlLCBzbyB0aGF0IGl0IGNhbiBpZGVudGlmeSB3aGljaCBkYXRhIGl0ZW0gdG8gZGlzcGxheS5cbiogTGVhcm4gbW9yZSBhYm91dCBuYXZpZ2F0aW5nIHdpdGggYSBwYXJhbWV0ZXIgaW4gdGhpcyBkb2N1bWVudGF0aW9uIGFydGljbGU6XG4qIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci9jb3JlLWNvbmNlcHRzL2FuZ3VsYXItbmF2aWdhdGlvbi5odG1sI3Bhc3NpbmctcGFyYW1ldGVyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uQ2FySXRlbVRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSk6IHZvaWQge1xuICAgIGNvbnN0IHRhcHBlZENhckl0ZW0gPSA8Q2FyPmFyZ3Mudmlldy5iaW5kaW5nQ29udGV4dDtcblxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwiY2Fycy9jYXItZGV0YWlsLXBhZ2UvY2FyLWRldGFpbC1wYWdlXCIsXG4gICAgICAgIGNvbnRleHQ6IHRhcHBlZENhckl0ZW0sXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdfQ==