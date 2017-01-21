# mailchimp-api
A dead simple Mailchimp API v3 wrapper in JS.

### Usage
This can be installed via npm using:
`$ npm install mailchimp-api-js`

Then require the module in your code:
```js
const Mailchimp = require('mailchimp-api-js');

// or ES6 import
import Mailchimp from 'mailchimp-api-js';
```

Initialize by passing the Mailchimp API key and username:
```js
const mc = new Mailchimp('your-username', 'your-mailchimp-api-key');
```

### API Examples
Create a list
```js
const listId = 'f88e932bf4';
const body = {
  name: 'The Taj Mahal',
  contact: {
    company: 'Visionary Monkey',
    address: '580 Howard St.',
    city: 'San Francisco',
    zip: '94011',
    country: 'US',
  },
  permission_reminder: 'You are getting this email because you are awesome.',
  campaign_defaults: {
    from_name: 'Calvin Chan',
    from_email: 'calvin-secret@emai.com',
    subject: 'Newsletter',
    language: 'English',
  },
  email_type_option: false,
};

mc.lists.create(listId, body)
  .then((res) => {
    console.log(res);
  });
```
