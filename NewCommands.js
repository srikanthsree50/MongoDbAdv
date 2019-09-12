

// RETURNING CURSOR OBJECT WITH ALL RESULTS AT ONCE FOREACH

// db.flightData.find().forEach((passData) => {
 //   printjson(passData)
//})

//---------------------------------------------------------------------
              // PROJECTION 
//  PRINT ONLY NAME FIELD using 1 not printing using 0

// db.flights.find({},{name:1,id:0_}) 
//----------------------------------------------------
                  // EMBEDDED DOCUMENTS
    //db.flights.updateMany({}, {$set:{status:true,details:{embedded:true}}})
    
                       // ARRAYS
              //               //db.flights.find({}, {$set:{hobbies:['hello','world']})
    //-----------------------------------------------------------------
                    // ACCESSING STRUCTURED DATA
                      //db.flights.find({}).hobbies
                                          //db.flights.find({hobbies:'sports'})
//-----------------------------------------------------------------------