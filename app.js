const express = require('express');
const { testDbConnection } = require('./config/db');
const alpRoute = require('./routes/alpRoute');
const swaggerUi = require('swagger-ui-express');
const cors = require("cors");
const swaggerFile = require('./swagger_output.json');
const { syncModels } = require('./models');
const app = express();
const Port = 3000 || 3001
app.use(express.json());
app.use(cors())  



// Use Swagger UI middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.use("/", alpRoute);

testDbConnection().then(() => {
    syncModels().then(()=>{
        app.listen(Port, () => {
            console.log("Running on " + Port);
        });
    })
});
