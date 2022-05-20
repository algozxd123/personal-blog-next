'use strict';

const removeMarkdown = require('remove-markdown');

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({

  async find(ctx) {
    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    if(typeof data !== 'undefined' && data.length > 0){
      if(data[0].attributes.content){
        data.map(function(post) {
          post.attributes.content = post.attributes.content.slice(0,500);
          post.attributes.content = removeMarkdown(post.attributes.content);
        });
      }
    }

    return { data, meta };
  },

  async findOne(ctx) {
    
    const { id: slug } = ctx.params;
    const { query } = ctx;
    if (!query.filters) query.filters = {}
    query.filters.slug = { '$eq': slug }
    const entity = await strapi.service('api::post.post').find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  }
}));
