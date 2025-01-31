import { Router } from "express";
const router = Router();
router.get('/', (req, res) => res.render('home', {title: 'Portafolio Sebastian'}));
router.get('/about', (req, res) => res.render('about', {title: 'Sobre Mi'}));
router.get('/contact', (req, res) => res.render('contact', {title: 'Contacto'}));
router.get('/tecnologias', (req, res) => res.render('tecnologias', {title: 'Tecnologias'}));
export default router;