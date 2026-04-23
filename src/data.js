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
    image: Koenigsegg,
    rating: 4.9,
    description: "The Koenigsegg is a high-performance sports car built for drivers who value speed, precision, and premium design. It offers an impressive driving experience with strong acceleration, sharp handling, and a luxurious interior that feels both modern and driver-focused.",
    reviews: [
      {
        id: 1,
        user: "Aydan M.",
        comment: "This car delivers an incredible driving experience from the moment you get behind the wheel. The acceleration feels smooth yet extremely powerful, and the steering response is sharp and confident even at higher speeds. The interior also feels premium and well-designed, making every trip enjoyable."
      },
      {
        id: 2,
        user: "Elvin R.",
        comment: "The Koenigsegg stands out not only because of its speed but also because of its overall balance and comfort. It feels stable on the road, looks stunning from every angle, and gives a truly premium sports car experience. It is a perfect choice for anyone who enjoys performance and luxury together."
      }
    ]
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
    image: NissanGTR,
    rating: 4.8,
    description: "The Nissan GT-R is a legendary sports car known for its aggressive styling, powerful engine, and excellent road performance. It combines speed, reliability, and advanced engineering, making it a favorite among drivers who want both daily usability and thrilling performance.",
    reviews: [
      {
        id: 1,
        user: "Nihad A.",
        comment: "The Nissan GT-R is one of the most exciting cars I have ever driven. Its power delivery is impressive, the grip on the road feels solid, and the overall design gives it a bold and iconic presence. It manages to be both practical and thrilling at the same time."
      },
      {
        id: 2,
        user: "Murad K.",
        comment: "What I liked most about the GT-R is how balanced it feels in different driving conditions. It performs extremely well when pushed hard, yet it still feels comfortable enough for normal city driving. The cabin is well-built and the car has a strong personality that makes it memorable."
      }
    ]
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
    image: RollsRoyce,
    rating: 5.0,
    description: "The Rolls-Royce is a luxury sedan designed to deliver unmatched comfort, elegance, and prestige. With its refined interior, smooth ride quality, and timeless exterior styling, it offers an exceptional experience for drivers and passengers who appreciate true automotive luxury.",
    reviews: [
      {
        id: 1,
        user: "Laman T.",
        comment: "This car feels more like a luxury lounge on wheels than a traditional sedan. The interior materials are outstanding, the ride quality is unbelievably smooth, and every small detail reflects craftsmanship and class. It creates a quiet and relaxing environment that is perfect for long journeys."
      },
      {
        id: 2,
        user: "Rauf S.",
        comment: "The Rolls-Royce offers a level of comfort and prestige that is difficult to compare with anything else. It drives with remarkable smoothness, the cabin feels spacious and elegant, and the overall impression it leaves is simply unforgettable. It is the definition of luxury and refinement."
      }
    ]
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
    image: NissanGTR,
    rating: 4.8,
    description: "The Nissan GT-R is built for drivers who want speed, confidence, and a bold driving character. Its performance-focused engineering and striking design make it one of the most recognizable and respected sports cars in its segment.",
    reviews: [
      {
        id: 1,
        user: "Farid H.",
        comment: "Driving the GT-R feels exciting every single time. The power is immediate, the car feels planted on the road, and the design still turns heads everywhere it goes. It has a strong identity and delivers the kind of performance that driving enthusiasts truly appreciate."
      },
      {
        id: 2,
        user: "Kamran D.",
        comment: "This car offers a great balance between raw performance and daily usability. It has a confident road presence, the handling feels controlled and responsive, and the cabin is comfortable enough for longer trips. It is one of those cars that always leaves a strong impression."
      }
    ]
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
    image: AllNewRush,
    rating: 4.6,
    description: "The All New Rush is a practical and stylish SUV designed for families and everyday adventures. It offers spacious seating, reliable performance, and a comfortable cabin, making it a smart choice for people who want both convenience and versatility.",
    reviews: [
      {
        id: 1,
        user: "Gunel P.",
        comment: "The All New Rush feels like a very practical and family-friendly SUV. It has enough space for passengers, the ride is comfortable for daily use, and the design looks modern without being too aggressive. It is a great option for city use and weekend trips."
      },
      {
        id: 2,
        user: "Turan M.",
        comment: "I really like how useful and balanced this SUV feels. It offers good space, comfortable seats, and enough performance for regular driving needs. The interior is simple but functional, and overall it gives a dependable feeling that many families will appreciate."
      }
    ]
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
    image: CRV,
    rating: 4.7,
    description: "The CR-V is a well-rounded SUV that combines comfort, practicality, and modern styling. It is suitable for both daily city driving and longer journeys, offering a spacious cabin, dependable road performance, and a user-friendly driving experience.",
    reviews: [
      {
        id: 1,
        user: "Nigar A.",
        comment: "The CR-V feels very comfortable and easy to live with on a daily basis. It has a spacious interior, smooth driving dynamics, and enough room for both passengers and luggage. It is a reliable SUV that works well for both short and long trips."
      },
      {
        id: 2,
        user: "Javid B.",
        comment: "What stands out most about the CR-V is its practicality and balance. It feels refined on the road, the cabin is nicely laid out, and the overall driving experience is calm and confidence-inspiring. It is the kind of SUV that suits many different lifestyles."
      }
    ]
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
    image: AllNewTerios,
    rating: 4.5,
    description: "The All New Terios is a compact SUV that offers flexibility, comfort, and a solid driving experience. It is a practical option for drivers who need extra space, modern styling, and dependable everyday performance in one package.",
    reviews: [
      {
        id: 1,
        user: "Aysel R.",
        comment: "This SUV feels practical, comfortable, and very easy to drive in different situations. The seating position is good, the cabin offers useful space, and the overall design gives it a modern and confident look. It is a nice choice for everyday family use."
      },
      {
        id: 2,
        user: "Orxan V.",
        comment: "The All New Terios impressed me with its simple and functional design. It may not be the most aggressive SUV in terms of performance, but it makes up for that with comfort, usability, and a dependable feel that works very well for regular driving."
      }
    ]
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
    image: CRV,
    rating: 4.7,
    description: "The CR-V offers a smooth and practical SUV experience with a spacious interior and dependable performance. It is designed to provide comfort, convenience, and versatility for drivers who want an easy and enjoyable everyday vehicle.",
    reviews: [
      {
        id: 1,
        user: "Sabina H.",
        comment: "I enjoyed how comfortable and stable the CR-V felt on the road. The cabin is spacious, the controls are easy to use, and it gives a sense of confidence while driving. It is a very balanced SUV that works well for both daily errands and longer journeys."
      },
      {
        id: 2,
        user: "Emin Q.",
        comment: "The CR-V is one of those vehicles that immediately feels user-friendly and dependable. It has good ride quality, useful interior space, and a design that feels modern without being overdone. It is a practical choice that still feels refined."
      }
    ]
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
    image: MGZX,
    rating: 4.6,
    description: "The MG ZX Exclusive is a stylish hatchback that offers a modern design, practical cabin space, and a comfortable driving experience. It is ideal for drivers who want an affordable yet attractive car with a good balance of performance and usability.",
    reviews: [
      {
        id: 1,
        user: "Ulvi T.",
        comment: "The MG ZX Exclusive feels modern, efficient, and pleasant to drive. It has a good-looking design, the cabin is comfortable for everyday use, and the car feels easy to handle in traffic. It is a smart option for someone who wants style and practicality together."
      },
      {
        id: 2,
        user: "Sevda M.",
        comment: "I like how this car combines a compact shape with a comfortable interior. It is easy to park, simple to drive around the city, and still offers enough comfort for longer rides. It has a fresh design and a value-focused feel that makes it very appealing."
      }
    ]
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
    image: NewMGZS,
    rating: 4.5,
    description: "The New MGZS is a modern SUV with a clean design, practical interior space, and a comfortable ride. It is suitable for families and daily drivers who want a vehicle that feels contemporary, spacious, and easy to use.",
    reviews: [
      {
        id: 1,
        user: "Rena K.",
        comment: "The New MGZS offers a very pleasant driving experience for daily use. The seats are comfortable, the cabin feels spacious, and the design gives it a fresh and modern character. It is a practical SUV that handles everyday needs very well."
      },
      {
        id: 2,
        user: "Taleh F.",
        comment: "What I appreciate most about this SUV is how easy and comfortable it feels in normal driving conditions. It has useful space, a simple but attractive interior, and a balanced overall design. It is a good choice for drivers who want something practical and modern."
      }
    ]
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
    image: MGZXExcite,
    rating: 4.4,
    description: "The MG ZX Excite is a compact and practical hatchback that focuses on comfort, efficiency, and everyday usability. It is a good option for drivers who want a stylish vehicle that works well in the city while still feeling comfortable on longer drives.",
    reviews: [
      {
        id: 1,
        user: "Fidan A.",
        comment: "This hatchback feels easy to drive, comfortable in traffic, and nicely designed for everyday use. It is compact enough for city driving but still offers a practical interior that makes it useful for passengers and daily errands."
      },
      {
        id: 2,
        user: "Kenan O.",
        comment: "The MG ZX Excite gives a solid impression for a compact car. It feels simple, efficient, and user-friendly, with a design that looks modern and clean. It is a good match for drivers who want something practical without sacrificing style."
      }
    ]
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
    image: NewMGZS,
    rating: 4.5,
    description: "The New MGZS is designed to deliver comfort, practicality, and a modern SUV look in one package. It provides enough space for passengers, a confident road presence, and a smooth driving experience for a wide range of drivers.",
    reviews: [
      {
        id: 1,
        user: "Leyla N.",
        comment: "This SUV feels spacious, comfortable, and well-suited for everyday life. The driving position is good, the interior has enough room, and the design gives it a nice modern touch. It is easy to imagine using it for both workdays and family outings."
      },
      {
        id: 2,
        user: "Samir C.",
        comment: "The New MGZS delivers a balanced experience with decent comfort, practical space, and a clean design. It feels approachable and easy to drive, which makes it appealing for many different kinds of users. It is a sensible and stylish SUV overall."
      }
    ]
  }
]

export default cars