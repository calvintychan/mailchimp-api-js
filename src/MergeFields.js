export default class MergeFields {
  constructor(settings) {
    this.mailchimp = settings;
  }

  add(listId, body) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    return this.mailchimp.call('POST', `/lists/${listId}/merge-fields`, body);
  }

  list(listId, query) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    return this.mailchimp.call('GET', `/lists/${listId}/merge-fields`, query);
  }

  read(listId, mergeId, query) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!mergeId) {
      throw Error('Merge id is missing.');
    }
    return this.mailchimp.call('GET', `/lists/${listId}/merge-fields/${mergeId}`, query);
  }

  update(listId, mergeId, body) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    if (!mergeId) {
      throw Error('Merge id is missing.');
    }
    return this.mailchimp.call('PATCH', `/lists/${listId}/merge-fields/${mergeId}`, body);
  }

  delete(listId, mergeId) {
    if (!listId) {
      throw Error('List id is missing.');
    }
    return this.mailchimp.call('DELETE', `/lists/${listId}/merge-fields/${mergeId}`);
  }
}
