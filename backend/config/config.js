"use strict";

import { config } from "dotenv";
const assert

config();

const {
    PORT,
    HOST,
    HOST_URL,
    COOKIE_ENCRYPT_PWD,
    SQL_SERVER,
    SQL_DATABASE,
    SQL_USER,
    SQL_PASSWORD,
    OKTA_ORG_URL,
    OKTA_CLIENT_ID,
    OKTA_CLIENT_SECRET
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");
assert(HOST_URL, "HOST_URL is required");
assert(COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD is required");
assert(SQL_SERVER, "SQL_SERVER is required");
assert(SQL_DATABASE, "SQL_DATABASE is required");
assert(SQL_USER, "SQL_USER is required");
assert(SQL_PASSWORD, "SQL_PASSWORD is required");
assert(OKTA_ORG_URL, "OKTA_ORG_URL is required");
assert(OKTA_CLIENT_ID, "OKTA_CLIENT_ID is required");
assert(OKTA_CLIENT_SECRET, "OKTA_CLIENT_SECRET is required");


export const port = PORT;
export const host = HOST;
export const url = HOST_URL;
export const cookiePwd = COOKIE_ENCRYPT_PWD;
export const sql = {
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_USER,
    password: SQL_PASSWORD,
    options: {
        encrypt: sqlEncrypt,
        enableArithAbort: true
    }
};
export const okta = {
    url: OKTA_ORG_URL,
    client_id: OKTA_CLIENT_ID,
    client_secret: OKTA_CLIENT_SECRET
};