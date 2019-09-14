const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        

       const {query: params} = req //THIS IS DESTRUCTURING

        // axios.get("https://www.googleapis.com/books/v1/volumes", {
        //     params
        // }).then(
        //     results => {
        //         console.log(results);
        //         res.json(results)
        //     }

        // )


        console.log( req.query)
        axios
        .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
        .then( results =>{ 
            console.log(results.data)
            res.json(results.data)
        
        })
        .catch(err => res.status(422).json(err));
    }
}