# Event Loop

- Different languages like Java, C++, Go were designed to run directly on the system. They were later edited to run on the browsers.
- Javascript was designed to run directly on the browsers. NodeJS later came to run directly Javascript on the system.
- Since Javascript directly runs on the browser. Browsers don't have the capacity to use whole system memory, hence the memory in the browser is very less. Hence we cannot run more than one thread in the browser, especially in older days.
- Browsers were given only limited space in older days because if browsers were given more space to run websites, it will not allow other applications to run simultaneously with browsers.
- So, the problem arised as Javascript cannot work use multithreading. To overcome this problem a concept called "Event Loop" was made to make Javascript more performant.
- Event Loop is an algorithm that handles asynchronous nature of Javascript.
- Async nature is handling of heavy tasks by keeping them on halt and performing lighter task first. When heavy task is ready to be executed, we then execute them.

## What is Javascript and how does it work?
- Javascript is a __single threaded, non-blocking asynchronous concurrent__ language.
- Concurrent means Javascript can do parallel things in some sense.
- Javascript has  
    - Call Stack
    - An Event Loop
    - A Callback Queue
    - Some other APIs.
    - And stuff.



- Javascript is compiled by V8 Engine. V8 Engine is developed by Google to compile Javascript in a vary fast manner.
- V8 Engine has only a call stack and a heap only.
- Heap's work is to allocate memory. Call Stack work is to execute functions according to execution context(order in which functions are called) according to algorithm of stack.
- One Thread == One Call Stack == One thing at a time
- Event Loop is the small code that checks if there is something in callback queue and stack is empty. If this condition is satisfied, then it pushes item from callback queue to the call stack so that it can be executed.


Event Loop : [Event Loop](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
