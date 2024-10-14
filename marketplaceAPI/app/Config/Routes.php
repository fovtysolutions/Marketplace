<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/login', 'Home::login');
$routes->get('/canregister', 'Home::candidate_register');
$routes->get('/empregister', 'Home::employer_register');
$routes->get('/forgot', 'Home::forgot');
$routes->get('/reset', 'Home::reset',['filter'=>'isReset']);

$routes->post('/login', 'Home::login'); 
$routes->post('/canregister', 'Home::candidate_register');
$routes->post('/empregister', 'Home::employer_register');
$routes->post('/forgot', 'Home::forgot');
$routes->post('/reset', 'Home::reset');
$routes->get('recovery_password/(:any)', 'Home::recovery_password/$1');
$routes->post('/logout', 'Home::logout');


$routes->get('/aboutus', 'Pages::aboutus');
$routes->get('/blog', 'Pages::blog');
$routes->post('/blog/(:any)', 'Pages::blogdetails/$1');
$routes->get('/contactus', 'Pages::contactus');
$routes->get('/pricing', 'Pages::pricing');
$routes->get('/privacypolicy', 'Pages::privacypolicy');
$routes->get('/refundcancellation', 'Pages::refundcancellation');
$routes->get('/termcondition', 'Pages::termcondition');

$routes->post('/blog', 'Pages::blog');
$routes->post('/admin/selectoption', 'adminController::selectoption');

$routes->post('/getusersingle', 'userController::singleUser');

$routes->post('/resumephaseAlldetails/(:any)', 'candidateController::phaseAlldetails/$1');
$routes->post('/uploadresume', 'candidateController::uploadResume');
$routes->post('/resumephase1', 'candidateController::phase1');
$routes->post('/resumephase2/(:any)', 'candidateController::phase2/$1');
$routes->post('/resumephase3/(:any)', 'candidateController::phase3/$1');
$routes->post('/resumephase4', 'candidateController::phase4');
$routes->post('/resumephase5', 'candidateController::phase5');
$routes->post('/phase2add/(:any)', 'candidateController::phase2add/$1');
$routes->post('/phase3add/(:any)', 'candidateController::phase3add/$1');
$routes->post('/Phase2multifile/(:any)', 'candidateController::phase2multifile/$1');
$routes->post('/getProjectFiles/(:any)', 'candidateController::phase2multifile/$1');
$routes->post('/getCertificate/(:any)', 'candidateController::phase2Certificate/$1');
$routes->post('/getallSkills/(:any)', 'candidateController::phase2Skills/$1');
$routes->post('/getalllocation/(:any)', 'candidateController::phase5location/$1');
