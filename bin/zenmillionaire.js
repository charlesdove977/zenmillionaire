#!/usr/bin/env node
/**
 * zenmillionaire CLI
 *
 * Installs the zenmillionaire Claude Code skill into either the user-global
 * directory (~/.claude/skills/zenmillionaire/) or the current project's
 * ./.claude/skills/zenmillionaire/ directory.
 *
 * Optionally also drops a command stub in the commands/ directory so the skill
 * is reachable as an explicit /zenmillionaire slash command.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'zenmillionaire';
const PACKAGE_ROOT = path.resolve(__dirname, '..');
const SKILL_SRC = path.join(PACKAGE_ROOT, 'skill');
const PKG = require(path.join(PACKAGE_ROOT, 'package.json'));

function userClaudeDir() {
  return path.join(os.homedir(), '.claude');
}

function projectClaudeDir() {
  return path.join(process.cwd(), '.claude');
}

function resolveSkillTarget(opts) {
  const base = opts.project ? projectClaudeDir() : userClaudeDir();
  return path.join(base, 'skills', SKILL_NAME);
}

function resolveCommandsDir(opts) {
  const base = opts.project ? projectClaudeDir() : userClaudeDir();
  return path.join(base, 'commands');
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else if (entry.isFile()) {
      fs.copyFileSync(s, d);
    }
  }
}

function rmrf(target) {
  if (!fs.existsSync(target)) return;
  fs.rmSync(target, { recursive: true, force: true });
}

function commandStub() {
  return `---
name: ${SKILL_NAME}
description: A cited money advisor. Talk to one advisor, convene a council of them, or diagnose your money blueprint. Every claim traced to a real book or talk.
---

This command routes to the \`${SKILL_NAME}\` skill.

If the skill is installed, the Skill tool will load it automatically. Otherwise run:

    npx ${SKILL_NAME} install
`;
}

function writeCommandStub(opts) {
  const dir = resolveCommandsDir(opts);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${SKILL_NAME}.md`);
  fs.writeFileSync(file, commandStub());
  return { file };
}

function removeCommandStub(opts) {
  const file = path.join(resolveCommandsDir(opts), `${SKILL_NAME}.md`);
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    return { removed: true, file };
  }
  return { removed: false, file };
}

function install(opts) {
  const target = resolveSkillTarget(opts);
  const exists = fs.existsSync(target);

  if (exists && !opts.force) {
    console.error(
      `[${SKILL_NAME}] Skill already installed at:\n  ${target}\n\n` +
        `Run with --update to overwrite, or --uninstall to remove first.`
    );
    process.exitCode = 1;
    return;
  }

  if (exists && opts.force) {
    rmrf(target);
  }

  copyDir(SKILL_SRC, target);

  console.log(`[${SKILL_NAME}] Skill installed:`);
  console.log(`  ${target}`);

  if (opts.withCommands) {
    const result = writeCommandStub(opts);
    console.log(`[${SKILL_NAME}] Command stub written:`);
    console.log(`  ${result.file}`);
  }

  console.log('');
  console.log(`Invoke from Claude Code with:  /${SKILL_NAME}`);
  console.log(`Or just ask for money advice ("talk to the council", "should I raise my prices", "money mindset").`);
}

function uninstall(opts) {
  const target = resolveSkillTarget(opts);
  let removedSkill = false;
  if (fs.existsSync(target)) {
    rmrf(target);
    removedSkill = true;
  }

  const cmdResult = opts.withCommands ? removeCommandStub(opts) : { removed: false };

  if (!removedSkill && !cmdResult.removed) {
    console.log(`[${SKILL_NAME}] Nothing to uninstall at ${target}`);
    return;
  }

  if (removedSkill) console.log(`[${SKILL_NAME}] Removed skill: ${target}`);
  if (cmdResult.removed) console.log(`[${SKILL_NAME}] Removed command stub: ${cmdResult.file}`);
}

function where(opts) {
  console.log(resolveSkillTarget(opts));
}

function help() {
  console.log(`zenmillionaire v${PKG.version}

Install the zenmillionaire Claude Code skill.

Usage:
  npx zenmillionaire <command> [flags]

Commands:
  install         Install skill to ~/.claude/skills/${SKILL_NAME}/
  update          Same as install, but overwrite if already present
  uninstall       Remove skill from the target directory
  where           Print the target install path and exit
  --help, -h      Show this message
  --version, -v   Show version

Flags:
  --project       Install into the current project's ./.claude/ instead of ~/.claude/
  --with-commands Also write a /${SKILL_NAME} slash command stub

Examples:
  npx zenmillionaire install
  npx zenmillionaire install --project
  npx zenmillionaire install --with-commands
  npx zenmillionaire update
  npx zenmillionaire uninstall --with-commands

Skill name once installed: /${SKILL_NAME}
Repo:                       https://github.com/charlesdove977/zenmillionaire
`);
}

function parseArgs(argv) {
  const opts = {
    project: false,
    withCommands: false,
    force: false
  };
  let cmd = null;
  for (const arg of argv) {
    if (arg === '--project') opts.project = true;
    else if (arg === '--with-commands' || arg === '--commands') opts.withCommands = true;
    else if (arg === '--update' || arg === '--force' || arg === '-f') opts.force = true;
    else if (arg === '--help' || arg === '-h') cmd = '__help';
    else if (arg === '--version' || arg === '-v') cmd = '__version';
    else if (!arg.startsWith('-') && cmd === null) cmd = arg;
  }
  return { cmd, opts };
}

function main() {
  const { cmd, opts } = parseArgs(process.argv.slice(2));

  switch (cmd) {
    case 'install':
      install(opts);
      return;
    case 'update':
      opts.force = true;
      install(opts);
      return;
    case 'uninstall':
      uninstall(opts);
      return;
    case 'where':
      where(opts);
      return;
    case '__version':
      console.log(PKG.version);
      return;
    case '__help':
    case null:
    default:
      help();
      return;
  }
}

main();
