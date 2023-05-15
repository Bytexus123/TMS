export enum LoadTypePlanning {
  "Pennding" = 1,
  "Needs Carrier" = 2,
  "Needs Driver" = 3,
  "Booked - Awaiting Confirmation" = 4,
}

export enum LoadTypeActiveLoad {
  "Ready - confirmation Signed" = 1,
  "Driver Assigned" = 2,
  "Dispacted" = 3,
  "In Transit" = 4,
  "Watch" = 5,
  "Possible Claim" = 6,
  "Delivered" = 7,
}
export enum LoadTypeLoadComplated {
  "Completed" = 1,
  "To Be Billed" = 2,
  "Actual claim" = 3,
}

export enum TruckStatusCarrierSetup {
  "Carrier Needs Setup" = 1,
  "Setup Packet Sent To Carrier" = 2,
  "Insurance Verification Needed" = 3,
  "Carrier Setup Not Complete" = 4,
  "Carrier Setup Complete" = 5,
}

export enum TruckStatusBeforeYourLoad {
  "At Piror Load" = 1,
  "Dispacted" = 2,
}

export enum TruckStatusDuringYourLoad {
  "At Pickup - Waiting" = 1,
  "At Pickup - Loading" = 2,
  "On Time" = 3,
  "Running Late" = 4,
  "At Delivery - Waiting" = 5,
  "At Delivery - Unloading" = 6,
  "Broken Down" = 7,
  "In Accident" = 8,
}

export enum TruckStatusAfterYourLoad {
  "Empty" = 1,
  "Driver Paid" = 2,
}
export enum CommodityStatusDry {
  "Dry Goods (Food)" = 1,
  "Dry Goods (General)" = 2,
}
export enum CommodityStatusHazardous {
  "Insurance Verification Needed" = 1,
  "Chemicals" = 2,
  "Explosives" = 3,
  "Firearms / Ammunition" = 4,
  "Hazardous Materials" = 5,
  "Oil / Petrolium" = 6,
}
export enum CommodityStatusHighValue {
  "Alcohol" = 1,
  "Antiques / Works of Art" = 2,
  "Cash, Checks, Currency" = 3,
  "Consumer Electronics" = 4,
  "Jewelry " = 5,
  "Tobacco Products" = 6,
}
export enum CommodityStatusLiquid {
  "Tanker Freight" = 1,
}
export enum CommodityStatusLiveStock {
  "Live Animals" = 1,
}
export enum CommodityStatusTemp {
  "Refrigerated (Food)" = 1,
  "Refrigerated (General)" = 2,
}

export enum EquipmentTypeStatusDryVan {
  "Van" = 1,
  "Van - Air-Ride" = 2,
  "Van - Hazardous" = 3,
  "Van - Vented" = 4,
  "Van w/ Curtains" = 5,
  "Van w/ Pallet Exchange" = 6,
}

export enum EquipmentTypeStatusTemp {
  "Reefer" = 1,
  "Reefer - Hazardous" = 2,
  "Reefer w/ Pallet Exchange" = 3,
}
export enum EquipmentTypeStatusFlatbed {
  "Double Drop" = 1,
  "Flatbed" = 2,
  "Flatbed - Hazardous" = 3,
  "Flatbed w/ Sides" = 4,
  "Lowboy" = 5,
  "Maxi" = 6,
  "Removable Gooseneck" = 7,
  "Step Deck" = 8,
}
export enum EquipmentTypeStatusSpecial {
  "Auto Carrier" = 1,
  "Dump Trailer" = 2,
  "Hooper Bottom" = 3,
  "Hotshot" = 4,
  "Tanker" = 5,
}
export enum EquipmentTypeStatusFlexible {
  "Flatbed/Step Deck" = 1,
  "Flatbed/Van" = 2,
  "Flatbed/Reefer" = 3,
  "Reefer/Van" = 4,
  "Reefer/Flatbed/Van" = 5,
}
export enum EquipmentTypeStatusMisc {
  "Power Only" = 1,
}

export enum EquipmentLengthStatusSmall {
  "20'" = 1,
  "28'" = 2,
}

export enum EquipmentLengthStatusMedium {
  "40'" = 1,
  "45'" = 2,
}

export enum EquipmentLengthStatusLarge {
  "48'" = 1,
  "53'" = 2,
}
