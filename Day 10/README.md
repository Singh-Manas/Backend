## Cloud Providers

Cloud providers provide on demand cloud computing components like infrastructure, application or storage services.
They have buyed very large systems and have made accessible to those for public use and they charge according to the service used.

## Steps for Deploying an app on AWS - 
1. Create an account on AWS / Login if you already have an account.
2. Launch a Virtual Machine (EC2 instance).
    - Choose AMI (Ubuntu 20.04)
    - Choose Instance Type (t2.micro)
    - Configure the instance (Changing no of instance, Network Group, etc)
    - Add Storage (Keep it to default)
    - Add Tags (Keep default)
    - Configure Security Group (Need to open TCP port for public access)
    - Review
3. Create or Select a key pair (This key can be used for authentication)
4. Launch Instance
5. Connect Instance via SSH
6. Install NVM (Node Version Manager)
7. Install NodeJS 
    - nvm install v12 (For installing v12)
    - nvm ls (For viewing all versions of Node)
    - nvm use v15 (For switching to 15 version)
8.  Clone your repository
9.  Run your app
    - For running app on different port that is defined in file. Write `PORT=8080 npm start`
10. For running Node application in background, we can use `forever` package
    - For installing - `npm install forever`
    - for running app in background - `forever start ./bin/www`
    - `forever list` - gives the list of applications running on forever
    - `forever stopall` - Used to stop all processes
