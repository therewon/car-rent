import Koenigsegg from './assets/Koenigsegg.png'
import NissanGTR from './assets/Nissan-GT.png'
import RollsRoyce from './assets/Rolls-Royce.png'
import AllNewRush from './assets/AllNewRush.png'
import CRV from './assets/cr-v.png'
import AllNewTerios from './assets/AllNewTerios.png'
import MGZX from './assets/MG-Zx.png'
import NewMGZS from './assets/MG-ZS.png'
import MGZXExcite from './assets/MG-ZS-2.png'

const cars = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    capacity: 2,
    transmission: "Manual",
    fuel: "90L",
    price: 99,
    oldPrice: null,
    favorite: true,
    image: Koenigsegg
  },
  {
    id: 2,
    name: "Nissan GT-R",
    type: "Sport",
    capacity: 2,
    transmission: "Manual",
    fuel: "80L",
    price: 80,
    oldPrice: 100,
    favorite: false,
    image: NissanGTR
  },
  {
    id: 3,
    name: "Rolls-Royce",
    type: "Sedan",
    capacity: 4,
    transmission: "Manual",
    fuel: "70L",
    price: 96,
    oldPrice: null,
    favorite: true,
    image: RollsRoyce
  },
  {
    id: 4,
    name: "Nissan GT-R",
    type: "Sport",
    capacity: 2,
    transmission: "Manual",
    fuel: "80L",
    price: 80,
    oldPrice: 100,
    favorite: false,
    image: NissanGTR
  },
  {
    id: 5,
    name: "All New Rush",
    type: "SUV",
    capacity: 6,
    transmission: "Manual",
    fuel: "70L",
    price: 72,
    oldPrice: 80,
    favorite: false,
    image: AllNewRush
  },
  {
    id: 6,
    name: "CR-V",
    type: "SUV",
    capacity: 6,
    transmission: "Manual",
    fuel: "80L",
    price: 80,
    oldPrice: null,
    favorite: true,
    image: CRV
  },
  {
    id: 7,
    name: "All New Terios",
    type: "SUV",
    capacity: 6,
    transmission: "Manual",
    fuel: "90L",
    price: 74,
    oldPrice: null,
    favorite: false,
    image: AllNewTerios
  },
  {
    id: 8,
    name: "CR-V",
    type: "SUV",
    capacity: 6,
    transmission: "Manual",
    fuel: "80L",
    price: 80,
    oldPrice: null,
    favorite: true,
    image: CRV
  },
  {
    id: 9,
    name: "MG ZX Exclusive",
    type: "Hatchback",
    capacity: 4,
    transmission: "Manual",
    fuel: "70L",
    price: 76,
    oldPrice: 80,
    favorite: true,
    image: MGZX
  },
  {
    id: 10,
    name: "New MGZS",
    type: "SUV",
    capacity: 6,
    transmission: "Manual",
    fuel: "80L",
    price: 80,
    oldPrice: null,
    favorite: false,
    image: NewMGZS
  },
  {
    id: 11,
    name: "MG ZX Excite",
    type: "Hatchback",
    capacity: 4,
    transmission: "Manual",
    fuel: "90L",
    price: 74,
    oldPrice: null,
    favorite: true,
    image: MGZXExcite
  },
  {
    id: 12,
    name: "New MGZS",
    type: "SUV",
    capacity: 6,
    transmission: "Manual",
    fuel: "80L",
    price: 80,
    oldPrice: null,
    favorite: false,
    image: NewMGZS
  }
]
export default cars