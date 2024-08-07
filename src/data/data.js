import totalDelivery from '../images/totalDelivery.svg';
import totalOrder from '../images/order.svg';
import totalCancel from '../images/totalCanceled.svg';
import totalRevenue from '../images/totalRevenue.svg';
import goals from '../images/goals.svg';
import burger from '../images/burger.svg';
import menu from '../images/menu.svg';



export let cardMenu = [
  {
    imageName: totalOrder,
    cardName: "Total Orders",
    cardCount: "76",
    subCount: "3",
    up: true,
  },
  {
    imageName: totalDelivery,
    cardName: "Total Delivery",
    cardCount: "56",
    subCount: "3",
    up: true,
  },
  {
    imageName: totalCancel,
    cardName: "Total Cancelled",
    cardCount: "5",
    subCount: "3",
    up: false,
  },
  {
    imageName: totalRevenue,
    cardName: "Total Revenue",
    cardCount: "12k",
    subCount: "3",
    up: true,
  },

];

export let listMenu = [
  {
    imageName: goals,
    listName: "Goals"
  },
  {
    imageName: burger,
    listName: "Popular Dishes"
  },
  {
    imageName: menu,
    listName: "Menu"
  },
]

export let tableData = [
  {
    userImg: 'https://github.com/mdo.png',
    userName: 'Wade Warren',
    orderNo: '15478256',
    Amount: "124",
    status: 'Delivered',
  },
  {
    userImg: 'https://github.com/mdo.png',
    userName: 'Jane Cooper',
    orderNo: '48987526',
    Amount: "520",
    status: 'Cancelled',
  },
  {
    userImg: 'https://github.com/mdo.png',
    userName: 'Jane Cooper',
    orderNo: '48987526',
    Amount: "520",
    status: 'Cancelled',
  },
  {
    userImg: 'https://github.com/mdo.png',
    userName: 'Jane Cooper',
    orderNo: '48987526',
    Amount: "520",
    status: 'Cancelled',
  },
  {
    userImg: 'https://github.com/mdo.png',
    userName: 'Wade Warren',
    orderNo: '15478256',
    Amount: "124",
    status: 'Delivered',
  },
  {
    userImg: 'https://github.com/mdo.png',
    userName: 'Wade Warren',
    orderNo: '15478256',
    Amount: "124",
    status: 'Delivered',
  },
  {
    userImg: 'https://github.com/mdo.png',
    userName: 'Wade Warren',
    orderNo: '15478256',
    Amount: "124",
    status: 'Delivered',
  },
]

export const feedbackData = [
  {
    userImg: 'https://github.com/mdo.png',
    name: "Jenny Wilson",
    rating: 5,
    feedback: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
  },
  {
    userImg: 'https://github.com/mdo.png',
    name: "Dianne Russell",
    rating: 4,
    feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service."
  },
  {
    userImg: 'https://github.com/mdo.png',
    name: "Devon Lane",
    rating: 2,
    feedback: "Normally wings are wings, but theirs are lean meaty and tender, and..."
  }
];