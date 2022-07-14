#!/usr/bin/env node

const agent = process.env.npm_config_user_agent;
if (!agent) {
  console.warn('please correct your package management tool.');
  process.exit(1);
}

const pname = agent.match(/^\w+/g)[0];

console.log(pname);

const argv = process.argv.slice(2);

console.log(argv);


// 非指定环境，就报错，强制中断流程