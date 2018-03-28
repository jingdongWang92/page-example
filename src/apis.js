import request from '@jcnetwork/util-better-request';


export function getGeoJSON() {
  return request({
    method: 'get',
    url: `https://developer.jcbel.com/apis/cartograms/5a5722342ad65d0001818866/geojson?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ODZjNmViYWNiZGE4MDAwMDFjNmQyY2IiLCJpYXQiOjE1MTczMDExODQsIm5iZiI6MTUxNzMwMTE4NCwiZXhwIjoxNjAzNzAxMTg0LCJpc3MiOiI1ODZjNmViYWNiZGE4MDAwMDFjNmQyY2IiLCJqdGkiOiJLcVFtVjdCRno3d1RCSVB-ZENqVXhUIn0.qbrD6T43XPie_hB1t-3J1BzLgZGMl0zF_kS0WRRqfxs`
  });
}
