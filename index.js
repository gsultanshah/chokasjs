const homeController = require('./controllers/homeController.js');
 
 
 
exports.handler = async (event, context, callback) => { 
   
    const method = event.requestContext.http.method
    
    let response = {}
    
    switch(method) {
        
        case "GET": 
        response = await homeController.getHelloDoly();
        
        break;
        
        case "POST": 
        response = await homeController.postHelloDoly(); 
        
        break;
        
        case "PUT": 
        response = await homeController.putHelloDoly(); 
     
        break;
      
        default:
            response = {status: 404, error: 'Method not found'}
    }
    
    return response
}