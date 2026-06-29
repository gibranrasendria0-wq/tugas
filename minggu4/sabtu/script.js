const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const loading = document.getElementById('loading');
        const error = document.getElementById('error');
        const weatherCard = document.getElementById('weatherCard');

        const locationName = document.getElementById('locationName');
        const updateTime = document.getElementById('updateTime');
        const temperature = document.getElementById('temperature');
        const weatherDesc = document.getElementById('weatherDesc');
        const weatherIcon = document.getElementById('weatherIcon');
        const feelsLike = document.getElementById('feelsLike');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('windSpeed');
        const pressure = document.getElementById('pressure');

        // Weather code to icon dan deskripsi
        const weatherCodes = {
            0: { icon: '☀️', desc: 'Cerah' },
            1: { icon: '🌤️', desc: 'Sebagian Berawan' },
            2: { icon: '⛅', desc: 'Sebagian Berawan' },
            3: { icon: '☁️', desc: 'Berawan' },
            45: { icon: '🌫️', desc: 'Kabut' },
            48: { icon: '🌫️', desc: 'Kabut' },
            51: { icon: '🌦️', desc: 'Gerimis Ringan' },
            53: { icon: '🌧️', desc: 'Gerimis Sedang' },
            55: { icon: '🌧️', desc: 'Gerimis Berat' },
            61: { icon: '🌧️', desc: 'Hujan Ringan' },
            63: { icon: '🌧️', desc: 'Hujan Sedang' },
            65: { icon: '⛈️', desc: 'Hujan Berat' },
            71: { icon: '❄️', desc: 'Salju Ringan' },
            73: { icon: '❄️', desc: 'Salju Sedang' },
            75: { icon: '❄️', desc: 'Salju Berat' },
            77: { icon: '❄️', desc: 'Salju' },
            80: { icon: '🌧️', desc: 'Hujan Ringan' },
            81: { icon: '⛈️', desc: 'Hujan Sedang' },
            82: { icon: '⛈️', desc: 'Hujan Berat' },
            85: { icon: '❄️', desc: 'Salju Lebat' },
            86: { icon: '❄️', desc: 'Salju Lebat' },
            95: { icon: '⛈️', desc: 'Badai Petir' },
            96: { icon: '⛈️', desc: 'Badai Petir Berat' },
            99: { icon: '⛈️', desc: 'Badai Petir Ekstrem' }
        };

        async function fetchWeather(city) {
            if (!city.trim()) {
                showError('Masukkan nama kota!');
                return;
            }

            hideError();
            showLoading();
            hideWeatherCard();

            try {
                // Cari koordinat kota
                const geoResponse = await fetch(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
                );
                const geoData = await geoResponse.json();

                if (!geoData.results || geoData.results.length === 0) {
                    showError('Kota tidak ditemukan. Coba lagi!');
                    hideLoading();
                    return;
                }

                const { latitude, longitude, name, country } = geoData.results[0];

                // Ambil data cuaca
                const weatherResponse = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,apparent_temperature,pressure_msl&temperature_unit=celsius&wind_speed_unit=kmh&timezone=auto`
                );
                const weatherData = await weatherResponse.json();
                const current = weatherData.current;

                // Update UI
                locationName.textContent = `${name}, ${country}`;
                updateTime.textContent = new Date().toLocaleString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: 'numeric',
                    month: 'long'
                });

                const temp = Math.round(current.temperature_2m);
                temperature.textContent = `${temp}°C`;
                feelsLike.textContent = `${Math.round(current.apparent_temperature)}°C`;
                humidity.textContent = `${current.relative_humidity_2m}%`;
                windSpeed.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
                pressure.textContent = `${Math.round(current.pressure_msl)} mb`;

                const weatherInfo = weatherCodes[current.weather_code] || {
                    icon: '🌤️',
                    desc: 'Tidak Diketahui'
                };
                weatherIcon.textContent = weatherInfo.icon;
                weatherDesc.textContent = weatherInfo.desc;

                hideLoading();
                showWeatherCard();
            } catch (err) {
                console.error(err);
                showError('Gagal mengambil data. Periksa koneksi Anda!');
                hideLoading();
            }
        }

        function showLoading() {
            loading.classList.add('active');
        }

        function hideLoading() {
            loading.classList.remove('active');
        }

        function showWeatherCard() {
            weatherCard.classList.remove('hidden');
        }

        function hideWeatherCard() {
            weatherCard.classList.add('hidden');
        }

        function showError(message) {
            error.textContent = message;
            error.classList.add('active');
        }

        function hideError() {
            error.classList.remove('active');
        }

        // Event listeners
        searchBtn.addEventListener('click', () => {
            fetchWeather(searchInput.value);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                fetchWeather(searchInput.value);
            }
        });

        // Load cuaca Sidoarjo saat pertama kali
        window.addEventListener('load', () => {
            fetchWeather('Sidoarjo');
            searchInput.value = '';
        });