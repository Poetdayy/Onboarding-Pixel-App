import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  const response = await fetch('https://impaired-lightbox-nightlife-manufacture.trycloudflare.com/', {
    headers: {
      'Accept': 'text/html',
    }
  });

  const content = await response.text();
  
  return new Response(content, {
    headers: {
      'Content-Type': 'text/html',
      'X-Frame-Options': 'ALLOW-FROM https://*.myshopify.com',
      'Content-Security-Policy': "frame-ancestors https://*.myshopify.com"
    }
  });
}; 