type typeEnergy = "gasoline" | "electric";

export interface Car {
  color: string;
  gas: typeEnergy;
  year: number;
  description: string;
  price: number;
}
