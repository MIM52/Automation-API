# automation-api
API Automation Test
Installation WebdriverIO
What type of testing would you like to do? E2E Testing of Web or Mobile Applications
Where is your automation backend located? On my local machine
Which environment you would like to automate? Web - web applications in the browser
With which browser should we start? Chrome
Which framework do you want to use? Mocha (https://mochajs.org/)
Do you want to use Typescript to write tests? no
Do you want WebdriverIO to autogenerate some test files? no
Which reporter do you want to use? spec
Do you want to add a plugin to your test setup? -
Would you like to include Visual Testing to your setup? -
Do you want to add a service to your test setup? -
Do you want me to run 'npm install` (Y/n) y
Requirment
Required Dependencies

axios → for request API
chai → for assertion (result validation)
npm install --save-dev wdio-intercept-service chai axios

Make .env file and add GOREST_TOKEN="your_token"

Run the code:

npx wdio
