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

    // Helper functions to get only the article code (e.g. "1.1 Exceso de Velocidad" -> "1.1")
    function getCargoArticle(cargo) {
        if (!cargo) return '';
        const trimmed = cargo.trim();
        if (trimmed.startsWith('Art. ')) {
            const parts = trimmed.split(' ');
            return parts[0] + ' ' + parts[1];
        } else {
            return trimmed.split(' ')[0];
        }
    }

    function formatCargosList(cargosString) {
        if (!cargosString) return 'Ninguno';
        return cargosString.split(',')
            .map(c => getCargoArticle(c))
            .filter(c => c !== '')
            .join(', ');
    }

    // --- State and DOM Elements ---
    const appContainer = document.getElementById('app-container');
    const startButton = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');
    const clockElement = document.getElementById('clock');

    const btnCodigoPenal = document.getElementById('btn-codigo-penal');


    // --- Data Management ---
    function getLogs() {
        const data = localStorage.getItem('mdc_logs');
        return data ? JSON.parse(data) : [];
    }

    function saveLog(action, details) {
        const logs = getLogs();
        const now = new Date();
        const timestamp = now.toISOString();
        logs.push({ timestamp, action, details });
        localStorage.setItem('mdc_logs', JSON.stringify(logs));
    }

    function getFichas() {
        const data = localStorage.getItem('mdc_fichas');
        return data ? JSON.parse(data) : [];
    }

    function saveFicha(ficha) {
        const fichas = getFichas();
        fichas.push(ficha);
        localStorage.setItem('mdc_fichas', JSON.stringify(fichas));
        saveLog('Ficha Agregada', `Se agregó la ficha #${ficha.identificacion} para ${ficha.nombre} ${ficha.apellido}`);
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
        saveLog('Arresto Agregado', `Se registró un arresto para el sospechoso #${arresto.sospechoso_id} (${arresto.sospechoso_nombre})`);
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

    let isAdmin = false;
    const btnAdminToggle = document.getElementById('btn-admin-toggle');
    if (btnAdminToggle) {
        btnAdminToggle.addEventListener('click', () => {
            isAdmin = !isAdmin;
            if (isAdmin) {
                document.body.classList.add('admin-mode');
                btnAdminToggle.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                btnAdminToggle.style.color = 'var(--yellow-accent)';
            } else {
                document.body.classList.remove('admin-mode');
                btnAdminToggle.style.backgroundColor = '';
                btnAdminToggle.style.color = '';
            }
        });
    }

    // --- View System (sin rutas URL) ---
    const VIEWS = ['inicio', 'add_ficha', 'buscar_ficha', 'ficha', 'reporte_arresto', 'logs', 'codigo_penal'];


    function showView(viewName) {
        appContainer.innerHTML = '';

        // Update taskbar active state
        document.querySelectorAll('.taskbar-icon').forEach(icon => {
            icon.classList.remove('active');
            if (icon.getAttribute('data-view') === viewName) {
                icon.classList.add('active');
            }
        });

        startMenu.classList.add('hidden');

        if (viewName === 'inicio') {
            const template = document.getElementById('tpl-inicio').content.cloneNode(true);
            appContainer.appendChild(template);
        }
        else if (viewName === 'add_ficha') {
            const template = document.getElementById('tpl-add-ficha').content.cloneNode(true);
            appContainer.appendChild(template);
            setupAddFichaForm();
        }
        else if (viewName === 'buscar_ficha') {
            const template = document.getElementById('tpl-buscar-ficha').content.cloneNode(true);
            appContainer.appendChild(template);
            setupBuscarFichaForm();
        }
        else if (viewName === 'reporte_arresto') {
            const template = document.getElementById('tpl-reporte-arresto').content.cloneNode(true);
            appContainer.appendChild(template);
            setupReporteArresto();
        }
        else if (viewName === 'logs') {
            const template = document.getElementById('tpl-logs').content.cloneNode(true);
            appContainer.appendChild(template);
            setupLogsView();
        }
        else if (viewName === 'codigo_penal') {
            const template = document.getElementById('tpl-codigo-penal').content.cloneNode(true);
            appContainer.appendChild(template);
            setupCodigoPenalView();
        }
    }


    function setupCodigoPenalView() {
        const btnClose = document.getElementById('btn-close-codigo-penal');
        if (btnClose) {
            btnClose.addEventListener('click', () => showView('inicio'));
        }

        const sidebar = document.getElementById('codigo-penal-sidebar');
        const grid = document.getElementById('codigo-penal-grid');
        if (!sidebar || !grid) return;

        const CATEGORIAS = [
            { key: 'I', title: 'I. Delitos de Tránsito', range: [1, 1.9999] },
            { key: 'II', title: 'II. Delitos contra el patrimonio', range: [2, 2.9999] },
            { key: 'III', title: 'III. Delitos contra el orden público', range: [3, 3.9999] },
            { key: 'IV', title: 'IV. Delitos contra la vida y la libertad', range: [4, 4.9999] },
            { key: 'V', title: 'V. Delitos contra la conviencia civil', range: [5, 5.9999] },
            { key: 'VI', title: 'VI. Delitos contra la salud pública', range: [6, 6.9999] },
            { key: 'VII', title: 'VII. Delitos relacionados con la administración pública', range: [7, 7.9999] },
            { key: 'VIII', title: 'VIII. Delitos federales', range: [8, 8.9999] },
            { key: 'IX', title: 'IX. Ofensividad Armamentistica', range: [9, 9.9999] },
        ];

        function parseCargoToArt(cargo) {
            const raw = (cargo || '').trim();
            if (!raw) return null;

            // Examples: "1.1 Exceso de Velocidad"  | "Art. 8.32 Proxenetismo" | "Art. 9.1 Exhibir..."
            const isArt = raw.startsWith('Art. ');
            const parts = raw.split(' ');
            let artToken = '';

            if (isArt) {
                // "Art. 8.32"
                artToken = (parts[1] || '').trim();
            } else {
                // "1.1"
                artToken = (parts[0] || '').trim();
            }

            const match = artToken.match(/^(\d+)\.(\d+)$/);
            if (!match) return null;
            const major = Number(match[1]);
            const minor = Number(match[2]);

            const name = raw.replace(/^Art\.\s+/i, '').replace(new RegExp(`^${artToken}\\s*`), '').trim();
            const code = isArt ? `Art. ${major}.${minor}` : `${major}.${minor}`;
            return { major, minor, code, name };
        }

        const cargosParsed = CARGOS_LIST
            .map(parseCargoToArt)
            .filter(Boolean);

        const byCategory = new Map();
        CATEGORIAS.forEach(c => byCategory.set(c.key, []));
        cargosParsed.forEach(item => {
            const major = item.major;
            let categoryKey = null;
            if (major === 1) categoryKey = 'I';
            else if (major === 2) categoryKey = 'II';
            else if (major === 3) categoryKey = 'III';
            else if (major === 4) categoryKey = 'IV';
            else if (major === 5) categoryKey = 'V';
            else if (major === 6) categoryKey = 'VI';
            else if (major === 7) categoryKey = 'VII';
            else if (major === 8) categoryKey = 'VIII';
            else if (major === 9) categoryKey = 'IX';

            if (categoryKey && byCategory.has(categoryKey)) {
                byCategory.get(categoryKey).push(item);
            }
        });

        function makeCard(item) {
            const card = document.createElement('div');
            card.className = 'codigo-penal-card';
            card.innerHTML = `
                <div class="codigo-penal-card-top"></div>
                <div class="codigo-penal-card-text">
                    <div><strong>${item.code}</strong></div>
                    <div>${item.name}</div>
                </div>
            `;
            return card;
        }

        function renderSidebar(activeKey) {
            sidebar.innerHTML = '';
            CATEGORIAS.forEach(cat => {
                const row = document.createElement('div');
                row.className = 'codigo-penal-sidebar-item' + (cat.key === activeKey ? ' active' : '');
                row.setAttribute('data-cat', cat.key);
                row.textContent = cat.title;
                row.addEventListener('click', () => {
                    renderSidebar(cat.key);
                    renderGrid(cat.key);
                });
                sidebar.appendChild(row);
            });
        }

        function renderGrid(catKey) {
            grid.innerHTML = '';
            const items = (byCategory.get(catKey) || []).slice();

            // sort by major then minor
            items.sort((a, b) => (a.major - b.major) || (a.minor - b.minor));

            if (items.length === 0) {
                grid.innerHTML = '<div class="codigo-penal-empty">Sin cargos en esta categoría.</div>';
                return;
            }

            items.forEach(item => grid.appendChild(makeCard(item)));
        }

        // default active
        renderSidebar('I');
        renderGrid('I');
    }

    function setupLogsView() {

        const btnClose = document.getElementById('btn-close-logs');
        if (btnClose) btnClose.addEventListener('click', () => showView('inicio'));
        
        const container = document.getElementById('logs-container');
        const logs = getLogs().reverse();
        if (logs.length === 0) {
            container.innerHTML = '<div style="color:var(--text-muted); font-size:13px;">No hay registros disponibles.</div>';
            return;
        }
        
        logs.forEach(log => {
            const d = new Date(log.timestamp);
            const formattedDate = d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
            const div = document.createElement('div');
            div.style = 'background: #111; padding: 10px; border-radius: 4px; border-left: 3px solid var(--yellow-accent); color: white; font-size: 13px;';
            div.innerHTML = `<strong>[${formattedDate}] ${log.action}</strong><br><span style="color: var(--text-muted); font-size: 11px;">${log.details}</span>`;
            container.appendChild(div);
        });
    }

    function showFicha(id) {
        const ficha = getFichaById(id);
        if (ficha) {
            appContainer.innerHTML = '';
            const template = document.getElementById('tpl-ficha-view').content.cloneNode(true);
            appContainer.appendChild(template);
            setupFichaView(ficha);
        } else {
            alert('Ficha no encontrada.');
            showView('buscar_ficha');
        }
    }

    // Navigation handlers (data-view attribute)
    document.querySelectorAll('[data-route]').forEach(el => {
        el.addEventListener('click', () => {
            const view = el.getAttribute('data-route').replace('/', '');
            showView(view || 'inicio');
        });
    });

    function initUsoModal() {
        const usoModal = document.getElementById('uso-modal');
        const usoCheckbox = document.getElementById('uso-acepto');
        const btnContinuar = document.getElementById('btn-aceptar-uso');

        if (!usoModal || !usoCheckbox || !btnContinuar) {
            // Si el modal no existe (por cualquier motivo), no bloqueamos la app.
            return;
        }

        const storageKey = 'mdc_uso_aceptado_v1';
        const accepted = localStorage.getItem(storageKey) === 'true';
        if (accepted) {
            usoModal.classList.add('hidden');
            return;
        }

        usoModal.classList.remove('hidden');
        btnContinuar.disabled = true;

        function syncButton() {
            const ok = usoCheckbox.checked;
            btnContinuar.disabled = !ok;
            btnContinuar.style.opacity = ok ? '1' : '0.55';
            btnContinuar.style.cursor = ok ? 'pointer' : 'not-allowed';
        }

        usoCheckbox.addEventListener('change', syncButton);
        syncButton();

        btnContinuar.addEventListener('click', () => {
            if (!usoCheckbox.checked) return;
            localStorage.setItem(storageKey, 'true');
            usoModal.classList.add('hidden');
        });
    }

    // Initial view (se muestra luego de aceptar)
    initUsoModal();

    if (localStorage.getItem('mdc_uso_aceptado_v1') === 'true') {
        showView('inicio');
    }

    if (btnCodigoPenal) {
        btnCodigoPenal.addEventListener('click', (e) => {
            e.stopPropagation();
            showView('codigo_penal');
        });
    }

    // Cuando se acepte el modal, se debe cargar la vista inicial
    const usoCheckbox = document.getElementById('uso-acepto');
    const btnContinuar = document.getElementById('btn-aceptar-uso');
    if (usoCheckbox && btnContinuar) {
        btnContinuar.addEventListener('click', () => {
            if (localStorage.getItem('mdc_uso_aceptado_v1') === 'true') {
                showView('inicio');
            }
        });
    }


    // --- Logic for Templates ---



    function setupAddFichaForm() {
        const form = document.getElementById('form-add-ficha');
        const btnClose = document.getElementById('btn-close-add');

        if (btnClose) {
            btnClose.addEventListener('click', () => {
                showView('inicio');
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
            showView('buscar_ficha');
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
                showView('inicio');
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
                    showFicha(targetId);
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

        const btnEditFicha = document.getElementById('btn-edit-ficha');
        if (btnEditFicha) {
            const newBtn = btnEditFicha.cloneNode(true);
            btnEditFicha.parentNode.replaceChild(newBtn, btnEditFicha);
            newBtn.addEventListener('click', () => {
                mostrarEditFichaModal(ficha);
            });
        }

        document.getElementById('btn-close-ficha').addEventListener('click', () => {
            showView('inicio');
        });
    }

    function mostrarEditFichaModal(ficha) {
        const modal = document.getElementById('edit-ficha-modal');
        document.getElementById('edit-nombre').value = ficha.nombre;
        document.getElementById('edit-apellido').value = ficha.apellido;
        document.getElementById('edit-identificacion').value = ficha.identificacion;
        document.getElementById('edit-telefono').value = ficha.telefono;
        document.getElementById('edit-edad').value = ficha.edad;
        document.getElementById('edit-genero').value = ficha.genero;
        document.getElementById('edit-residencia').value = ficha.residencia;
        document.getElementById('edit-raza').value = ficha.raza;
        modal.classList.remove('hidden');

        document.getElementById('close-edit-ficha-modal').onclick = () => {
            modal.classList.add('hidden');
        };

        const form = document.getElementById('form-edit-ficha');

        const btnDeleteFicha = document.getElementById('btn-delete-ficha');
        if(btnDeleteFicha) {
            btnDeleteFicha.onclick = (e) => {
                e.preventDefault();
                if(confirm("¿Estás seguro de que deseas eliminar esta ficha y todos sus arrestos asociados?")) {
                    const fichas = getFichas();
                    const fIndex = fichas.findIndex(f => f.identificacion === ficha.identificacion);
                    if(fIndex !== -1) fichas.splice(fIndex, 1);
                    localStorage.setItem('mdc_fichas', JSON.stringify(fichas));

                    const arrestos = getArrestos();
                    const newArrestos = arrestos.filter(a => a.sospechoso_id !== ficha.identificacion);
                    localStorage.setItem('mdc_arrestos', JSON.stringify(newArrestos));

                    saveLog('Ficha Eliminada', `Se eliminó la ficha y los arrestos de ${ficha.nombre} ${ficha.apellido} (#${ficha.identificacion})`);
                    modal.classList.add('hidden');
                    showView('inicio');
                }
            }
        }

        form.onsubmit = (e) => {
            e.preventDefault();
            const fichas = getFichas();
            const index = fichas.findIndex(f => f.identificacion === ficha.identificacion);
            if (index !== -1) {
                const oldFicha = {...fichas[index]};
                
                const newId = document.getElementById('edit-identificacion').value;
                const newNombre = document.getElementById('edit-nombre').value;
                const newApellido = document.getElementById('edit-apellido').value;
                
                fichas[index].identificacion = newId;
                fichas[index].nombre = newNombre;
                fichas[index].apellido = newApellido;
                fichas[index].telefono = document.getElementById('edit-telefono').value;
                fichas[index].edad = document.getElementById('edit-edad').value;
                fichas[index].genero = document.getElementById('edit-genero').value;
                fichas[index].residencia = document.getElementById('edit-residencia').value;
                fichas[index].raza = document.getElementById('edit-raza').value;
                
                let changes = [];
                if(oldFicha.nombre !== fichas[index].nombre) changes.push(`nombre de '${oldFicha.nombre}' a '${fichas[index].nombre}'`);
                if(oldFicha.apellido !== fichas[index].apellido) changes.push(`apellido de '${oldFicha.apellido}' a '${fichas[index].apellido}'`);
                if(oldFicha.identificacion !== fichas[index].identificacion) changes.push(`identificación de '#${oldFicha.identificacion}' a '#${fichas[index].identificacion}'`);
                if(oldFicha.telefono !== fichas[index].telefono) changes.push(`teléfono de '${oldFicha.telefono}' a '${fichas[index].telefono}'`);
                if(oldFicha.edad !== fichas[index].edad) changes.push(`edad de '${oldFicha.edad}' a '${fichas[index].edad}'`);
                if(oldFicha.genero !== fichas[index].genero) changes.push(`género de '${oldFicha.genero}' a '${fichas[index].genero}'`);
                if(oldFicha.residencia !== fichas[index].residencia) changes.push(`residencia de '${oldFicha.residencia}' a '${fichas[index].residencia}'`);
                if(oldFicha.raza !== fichas[index].raza) changes.push(`raza de '${oldFicha.raza}' a '${fichas[index].raza}'`);

                let details = `Ficha #${oldFicha.identificacion} actualizada.`;
                if(changes.length > 0) {
                    details += ` Cambios: ${changes.join(', ')}.`;
                }
                
                localStorage.setItem('mdc_fichas', JSON.stringify(fichas));

                if(oldFicha.identificacion !== newId || oldFicha.nombre !== newNombre || oldFicha.apellido !== newApellido) {
                    const arrestos = getArrestos();
                    let changedArrestos = false;
                    arrestos.forEach(a => {
                        if(a.sospechoso_id === oldFicha.identificacion) {
                            a.sospechoso_id = newId;
                            a.sospechoso_nombre = `${newNombre} ${newApellido}`;
                            changedArrestos = true;
                        }
                    });
                    if(changedArrestos) localStorage.setItem('mdc_arrestos', JSON.stringify(arrestos));
                }

                saveLog('Ficha Editada', details);
                modal.classList.add('hidden');
                showFicha(newId);
            }
        };
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
                <div><strong style="color:white; display:block; margin-bottom:5px;">Cargos</strong> <div style="background:#111; padding:5px; border-radius:4px;">${formatCargosList(a.cargos)}</div></div>
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
            
            <div class="admin-only flex" style="justify-content:center; gap:15px; margin-top:30px; margin-bottom:10px;">
                <button class="btn-yellow btn-edit-arresto" style="width:120px;">Editar</button>
                <button class="btn-yellow btn-delete-arresto" style="width:120px; background-color:#e53935; color:white; border-color: #e53935;">Eliminar</button>
            </div>
        `;

        const btnDelete = content.querySelector('.btn-delete-arresto');
        if (btnDelete) {
            btnDelete.addEventListener('click', () => {
                if (confirm('¿Estás seguro de que deseas eliminar este arresto?')) {
                    const arrestos = getArrestos();
                    const index = arrestos.findIndex(arr => arr.fecha === a.fecha && arr.tiempo === a.tiempo && arr.sospechoso_id === a.sospechoso_id && arr.narrativa === a.narrativa);
                    if (index !== -1) {
                        arrestos.splice(index, 1);
                        localStorage.setItem('mdc_arrestos', JSON.stringify(arrestos));
                        saveLog('Arresto Eliminado', `Se eliminó el arresto del sospechoso #${a.sospechoso_id}`);
                        document.getElementById('informe-modal').classList.add('hidden');
                        showFicha(a.sospechoso_id);
                    }
                }
            });
        }

        const btnEdit = content.querySelector('.btn-edit-arresto');
        if (btnEdit) {
            btnEdit.addEventListener('click', () => {
                document.getElementById('informe-modal').classList.add('hidden');
                showView('reporte_arresto');
                
                setTimeout(() => {
                    document.getElementById('rep-fecha').value = a.fecha;
                    document.getElementById('rep-tiempo').value = a.tiempo;
                    document.getElementById('rep-callsign').value = a.callsign;
                    document.getElementById('rep-agente-nombre').value = a.agente_nombre;
                    document.getElementById('rep-rango').value = a.rango;
                    document.getElementById('rep-placa').value = a.placa;
                    document.getElementById('rep-sospechoso-id').value = a.sospechoso_id;
                    document.getElementById('rep-sospechoso-nombre').value = a.sospechoso_nombre;
                    document.getElementById('rep-cargos-display').value = a.cargos;
                    document.getElementById('rep-narrativa').value = a.narrativa;
                    document.getElementById('rep-ubicacion').value = a.ubicacion;
                    document.getElementById('rep-evidencia').value = a.evidencia;

                    const cargosList = a.cargos.split(',').map(c => c.trim());
                    document.querySelectorAll('.cargo-checkbox').forEach(cb => {
                        const code = getCargoArticle(cb.value);
                        cb.checked = cargosList.includes(code);
                    });

                    const form = document.getElementById('form-reporte-arresto');
                    const btnSubmit = form.querySelector('button[type="submit"]');
                    if(btnSubmit) btnSubmit.innerHTML = 'Guardar Cambios';
                    
                    form.onsubmit = (e) => {
                        e.preventDefault();
                        const arrestos = getArrestos();
                        const index = arrestos.findIndex(arr => arr.fecha === a.fecha && arr.tiempo === a.tiempo && arr.sospechoso_id === a.sospechoso_id && arr.narrativa === a.narrativa);
                        if (index !== -1) {
                            const oldArresto = {...arrestos[index]};
                            const newArresto = {
                                fecha: document.getElementById('rep-fecha').value,
                                tiempo: document.getElementById('rep-tiempo').value,
                                callsign: document.getElementById('rep-callsign').value,
                                agente_nombre: document.getElementById('rep-agente-nombre').value,
                                rango: document.getElementById('rep-rango').value,
                                placa: document.getElementById('rep-placa').value,
                                sospechoso_id: document.getElementById('rep-sospechoso-id').value,
                                sospechoso_nombre: document.getElementById('rep-sospechoso-nombre').value,
                                cargos: document.getElementById('rep-cargos-display').value,
                                narrativa: document.getElementById('rep-narrativa').value,
                                ubicacion: document.getElementById('rep-ubicacion').value,
                                evidencia: document.getElementById('rep-evidencia').value
                            };
                            arrestos[index] = newArresto;
                            localStorage.setItem('mdc_arrestos', JSON.stringify(arrestos));

                            let changes = [];
                            if(oldArresto.cargos !== newArresto.cargos) changes.push(`cargos`);
                            if(oldArresto.narrativa !== newArresto.narrativa) changes.push(`narrativa`);
                            if(oldArresto.ubicacion !== newArresto.ubicacion) changes.push(`ubicación`);
                            if(oldArresto.evidencia !== newArresto.evidencia) changes.push(`evidencia`);
                            if(oldArresto.agente_nombre !== newArresto.agente_nombre) changes.push(`agente`);
                            if(oldArresto.callsign !== newArresto.callsign) changes.push(`callsign`);
                            if(oldArresto.rango !== newArresto.rango) changes.push(`rango`);
                            
                            let details = `Se actualizó el arresto del sospechoso #${a.sospechoso_id}.`;
                            if(changes.length > 0) details += ` Se modificó: ${changes.join(', ')}.`;

                            saveLog('Arresto Editado', details);
                            alert("Cambios guardados exitosamente.");
                            showFicha(a.sospechoso_id);
                        }
                    };
                }, 50);
            });
        }

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
            btnClose.addEventListener('click', () => showView('inicio'));
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
            const selected = Array.from(cargosListContainer.querySelectorAll('.cargo-checkbox:checked')).map(i => getCargoArticle(i.value));
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
        form.onsubmit = (e) => {
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
            showFicha(arresto.sospechoso_id);
        };
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
