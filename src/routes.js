
import Home from './views/Home.vue';
import ContactForm from './components/ContactForm.vue';
import SlideShow from './components/SlideShow.vue';




export default [
	{ name: 'home', path: '/', component: Home },
    { name: 'contactform', path: '/contactform', component: ContactForm},
    { name: 'slideshow', path: '/', component: SlideShow},
   
   
];
