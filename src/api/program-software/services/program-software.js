'use strict';

/**
 * program-software service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::program-software.program-software');
