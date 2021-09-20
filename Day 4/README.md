# How Internet Works
Data Centers are large locations where a large number of servers are stored.

In order to connect to a data center, one way is to connect via Satellites. We would request some data. That request will go to satellite and then satellite will send that request to the data center. The data center will process that request and then send back the data to satellite and then eventually reaches to the user. The disadvantage of this method is that distance traveled by the data is much higher.

Electricity flows best in solids then in liquids and then in gases.

Servers are a physical devices which accepts a request and can then send back the response.

There are mainly 2 types of servers - 
1. Dedicated Servers - Servers which serve only one website.
2. Shared Servers - Servers which serve multiple websites.

Protocols - Sets the rules of data package
1. TCS/IP - Transport data
2. HTTP/HTTPS - Web Access
3. RTP - Live Video, Streaming, VOIP Calls

# Application Programming Interface (API)

API are a set of programming codes that enables data transmission between one software product and another. 
Web App -> Internet -> API -> Web Server -> Database
Web Servers are not API. We develop APIs on Web Server.

There are 3 approaches to API release policies.
1. **Private** - This API is only for use internally. This gives companies more control over their API.
2. **Partner** - This API is shared with specific business partners. This can provide additional revenue streams without compromising quality.
3. **Public** - The API is available to everyone. This allows third parties to develop apps that interact with your API and can be source of innovation.

# Types of Web APIs Protocols
1. RPC (Remote Procedure Call)
2. SOAP (Simple Object Access Protocol)
3. REST (Representational State Transfer)
4. GraphQL


## RPC (Remote Procedure Call)
- An RPC is a remote procedural call protocol. 
- They are the oldest and simplest types of APIs. 
- The goal of an RPC was for the client to execute code on a server.
- RPC can employ two different languages, JSON and XML, for coding; these APIs are dubbed JSON-RPC and XML-RPC, respectively.

## Simple Object Access Protocol
- The simple object access protocol (SOAP) is a messaging standard defined by the World Wide Web Consortium and broadly used to create web APIs, usually with XML. 
- SOAP supports a wide range of communication protocols found across the internet such as HTTP, SMTP and TCP. 
- SOAP is also extensible and style-independent, which allows developers to write SOAP APIs in varied ways and easily add features and functionality. 
- The SOAP approach defines how the SOAP message is processed, the features and modules included, the communication protocol(s) supported and the construction of SOAP messages.
-  SOAP was the first to standardize the way applications should use network connections to manage services.
-  SOAP came with strict rules, rigid standards were too heavy, and, in some situations, very resource-intensive. Except for existing on-premise scenarios, most developers now prefer developing in REST over SOAP.

## Representable State Transfer (REST) API
- REST API is a set of rules that says how do we handle request and response.
1. Simple and Standard
2. Scalable and Stateless
3. High Performance and can be Cached.

The rules of REST API are defined as follows - 
1. CREATE - POST
2. READ - GET
3. UPDATE - PUT
4. DELETE - DELETE

- Request Packet is defined as - 
    - Header
    - Param/Body
    - Operations End Point

- Response Packet is defined as - 
    - Header
    - JSON

## GraphQL
- GraphQL is a query language using one endpoint to support flexible responses.
- GraphQL is a query language and server-side runtime for application programming interfaces (APIs) that prioritizes giving clients exactly the data they request and no more. 
- GraphQL is designed to make APIs fast, flexible, and developer-friendly.
- As an alternative to REST, GraphQL lets developers construct requests that pull data from multiple data sources in a single API call. 
- Additionally, GraphQL gives API maintainers the flexibility to add or deprecate fields without impacting existing queries. 
- Developers can build APIs with whatever methods they prefer, and the GraphQL specification will ensure they function in predictable ways to clients.
- A GraphQL schema is made up of object types, which define which kind of object you can request and what fields it has. 
- As queries come in, GraphQL validates the queries against the schema. GraphQL then executes the validated queries.
