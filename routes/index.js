var express = require('express');
var router = express.Router();

var db = require('../queries');
/**
 * @swagger
 * definitions:
 *   tshirt:
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       picture:
 *         type: integer
 *       price:
 *         type: string
 */
/**
 * @swagger
 * /api/tshirt:
 *   get:
 *     tags:
 *       - tshirt
 *     description: Returns all tshirt
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of tshirt
 *         schema:
 *           $ref: '#/definitions/tshirt'
 */
router.get('/api/tshirt', db.getAllTshirt);
/**
 * @swagger
 * /api/tshirt/{id}:
 *   get:
 *     tags:
 *       - tshirt
 *     description: Returns a single tshirt
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Tshirt's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single tshirt
 *         schema:
 *           $ref: '#/definitions/tshirt'
 */
router.get('/api/tshirt/:id', db.getSingleTshirt);
/**
 * @swagger
 * /api/tshirt:
 *   post:
 *     tags:
 *       - tshirt
 *     description: Creates a new tshirt
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tshirt
 *         description: tshirt object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/tshirt'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/tshirt', db.createTshirt);


module.exports = router;