document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // LISTA DE CARGOS - Edita aqui para agregar o quitar cargos
    // ============================================================
    const CARGOS_LIST = [
        '1.1 Exceso de Velocidad',
        '1.2 Estacionamiento Indebido',
        '1.3 Carreras Ilegales',
        '1.4 Conducción Temeraria',
        '1.5 Maniobrar sin las medidas de seguridad pertinentes',
        '1.6 Portar neones prendidos en circulación',
        '1.7 Conducir sin licencia',
        '1.8 Conducir en dirección contraria',
        '1.9 Licencias de piloto',
        '1.10 Operación imprudente de una aeronave',
        '1.11 Zonas de vuelo restringidas',
        '1.12 Conducir en estado de ebriedad, estupefacientes o distracción',
        '1.13 Conducción temeraria aérea o marítima',
        '1.14 Evasión de la justicia causando perjuicios',
        '1.15 Maniobrar sin la licencia de conducción pertinente',
        '2.1 Hurto',
        '2.2 Robo',
        '2.3 Robo a establecimiento leve',
        '2.4 Robo a establecimiento moderado',
        '2.5 Robo a establecimiento grave',
        '2.6 Robo a la propiedad pública',
        '2.7 Impago de Deudas',
        '2.8 Robo a propiedad privada',
        '2.9 Allanamiento de Morada',
        '2.10 Fraude/Estafa',
        '2.11 Robo a sucursal bancaria',
        '2.12 Daños a la propiedad pública',
        '2.13 Tráfico de objetos robados',
        '2.14 Daños a la propiedad privada',
        '2.15 Vandalismo',
        '2.16 Evasión de pago en multas',
        '2.17 Evasión de impuestos sobre las ventas',
        '2.18 Uso indebido de material proporcionado por el Estado',
        '2.19 Robo a mano armada',
        '2.20 Juego ilegal',
        '2.21 Robo de vehículo',
        '2.22 Daños contra la propiedad intelectual',
        '3.1 Exhibicionismo',
        '3.2 Abuso o profanación de un cadáver',
        '3.3 Complicidad de Delito',
        '3.4 Manifestación Ilegal',
        '3.5 Mal uso de las frecuencias de radio o líneas directas de seguridad pública o gubernamentales',
        '3.6 Rostro Oculto',
        '3.7 Incitar un motín',
        '3.8 Cómplice de un motín',
        '3.9 Asamblea ilegal',
        '3.10 Alteración del orden público',
        '4.1 Crueldad animal',
        '4.2 Extorsión o Coacción',
        '4.3 Tentativa de Asesinato',
        '4.4 Homicidio',
        '4.5 Homicidio en primer grado',
        '4.6 Homicidio en segundo grado',
        '4.7 Homicidio en tercer grado',
        '4.8 Asesinato',
        '4.9 Intento de Secuestro',
        '4.10 Agresión Sexual',
        '4.11 Secuestro',
        '4.12 Tortura',
        '4.13 Violación',
        '4.14 Captura, tenencia o afectación de especie protegida',
        '5.1 Agresión',
        '5.2 Amenazas',
        '5.3 Evasión de Responsabilidades',
        '5.5 Acoso',
        '5.6 Omisión al deber de Socorro',
        '5.7 Peleas callejeras o ilegales',
        '5.8 Injurias y Calumnias',
        '5.9 Chantaje',
        '5.10 Suplantación de identidad',
        '5.11 Falsedad Documental',
        '6.1 Venta de alcohol a menores de edad',
        '6.2 Comercialización ilegal de alcohol',
        '6.3 Posesión de tejido corporal humano',
        '6.4 Posesión ilegal de sustancias estupefacientes',
        '6.5 Posesión ilegal de sustancias estupefacientes con intención de venta',
        '6.6 Venta de drogas legales',
        '6.7 Contaminación en la vía pública',
        '6.8 Conducción bajo la influencia de una sustancia controlada',
        '6.9 Intoxicación pública',
        '6.10 Tráfico de drogas',
        '7.1 Vigilantismo',
        '7.2 Ignorar citaciones judiciales',
        '7.3 Hacer caso omiso a las indicaciones judiciales',
        '7.4 Denuncia Falsa',
        '7.5 Falso Testimonio',
        '7.6 Realizar un ejercicio sin la titulación pertinente',
        '7.7 Soborno',
        '7.8 Agresión a un funcionario público',
        '7.9 Irrumpir en infraestructuras gubernamentales',
        '7.10 Encubrimiento de un delito',
        '7.11 Intento de Soborno',
        '7.13 Huida de la Justicia',
        '7.14 Resistencia al arresto',
        '7.15 Desobediencia a la Justicia',
        '7.16 Obstrucción de la justicia',
        '7.17 Resistencia a la identificación',
        '8.1 Robo a sucursal bancaria federal',
        '8.2 Lavado de dinero',
        '8.3 Manipulación de pruebas',
        '8.4 Crimen organizado',
        '8.5 Fuga de una estructura penitenciaria',
        '8.6 Homicidio a funcionario público',
        '8.7 Tentativa de Asesinato a un funcionario público',
        '8.8 Asesinato Múltiple',
        '8.9 Homicidio Múltiple',
        '8.10 Fabricación de narcóticos',
        '8.11 Tráfico de estupefacientes',
        '8.12 Poseer un lugar con el propósito de vender o distribuir',
        '8.13 Terrorismo',
        '8.14 Tentativa de Asesinato Múltiple',
        '8.15 Malversación de fondos económicos o desfalco',
        '8.16 Estafa sistemática',
        '8.17 Suplantación de identidad gubernamental',
        '8.18 Conspiración',
        '8.19 Irrumpir en infraestructuras federales',
        '8.20 Espionaje',
        '8.21 Asesinato a un funcionario público',
        '8.22 Secuestro a un funcionario público',
        '8.23 Tortura a un funcionario público',
        '8.24 Porte de armas largas de fuego',
        '8.25 Esclavitud',
        '8.26 Tráfico de influencias',
        '8.27 Abuso de autoridad',
        '8.28 Venta de material gubernamental',
        '8.29 Desertar del servicio militar',
        '8.30 Absentismo del servicio militar',
        '8.31 Falso Testimonio',
        'Art. 8.32 Proxenetismo',
        'Art. 8.33 Falsificación de Documentos Gubernamentales',
        'Art. 8.34 Robo a instituciones federales',
        'Art. 8.35 Aceptación de Soborno',
        'Art. 8.36 Manipulación de pruebas',
        'Art. 8.37 Neglicencia médica',
        'Art. 8.38 Difusión de información confidencial',
        'Art. 8.39 Encubrimiento de un delito por parte del funcionariado',
        'Art. 8.40 Omisión al deber de Socorro',
        'Art. 8.41 Consumo de alcohol o sustancias estupefacientes en servicio',
        'Art. 8.42 Intento de Secuestro a un funcionario público',
        'Art. 8.43 Tráfico de drogas a gran escala',
        'Art. 8.44 Tráfico de armas de fuego de gran calibre',
        'Art. 8.45 Uso indebido de material gubernamental por parte de un funcionario público',
        'Art. 9.1 Exhibir un arma de fuego o un arma blanca',
        'Art. 9.2 Portar un arma de fuego o algun componente relacionado',
        'Art. 9.3 Posesión de modificaciones de armas',
        'Art. 9.4 Posesión de una armadura corporal ilegal',
        'Art. 9.5 Posesión de una armadura corporal para fines delictivos',
        'Art. 9.6 Asalto con arma mortal',
        'Art. 9.7 Posesión de armas de fuego ilegales',
        'Art. 9.8 Transferencia o venta ilegal de un arma de fuego',
        'Art. 9.9 Tráfico de armas de fuego',
        'Art. 9.10 Posesión de un arma blanca superior a 2 pulgadas',
        'Art. 9.11 Portar un arma de fuego bajo efectos de embriaguez y/o sustancias estupefacientes',
    ];
    // ============================================================

    // --- State and DOM Elements ---
    const appContainer = document.getElementById('app-container');
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');
    const clockElement = document.getElementById('clock');

    // --- Data Management ---
    function getFichas() {
        const data = localStorage.getItem('mdc_fichas');
        return data ? JSON.parse(data) : [];
    }

    function saveFicha(ficha) {
        const fichas = getFichas();
        fichas.push(ficha);
        localStorage.setItem('mdc_fichas', JSON.stringify(fichas));
    }

    function getFichaById(id) {
        const fichas = getFichas();
        return fichas.find(f => f.identificacion === id);
    }

    function getFichaByNameAndSurname(nombre, apellido) {
        const fichas = getFichas();
        return fichas.find(f => f.nombre.toLowerCase() === nombre.toLowerCase() && f.apellido.toLowerCase() === apellido.toLowerCase());
    }

    function getArrestos() {
        const data = localStorage.getItem('mdc_arrestos');
        return data ? JSON.parse(data) : [];
    }

    function saveArresto(arresto) {
        const arrestos = getArrestos();
        arrestos.push(arresto);
        localStorage.setItem('mdc_arrestos', JSON.stringify(arrestos));
    }

    // --- Taskbar and Start Menu ---
    function updateClock() {
        const now = new Date();
        const day = String(now.getUTCDate()).padStart(2, '0');
        const month = String(now.getUTCMonth() + 1).padStart(2, '0');
        const year = now.getUTCFullYear();
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');

        const dateEl = document.getElementById('clock-date');
        const timeEl = document.getElementById('clock-time');

        if (dateEl) dateEl.textContent = `${day}/${month}/${year}`;
        if (timeEl) timeEl.textContent = `${hours}:${minutes}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    startButton.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target) && !startButton.contains(e.target)) {
            startMenu.classList.add('hidden');
        }
    });

    // Navigation handlers
    document.querySelectorAll('[data-route]').forEach(el => {
        el.addEventListener('click', () => {
            const route = el.getAttribute('data-route');
            startMenu.classList.add('hidden'); // Close start menu on navigate
            navigate(route);
        });
    });

    function updateActiveTaskbarIcon(route) {
        document.querySelectorAll('.taskbar-icon').forEach(icon => {
            icon.classList.remove('active');
            if (icon.getAttribute('data-route') === route) {
                icon.classList.add('active');
            }
        });
    }

    // --- Router ---
    let currentAppRoute = '/inicio';

    function navigate(path) {
        currentAppRoute = path;
        try {
            window.history.pushState(null, '', path);
        } catch (e) {
            // Ignore if running from file:// which restricts pushState
        }
        renderRoute();
    }

    function renderRoute() {
        appContainer.innerHTML = ''; // Clear container
        updateActiveTaskbarIcon(currentAppRoute);

        if (currentAppRoute === '/inicio') {
            const template = document.getElementById('tpl-inicio').content.cloneNode(true);
            appContainer.appendChild(template);
        }
        else if (currentAppRoute === '/add_ficha') {
            const template = document.getElementById('tpl-add-ficha').content.cloneNode(true);
            appContainer.appendChild(template);
            setupAddFichaForm();
        }
        else if (currentAppRoute === '/buscar_ficha') {
            const template = document.getElementById('tpl-buscar-ficha').content.cloneNode(true);
            appContainer.appendChild(template);
            setupBuscarFichaForm();
        }
        else if (currentAppRoute.startsWith('/ficha_')) {
            const id = currentAppRoute.replace('/ficha_', '');
            const ficha = getFichaById(id);
            if (ficha) {
                const template = document.getElementById('tpl-ficha-view').content.cloneNode(true);
                appContainer.appendChild(template);
                setupFichaView(ficha);
            } else {
                alert("Ficha no encontrada.");
                navigate('/buscar_ficha');
            }
        }
        else if (currentAppRoute === '/reporte_arresto') {
            const template = document.getElementById('tpl-reporte-arresto').content.cloneNode(true);
            appContainer.appendChild(template);
            setupReporteArresto();
        }
    }

    window.addEventListener('popstate', () => {
        currentAppRoute = window.location.pathname;
        if (currentAppRoute === '/' || currentAppRoute.includes('index.html')) {
            currentAppRoute = '/inicio';
        }
        renderRoute();
    });

    // Initial Render
    let initialPath = window.location.pathname;
    if (initialPath === '/' || initialPath.includes('index.html')) {
        navigate('/inicio');
    } else {
        currentAppRoute = initialPath;
        renderRoute();
    }

    // --- Logic for Templates ---

    function setupAddFichaForm() {
        const form = document.getElementById('form-add-ficha');
        const btnClose = document.getElementById('btn-close-add');

        if (btnClose) {
            btnClose.addEventListener('click', () => {
                navigate('/inicio');
            });
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const ficha = {
                nombre: document.getElementById('add-nombre').value,
                apellido: document.getElementById('add-apellido').value,
                identificacion: document.getElementById('add-identificacion').value,
                telefono: document.getElementById('add-telefono').value,
                edad: document.getElementById('add-edad').value,
                genero: document.getElementById('add-genero').value,
                residencia: document.getElementById('add-residencia').value,
                raza: document.getElementById('add-raza').value,
                foto: 'https://i.imgur.com/NPt22ih.png'
            };

            // Check if ID already exists
            if (getFichaById(ficha.identificacion)) {
                alert('Ya existe una ficha con esta identificación.');
                return;
            }

            saveFicha(ficha);
            alert('Ficha guardada exitosamente.');
            form.reset();
            navigate('/buscar_ficha');
        });
    }

    function setupBuscarFichaForm() {
        const form = document.getElementById('form-buscar-ficha');
        const inputNombre = document.getElementById('search-nombre');
        const inputApellido = document.getElementById('search-apellido');
        const inputId = document.getElementById('buscar-id');
        const autocompleteResults = document.getElementById('autocomplete-results');
        const btnClose = document.getElementById('btn-close-buscar');

        if (btnClose) {
            btnClose.addEventListener('click', () => {
                navigate('/inicio');
            });
        }

        function renderBuscarList(filter = '') {
            autocompleteResults.innerHTML = '';
            const val = filter.toLowerCase();
            const fichas = getFichas();

            const matches = fichas.filter(f =>
                f.identificacion.toLowerCase().includes(val)
            );

            if (matches.length === 0) {
                autocompleteResults.innerHTML = '<div style="padding: 10px 15px; color: var(--text-muted); font-size: 12px;">Sin resultados</div>';
                return;
            }

            matches.forEach(match => {
                const div = document.createElement('div');
                div.className = 'autocomplete-item';
                div.innerHTML = `<i class="fas fa-id-badge"></i> ${match.identificacion}`;
                div.addEventListener('click', () => {
                    if (inputId) inputId.value = match.identificacion;
                    if (inputNombre) inputNombre.value = match.nombre;
                    if (inputApellido) inputApellido.value = match.apellido;
                    autocompleteResults.classList.add('hidden');
                });
                autocompleteResults.appendChild(div);
            });
        }

        if (inputId) {
            inputId.addEventListener('focus', () => {
                renderBuscarList(inputId.value);
                autocompleteResults.classList.remove('hidden');
            });

            inputId.addEventListener('input', (e) => {
                renderBuscarList(e.target.value);
                autocompleteResults.classList.remove('hidden');
            });

            inputId.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        document.addEventListener('click', (e) => {
            if (inputId && autocompleteResults && !inputId.contains(e.target) && !autocompleteResults.contains(e.target)) {
                autocompleteResults.classList.add('hidden');
            }
        });

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const idVal = inputId ? inputId.value.trim().toLowerCase() : '';
                const nVal = inputNombre ? inputNombre.value.trim().toLowerCase() : '';
                const aVal = inputApellido ? inputApellido.value.trim().toLowerCase() : '';
                let targetId = null;

                if (idVal) {
                    const ficha = getFichas().find(f => f.identificacion.toLowerCase() === idVal);
                    if (ficha) targetId = ficha.identificacion;
                } else if (nVal && aVal) {
                    const ficha = getFichaByNameAndSurname(nVal, aVal);
                    if (ficha) targetId = ficha.identificacion;
                }

                if (targetId) {
                    navigate(`/ficha_${targetId}`);
                } else {
                    alert('No se encontraron resultados que coincidan exactamente.');
                }
            });
        }
    }

    function setupFichaView(ficha) {
        document.getElementById('view-fullname').textContent = ficha.nombre + ' ' + ficha.apellido;
        document.getElementById('view-idbadge').textContent = '#' + ficha.identificacion;
        document.getElementById('view-identificacion').textContent = '#' + ficha.identificacion;
        document.getElementById('view-telefono').textContent = ficha.telefono;
        document.getElementById('view-edad').textContent = ficha.edad;
        document.getElementById('view-genero').textContent = ficha.genero;
        document.getElementById('view-residencia').textContent = ficha.residencia;
        document.getElementById('view-raza').textContent = ficha.raza;

        // Cargar arrestos
        const arrestos = getArrestos().filter(a => a.sospechoso_id === ficha.identificacion);
        document.getElementById('view-arrests-count').textContent = arrestos.length;

        const listaArrestos = document.getElementById('lista-arrestos');
        if (arrestos.length === 0) {
            listaArrestos.innerHTML = '<div style="color:var(--text-muted); font-size:13px; grid-column:1/-1;">No hay arrestos registrados.</div>';
        } else {
            arrestos.forEach(a => {
                const cargosList = a.cargos.split(',').filter(c => c.trim() !== '');
                const cargosCount = cargosList.length;

                const card = document.createElement('div');
                card.className = 'arrest-card';
                card.innerHTML = `
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; color:#a0aabf; font-size:12px;">
                        <div><i class="far fa-calendar"></i> ${a.fecha}</div>
                        <div><i class="far fa-clock"></i> ${a.tiempo}</div>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; color:#a0aabf; font-size:12px;">
                        <div><i class="fas fa-phone"></i> ${a.callsign}</div>
                        <div><i class="fas fa-info-circle"></i> ${cargosCount}</div>
                    </div>
                    <div style="display:flex; justify-content:center;">
                        <button class="btn-yellow btn-ver-informe" style="width:120px; font-size:11px; padding:6px 0;"><i class="far fa-file-alt"></i> Ver informe</button>
                    </div>
                `;

                card.querySelector('.btn-ver-informe').addEventListener('click', () => {
                    mostrarInformeModal(a);
                });

                listaArrestos.appendChild(card);
            });
        }

        // Pestañas
        const tabs = document.querySelectorAll('.tab-btn');
        const contents = document.querySelectorAll('.tab-content');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.add('hidden'));
                tab.classList.add('active');
                document.getElementById('tab-' + tab.getAttribute('data-tab')).classList.remove('hidden');
            });
        });

        const imgEl = document.querySelector('.mugshot-img');
        if (imgEl) {
            imgEl.src = ficha.foto || 'https://i.imgur.com/NPt22ih.png';
            imgEl.style.cursor = 'pointer';

            imgEl.addEventListener('click', () => {
                const modal = document.getElementById('photo-modal');
                const input = document.getElementById('photo-url-input');
                if (modal && input) {
                    input.value = ficha.foto || '';
                    modal.classList.remove('hidden');
                    modal.setAttribute('data-target-id', ficha.identificacion);
                }
            });
        }

        document.getElementById('btn-close-ficha').addEventListener('click', () => {
            navigate('/inicio');
        });
    }

    function mostrarInformeModal(a) {
        const modal = document.getElementById('informe-modal');
        const content = document.getElementById('informe-modal-content');

        content.innerHTML = `
            <h3 class="section-heading" style="color:white; border-bottom:1px solid #333; padding-bottom:10px;">Sección de Información</h3>
            <div class="form-row-3" style="color:var(--text-muted); font-size:13px; margin-bottom:20px;">
                <div><strong style="color:white; display:block; margin-bottom:5px;">Fecha</strong> ${a.fecha}</div>
                <div><strong style="color:white; display:block; margin-bottom:5px;">Tiempo</strong> ${a.tiempo}</div>
                <div><strong style="color:white; display:block; margin-bottom:5px;">Callsign</strong> ${a.callsign}</div>
                <div><strong style="color:white; display:block; margin-bottom:5px;">Nombre del agente</strong> ${a.agente_nombre}</div>
                <div><strong style="color:white; display:block; margin-bottom:5px;">Rango</strong> ${a.rango}</div>
                <div><strong style="color:white; display:block; margin-bottom:5px;">Placa</strong> ${a.placa}</div>
            </div>
            
            <h3 class="section-heading" style="color:white; border-bottom:1px solid #333; padding-bottom:10px;">Sección de arrestos</h3>
            <div class="form-row-3" style="color:var(--text-muted); font-size:13px; margin-bottom:20px;">
                <div><strong style="color:white; display:block; margin-bottom:5px;">Nombre del sospechoso</strong> ${a.sospechoso_nombre}</div>
                <div><strong style="color:white; display:block; margin-bottom:5px;">Identificación</strong> ${a.sospechoso_id}</div>
                <div><strong style="color:white; display:block; margin-bottom:5px;">Cargos</strong> <div style="background:#111; padding:5px; border-radius:4px;">${a.cargos || 'Ninguno'}</div></div>
            </div>
            <div style="color:var(--text-muted); font-size:13px; margin-bottom:20px;">
                <strong style="color:white; display:block; margin-bottom:5px;">Narrativa de Arresto</strong>
                <div style="background:#111; padding:10px; border-radius:4px; min-height:60px;">${a.narrativa}</div>
            </div>

            <h3 class="section-heading" style="color:white; border-bottom:1px solid #333; padding-bottom:10px;">Sección de evidencias</h3>
            <div class="form-row-2" style="color:var(--text-muted); font-size:13px;">
                <div><strong style="color:white; display:block; margin-bottom:5px;">Ubicación del arresto</strong> <div style="background:#111; padding:10px; border-radius:4px;">${a.ubicacion}</div></div>
                <div><strong style="color:white; display:block; margin-bottom:5px;">Soporte de evidencia</strong> <div style="background:#111; padding:10px; border-radius:4px; min-height:60px;">${a.evidencia}</div></div>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    const closeInformeModal = document.getElementById('close-informe-modal');
    if (closeInformeModal) {
        closeInformeModal.addEventListener('click', () => {
            document.getElementById('informe-modal').classList.add('hidden');
        });
    }

    function setupReporteArresto() {
        const btnClose = document.getElementById('btn-close-reporte');
        if (btnClose) {
            btnClose.addEventListener('click', () => navigate('/inicio'));
        }

        // Auto-fill UTC Date and Time
        const now = new Date();
        const year = now.getUTCFullYear();
        const month = String(now.getUTCMonth() + 1).padStart(2, '0');
        const day = String(now.getUTCDate()).padStart(2, '0');
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');

        const inputFecha = document.getElementById('rep-fecha');
        const inputTiempo = document.getElementById('rep-tiempo');
        if (inputFecha) inputFecha.value = `${year}-${month}-${day}`;
        if (inputTiempo) inputTiempo.value = `${hours}:${minutes}`;

        const inputId = document.getElementById('rep-sospechoso-id');
        const inputNombre = document.getElementById('rep-sospechoso-nombre');
        const idDropdown = document.getElementById('rep-id-dropdown');
        const idListContainer = document.getElementById('rep-id-list-container');

        const fichas = getFichas();

        function renderIdList(filter = '') {
            idListContainer.innerHTML = '';
            const query = filter.toLowerCase();
            const filteredFichas = fichas.filter(f =>
                f.identificacion.toLowerCase().includes(query)
            );

            if (filteredFichas.length === 0) {
                idListContainer.innerHTML = '<div style="padding: 10px 15px; color: var(--text-muted); font-size: 12px;">Sin resultados</div>';
                return;
            }

            filteredFichas.forEach(f => {
                const div = document.createElement('div');
                div.className = 'autocomplete-item';
                div.innerHTML = `<i class="fas fa-id-badge"></i> ${f.identificacion}`;
                div.addEventListener('click', () => {
                    inputId.value = f.identificacion;
                    inputNombre.value = f.nombre + ' ' + f.apellido;
                    idDropdown.classList.add('hidden');
                });
                idListContainer.appendChild(div);
            });
        }

        if (inputId) {
            inputId.addEventListener('focus', () => {
                renderIdList(inputId.value);
                idDropdown.classList.remove('hidden');
            });

            inputId.addEventListener('input', (e) => {
                renderIdList(e.target.value);
                idDropdown.classList.remove('hidden');
            });

            inputId.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        document.addEventListener('click', (e) => {
            if (inputId && idDropdown && !inputId.contains(e.target) && !idDropdown.contains(e.target)) {
                idDropdown.classList.add('hidden');
            }
        });

        // Dropdown multiselect - renderizado desde CARGOS_LIST
        const cargosToggle = document.getElementById('rep-cargos-toggle');
        const cargosDropdown = document.getElementById('rep-cargos-dropdown');
        const cargosDisplay = document.getElementById('rep-cargos-display');
        const searchCargos = document.getElementById('rep-search-cargos');
        const cargosListContainer = document.getElementById('rep-cargos-list');

        // Render checkboxes dynamically
        CARGOS_LIST.forEach(cargo => {
            const label = document.createElement('label');
            label.className = 'cargo-label';
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.className = 'cargo-checkbox';
            cb.value = cargo;
            cb.addEventListener('change', updateCargosDisplay);
            label.appendChild(cb);
            label.appendChild(document.createTextNode(' ' + cargo));
            cargosListContainer.appendChild(label);
        });

        function updateCargosDisplay() {
            const selected = Array.from(cargosListContainer.querySelectorAll('.cargo-checkbox:checked')).map(i => i.value);
            cargosDisplay.value = selected.join(', ');
        }

        cargosToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            cargosDropdown.classList.toggle('hidden');
            if (!cargosDropdown.classList.contains('hidden')) {
                searchCargos.focus();
            }
        });

        searchCargos.addEventListener('input', (e) => {
            const filter = e.target.value.toLowerCase();
            cargosListContainer.querySelectorAll('.cargo-label').forEach(label => {
                label.style.display = label.textContent.toLowerCase().includes(filter) ? 'flex' : 'none';
            });
        });

        searchCargos.addEventListener('click', (e) => e.stopPropagation());

        document.addEventListener('click', (e) => {
            if (cargosToggle && cargosDropdown && !cargosToggle.contains(e.target) && !cargosDropdown.contains(e.target)) {
                cargosDropdown.classList.add('hidden');
            }
        });

        const form = document.getElementById('form-reporte-arresto');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!inputNombre.value) {
                alert("Por favor selecciona una ficha gubernamental válida buscándola por su Identificación.");
                return;
            }

            const arresto = {
                fecha: document.getElementById('rep-fecha').value,
                tiempo: document.getElementById('rep-tiempo').value,
                callsign: document.getElementById('rep-callsign').value,
                agente_nombre: document.getElementById('rep-agente-nombre').value,
                rango: document.getElementById('rep-rango').value,
                placa: document.getElementById('rep-placa').value,
                sospechoso_id: inputId.value,
                sospechoso_nombre: inputNombre.value,
                cargos: cargosDisplay.value,
                narrativa: document.getElementById('rep-narrativa').value,
                ubicacion: document.getElementById('rep-ubicacion').value,
                evidencia: document.getElementById('rep-evidencia').value
            };

            saveArresto(arresto);
            alert("Reporte de arresto guardado exitosamente.");
            navigate(`/ficha_${arresto.sospechoso_id}`);
        });
    }

    // --- Photo Modal Logic ---
    const photoModal = document.getElementById('photo-modal');
    const closePhotoModal = document.getElementById('close-photo-modal');
    const btnSavePhoto = document.getElementById('btn-save-photo');
    const photoInput = document.getElementById('photo-url-input');

    if (closePhotoModal) {
        closePhotoModal.addEventListener('click', () => {
            photoModal.classList.add('hidden');
        });
    }

    if (btnSavePhoto) {
        btnSavePhoto.addEventListener('click', () => {
            const newUrl = photoInput.value.trim();
            if (newUrl && newUrl.endsWith('.png')) {
                const id = photoModal.getAttribute('data-target-id');
                const fichas = getFichas();
                const index = fichas.findIndex(f => f.identificacion === id);
                if (index !== -1) {
                    fichas[index].foto = newUrl;
                    localStorage.setItem('mdc_fichas', JSON.stringify(fichas));

                    const imgEl = document.querySelector('.mugshot-img');
                    if (imgEl) imgEl.src = newUrl;
                }
                photoModal.classList.add('hidden');
            } else {
                alert("El enlace debe terminar en .png");
            }
        });
    }
});
