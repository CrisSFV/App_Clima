// ---------------------------------------------------------------
// Set de iconos SVG (estilo línea, sin dependencias externas)
// ---------------------------------------------------------------
const ICONS = {
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
  cloudSun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17a5 5 0 1 1 1.9-9.63"></path><path d="M13.5 7.5A5 5 0 0 1 18 15h-1"></path><path d="M4 21h13a4 4 0 0 0 0-8h-.26"></path><line x1="17" y1="2" x2="17" y2="4"></line><line x1="21.5" y1="4.5" x2="20" y2="6"></line><line x1="22" y1="9" x2="20" y2="9"></line></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
  fog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7a4 4 0 0 0-7.6-1.8A3.5 3.5 0 0 0 4 9"></path><path d="M5 13h14"></path><line x1="3" y1="17" x2="21" y2="17"></line><line x1="5" y1="21" x2="19" y2="21"></line></svg>',
  drizzle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 19v1"></path><path d="M8 14v1"></path><path d="M16 19v1"></path><path d="M16 14v1"></path><path d="M12 21v1"></path><path d="M12 16v1"></path><path d="M20 12a4 4 0 0 0-3.8-4A5.5 5.5 0 0 0 6 9a4 4 0 0 0-1 7.87"></path><path d="M20.5 15.87A4 4 0 0 1 16 20"></path></svg>',
  rain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16a4 4 0 0 0-3.8-6A5.5 5.5 0 0 0 6 11a4 4 0 0 0-1 7.87"></path></svg>',
  snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a4 4 0 0 0-3.8-4A5.5 5.5 0 0 0 6 9a4 4 0 0 0-1 7.87"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>',
  storm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>',
  thermometer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"></path></svg>',
  droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
  wind: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"></path><path d="M12.59 19.41A2 2 0 1 0 14 16H2"></path><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"></path></svg>',
  gauge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M12 2a10 10 0 0 0-7.35 16.76"></path><path d="M12 2a10 10 0 0 1 7.35 16.76"></path><line x1="12" y1="12" x2="15" y2="9"></line></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
  alertTriangle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
  loader: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>',
  sunrise: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="1" y1="22" x2="23" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>',
  sunset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="1" y1="22" x2="23" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline></svg>'
};

// Mapeo de códigos WMO de Open-Meteo a descripción e icono
const WEATHER_CODES = {
  0: { label: 'Despejado', icon: 'sun' },
  1: { label: 'Mayormente despejado', icon: 'cloudSun' },
  2: { label: 'Parcialmente nublado', icon: 'cloudSun' },
  3: { label: 'Nublado', icon: 'cloud' },
  45: { label: 'Niebla', icon: 'fog' },
  48: { label: 'Niebla con escarcha', icon: 'fog' },
  51: { label: 'Llovizna ligera', icon: 'drizzle' },
  53: { label: 'Llovizna moderada', icon: 'drizzle' },
  55: { label: 'Llovizna intensa', icon: 'drizzle' },
  61: { label: 'Lluvia ligera', icon: 'rain' },
  63: { label: 'Lluvia moderada', icon: 'rain' },
  65: { label: 'Lluvia intensa', icon: 'rain' },
  71: { label: 'Nevada ligera', icon: 'snow' },
  73: { label: 'Nevada moderada', icon: 'snow' },
  75: { label: 'Nevada intensa', icon: 'snow' },
  80: { label: 'Chubascos ligeros', icon: 'rain' },
  81: { label: 'Chubascos moderados', icon: 'rain' },
  82: { label: 'Chubascos violentos', icon: 'storm' },
  95: { label: 'Tormenta eléctrica', icon: 'storm' },
  96: { label: 'Tormenta con granizo ligero', icon: 'storm' },
  99: { label: 'Tormenta con granizo intenso', icon: 'storm' }
};

let currentUnit = 'C';
let lastResult = null;

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const geoBtn = document.getElementById('geo-btn');
const weatherCard = document.getElementById('weather-card');
const unitButtons = document.querySelectorAll('.unit-btn');

unitButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    unitButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentUnit = btn.dataset.unit;
    if (lastResult) renderWeather(lastResult);
  });
});

searchBtn.addEventListener('click', () => buscarPorNombre(cityInput.value.trim()));
cityInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') buscarPorNombre(cityInput.value.trim());
});
geoBtn.addEventListener('click', usarUbicacionActual);

