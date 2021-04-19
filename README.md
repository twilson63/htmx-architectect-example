# A different approach to NodeJS Web Applications

NodeJS is a javascript runtime that runs javascript on the server, one of the most common use cases of NodeJS, 
is web applications. This is traditionally done using a web framework, the web framework runs an http server 
listens for requests for a given port, then processes the requests based on their path to specific javascript
functions, these functions are passed in request and response objects as arguments. Then the framework, 
usually invokes a method on the response object to send a response for the reques to the client. This design 
initially works great, but due to the architecture of servers, there is only so much CPU, memory and storage 
available, and in order to allow for more concurrent requests that exceed the ceiling of one server, as a
developer you have to begin to introduce architectural complexity. ie: proxies, load-balancers, networks,
etc to increase the ability to serve more concurrent requests. Serverless technology basically solves the
infrastructure complexity for you. Instead of you the developer having to manage these things, you 
push those concerns down to the platform, and you simply focus on the function that receives the
request and provides a response. This shift in thinking while solves some of the technical challenges
it also introduces new challenges or approaches to once solved problems.

In this tutorial we are going to look at an approach to building NodeJS Web Applications using
architect and htmx. Architect is a serverless framework that resides on top of AWS Lambda and gives the
developer all the necessary tools to build and develop nodejs applications on aws lambda. HTMX is a technology
that leverages html attributes to create dynamic web app behavior without having to drop down to javascript. 
The last technology we will mention here is tailwindcss. We will use tailwindcss to style our content in
a declarative way.

> NOTE: each function is a separate application in a sense, so when using dependencies, if you intend to share
them you will need to setup a shared directory, to place all of your shared code.

## Requirements

* NodeJS
* AWS CLI
* https://coinapi.io - Register to get free API key
* @architect/architect and aws-sdk

## Setup

``` sh
arc init
```

Modify the `app.arc` file

```

@http
get /
post /add

```

``` sh
arc init
```

Create some directories

``` sh
mkdir public src/shared
```

Add tailwind to `/public` directory

```
npx tailwindcss-cli@latest build -o public/tailwind.css
```

Add some dependencies

```
npm i node-fetch eta @architect/functions aws-sdk
```

> NOTE: Set env variable for coinAPI key

```
arc env testing KEY YOUR_API_KEY
```
