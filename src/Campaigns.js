export default class Campaigns {
  constructor(settings) {
    this.mailchimp = settings;
  }

  create(body) {
    const requiredFields = ['type', 'settings'];
    requiredFields.forEach((field) => {
      if (!body[field]) {
        throw Error(`${field} param is required.`);
      }
    });
    return this.mailchimp.call('POST', '/campaigns', body);
  }

  list(query) {
    return this.mailchimp.call('GET', '/campaigns', query);
  }

  read(campaignId, query) {
    if (!campaignId) {
      throw Error('Campaign id is missing.');
    }
    return this.mailchimp.call('GET', `/campaigns/${campaignId}`, query);
  }

  update(campaignId, body) {
    if (!campaignId) {
      throw Error('Campaign id is missing.');
    }
    return this.mailchimp.call('PATCH', `/campaigns/${campaignId}`, body);
  }

  delete(campaignId) {
    if (!campaignId) {
      throw Error('Campaign id is missing.');
    }
    return this.mailchimp.call('DELETE', `/campaigns/${campaignId}`);
  }
}
