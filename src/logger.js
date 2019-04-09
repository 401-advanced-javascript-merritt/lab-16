'use strict';

const events = require('./event-pool.js');

events.on('success', payload => log('success', payload));
events.on('error', payload => log('success', payload));
/**
 * Listen for the events to be triggered.
 * @param  {} event
 * @param  {} payload
 * @param  {} {lettime=newDate(
 * @param  {} ;console.log('Eventheardbylogger
 * @param  {} {event
 * @param  {} time
 * @param  {} payload}
 */
function log(event, payload) {
  let time = new Date();
  console.log('Event heard by logger:' , {event, time, payload});
}