'use strict';

/**
 * resume-builder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resume-builder.resume-builder');
