export interface FormValues {
  load: string;
  branch: string;
  truckStatus: string;
  loanReference: string;
  weight: string;
  declaredLoanValue: string;
  Commodity: string;
  loadSize: string;
  newusedgoods: string;
  intermodal: string;
  equipmentLength: string;
  temprature: string;
  lastFree: string;
  publicLoad: string;
  privateLoad: string;
  loadPosting: string;
  carrier: string;
  docket: string;
  USDOTNumber: string;
  address: string;
  primaryContact: string;
  contactEmail: string;
  driver: string;
  overallLoadLength: string;
  powerUnit: string;
  totalGrossVehicleWeight: string;
  trailer: string;
  overallLoadHeight: string;
  customer: string;
  contactName: string;
  contactPhone: string;
  contactExt: string;
  customerRefNo: string;
  creditLimit: string;
  availableCredit: string;
  notes: string;
  powerUnitTrailer: string;
}

export const createNewFormValues = () => {
  return {
    load: "",
    branch: "",
    truckStatus: "",
    loanReference: "",
    weight: "",
    declaredLoanValue: "",
    Commodity: "",
    loadSize: "",
    newusedgoods: "",
    intermodal: "",
    equipmentLength: "",
    temprature: "",
    lastFree: "",
    publicLoad: "",
    privateLoad: "",
    loadPosting: "",
    carrier: "",
    docket: "",
    USDOTNumber: "",
    address: "",
  };
};
