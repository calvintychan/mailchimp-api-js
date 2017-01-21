export default class Segments {
  constructor(settings) {
    this.mailchimp = settings;
  }

  create(listId, body) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    return this.mailchimp.call('POST', `/lists/${listId}/segments`, body);
  }

  batch(listId, segmentId, body) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!segmentId) {
      throw Error('Segment id is missing.');
    }
    return this.mailchimp.call('POST', `/lists/${listId}/segments/${segmentId}`, body);
  }

  list(listId, query) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    return this.mailchimp.call('GET' `/lists/${listId}/segments`, query);
  }

  read(listId, segmentId, query) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!segmentId) {
      throw Error('Segment id is missing.');
    }
    return this.mailchimp.call('GET', `/lists/${listId}/segments/${segmentId}`, query);
  }

  update(listId, segmentId, body) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!segmentId) {
      throw Error('Segment id is missing.');
    }
    return this.mailchimp.call('PATCH', `/lists/${listId}/segments/${segmentId}`, body);
  }

  delete(listId, segmentId) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!segmentId) {
      throw Error('Segment id is missing.');
    }
    return this.mailchimp.call('DELETE', `/lists/${listId}/segments/${segmentId}`);
  }
}
