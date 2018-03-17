export default class Members {
  constructor(settings) {
    this.mailchimp = settings;
  }

  add(listId, body) {
    if (!listId) {
      throw Error('List id is missing.');
    }

    const requiredFields = ['email_address', 'status'];
    requiredFields.forEach((field) => {
      if (!body[field]) {
        throw Error(`${field} param is required.`);
      }
    });

    return this.mailchimp.call('POST', `/lists/${listId}/members`, body);
  }

  list(listId, query = {}) {
    if (!listId) {
      throw Error('List id is missing.');
    }

    return this.mailchimp.call('GET', `/lists/${listId}/members`, query);
  }

  read(listId, subscriberHash, query = {}) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!subscriberHash) {
      throw Error('Subscriber hash is missing.');
    }

    return this.mailchimp.call('GET', `/lists/${listId}/members/${subscriberHash}`, query);
  }

  update(listId, subscriberHash, body) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!subscriberHash) {
      throw Error('Subscriber hash is missing.');
    }

    return this.mailchimp.call('PATCH', `/lists/${listId}/members/${subscriberHash}`, body);
  }

  delete(listId, subscriberHash) {
    if (!listId) {
      throw Error('List id is missing.');
    }

    return this.mailchimp.call('DELETE', `/lists/${listId}/members/${subscriberHash}`);
  }
}
