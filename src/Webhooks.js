export default class webhooks {
  constructor(settings) {
    this.mailchimp = settings;
  }

  create(listId, body) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    return this.mailchimp.call('POST', `/lists/${listId}/webhooks`, body);
  }

  batch(listId, webhookId, body) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!webhookId) {
      throw Error('Webhook id is missing.');
    }
    return this.mailchimp.call('POST', `/lists/${listId}/webhooks/${webhookId}`, body);
  }

  list(listId, query) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    return this.mailchimp.call('GET' `/lists/${listId}/webhooks`, query);
  }

  read(listId, webhookId, query) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!webhookId) {
      throw Error('Segment id is missing.');
    }
    return this.mailchimp.call('GET', `/lists/${listId}/webhooks/${webhookId}`, query);
  }

  update(listId, webhookId, body) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!webhookId) {
      throw Error('Segment id is missing.');
    }
    return this.mailchimp.call('PATCH', `/lists/${listId}/webhooks/${webhookId}`, body);
  }

  delete(listId, webhookId) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!webhookId) {
      throw Error('Segment id is missing.');
    }
    return this.mailchimp.call('DELETE', `/lists/${listId}/webhooks/${webhookId}`);
  }
}
