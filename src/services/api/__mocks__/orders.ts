import FlightAvatar from '@/assets/images/flightAvatar.png';
import HotelAvatar from '@/assets/images/hotelAvatar.png';
import { Order } from '@/domain/order/types/Order';

export const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    sourcePoint: 'New York',
    destinationPoint: 'Seattle',
    price: 86,
    bookingReference: 'Q5Z9XF',
    passengers: ['Michael C.', 'Andrey D.'],
    dateStart: '2023-03-16T12:43+03:00',
    dateEnd: '2023-03-23T12:43+03:00',
    avatar: FlightAvatar,
  },
  {
    id: '2',
    sourcePoint: 'New York',
    destinationPoint: 'Seattle',
    price: 156,
    bookingReference: 'Q5Z9XF',
    passengers: ['Michael C.'],
    dateStart: '2023-03-16T12:43+03:00',
    dateEnd: '2023-03-23T12:43+03:00',
    avatar: FlightAvatar,
  },
  {
    id: '3',
    name: 'Hotel Mercier',
    guests: ['Michael C.'],
    confirmationNumber: '2691.438.025',
    dateStart: '2023-03-16T12:43+03:00',
    dateEnd: '2023-03-23T12:43+03:00',
    price: 1056,
    avatar: HotelAvatar,
  },
  {
    id: '4',
    sourcePoint: 'New York',
    destinationPoint: 'Seattle',
    price: 156,
    bookingReference: 'Q5Z9XF',
    passengers: ['Michael C.'],
    dateStart: '2023-03-16T12:43+03:00',
    dateEnd: '2023-03-23T12:43+03:00',
    avatar: FlightAvatar,
  },
  {
    id: '5',
    name: 'Hotel Crowne Plaza',
    guests: ['Michael C.'],
    confirmationNumber: '2691.438.025',
    dateStart: '2023-03-16T12:43+03:00',
    dateEnd: '2023-03-23T12:43+03:00',
    price: 1056,
    avatar: HotelAvatar,
  },
  {
    id: '6',
    sourcePoint: 'New York',
    destinationPoint: 'Seattle',
    price: 156,
    bookingReference: 'Q5Z9XF',
    passengers: ['Michael C.'],
    dateStart: '2023-03-16T12:43+03:00',
    dateEnd: '2023-03-23T12:43+03:00',
    avatar: FlightAvatar,
  },
];
