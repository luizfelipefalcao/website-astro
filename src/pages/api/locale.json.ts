import type { APIRoute } from "astro";

// Outputs: /locale.json
export const GET: APIRoute = async ({ params, request }) => {
  // console.log("This is the request header")
  // console.log(request.headers['x-vercel-ip-country']);
  return new Response(
    JSON.stringify({
      country: 'not implemented',
    })
  )
}


// Outputs: /builtwith.json
// export async function GET({ params, request }) {
//   const countryCode = request.headers['x-vercel-ip-country'];
//   console.log({ countryCode });
//   // Use the countryCode as needed
//   res.status(200).json({ country: countryCode });
//   return new Response(
//     JSON.stringify({
//       name: 'Astro',
//       url: 'https://astro.build/'
//     })
//   )
// }