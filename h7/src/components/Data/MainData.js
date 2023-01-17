import userphoto from '../../assets/userphoto.svg'
import home from '../../assets/home.svg'
import menu from '../../assets/menu.svg'
import trending from '../../assets/trending.svg'
import settings from '../../assets/settings.svg'
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
        src: home
    },

    {
        id: '2',
        type: 'menu',
        title: "Menu",
        src: menu
    },

    {
        id: '3',
        type: 'trending',
        title: "Trending",
        src: trending
    },

    {
        id: '4',
        type: 'settings',
        title: "Settings",
        src: settings
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