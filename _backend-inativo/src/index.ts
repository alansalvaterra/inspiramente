import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // Middleware para habilitar CORS - Cross-Origin Resource Sharing
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    Routes.forEach(route => {
        (app as any)[route.method](route.route, async (req: Request, res: Response, next: Function) => {
          try {
            const result = await (new (route.controller as any))[route.action](req, res, next);
            if (result !== null && result !== undefined) {
              if (!res.headersSent) {  // Evite enviar múltiplas respostas
                res.json(result);
              }
            } else {
              if (!res.headersSent) {
                res.sendStatus(404);
              }
            }
          } catch (error) {
            console.error('Error processing route:', error);
            if (!res.headersSent) {
              res.sendStatus(500);
            }
          }
        });
      });

    // start express server
    app.listen(3000)

    console.log("Express server has started on port 3000.")


}).catch(error => console.log(error))
