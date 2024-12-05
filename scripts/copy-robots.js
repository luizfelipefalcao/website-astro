import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: process.env.ENV_PATH || '.env' });

const siteName = process.env.SITE_NAME;
const baseUrl = process.env.BASE_URL;

console.log("SITE_NAME:", process.env.SITE_NAME);
console.log("BASE_URL:", process.env.BASE_URL);

if (!siteName || !baseUrl) {
  throw new Error("SITE_NAME and BASE_URL environment variables must be set.");
}

// Define paths
const templatePath = path.resolve('./public/robots.template.txt'); // Template file path
const outputPath = path.resolve(`dist-${process.env.SITE_NAME}/robots.txt`);              // `dist-${process.env.SITE_NAME}/robots.txt`

// Debug: Log environment variables and paths
console.log(`Generating robots.txt for ${siteName}`);
console.log(`Using BASE_URL: ${baseUrl}`);
console.log(`Template path: ${templatePath}`);
console.log(`Output path: ${outputPath}`);

// Check if the template file exists
if (!fs.existsSync(templatePath)) {
  throw new Error(`Template file "${templatePath}" does not exist.`);
}

// Read the template file
const templateContent = fs.readFileSync(templatePath, 'utf8');

// Replace placeholders in the template with site-specific values
const customizedContent = templateContent.replace(/{{BASE_URL}}/g, baseUrl);

// Ensure the output directory exists
const outputDir = path.dirname(outputPath);
fs.mkdirSync(outputDir, { recursive: true });

// Write the customized robots.txt to the output directory
fs.writeFileSync(outputPath, customizedContent);

console.log(`Customized robots.txt generated successfully for ${siteName}`);
