
export default
`<!DOCTYPE html>
<html>
<head>

	<title>Quick Start - Leaflet</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>

</head>
<body>

<div id="map" style="width: 100%; height: 1000px;"></div>

<script>
	const GAODE_TILE_MAP = '//maptile.tools.staging.jcbel.com/amap/{s}?x={x}&y={y}&z={z}';
	var mymap = L.map('map' ,{
		center: [29.604544, 106.489835],
		zoom: 12,
		attributionControl: false,
		layers: [
			L.tileLayer(GAODE_TILE_MAP, {
				maxNativeZoom: 18,
				maxZoom: 20,
				minZoom: 3,
				subdomains: '1234',
			}),
		],
		closePopupOnClick: false,
	});

</script>

</body>
</html>
`
