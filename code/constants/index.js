const constants = {
  help: `
  These are common commands used in various situations:
  
  folder_structure:    only creates folder structure. Note: might ruin your current codebase, if any!
  
  insert_starter_code: inserts in starter code.
  
  create_scripts:      creates basic scripts.
  
  create_middlewares:  creates middlewares.
  
  create_configs:      create configs.
  
  create_all:         for new projects does (folder structure, starter code, basic scripts, middlewares, configs).
  
  setup_crud:          creates CRUD for given entity e.g. setup_crud "blogs"
  `,
  invalidCommand: `Invalid command, try "help"`,
};

const folderNames = [
  "config",
  "controllers",
  "data",
  "documentation",
  "dto",
  "emails",
  "helpers",
  "middlewares",
  "public",
  "repositories",
  "routes",
  "validations",
];

const fileNames = [
  ".env",
  ".env.dev",
  ".env.qa",
  ".env.stage",
  "jsconfig.json",
  ".eslintrc.json",
  ".gitignore",
  ".prettierrc.json",
  "app.js",
  "package-lock.json",
  "package.json",
  "README.md",
  "server.js",
];

const middlewareFileNames = [
  { type: "confirm", name: "authRequired", message: "Want authRequired.middleware.js?" },
  { type: "confirm", name: "restrictToAdmins", message: "Want restrictToAdmins.middleware.js?" },
  { type: "confirm", name: "checkDuplicateEmail", message: "Want checkDuplicateEmail.middleware.js?" },
  { type: "confirm", name: "uploadPicture", message: "Want uploadPicture.middleware.js?" },
  { type: "confirm", name: "validateRequest", message: "Want validateRequest.middleware.js?" },
];

const configFileNames = [
  { type: "confirm", name: "cloudinary", message: "Want cloudinary.config.js?" },
  { type: "confirm", name: "nodemailer", message: "Want nodemailer.config.js?" },
  { type: "confirm", name: "logger", message: "Want logger.config.js?" },
];

const scriptFileNames = [{ type: "confirm", name: "truncate-tables", message: "Want truncate-tables.js?" }];

module.exports = { constants, folderNames, fileNames, middlewareFileNames, configFileNames, scriptFileNames };
