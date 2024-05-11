import { config } from 'dotenv';
config();
export const PUBLIC_EMAIL_JS_SERVICE_ID = process.env
  .NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string;
export const PUBLIC_EMAIL_JS_TEMPLATE_ID = process.env
  .NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string;
export const PUBLIC_EMAIL_JS_PUBLIC_KEY = process.env
  .NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string;
