import qr from 'qrcode';

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

  return new Response(JSON.stringify({svg: qrImage}), {
    headers: {
      'Content-Type': 'application/json',
    }
  });

}
