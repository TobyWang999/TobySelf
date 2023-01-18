const unityInstance = UnityLoader.instantiate("unityContainer", "%UNITY_WEBGL_BUILD_URL%");  

function GetCurrentPosition() {
	navigator.geolocation.getCurrentPosition(
		function(position) {
			const serializedPos = `${[position.coords.latitude, position.coords.longitude]}`
			SendMessage('LocationManager', 'ShowLocation', serializedPos); 
		}
	);
}
