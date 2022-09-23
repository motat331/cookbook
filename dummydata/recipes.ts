import { ImageSourcePropType } from 'react-native';
type Data = {
    id: string;
    name: string;
    image: ImageSourcePropType;
}[];
const data: Data = [
    {
        id: '1',
        name: 'Strawberry Cake',
        image: require('../assets/images/items/cake.jpg').toString(),
    },
    {
        id: '2',
        name: 'Chicken & Steak Kabobs',
        image: require('../assets/images/items/kabob.jpg').toString(),
    },
    {
        id: '3',
        name: 'Pancake Stacks',
        image: require('../assets/images/items/pancakes.jpg').toString(),
    },
    {
        id: '4',
        name: 'Pineapple Pizza',
        image: require('../assets/images/items/pizza.jpg').toString(),
    },
    {
        id: '5',
        name: 'Caesar Salad',
        image: require('../assets/images/items/salad.jpg').toString(),
    },
    {
        id: '6',
        name: 'Fruit Salad',
        image: require('../assets/images/items/salad1.jpg').toString(),
    },
];

export default data;
