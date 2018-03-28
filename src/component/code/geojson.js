
export default
`<!DOCTYPE html>
<html>
<head>

	<title>Quick Start - Leaflet</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin=""/>
	<link rel="stylesheet" href="https://leaflet.github.io/Leaflet.label/leaflet.label.css" />
	<script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==" crossorigin=""></script>
	<script src="https://leaflet.github.io/Leaflet.label/leaflet.label.js"></script>


</head>
<body>


<div id="map" style="width: 100%; height: 1000px;"></div>
<script src="geojson.js" type="text/javascript"></script>

<script>

	const GAODE_TILE_MAP = '//maptile.tools.staging.jcbel.com/amap/{s}?x={x}&y={y}&z={z}';
	var mymap = L.map('map' ,{
      center: [29.60442, 106.573363],
      zoom: 18,
      attributionControl: false,
      closePopupOnClick: false,
    });

	const geoJSONLayer = L.geoJSON([geojson], {
		style: function(feature) {
			return {
				fill: true,
				fillColor: feature.properties['style:fill:color'],
				color: feature.properties['style:stroke:color'],
				weight: feature.properties['style:stroke:width'],
			}
		},
		onEachFeature: function(feature, layer) {
			if(feature.properties.name) {
				var labelLocation;
				if(feature.geometry.type === 'Polygon') {
					labelLocation = layer.getBounds().getCenter();
				} else if(feature.geometry.type === 'Point') {
					labelLocation = feature.geometry.coordinates;
				}
				var labelMarker = L.marker(labelLocation, {
					icon: L.divIcon({
						className: 'label',
						html: feature.properties.name,
						iconSize: [100, 40]
					})
				}).addTo(mymap);
			}
		}
	}).addTo(mymap);

	mymap.fitBounds(geoJSONLayer.getBounds());

</script>

</body>
</html>
`
