// @ts-check
import { defineConfig } from 'astro/config';
import awsAmplify from 'astro-aws-amplify';
// https://astro.build/config
export default defineConfig({
    site: "technicallycolours.com",
    adapter: awsAmplify(),
    output: "server"
});


