import qr from 'qrcode';

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Max-Age': '86400',
    }
  })
}

export async function onRequestPost(context) {
  const { request } = context;
  const { url } = await request.json();

  const qrImage = await qr.toString(url, { 
    type: 'svg',
    color: {
      dark: '#FFF',
      light: '#0000'
    }
  });

  const response = new Response(JSON.stringify({svg: qrImage}), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'Access-Control-Max-Age': '86400',
      'Access-Control-Allow-Headers': '*',
    }
  });

  return response;
}
