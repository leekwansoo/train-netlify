exports.handler = async (event, context) => {
  
    /* By default, the callback waits until the runtime event loop is empty before freezing the process and returning the results to the caller. Setting this property to false requests that AWS Lambda freeze the process soon after the callback is invoked, even if there are events in the event loop. AWS Lambda will freeze the process, any state data, and the events in the event loop. Any remaining events in the event loop are processed when the Lambda function is next invoked, if AWS Lambda chooses to use the frozen process. */
   context.callbackWaitsForEmptyEventLoop = false;
   
   const response = {
     statusCode: 200,
      body:JSON.stringify({
           message: "Hello World!"
       }),
   }
 
 
   return response;
 };