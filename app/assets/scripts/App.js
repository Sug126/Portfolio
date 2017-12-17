import 'picturefill';
import "../../temp/scripts/modernizr";


import MobileMenu from './modules/MobileMenu';
import Modal from './modules/Modal';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';




var mobileMenu = new MobileMenu();
var modal = new Modal();
new RevealOnScroll($(".Project-item"), "85%");
new RevealOnScroll($(".About-item"), "60%");
var stickyHeader = new StickyHeader();