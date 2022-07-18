#!/usr/bin/env node

const agent = process.env.npm_config_user_agent;
if (!agent) {
  console.warn('please correct your package management tool.');
  process.exit(1);
}

const current = agent.match(/^\w+/g)[0];

const withList = process.argv.slice(2);

if (withList.length === 0) {
  console.error('check your command please.');
  process.exit(1);
}

const used = withList[0];

if (used && current !== used) {
  console.error(`we need to use [${used}], but [${current}] in use now.`);
  process.exit(1);
}