async function buscarPorNombre(city) {
  if (!city) {
    showError('Por favor, escribe un lugar válido.');
    return;
  }

  setLoading(true);

  try {
    const geoResponse = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}&limit=1`,
      { headers: { 'Accept-Language': 'es' } }
    );

    if (!geoResponse.ok) throw new Error('Fallo en geocodificación');
    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
      showError('No se encontraron datos para esa ubicación.');
      return;
    }

    const lugar = geoData[0];
    await obtenerClima(parseFloat(lugar.lat), parseFloat(lugar.lon), city, lugar.display_name);

  } catch (error) {
    console.error(error);
    showError('Error en la comunicación con el servidor. Intenta de nuevo.');
    setLoading(false);
  }
}

function usarUbicacionActual() {
  if (!navigator.geolocation) {
    showError('Tu navegador no soporta geolocalización.');
    return;
  }

  setLoading(true, 'Obteniendo tu ubicación...');

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        // Geocodificación inversa para mostrar el nombre del lugar
        const revResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          { headers: { 'Accept-Language': 'es' } }
        );
        const revData = await revResponse.json();
        const nombre = revData.address
          ? (revData.address.city || revData.address.town || revData.address.village || revData.address.state || 'Mi ubicación')
          : 'Mi ubicación';
        const displayName = revData.display_name || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;

        await obtenerClima(latitude, longitude, nombre, displayName);
      } catch (error) {
        console.error(error);
        showError('No se pudo determinar tu ubicación.');
        setLoading(false);
      }
    },
    (error) => {
      console.error(error);
      showError('No se pudo acceder a tu ubicación. Revisa los permisos del navegador.');
      setLoading(false);
    }
  );
}

async function obtenerClima(lat, lon, city, displayName) {
  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure` +
    `&daily=sunrise,sunset&timezone=auto`
  );

  if (!weatherResponse.ok) throw new Error('Fallo al consultar clima');
  const weatherData = await weatherResponse.json();

  lastResult = {
    city,
    displayName,
    lat,
    lon,
    current: weatherData.current,
    sunrise: weatherData.daily?.sunrise?.[0],
    sunset: weatherData.daily?.sunset?.[0],
    timezone: weatherData.timezone
  };

  renderWeather(lastResult);
  setLoading(false);
}

function renderWeather(result) {
  const { city, displayName, lat, lon, current, sunrise, sunset, timezone } = result;
  const code = current.weather_code;
  const info = WEATHER_CODES[code] || { label: 'Condición desconocida', icon: 'cloud' };

  const tempC = current.temperature_2m;
  const feelsC = current.apparent_temperature;
  let tempDisplay, feelsDisplay, unitLabel;

  if (currentUnit === 'F') {
    tempDisplay = (tempC * 9 / 5 + 32).toFixed(1);
    feelsDisplay = (feelsC * 9 / 5 + 32).toFixed(1);
    unitLabel = '°F';
  } else {
    tempDisplay = tempC.toFixed(1);
    feelsDisplay = feelsC.toFixed(1);
    unitLabel = '°C';
  }

  const horaLocal = new Date(current.time).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
  const horaSunrise = sunrise ? new Date(sunrise).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }) : '—';
  const horaSunset = sunset ? new Date(sunset).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }) : '—';

  weatherCard.innerHTML = `
    <div class="weather-icon-main">${ICONS[info.icon]}</div>
    <h3>${ICONS.mapPin} ${escapeHtml(city)}</h3>
    <p class="description">${escapeHtml(displayName)}</p>

    <div class="geo-data">
      <span>Lat: ${lat.toFixed(4)}</span>
      <span>Lon: ${lon.toFixed(4)}</span>
      <span>${timezone}</span>
    </div>

    <div class="condition-title">${ICONS[info.icon]} ${info.label}</div>

    <div class="weather-grid">
      ${statCard(ICONS.thermometer, 'Temperatura', `${tempDisplay}${unitLabel}`)}
      ${statCard(ICONS.thermometer, 'Sensación', `${feelsDisplay}${unitLabel}`)}
      ${statCard(ICONS.droplet, 'Humedad', `${current.relative_humidity_2m}%`)}
      ${statCard(ICONS.wind, 'Viento', `${current.wind_speed_10m} km/h`)}
      ${statCard(ICONS.gauge, 'Presión', `${current.surface_pressure} hPa`)}
      ${statCard(ICONS.clock, 'Hora local', horaLocal)}
      ${statCard(ICONS.sunrise, 'Amanecer', horaSunrise)}
      ${statCard(ICONS.sunset, 'Atardecer', horaSunset)}
    </div>

    <div class="success-footer">${ICONS.checkCircle} Datos sincronizados en vivo con Open-Meteo</div>
  `;
}

function statCard(icon, label, value) {
  return `
    <div class="stat">
      ${icon}
      <div class="stat-text">
        <span class="stat-label">${label}</span>
        <span class="stat-value">${value}</span>
      </div>
    </div>
  `;
}

function setLoading(isLoading, message) {
  searchBtn.disabled = isLoading;
  geoBtn.disabled = isLoading;
  if (isLoading) {
    weatherCard.innerHTML = `
      <div class="spinner-icon">${ICONS.loader}</div>
      <p>${message || 'Consultando base de datos geográfica y meteorológica remota...'}</p>
    `;
  }
}

function showError(message) {
  weatherCard.innerHTML = `
    <div class="error-box">
      ${ICONS.alertTriangle}
      <p>${escapeHtml(message)}</p>
    </div>
  `;
}

// Previene inyección de HTML con datos externos (Nominatim/Open-Meteo)
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}