export default class Lists {
  constructor(settings) {
    this.mailchimp = settings;
  }

  create(body) {
    const requiredFields = ['name', 'contact', 'permission_reminder', 'campaign_defaults'];
    requiredFields.forEach((field) => {
      if (!body[field]) {
        throw Error(`${field} param is required.`);
      }
    });

    return this.mailchimp.call('POST', '/lists', body);
  }

  list(query) {
    return this.mailchimp.call('GET', '/lists', query);
  }

  read(id, query) {
    if (!id) {
      // Handle error
    }
    return this.mailchimp.call('GET', `/lists/${id}`, query);
  }

  update(id, body) {
    if (!id) {
      // Handle error
    }
    return this.mailchimp.call('PATCH', `/lists/${id}`, body);
  }

  delete(id) {
    return this.mailchimp.call('DELETE', `/lists/${id}`);
  }

  batch(id, body) {
    if (!body.members) {
      throw Error('members param is required');
    }
    return this.mailchimp.call('POST', `/lists/${id}`, body);
  }
}
