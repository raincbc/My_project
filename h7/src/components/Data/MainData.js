import userphoto from '../../assets/userphoto.png'
import delivery from '../../assets/delivery.svg'
import link from '../../assets/link.svg'
import discount from '../../assets/discount.png'

export const userData = {
    name: 'Alka Yagik',
    photo: userphoto
};

export const menuData = [
    {
        id: '1',
        type: 'home',
        title: "Home",
        svgName: 'home'
    },

    {
        id: '2',
        type: 'menu',
        title: "Menu",
        svgName: 'menu'
    },

    {
        id: '3',
        type: 'trending',
        title: "Trending",
        svgName: 'trending'
    },

    {
        id: '4',
        type: 'settings',
        title: "Settings",
        svgName: 'settings'
    },
];

export const deliveryData = {
    src: delivery,
    title: 'Faster delivery!',
    text: 'Know More',
    link: link,
}

export const discountData = {
    src: discount,
    title: '-50% Off',
    text: 'the full price of burgers'
}