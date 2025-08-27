export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  features: string[];
  specifications: {
    dimensions: string;
    materials: string;
    colors: string;
    ratedVoltage: string;
    lightingPower: string;
    typicalConsumption: string;
    freshAirVentilation: string;
  };
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}