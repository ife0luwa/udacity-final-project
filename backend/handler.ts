"use strict";

module.exports.hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless v3.031 welcome kooriusdev Your function executed successfully!",
                input: event,
            },
            null,
            2
        ),
    };    
};