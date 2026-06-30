export interface Car {
  id: string;
  title: string;
  price: string;
  year: string;
  mileage: string;
  fuel: string;
  transmission: string;
  dealer: string;
  location: string;
  image: string;
}

export const carsData: Car[] = [
  {
    id: "1",
    title: "2022 BMW 3 Series 320i M Sport",
    price: "£24,995",
    year: "2022",
    mileage: "12,450 mi",
    fuel: "Petrol",
    transmission: "Auto",
    dealer: "BMW Approved Used",
    location: "London",
    image: "/car-1.jpg",
  },
  {
    id: "2",
    title: "2021 Audi A4 Avant 35 TFSI S Line",
    price: "£22,450",
    year: "2021",
    mileage: "18,900 mi",
    fuel: "Petrol",
    transmission: "Auto",
    dealer: "Audi Approved Plus",
    location: "Manchester",
    image: "/car-2.jpg",
  },
  {
    id: "3",
    title: "2020 Mercedes-Benz C-Class C200 AMG Line",
    price: "£26,895",
    year: "2020",
    mileage: "24,100 mi",
    fuel: "Petrol",
    transmission: "Auto",
    dealer: "Mercedes-Benz Retail",
    location: "Birmingham",
    image: "/car-3.jpg",
  },
  {
    id: "4",
    title: "2023 Volkswagen Golf GTD 2.0 TDI",
    price: "£29,995",
    year: "2023",
    mileage: "8,750 mi",
    fuel: "Diesel",
    transmission: "Auto",
    dealer: "VW Approved Used",
    location: "Leeds",
    image: "/car-4.jpg",
  },
  {
    id: "5",
    title: "2022 Ford Mustang Mach-E Premium",
    price: "£34,495",
    year: "2022",
    mileage: "15,200 mi",
    fuel: "Electric",
    transmission: "Auto",
    dealer: "Ford Direct",
    location: "Bristol",
    image: "/car-5.jpg",
  },
  {
    id: "6",
    title: "2021 Land Rover Range Rover Evoque D200",
    price: "£31,995",
    year: "2021",
    mileage: "21,350 mi",
    fuel: "Diesel",
    transmission: "Auto",
    dealer: "Land Rover Approved",
    location: "Glasgow",
    image: "/car-6.jpg",
  },
];
