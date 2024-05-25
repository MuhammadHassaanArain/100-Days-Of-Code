/*
 Question 61 ; making enums for vehicles:
 lets create categories for vehicles like car , truck and motorcycles  using enums and show one example.
 */
// Making a list (enum) for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["car"] = 0] = "car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list
console.log(VehicleType.car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
