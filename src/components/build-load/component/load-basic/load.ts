export enum LoadType {
  "Pennding" = 1,
  "Needs Carrier" = 2,
  "Needs Driver" = 3,
  "Booked - Awaiting Confirmation" = 4,
  "Ready - confirmation Signed" = 5,
  "Driver Assigned" = 6,
  "Dispacted" = 7,
  "In Transit" = 8,
  "Watch" = 9,
  "Possible Claim" = 10,
  "Delivered" = 11,
  "Completed" = 12,
  "To Be Billed" = 13,
  "Actual claim" = 14,
}

export enum TruckStatus {
  "Carrier Needs Setup" = 1,
  "Setup Packet Sent To Carrier" = 2,
  "Insurance Verification Needed" = 3,
  "Carrier Setup Not Complete" = 4,
  "Carrier Setup Complete" = 5,
  "At Piror Load" = 6,
  "Dispacted" = 7,
  "At Pickup - Waiting" = 8,
  "At Pickup - Loading" = 9,
  "On Time" = 10,
  "Running Late" = 11,
  "At Delivery - Waiting" = 12,
  "At Delivery - Unloading" = 13,
  "Broken Down" = 14,
  "In Accident" = 15,
  "Empty" = 16,
  "Driver Paid" = 17,
}

export enum CommodityStatus {
  "Dry Goods (Food)" = 1,
  "Dry Goods (General)" = 2,
  "Insurance Verification Needed" = 3,
  "Chemicals" = 4,
  "Explosives" = 5,
  "Firearms / Ammunition" = 6,
  "Hazardous Materials" = 7,
  "Oil / Petrolium" = 8,
  "Alcohol" = 9,
  "Antiques / Works of Art" = 10,
  "Cash, Checks, Currency" = 11,
  "Consumer Electronics" = 12,
  "Jewelry " = 13,
  "Tobacco Products" = 14,
  "Tanker Freight" = 15,
  "Live Animals" = 16,
  "Refrigerated (Food)" = 17,
  "Refrigerated (General)" = 18,
}

export enum EquipmentTypeStatus {
  "Van" = 1,
  "Van - Air-Ride" = 2,
  "Van - Hazardous" = 3,
  "Van - Vented" = 4,
  "Van w/ Curtains" = 5,
  "Van w/ Pallet Exchange" = 6,
  "Reefer" = 7,
  "Reefer - Hazardous" = 8,
  "Reefer w/ Pallet Exchange" = 9,
  "Double Drop" = 10,
  "Flatbed" = 11,
  "Flatbed - Hazardous" = 12,
  "Flatbed w/ Sides" = 13,
  "Lowboy" = 14,
  "Maxi" = 15,
  "Removable Gooseneck" = 16,
  "Step Deck" = 17,
  "Auto Carrier" = 18,
  "Dump Trailer" = 19,
  "Hooper Bottom" = 20,
  "Hotshot" = 21,
  "Tanker" = 22,
  "Flatbed/Step Deck" = 23,
  "Flatbed/Van" = 24,
  "Flatbed/Reefer" = 25,
  "Reefer/Van" = 26,
  "Reefer/Flatbed/Van" = 27,
  "Power Only" = 28,
}

export enum EquipmentLengthStatus {
  "20'" = 1,
  "28'" = 2,
  "40'" = 3,
  "45'" = 4,
  "48'" = 5,
  "53'" = 6,
}
