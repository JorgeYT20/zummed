// --- BLOQUE 1: EQUIPOS ---
const productosLaboratorioEquipos = [
  { id: 1, nombre: "AGITADOR DE VORTICE MOD. XH-D - HINOTEK", categoria: "Laboratorio", subcategoria: "Equipos", precio: 650.00, imagenes: ["img/productos/laboratorio/equipos/AGITADOR DE VORTICE MOD. XH-D - HINOTEK.png"], etiqueta: "" },
  { id: 2, nombre: "AGITADOR MAGNETICO CON PLACA CALIENTE MOD. MSH-300-BIOSAN", categoria: "Laboratorio", subcategoria: "Equipos", precio: 3050.00, imagenes: ["img/productos/laboratorio/equipos/AGITADOR MAGNETICO CON PLACA CALIENTE MOD. MSH-300-BIOSAN.png"], etiqueta: "" },
  { id: 3, nombre: "ANALIZADOR QUIMICO SEMIAUTOMATICO (BIOBASE)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 4500.00, imagenes: ["img/productos/laboratorio/equipos/ANALIZADOR QUIMICO SEMIAUTOMATICO (BIOBASE).png"], etiqueta: "" },
  { id: 4, nombre: "ATOCLAVE VERTICAL PORTATIL ANALOGA 18 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1350.00, imagenes: ["img/productos/laboratorio/equipos/ATOCLAVE VERTICAL PORTATIL ANALOGA 18 LITROS (ACKERMAN).png"], etiqueta: "" },
  { id: 5, nombre: "ATOCLAVE VERTICAL PORTATIL ANALOGA 24 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1650.00, imagenes: ["img/productos/laboratorio/equipos/ATOCLAVE VERTICAL PORTATIL ANALOGA 24 LITROS (ACKERMAN).png"], etiqueta: "" },
  { id: 6, nombre: "ATOCLAVE VERTICAL PORTATIL DIGITAL 18 LITROS (KYNTEL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2000.00, imagenes: ["img/productos/laboratorio/equipos/ATOCLAVE VERTICAL PORTATIL DIGITAL 18 LITROS (KYNTEL).png"], etiqueta: "" },
  { id: 7, nombre: "ATOCLAVE VERTICAL PORTATIL DIGITAL 24 LITROS (KYNTEL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2300.00, imagenes: ["img/productos/laboratorio/equipos/ATOCLAVE VERTICAL PORTATIL DIGITAL 24 LITROS (KYNTEL).png"], etiqueta: "" },
  { id: 8, nombre: "BALANZA DIGITAL DE PRECISION 220GR/0.0001G (FA2204)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2500.00, imagenes: ["img/productos/laboratorio/equipos/BALANZA DIGITAL DE PRECISION 220GR/0.0001G (FA2204).png"], etiqueta: "" },
  { id: 9, nombre: "BALANZA DIGITAL DE PRECISION 3000GR/0.01G (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 550.00, imagenes: ["img/productos/laboratorio/equipos/BALANZA DIGITAL DE PRECISION 3000GR/0.01G (ACKERMAN).png"], etiqueta: "" },
  { id: 10, nombre: "BALANZA DIGITAL DE PRECISION 310GR/0.001G (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1250.00, imagenes: ["img/productos/laboratorio/equipos/BALANZA DIGITAL DE PRECISION 310GR/0.001G (ACKERMAN).png"], etiqueta: "" },
  { id: 11, nombre: "BAÑO MARIA DIGITAL 12 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 850.00, imagenes: ["img/productos/laboratorio/equipos/BAÑO MARIA DIGITAL 12 LITROS (ACKERMAN).png"], etiqueta: "" },
  { id: 12, nombre: "BAÑO MARIA DIGITAL 18 LITROS (FAITHFUL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 999.00, imagenes: ["img/productos/laboratorio/equipos/BAÑO MARIA DIGITAL 18 LITROS (FAITHFUL).png"], etiqueta: "" },
  { id: 13, nombre: "BAÑO MARIA DIGITAL 3 LITROS", categoria: "Laboratorio", subcategoria: "Equipos", precio: 350.00, imagenes: ["img/productos/laboratorio/equipos/BAÑO MARIA DIGITAL 3 LITROS.png"], etiqueta: "" },
  { id: 14, nombre: "BAÑO MARIA DIGITAL 6 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 650.00, imagenes: ["img/productos/laboratorio/equipos/BAÑO MARIA DIGITAL 6 LITROS (ACKERMAN).png"], etiqueta: "" },
  { id: 15, nombre: "CENTRIFUGA 12 TUBOS ANALOGA (KYNTEL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 580.00, imagenes: ["img/productos/laboratorio/equipos/CENTRIFUGA 12 TUBOS ANALOGA (KYNTEL).png"], etiqueta: "" },
  { id: 16, nombre: "CENTRIFUGA 6 TUBOS ANALOGA MOD. 800D", categoria: "Laboratorio", subcategoria: "Equipos", precio: 220.00, imagenes: ["img/productos/laboratorio/equipos/CENTRIFUGA 6 TUBOS ANALOGA MOD. 800D.png"], etiqueta: "" },
  { id: 17, nombre: "CENTRIFUGA CLINICA DIGITAL 12 TUBOS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1250.00, imagenes: ["img/productos/laboratorio/equipos/CENTRIFUGA CLINICA DIGITAL 12 TUBOS (ACKERMAN).png"], etiqueta: "" },
  { id: 18, nombre: "CENTRIFUGA DE HEMATOCRITO 24 CAPILARES ANALOGA MOD. HN-S12A (HINOTEK)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1200.00, imagenes: ["img/productos/laboratorio/equipos/CENTRIFUGA DE HEMATOCRITO 24 CAPILARES ANALOGA MOD. HN-S12A (HINOTEK).png"], etiqueta: "" },
  { id: 19, nombre: "CENTRIFUGA DIGITAL 24 TUBOS MOD - 802C (KYNTEL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2300.00, imagenes: ["img/productos/laboratorio/equipos/CENTRIFUGA DIGITAL 24 TUBOS MOD - 802C (KYNTEL).png"], etiqueta: "" },
  { id: 20, nombre: "CONTADOR DE CELULAS ANALOGA 8 TECLAS", categoria: "Laboratorio", subcategoria: "Equipos", precio: 600.00, imagenes: ["img/productos/laboratorio/equipos/CONTADOR DE CELULAS ANALOGA 8 TECLAS.png"], etiqueta: "" },
  { id: 21, nombre: "CONTADOR DE CELULAS DIGITAL 10 GRUPOS JSQA", categoria: "Laboratorio", subcategoria: "Equipos", precio: 350.00, imagenes: ["img/productos/laboratorio/equipos/CONTADOR DE CELULAS DIGITAL 10 GRUPOS JSQA.png"], etiqueta: "" },
  { id: 22, nombre: "DENSITOMETRO (DETECTOR DE TURBIDEZ POR SUSPENSION) MOD. DEN-1B-BIOSAN", categoria: "Laboratorio", subcategoria: "Equipos", precio: 4500.00, imagenes: ["img/productos/laboratorio/equipos/DENSITOMETRO (DETECTOR DE TURBIDEZ POR SUSPENSION) MOD. DEN-1B-BIOSAN.png"], etiqueta: "" },
  { id: 23, nombre: "DSR-28D ROTADOR SEROLOGICO DIGITAL", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1950.00, imagenes: ["img/productos/laboratorio/equipos/DSR-28D ROTADOR SEROLOGICO DIGITAL.png"], etiqueta: "" },
  { id: 24, nombre: "ES-80 BAÑO MARIA AL SECO", categoria: "Laboratorio", subcategoria: "Equipos", precio: 750.00, imagenes: ["img/productos/laboratorio/equipos/ES-80 BAÑO MARIA AL SECO.png"], etiqueta: "" },
  { id: 25, nombre: "FOTOMETRO HI97711 - HANNA", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2500.00, imagenes: ["img/productos/laboratorio/equipos/FOTOMETRO HI97711 - HANNA.png"], etiqueta: "" },
  { id: 26, nombre: "HORNO ESTERILIZADOR DE SECADO 65 LITROS (FAITHFUL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 3150.00, imagenes: ["img/productos/laboratorio/equipos/HORNO ESTERILIZADOR DE SECADO 65 LITROS (FAITHFUL).png"], etiqueta: "" },
  { id: 27, nombre: "INCUBADORA MICROBIOLOGICA 18 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1250.00, imagenes: ["img/productos/laboratorio/equipos/INCUBADORA MICROBIOLOGICA 18 LITROS (ACKERMAN).png"], etiqueta: "" },
  { id: 28, nombre: "INCUBADORA MICROBIOLOGICA PORTATIL 9.2 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1000.00, imagenes: ["img/productos/laboratorio/equipos/INCUBADORA MICROBIOLOGICA PORTATIL 9.2 LITROS (ACKERMAN).png"], etiqueta: "" },
  { id: 29, nombre: "MEDIDOR DE PH CHECKER (H198103) - HANNA", categoria: "Laboratorio", subcategoria: "Equipos", precio: null, imagenes: ["img/productos/laboratorio/equipos/MEDIDOR DE PH CHECKER (H198103) - HANNA.png"], etiqueta: "" },
  { id: 30, nombre: "MEDIDOR DE PH DIGITAL", categoria: "Laboratorio", subcategoria: "Equipos", precio: 50.00, imagenes: ["img/productos/laboratorio/equipos/MEDIDOR DE PH DIGITAL.png"], etiqueta: "" },
  { id: 31, nombre: "MEDIDOR DE PH/TEMP (H198128) - HANNA", categoria: "Laboratorio", subcategoria: "Equipos", precio: null, imagenes: ["img/productos/laboratorio/equipos/MEDIDOR DE PH/TEMP (H198128) - HANNA.png"], etiqueta: "" },
  { id: 32, nombre: "MICROCENTRIFUGA DIGITAL 24 CAPILARES (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1800.00, imagenes: ["img/productos/laboratorio/equipos/MICROCENTRIFUGA DIGITAL 24 CAPILARES (ACKERMAN).png"], etiqueta: "" },
  { id: 33, nombre: "MICROPIPETA AUTOMATICA RANGO FIJO", categoria: "Laboratorio", subcategoria: "Equipos", precio: 150.00, imagenes: ["img/productos/laboratorio/equipos/MICROPIPETA AUTOMATICA RANGO FIJO.png"], etiqueta: "" },
  { id: 34, nombre: "MICROPIPETA AUTOMATICA RANGO VARIABLE", categoria: "Laboratorio", subcategoria: "Equipos", precio: 120.00, imagenes: ["img/productos/laboratorio/equipos/MICROPIPETA AUTOMATICA RANGO VARIABLE.png"], etiqueta: "" },
  { id: 35, nombre: "MICROSCOPIO BINOCULAR RG-2005B (MICROOS)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1000.00, imagenes: ["img/productos/laboratorio/equipos/MICROSCOPIO BINOCULAR RG-2005B (MICROOS).png"], etiqueta: "" },
  { id: 36, nombre: "MICROSCOPIO BINOCULAR RG-216B (MICROOS)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2700.00, imagenes: ["img/productos/laboratorio/equipos/MICROSCOPIO BINOCULAR RG-216B (MICROOS).png"], etiqueta: "" },
  { id: 37, nombre: "MICROSCOPIO TRINOCULAR BINOCULAR RG - 216T LCD (MICROOS)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 4500.00, imagenes: ["img/productos/laboratorio/equipos/MICROSCOPIO TRINOCULAR BINOCULAR RG - 216T LCD (MICROOS).png"], etiqueta: "" },
  { id: 38, nombre: "ROTADOR SEROLOGICO ANALOGO (EUROTECH)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 700.00, imagenes: ["img/productos/laboratorio/equipos/ROTADOR SEROLOGICO ANALOGO (EUROTECH).png"], etiqueta: "" }
];

// --- BLOQUE 2: MATERIAL E INSUMOS ---
const productosLaboratorioMaterial = [
  { id: 39, nombre: "ASA DE SIEMBRA BACTERIOLOGICA (RUNLAB)", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 12.00, imagenes: ["img/productos/laboratorio/material-insumos/ASA DE SIEMBRA BACTERIOLOGICA (RUNLAB).png"], etiqueta: "" },
  { id: 40, nombre: "BANDEJA DE ALMACENAMIENTO DE LAMINAS X 100, 25, 50 LAMINAS", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/BANDEJA DE ALMACENAMIENTO DE LAMINAS X 100, 25, 50 LAMINAS.png"], etiqueta: "" },
  { id: 41, nombre: "BARRA MAGNETICA PLANA", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/BARRA MAGNETICA PLANA.png"], etiqueta: "" },
  { id: 42, nombre: "CAMARA DE NEUBAUER DOBLE ESPEJO - MARIENFELD", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 130.00, imagenes: ["img/productos/laboratorio/material-insumos/CAMARA DE NEUBAUER DOBLE ESPEJO - MARIENFELD.png"], etiqueta: "" },
  { id: 43, nombre: "CANASTILLA DE COLORACION 30 LAMINAS", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 60.00, imagenes: ["img/productos/laboratorio/material-insumos/CANASTILLA DE COLORACION 30 LAMINAS.png"], etiqueta: "" },
  { id: 44, nombre: "FIOLA DE VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/FIOLA DE VIDRIO.png"], etiqueta: "" },
  { id: 45, nombre: "FRASCO TRASPARENTE CON TAPA AZUL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/FRASCO TRASPARENTE CON TAPA AZUL.png"], etiqueta: "" },
  { id: 46, nombre: "GRADILLA DE PLASTICO PARA TUBOS", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/GRADILLA DE PLASTICO PARA TUBOS.png"], etiqueta: "" },
  { id: 47, nombre: "GRADILLA PARA TUBO DE ENSAYO METAL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/GRADILLA PARA TUBO DE ENSAYO METAL.png"], etiqueta: "" },
  { id: 48, nombre: "LAMINA CUBRE OBJETO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 3.00, imagenes: ["img/productos/laboratorio/material-insumos/LAMINA CUBRE OBJETO.png"], etiqueta: "" },
  { id: 49, nombre: "LAMINA PORTA OBJETO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 3.50, imagenes: ["img/productos/laboratorio/material-insumos/LAMINA PORTA OBJETO.png"], etiqueta: "" },
  { id: 50, nombre: "MECHERO BUNSEN", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 50.00, imagenes: ["img/productos/laboratorio/material-insumos/MECHERO BUNSEN.png"], etiqueta: "" },
  { id: 51, nombre: "PARAFILM ROLLO DE PELÍCULA DE SELLADO 4IN. X 250FT REAL-FILM", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 200.00, imagenes: ["img/productos/laboratorio/material-insumos/PARAFILM ROLLO DE PELÍCULA DE SELLADO 4IN. X 250FT REAL-FILM.png"], etiqueta: "" },
  { id: 52, nombre: "PINZA DOBLE NUEZ", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/PINZA DOBLE NUEZ.png"], etiqueta: "" },
  { id: 53, nombre: "PIPETA PASTUR", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/PIPETA PASTUR.png"], etiqueta: "" },
  { id: 54, nombre: "PIPETA PUMP MANUAL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 35.00, imagenes: ["img/productos/laboratorio/material-insumos/PIPETA PUMP MANUAL.png"], etiqueta: "" },
  { id: 55, nombre: "PIPETA SEREOLOGICA DE VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/PIPETA SEREOLOGICA DE VIDRIO.png"], etiqueta: "" },
  { id: 56, nombre: "PIPETEADOR DE PIPETAS DIGITAL LEVO PLUS DLAB", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 700.00, imagenes: ["img/productos/laboratorio/material-insumos/PIPETEADOR DE PIPETAS DIGITAL LEVO PLUS DLAB.png"], etiqueta: "" },
  { id: 57, nombre: "PIPETEADOR DE PIPETAS MANUAL LEVO DLAB HASTA 100ML", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 105.00, imagenes: ["img/productos/laboratorio/material-insumos/PIPETEADOR DE PIPETAS MANUAL LEVO DLAB HASTA 100ML.png"], etiqueta: "" },
  { id: 58, nombre: "PISETA DE PLASTICO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/PISETA DE PLASTICO.png"], etiqueta: "" },
  { id: 59, nombre: "PLACA EXCAVADA X 12 HOYOS", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/PLACA EXCAVADA X 12 HOYOS.png"], etiqueta: "" },
  { id: 60, nombre: "PLACA PETRIC DE PLASTICO - NO ESTERIL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/PLACA PETRIC DE PLASTICO - NO ESTERIL.png"], etiqueta: "" },
  { id: 61, nombre: "PLACA PETRIC DE VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/PLACA PETRIC DE VIDRIO.png"], etiqueta: "" },
  { id: 62, nombre: "PLASTILINA DE HEMATOCRITO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 20.00, imagenes: ["img/productos/laboratorio/material-insumos/PLASTILINA DE HEMATOCRITO.png"], etiqueta: "" },
  { id: 63, nombre: "PROBETA GRADUABLE DE VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/PROBETA GRADUABLE DE VIDRIO.png"], etiqueta: "" },
  { id: 64, nombre: "PROBETA GRADUABLE DE PLASTICO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/PROBETA GRADUABLE DE PLASTICO.png"], etiqueta: "" },
  { id: 65, nombre: "PROPIPETA (BOMBILLA) DE GOMA DE 3 SALIDAS", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 30.00, imagenes: ["img/productos/laboratorio/material-insumos/PROPIPETA (BOMBILLA) DE GOMA DE 3 SALIDAS.png"], etiqueta: "" },
  { id: 66, nombre: "REFRACTOMETRO BRIX", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 110.00, imagenes: ["img/productos/laboratorio/material-insumos/REFRACTOMETRO BRIX.png"], etiqueta: "" },
  { id: 67, nombre: "SOPORTE UNIVERSAL C/ BASE Y VARILLA PINTADA", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 60.00, imagenes: ["img/productos/laboratorio/material-insumos/SOPORTE UNIVERSAL C/ BASE Y VARILLA PINTADA.png"], etiqueta: "" },
  { id: 68, nombre: "SOPORTE/ RACK PARA MICROPIPETA", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/SOPORTE/ RACK PARA MICROPIPETA.png"], etiqueta: "" },
  { id: 69, nombre: "TERMOHIGROMETRO SH-110", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 45.00, imagenes: ["img/productos/laboratorio/material-insumos/TERMOHIGROMETRO SH-110.png"], etiqueta: "" },
  { id: 70, nombre: "TERMOMETRO DE REFRIGERACION", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 30.00, imagenes: ["img/productos/laboratorio/material-insumos/TERMOMETRO DE REFRIGERACION.png"], etiqueta: "" },
  { id: 71, nombre: "TIPS PUNTERAS UNIVERSALES", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/TIPS PUNTERAS UNIVERSALES.png"], etiqueta: "" },
  { id: 72, nombre: "TUBO CONICO ESTERIL Y NO ESTERIL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/TUBO CONICO ESTERIL Y NO ESTERIL.png"], etiqueta: "" },
  { id: 73, nombre: "TUBO DE ENSAYO CON TAPA ROSCA (PIREX)", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/TUBO DE ENSAYO CON TAPA ROSCA (PIREX).png"], etiqueta: "" },
  { id: 74, nombre: "TUBO DE ENSAYO SIN TAPA", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/TUBO DE ENSAYO SIN TAPA.png"], etiqueta: "" },
  { id: 75, nombre: "TUBOS CAPILARES PARA HEMATOCRITO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 12.00, imagenes: ["img/productos/laboratorio/material-insumos/TUBOS CAPILARES PARA HEMATOCRITO.png"], etiqueta: "" },
  { id: 76, nombre: "TUBOS CRIOVIALES ESTERIL Y NO ESTERIL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/TUBOS CRIOVIALES ESTERIL Y NO ESTERIL.png"], etiqueta: "" },
  { id: 77, nombre: "VAGUETA DE VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/VAGUETA DE VIDRIO.png"], etiqueta: "" },
  { id: 78, nombre: "VASO PRECIPITADO BEAKER - VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/material-insumos/VASO PRECIPITADO BEAKER - VIDRIO.png"], etiqueta: "" }
];

// --- BLOQUE 3: REACTIVOS ---
const productosLaboratorioReactivos = [
  { id: 79, nombre: "ACEITE DE INMERSION", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/reactivos/ACEITE DE INMERSION.png"], etiqueta: "" },
  { id: 80, nombre: "PRUEBA RAPIDA DUO DENGUE MARCA CTK CAJA X 30 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 380.00, imagenes: ["img/productos/laboratorio/reactivos/PRUEBA RAPIDA DUO DENGUE MARCA CTK CAJA X 30 UND.png"], etiqueta: "" },
  { id: 81, nombre: "PRUEBA RAPIDA DUO SIFILIS/HIV MARCA CTK CAJA X 25 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 140.00, imagenes: ["img/productos/laboratorio/reactivos/PRUEBA RAPIDA DUO SIFILIS/HIV MARCA CTK CAJA X 25 UND.png"], etiqueta: "" },
  { id: 82, nombre: "PRUEBA RAPIDA FOB CTK CAJA X 25 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 160.00, imagenes: ["img/productos/laboratorio/reactivos/PRUEBA RAPIDA FOB CTK CAJA X 25 UND.png"], etiqueta: "" },
  { id: 83, nombre: "PRUEBA RAPIDA HELICOBACTER PYLORI CTK CAJA X 30 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 180.00, imagenes: ["img/productos/laboratorio/reactivos/PRUEBA RAPIDA HELICOBACTER PYLORI CTK CAJA X 30 UND.png"], etiqueta: "" },
  { id: 84, nombre: "PRUEBA RAPIDA HEPATITIS B MARCAQ CTK X 30 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 100.00, imagenes: ["img/productos/laboratorio/reactivos/PRUEBA RAPIDA HEPATITIS B MARCAQ CTK X 30 UND.png"], etiqueta: "" },
  { id: 85, nombre: "PRUEBA RAPIDA HIV MARCA CTK X 30 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 100.00, imagenes: ["img/productos/laboratorio/reactivos/PRUEBA RAPIDA HIV MARCA CTK X 30 UND.png"], etiqueta: "" },
  { id: 86, nombre: "PRUEBA RAPIDA SIFILIS MARCA CTK X 30 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 100.00, imagenes: ["img/productos/laboratorio/reactivos/PRUEBA RAPIDA SIFILIS MARCA CTK X 30 UND.png"], etiqueta: "" },
  { id: 87, nombre: "COLORANTES DE LABORATORIO", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/reactivos/COLORANTES DE LABORATORIO.png"], etiqueta: "" },
  { id: 88, nombre: "REACTIVOS QCA", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/reactivos/REACTIVOS QCA.png"], etiqueta: "" },
  { id: 89, nombre: "REACTIVOS WINNER", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 0.00, imagenes: ["img/productos/laboratorio/reactivos/REACTIVOS WINNER.png"], etiqueta: "" },
  { id: 90, nombre: "TIRA REACTIVA HCG MONTEST", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 30.00, imagenes: ["img/productos/laboratorio/reactivos/TIRA REACTIVA HCG MONTEST.png"], etiqueta: "" },
  { id: 91, nombre: "TIRA REACTIVA PARA ORINA DE 11 PARAMETROS MEDITEST", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 60.00, imagenes: ["img/productos/laboratorio/reactivos/TIRA REACTIVA PARA ORINA DE 11 PARAMETROS MEDITEST.png"], etiqueta: "" },
  { id: 92, nombre: "TIRA REACTIVA PARA ORINA DE 11 PARAMETROS MISSION", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 35.00, imagenes: ["img/productos/laboratorio/reactivos/TIRA REACTIVA PARA ORINA DE 11 PARAMETROS MISSION.png"], etiqueta: "" }
];

// --- BLOQUE 4: EQUIPOS MÉDICOS - MONITOREO Y DIAGNÓSTICO (101 - 130) ---
const productosEquiposMedicosMonitoreo = [
{ id: 101, nombre: "ASPIRADOR DE SECRECIONES ARMOLINE AL-01", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 290.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ASPIRADOR DE SECRECIONES ARMOLINE AL-01.png"], etiqueta: "" },
{ id: 102, nombre: "ASPIRADOR DE SECRECIONES C-MI NEW ASPIRET", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 450.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ASPIRADOR DE SECRECIONES C-MI NEW ASPIRET.png"], etiqueta: "" },
{ id: 103, nombre: "ASPIRADOR DE SECRECIONES FOLEE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 300.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ASPIRADOR DE SECRECIONES FOLEE.png"], etiqueta: "" },
{ id: 104, nombre: "DOPLER FETAL CHOICEMMED", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 320.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/DOPLER FETAL CHOICEMMED.png"], etiqueta: "" },
{ id: 105, nombre: "DOPLER FETAL EDAN SONOTRAX BASIC A", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 550.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/DOPLER FETAL EDAN SONOTRAX BASIC A.png"], etiqueta: "" },
{ id: 106, nombre: "DOPLER FETAL JUMPER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 220.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/DOPLER FETAL JUMPER.png"], etiqueta: "" },
{ id: 107, nombre: "EQUIPO MULTIPARAMETRO 4 EN 1 ACCU-ASWER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 240.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/EQUIPO MULTIPARAMETRO 4 EN 1 ACCU-ASWER.png"], etiqueta: "" },
{ id: 108, nombre: "ESTETOSCOPIO LITMAN CLASSIC III", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 0.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ESTETOSCOPIO LITMAN CLASSIC III.png"], etiqueta: "" },
{ id: 109, nombre: "ESTETOSCOPIO RIESTER DUPLEX 2.0 ACERO INOXIDABLE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 240.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ESTETOSCOPIO RIESTER DUPLEX 2.0 ACERO INOXIDABLE.png"], etiqueta: "" },
{ id: 110, nombre: "ESTETOSCOPIO RIESTER DUPLEX ALUMINIO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 140.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ESTETOSCOPIO RIESTER DUPLEX ALUMINIO.png"], etiqueta: "" },
{ id: 111, nombre: "GLUCOMETRO ACCU-CHEK GUIDE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 150.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/GLUCOMETRO ACCU-CHEK GUIDE.png"], etiqueta: "" },
{ id: 112, nombre: "GLUCOMETRO ACCU-CHEK INSTANT", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 135.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/GLUCOMETRO ACCU-CHEK INSTANT.png"], etiqueta: "" },
{ id: 113, nombre: "GLUCOMETRO NIPRO PREMIERE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 95.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/GLUCOMETRO NIPRO PREMIERE.png"], etiqueta: "" },
{ id: 114, nombre: "GLUCOMETRO NIPRO TRUE METRIX", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 0.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/GLUCOMETRO NIPRO TRUE METRIX.png"], etiqueta: "" },
{ id: 115, nombre: "HEMOGLOBINOMETRO HEMOCONTROL EK KIT COMPLETO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 2900.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/HEMOGLOBINOMETRO HEMOCONTROL EK KIT COMPLETO.png"], etiqueta: "" },
{ id: 116, nombre: "HEMOGLOBINOMETRO HEMOCUE HB 201 + MALETIN", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 1800.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/HEMOGLOBINOMETRO HEMOCUE HB 201.png"], etiqueta: "" },
{ id: 117, nombre: "HEMOGLOBINOMETRO PORTATIL MISSION", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 380.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/HEMOGLOBINOMETRO MISSION.png"], etiqueta: "" },
{ id: 118, nombre: "KIT GLUCOMETRO YUWELL ACCUSURE 582 + 50 LANCETAS + 50 TIRAS REACTIVAS", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 130.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/KIT GLUCOMETRO YUWELL.png"], etiqueta: "" },
{ id: 119, nombre: "LANCETA ACCU-CHEK SOFTCLIX (CAJA X 100 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 25.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/LANCETA ACCU-CHEK SOFTCLIX.png"], etiqueta: "" },
{ id: 120, nombre: "LANCETA RETRACTIL ACCU-CHEK SAFE-T-PRO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 105.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/LANCETA SAFE T PRO.png"], etiqueta: "" },
{ id: 121, nombre: "LANCETA RETRACTIL ACCU-CHEK SAFE-T-PRO PLUS (CAJA X 200 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 140.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/LANCETA SAFE T PRO PLUS.png"], etiqueta: "" },
{ id: 122, nombre: "LANCETA UNIVERSAL (CAJA X 100 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 15.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/LANCETA UNIVERSAL.png"], etiqueta: "" },
{ id: 123, nombre: "LINTERNA DE DIAGNOSTICO RECARGABLE USB", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 30.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/LINTERNA USB.png"], etiqueta: "" },
{ id: 124, nombre: "LINTERNA RIESTER RI-PEN", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 65.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/LINTERNA RIESTER.png"], etiqueta: "" },
{ id: 125, nombre: "MEDIDOR DIGITAL DE COLESTEROL TRIGLICERIDOS Y HDL MISSION", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 500.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/MEDIDOR COLESTEROL.png"], etiqueta: "" },
{ id: 126, nombre: "MICROCUBETA HEMOCONTROL EK", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 0.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/MICROCUBETA HEMOCONTROL.png"], etiqueta: "" },
{ id: 127, nombre: "MICROCUBETA HEMOCUE HB 201", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 0.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/MICROCUBETA HEMOCUE.png"], etiqueta: "" },
{ id: 128, nombre: "NEBULIZADOR A PISTON ARMOLINE AL-50", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 130.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/NEBULIZADOR ARMOLINE.png"], etiqueta: "" },
{ id: 129, nombre: "NEBULIZADOR BEURER MEDICAL", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 400.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/NEBULIZADOR BEURER.png"], etiqueta: "" },
{ id: 130, nombre: "NEBULIZADOR FLO EOLO CAMI", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 180.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/NEBULIZADOR CAMI.png"], etiqueta: "" },
{ id: 131, nombre: "NEBULIZADOR FOLEE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 130.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/NEBULIZADOR FOLEE.png"], etiqueta: "" },
{ id: 132, nombre: "OTOSCOPIO ESTUCHE DE LONA RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 250.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OTOSCOPIO RIESTER.png"], etiqueta: "" },
{ id: 133, nombre: "PULSO OXIMETRO CHOICEMMED ADULTO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 75.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OXIMETRO ADULTO.png"], etiqueta: "" },
{ id: 134, nombre: "PULSO OXIMETRO CHOICEMMED PEDIATRICO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 120.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OXIMETRO PEDIATRICO.png"], etiqueta: "" },
{ id: 135, nombre: "PULSO OXIMETRO CONTEC", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 50.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OXIMETRO CONTEC.png"], etiqueta: "" },
{ id: 136, nombre: "PULSO OXIMETRO FINGERTIP ADULTO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 25.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OXIMETRO FINGERTIP.png"], etiqueta: "" },
{ id: 137, nombre: "PULSO OXIMETRO RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 380.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OXIMETRO RIESTER.png"], etiqueta: "" },
{ id: 138, nombre: "TENSIOMETRO DE BRAZO DIGITAL PHAGOMED", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 90.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO PHAGOMED.png"], etiqueta: "" },
{ id: 139, nombre: "TENSIOMETRO DE BRAZO DIGITAL JUMPER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 100.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO JUMPER.png"], etiqueta: "" },
{ id: 140, nombre: "TENSIOMETRO DE BRAZO DIGITAL OLIVE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 70.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO OLIVE.png"], etiqueta: "" },
{ id: 141, nombre: "TENSIOMETRO DE BRAZO DIGITAL YUWELL", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 140.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO YUWELL.png"], etiqueta: "" },
{ id: 142, nombre: "TENSIOMETRO DIGITAL DE BRAZO OMRON", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 180.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO OMRON.png"], etiqueta: "" },
{ id: 143, nombre: "TENSIOMETRO DIGITAL DE BRAZO RI-CHAMPIONS RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 390.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO RIESTER.png"], etiqueta: "" },
{ id: 144, nombre: "TENSIOMETRO MANUAL ALPK2", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 190.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO ALPK2.png"], etiqueta: "" },
{ id: 145, nombre: "TENSIOMETRO MANUAL BOKANG", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 45.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO BOKANG.png"], etiqueta: "" },
{ id: 146, nombre: "TENSIOMETRO MANUAL DELTA", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 90.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO DELTA.png"], etiqueta: "" },
{ id: 147, nombre: "TENSIOMETRO MANUAL RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 250.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO MANUAL RIESTER.png"], etiqueta: "" },
{ id: 148, nombre: "TIRA REACTIVA 3 EN 1 MARCA MISSION (CAJA X 25 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 350.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA MISSION.png"], etiqueta: "" },
{ id: 149, nombre: "TIRA REACTIVA ACCU-ASWER PARA ACIDO URICO (CAJA X 25 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 80.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA ACIDO URICO.png"], etiqueta: "" },
{ id: 150, nombre: "TIRA REACTIVA ACCU-ASWER PARA COLESTEROL (CAJA X 25 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 100.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA COLESTEROL.png"], etiqueta: "" },
{ id: 151, nombre: "TIRA REACTIVA ACCU-ASWER PARA GLUCOSA (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 60.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA GLUCOSA.png"], etiqueta: "" },
{ id: 152, nombre: "TIRA REACTIVA ACCU-ASWER PARA HEMOGLOBINA (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 80.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA HEMOGLOBINA.png"], etiqueta: "" },
{ id: 153, nombre: "TIRA REACTIVA ACCU-CHEK ACTIVE (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 65.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA ACCU CHEK ACTIVE.png"], etiqueta: "" },
{ id: 154, nombre: "TIRA REACTIVA ACCU-CHEK GUIDE (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 95.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA ACCU CHEK GUIDE.png"], etiqueta: "" },
{ id: 155, nombre: "TIRA REACTIVA ACCU-CHEK INSTANT (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 65.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA ACCU CHEK INSTANT.png"], etiqueta: "" },
{ id: 156, nombre: "TIRA REACTIVA ACCU-CHEK PERFORMA (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 70.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA ACCU CHEK PERFORMA.png"], etiqueta: "" },
{ id: 157, nombre: "TIRA REACTIVA NIPRO PREMIER (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 55.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA NIPRO.png"], etiqueta: "" },
{ id: 158, nombre: "TIRA REACTIVA PARA HEMOGLOBINA MARCA MISSION", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 110.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA MISSION HEMOGLOBINA.png"], etiqueta: "" },
{ id: 159, nombre: "TIRA REACTIVA TRUE METRIX (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 70.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA TRUE METRIX.png"], etiqueta: "" },
{ id: 160, nombre: "TIRA REACTIVA YUWELL", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 55.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA YUWELL.png"], etiqueta: "" }
];

// --- BLOQUE 5: EQUIPOS MÉDICOS - PESAJE Y MEDICIÓN (161 - 181) ---
const productosEquiposMedicosPesaje = [
  { id: 161, nombre: "BALANZA DIGITAL DE PISO CITIZEN", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 70.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/BALANZA DIGITAL DE PISO CITIZEN.png"] },
  { id: 162, nombre: "BALANZA DIGITAL PEDIATRICA SECA 354", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 780.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/BALANZA DIGITAL PEDIATRICA SECA 354.png"] },
  { id: 163, nombre: "BALANZA DIGITAL BEURER BF-195", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 300.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/BALANZA DIGITAL BEURER BF-195.png"] },
  { id: 164, nombre: "BALANZA DIGITAL CON TALLIMETRO", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 750.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/BALANZA DIGITAL CON TALLIMETRO.png"] },
  { id: 165, nombre: "BALANZA DIGITAL OMRON HBF-514C", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 500.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/BALANZA DIGITAL OMRON HBF-514C.png"] },
  { id: 166, nombre: "BALANZA DIGITAL PEDIATRICA BEURER BY90", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 580.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/BALANZA DIGITAL PEDIATRICA BEURER BY90.png"] },
  { id: 167, nombre: "BALANZA MECANICA SECA 700", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 0.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/BALANZA MECANICA SECA 700.png"] },
  { id: 168, nombre: "BALANZA SECA 874 DIGITAL | MADRE-BEBÉ – DOBLE PANTALLA", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 0.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/BALANZA SECA 874 DIGITAL.png"] },
  { id: 169, nombre: "BALANZA DIGITAL DE PISO SECA 803", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 380.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/BALANZA DIGITAL DE PISO SECA 803.png"] },
  { id: 170, nombre: "BALANZA DIGITAL DE PISO SECA 813", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 580.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/BALANZA DIGITAL DE PISO SECA 813.png"] },
  { id: 171, nombre: "CINTA METRICA SECA 201", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 40.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/CINTA METRICA SECA 201.png"] },
  { id: 172, nombre: "TALLIMETRO FIJO DE MADERA", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 450.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/TALLIMETRO FIJO DE MADERA.png"] },
  { id: 173, nombre: "TALLIMETRO PORTATIL SECA 213", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 1300.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/TALLIMETRO PORTATIL SECA 213.png"] },
  { id: 174, nombre: "TALLIMTERO PORTATIL DE MADERA + MOCHILA", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 500.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/TALLIMTERO PORTATIL DE MADERA + MOCHILA.png"] },
  { id: 175, nombre: "TERMOMETRO DIGITAL ALKHOFAR", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 12.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/TERMOMETRO DIGITAL ALKHOFAR.png"] },
  { id: 176, nombre: "TERMOMETRO DIGITAL CITIZEN", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 35.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/TERMOMETRO DIGITAL CITIZEN.png"] },
  { id: 177, nombre: "TERMOMETRO FRENTE Y OIDO CITIZEN CTD-711", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 120.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/TERMOMETRO FRENTE Y OIDO CITIZEN CTD-711.png"] },
  { id: 178, nombre: "TERMOMETRO INFRARROJO BERRCOM", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 45.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/TERMOMETRO INFRARROJO BERRCOM.png"] },
  { id: 179, nombre: "TERMOMETRO INFRARROJO DIKANG", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 40.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/TERMOMETRO INFRARROJO DIKANG.png"] },
  { id: 180, nombre: "TERMOMETRO INFRARROJO JUMPER", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 80.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/TERMOMETRO INFRARROJO JUMPER.png"] },
  { id: 181, nombre: "TERMOMETRO SIN CONTACTO BEURER", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 330.00, imagenes: ["img/productos/equipos-medicos/pesaje-medicion/TERMOMETRO SIN CONTACTO BEURER.png"] }
];

// --- BLOQUE 6: EQUIPOS MÉDICOS - DESCARTABLES (182 - 213) ---
const productosEquiposMedicosDescartables = [
  { id: 182, nombre: "AGUJA HIPODERMICA - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 10.00, imagenes: ["img/productos/equipos-medicos/descartables/AGUJA HIPODERMICA - CAJA X 100 UND.png"] },
  { id: 183, nombre: "ALGODÓN BOLSA X 1000GR", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 35.00, imagenes: ["img/productos/equipos-medicos/descartables/ALGODÓN BOLSA X 1000GR.png"] },
  { id: 184, nombre: "ALGODÓN BOLSA X 500GR", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 18.00, imagenes: ["img/productos/equipos-medicos/descartables/ALGODÓN BOLSA X 500GR.png"] },
  { id: 185, nombre: "ALITA VACUTAINER BD", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: ["img/productos/equipos-medicos/descartables/ALITA VACUTAINER BD.png"] },
  { id: 186, nombre: "BAJALENGUA ESTERIL - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: ["img/productos/equipos-medicos/descartables/BAJALENGUA ESTERIL - CAJA X 100 UND.png"] },
  { id: 187, nombre: "CANULA DE OXIGENO", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: ["img/productos/equipos-medicos/descartables/CANULA DE OXIGENO.png"] },
  { id: 188, nombre: "CAPUCHON CON EXPULSADOR", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: ["img/productos/equipos-medicos/descartables/CAPUCHON CON EXPULSADOR.png"] },
  { id: 189, nombre: "EQUIPO VENOCLISIS", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: ["img/productos/equipos-medicos/descartables/EQUIPO VENOCLISIS.png"] },
  { id: 190, nombre: "EQUIPO VOLUTROL", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: ["img/productos/equipos-medicos/descartables/EQUIPO VOLUTROL.png"] },
  { id: 191, nombre: "ESPARADRAPO 3M", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: ["img/productos/equipos-medicos/descartables/ESPARADRAPO 3M.png"] },
  { id: 192, nombre: "GASA ABSORBENTE 100 YARDAS", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 70.00, imagenes: ["img/productos/equipos-medicos/descartables/GASA ABSORBENTE 100 YARDAS.png"] },
  { id: 193, nombre: "GASA ESTERIL 10*10 - CAJA X 20 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: ["img/productos/equipos-medicos/descartables/GASA ESTERIL 10x10 - CAJA X 20 UND.png"] },
  { id: 194, nombre: "GASA ESTERIL 5*5 - CAJA X 20 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 12.00, imagenes: ["img/productos/equipos-medicos/descartables/GASA ESTERIL 5x5 - CAJA X 20 UND.png"] },
  { id: 195, nombre: "GUANTE DE LATEX (CAJA X 100 UND) - TALLA S-M-L", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: ["img/productos/equipos-medicos/descartables/GUANTE DE LATEX.png"] },
  { id: 196, nombre: "GUANTE DE NITRILO (CAJA X 100 UND \"CELESTE\" - S-M-L", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: ["img/productos/equipos-medicos/descartables/GUANTE DE NITRILO CELESTE.png"] },
  { id: 197, nombre: "GUANTE DE NITRILO (CAJA X 100 UND \"ROSADO\" - S-M-L", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: ["img/productos/equipos-medicos/descartables/GUANTE DE NITRILO ROSADO.png"] },
  { id: 198, nombre: "GUANTE DE NITRILO (CAJA X 100 UND \"NEGRO\" - S-M-L", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: ["img/productos/equipos-medicos/descartables/GUANTE DE NITRILO NEGRO.png"] },
  { id: 199, nombre: "HISOPO ESTERIL CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: ["img/productos/equipos-medicos/descartables/HISOPO ESTERIL CAJA X 100 UND.png"] },
  { id: 200, nombre: "HOJA DE BISTURI ALKHOFAR - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 22.00, imagenes: ["img/productos/equipos-medicos/descartables/HOJA DE BISTURI ALKHOFAR.png"] },
  { id: 201, nombre: "JERINGA DE AGA", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 7.00, imagenes: ["img/productos/equipos-medicos/descartables/JERINGA DE AGA.png"] },
  { id: 202, nombre: "JERINGA DESCARTABLE 10ML - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: ["img/productos/equipos-medicos/descartables/JERINGA DESCARTABLE 10ML.png"] },
  { id: 203, nombre: "JERINGA DESCARTABLE 1ML - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: ["img/productos/equipos-medicos/descartables/JERINGA DESCARTABLE 1ML.png"] },
  { id: 204, nombre: "JERINGA DESCARTABLE 20 ML - CAJA X 50 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: ["img/productos/equipos-medicos/descartables/JERINGA DESCARTABLE 20 ML.png"] },
  { id: 205, nombre: "JERINGA DESCARTABLE 3ML - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: ["img/productos/equipos-medicos/descartables/JERINGA DESCARTABLE 3ML.png"] },
  { id: 206, nombre: "JERINGA DESCARTABLE 5ML - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: ["img/productos/equipos-medicos/descartables/JERINGA DESCARTABLE 5ML.png"] },
  { id: 207, nombre: "LLAVE DE TRIPLE VIA", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: ["img/productos/equipos-medicos/descartables/LLAVE DE TRIPLE VIA.png"] },
  { id: 208, nombre: "MASCARILLA 3 PLIEGUES - CAJA X 50 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 8.00, imagenes: ["img/productos/equipos-medicos/descartables/MASCARILLA 3 PLIEGUES.png"] },
  { id: 209, nombre: "TUBO TAPA AMARILLA 3.5ML - PAQUETE X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 50.00, imagenes: ["img/productos/equipos-medicos/descartables/TUBO TAPA AMARILLA 3.5ML.png"] },
  { id: 210, nombre: "TUBO TAPA AMARILLA 5ML - PAQUETE X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 45.00, imagenes: ["img/productos/equipos-medicos/descartables/TUBO TAPA AMARILLA 5ML.png"] },
  { id: 211, nombre: "TUBO TAPA CELESTE 3.6ML - PAQUETE X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 30.00, imagenes: ["img/productos/equipos-medicos/descartables/TUBO TAPA CELESTE 3.6ML.png"] },
  { id: 212, nombre: "TUBO TAPA LILA 3ML - PAQUETE X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 30.00, imagenes: ["img/productos/equipos-medicos/descartables/TUBO TAPA LILA 3ML.png"] },
  { id: 213, nombre: "TUBO TAPA ROJA X 6ML - PAQUETE X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 30.00, imagenes: ["img/productos/equipos-medicos/descartables/TUBO TAPA ROJA X 6ML.png"] }
];

// --- BLOQUE 7: ORTOPEDIA - SILLAS DE RUEDAS (214 - 224) ---
const productosOrtopediaSillas = [
  { id: 214, nombre: "SILLA DE PASEO ALUMINIO", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 480.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SILLA DE PASEO ALUMINIO.png"] },
  { id: 215, nombre: "SILLA DE RUEDAS CROMADA 2 FRENOS", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 330.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SILLA DE RUEDAS CROMADA 2 FRENOS.png"] },
  { id: 216, nombre: "SILLA DE RUEDAS CROMADA 4 FRENOS", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 350.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SILLA DE RUEDAS CROMADA 4 FRENOS.png"] },
  { id: 217, nombre: "SILLA DE RUEDAS CROMADA DOBLE FORRO", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 370.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SILLA DE RUEDAS CROMADA DOBLE FORRO.png"] },
  { id: 218, nombre: "SILLA DE RUEDAS ELECTRICA", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 0.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SILLA DE RUEDAS ELECTRICA.png"] },
  { id: 219, nombre: "SILLA ESTANDAR ALUMINIO", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 580.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SILLA ESTANDAR ALUMINIO.png"] },
  { id: 220, nombre: "SILLA TIPO MALETA ALUMINIO", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 530.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SILLA TIPO MALETA ALUMINIO.png"] },
  { id: 221, nombre: "SILLA TRAUMATOLOGICA 3 EN 1", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 520.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SILLA TRAUMATOLOGICA 3 EN 1.png"] },
  { id: 222, nombre: "SILLA TRAUMATOLOGICA 5 EN 1 CROMADA", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 750.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SILLA TRAUMATOLOGICA 5 EN 1 CROMADA.png"] },
  { id: 223, nombre: "SILLA TRAUMATOLOGICA 5 EN 1 PINTADA", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 580.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SILLA TRAUMATOLOGICA 5 EN 1 PINTADA.png"] },
  { id: 224, nombre: "SLLA DE RUEDAS ECONOMICA", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 250.00, imagenes: ["img/productos/ortopedia/sillas-ruedas/SLLA DE RUEDAS ECONOMICA.png"] }
];

// --- BLOQUE 8: ORTOPEDIA - CAMAS CLÍNICAS (225 - 229) ---
const productosOrtopediaCamas = [
  { id: 225, nombre: "CAMA CLINICA 4 FUNCIONES ELECTRICA", categoria: "Ortopedia", subcategoria: "Camas Clínicas", precio: 0.00, imagenes: ["img/productos/ortopedia/camas-clinicas/CAMA CLINICA 4 FUNCIONES ELECTRICA.png"] },
  { id: 226, nombre: "CAMA CLINICA DE 2 FUNCIONES", categoria: "Ortopedia", subcategoria: "Camas Clínicas", precio: 850.00, imagenes: ["img/productos/ortopedia/camas-clinicas/CAMA CLINICA DE 2 FUNCIONES.png"] },
  { id: 227, nombre: "CAMA CLINICA DE 3 FUNCIONES", categoria: "Ortopedia", subcategoria: "Camas Clínicas", precio: 1600.00, imagenes: ["img/productos/ortopedia/camas-clinicas/CAMA CLINICA DE 3 FUNCIONES.png"] },
  { id: 228, nombre: "CAMA CLINICA MULTIFUNCIONAL", categoria: "Ortopedia", subcategoria: "Camas Clínicas", precio: 1650.00, imagenes: ["img/productos/ortopedia/camas-clinicas/CAMA CLINICA MULTIFUNCIONAL.png"] },
  { id: 229, nombre: "CAMILLA DE MASAJES PORTATIL", categoria: "Ortopedia", subcategoria: "Camas Clínicas", precio: 400.00, imagenes: ["img/productos/ortopedia/camas-clinicas/CAMILLA DE MASAJES PORTATIL.png"] }
];

// --- BLOQUE 9: ORTOPEDIA - PRODUCTOS Y ACCESORIOS (230 - 247) ---
const productosOrtopediaAccesorios = [
  { id: 230, nombre: "ANDADOR DE ALUMINIO CON ASIENTO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 180.00, imagenes: ["img/productos/ortopedia/accesorios/ANDADOR DE ALUMINIO CON ASIENTO.png"] },
  { id: 231, nombre: "ANDADOR DE ALUMINIO CON RUEDA", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 110.00, imagenes: ["img/productos/ortopedia/accesorios/ANDADOR DE ALUMINIO CON RUEDA.png"] },
  { id: 232, nombre: "ANDADOR DE ALUMINIO SIN RUEDA", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 100.00, imagenes: ["img/productos/ortopedia/accesorios/ANDADOR DE ALUMINIO SIN RUEDA.png"] },
  { id: 233, nombre: "BASTON CANADIENSE", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 50.00, imagenes: ["img/productos/ortopedia/accesorios/BASTON CANADIENSE.png"] },
  { id: 234, nombre: "BASTON DE 1 PATA ALUMINIO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 40.00, imagenes: ["img/productos/ortopedia/accesorios/BASTON DE 1 PATA ALUMINIO.png"] },
  { id: 235, nombre: "BASTON DE 4 PATAS ALUMINIO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 50.00, imagenes: ["img/productos/ortopedia/accesorios/BASTON DE 4 PATAS ALUMINIO.png"] },
  { id: 236, nombre: "BASTON DE 4 PATAS CROMADA", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 50.00, imagenes: ["img/productos/ortopedia/accesorios/BASTON DE 4 PATAS CROMADA.png"] },
  { id: 237, nombre: "BOTA WALKER CAÑA ALTA/BAJA", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 160.00, imagenes: ["img/productos/ortopedia/accesorios/BOTA WALKER CAÑA ALTA BAJA.png"] },
  { id: 238, nombre: "CHATA DE PLASTICO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 30.00, imagenes: ["img/productos/ortopedia/accesorios/CHATA DE PLASTICO.png"] },
  { id: 239, nombre: "COGIN DE GEL HERRADURA", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 70.00, imagenes: ["img/productos/ortopedia/accesorios/COGIN DE GEL HERRADURA.png"] },
  { id: 240, nombre: "COGIN DE GEL RESPALDAR", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 70.00, imagenes: ["img/productos/ortopedia/accesorios/COGIN DE GEL RESPALDAR.png"] },
  { id: 241, nombre: "COGIN PICARON DE GEL", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 70.00, imagenes: ["img/productos/ortopedia/accesorios/COGIN PICARON DE GEL.png"] },
  { id: 242, nombre: "COLCHON ATIESCARAS FLUTECH", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 120.00, imagenes: ["img/productos/ortopedia/accesorios/COLCHON ATIESCARAS FLUTECH.png"] },
  { id: 243, nombre: "COLCHON ATIESCARAS UNICARE", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 150.00, imagenes: ["img/productos/ortopedia/accesorios/COLCHON ATIESCARAS UNICARE.png"] },
  { id: 244, nombre: "ELEVADOR DE INODORO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 140.00, imagenes: ["img/productos/ortopedia/accesorios/ELEVADOR DE INODORO.png"] },
  { id: 245, nombre: "MULETA GRADUABLE ALUMINIO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 70.00, imagenes: ["img/productos/ortopedia/accesorios/MULETA GRADUABLE ALUMINIO.png"] },
  { id: 246, nombre: "SANITARIO PORTATIL", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 180.00, imagenes: ["img/productos/ortopedia/accesorios/SANITARIO PORTATIL.png"] },
  { id: 247, nombre: "SILLA DE DUCHA ALUMINIO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 160.00, imagenes: ["img/productos/ortopedia/accesorios/SILLA DE DUCHA ALUMINIO.png"] }
];

// --- BLOQUE 10: MOBILIARIO MÉDICO - EMERGENCIA (TRAUMA) (248 - 258) ---
const productosMobiliarioEmergencia = [
  { id: 248, nombre: "CAMILLA DE LONA AZED ETT-02", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 200.00, imagenes: ["img/productos/mobiliario/emergencia/CAMILLA DE LONA AZED ETT-02.png"] },
  { id: 249, nombre: "CAMILLA METALICA DE RESCATE TIPO CANASTILLA", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 380.00, imagenes: ["img/productos/mobiliario/emergencia/CAMILLA METALICA DE RESCATE TIPO CANASTILLA.png"] },
  { id: 250, nombre: "CAMILLA METALICA DE RESCATE TIPO CANASTILLA CON TABLA", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 480.00, imagenes: ["img/productos/mobiliario/emergencia/CAMILLA METALICA DE RESCATE TIPO CANASTILLA CON TABLA.png"] },
  { id: 251, nombre: "COCHE DE PARO AZED UD7-E5", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 1800.00, imagenes: ["img/productos/mobiliario/emergencia/COCHE DE PARO AZED UD7-E5.png"] },
  { id: 252, nombre: "COLLARIN SERVICAL", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 0.00, imagenes: ["img/productos/mobiliario/emergencia/COLLARIN SERVICAL.png"] },
  { id: 253, nombre: "CORREA SPIDER", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 50.00, imagenes: ["img/productos/mobiliario/emergencia/CORREA SPIDER.png"] },
  { id: 254, nombre: "FERULAS", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 0.00, imagenes: ["img/productos/mobiliario/emergencia/FERULAS.png"] },
  { id: 255, nombre: "INMOVILIZADOR DE CABEZA JHAS YJK-16", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 165.00, imagenes: ["img/productos/mobiliario/emergencia/INMOVILIZADOR DE CABEZA JHAS YJK-16.png"] },
  { id: 256, nombre: "MALETIN DE ABORDAJE", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 0.00, imagenes: ["img/productos/mobiliario/emergencia/MALETIN DE ABORDAJE.png"] },
  { id: 257, nombre: "MANTA TERMICA PLATEADA 160 x 210", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 10.00, imagenes: ["img/productos/mobiliario/emergencia/MANTA TERMICA PLATEADA 160 x 210.png"] },
  { id: 258, nombre: "TABLA RIGIDA", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 180.00, imagenes: ["img/productos/mobiliario/emergencia/TABLA RIGIDA.png"] }
];

// --- BLOQUE 11: MOBILIARIO - MOBILIARIO MÉDICO ---
const productosMobiliarioMedico = [
  { id: 259, nombre: "BIOMBO DE 2 CUERPOS", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 170.00, imagenes: ["img/productos/mobiliario/general/BIOMBO DE 2 CUERPOS.png"] },
  { id: 260, nombre: "BIOMBO DE 3 CUERPOS", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 190.00, imagenes: ["img/productos/mobiliario/general/BIOMBO DE 3 CUERPOS.png"] },
  { id: 261, nombre: "CAMILLA GINECOLOGICA", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 350.00, imagenes: ["img/productos/mobiliario/general/CAMILLA GINECOLOGICA.png"] },
  { id: 262, nombre: "CAMILLA PARA EXAMEN MEDICO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 300.00, imagenes: ["img/productos/mobiliario/general/CAMILLA PARA EXAMEN MEDICO.png"] },
  { id: 263, nombre: "COCHE DE CURACIONES DE 1 CAJON", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 150.00, imagenes: ["img/productos/mobiliario/general/COCHE DE CURACIONES DE 1 CAJON.png"] },
  { id: 264, nombre: "COCHE DE CURACIONES DE DOS CAJONES", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 180.00, imagenes: ["img/productos/mobiliario/general/COCHE DE CURACIONES DE DOS CAJONES.png"] },
  { id: 265, nombre: "COCHE DE CURACIONES DE DOS CAJONES AMOBLADO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 330.00, imagenes: ["img/productos/mobiliario/general/COCHE DE CURACIONES DE DOS CAJONES AMOBLADO.png"] },
  { id: 266, nombre: "ESCALINATA DE 1 PELDAÑO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 80.00, imagenes: ["img/productos/mobiliario/general/ESCALINATA DE 1 PELDAÑO.png"] },
  { id: 267, nombre: "ESCALINATA DE 2 PELDAÑO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 110.00, imagenes: ["img/productos/mobiliario/general/ESCALINATA DE 2 PELDAÑO.png"] },
  { id: 268, nombre: "INFANTOMETRO CON PLATAFORMA", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 0.00, imagenes: ["img/productos/mobiliario/general/INFANTOMETRO CON PLATAFORMA.png"] },
  { id: 269, nombre: "LAMPARA CUELLO DE GANSO DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 0.00, imagenes: ["img/productos/mobiliario/general/LAMPARA CUELLO DE GANSO DE ACERO INOXIDABLE.png"] },
  { id: 270, nombre: "MESA DE MAYO CROMADA", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 180.00, imagenes: ["img/productos/mobiliario/general/MESA DE MAYO CROMADA.png"] },
  { id: 271, nombre: "MESA DE MAYO PINTADA", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 0.00, imagenes: ["img/productos/mobiliario/general/MESA DE MAYO PINTADA.png"] },
  { id: 272, nombre: "PORTA SUERO CROMADO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 130.00, imagenes: ["img/productos/mobiliario/general/PORTA SUERO CROMADO.png"] },
  { id: 273, nombre: "PORTA SUERO PINTADO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 90.00, imagenes: ["img/productos/mobiliario/general/PORTA SUERO PINTADO.png"] },
  { id: 274, nombre: "SILLA PARA TOMA DE MUESTRA", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 180.00, imagenes: ["img/productos/mobiliario/general/SILLA PARA TOMA DE MUESTRA.png"] },
  { id: 275, nombre: "TABURETE HIDRAULICO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 0.00, imagenes: ["img/productos/mobiliario/general/TABURETE HIDRAULICO.png"] },
  { id: 276, nombre: "VITRINA DE 1 CUERPO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 350.00, imagenes: ["img/productos/mobiliario/general/VITRINA DE 1 CUERPO.png"] },
  { id: 277, nombre: "VITRINA DE 2 CUERPOS", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 450.00, imagenes: ["img/productos/mobiliario/general/VITRINA DE 2 CUERPOS.png"] }
];

// --- BLOQUE: MOBILIARIO MÉDICO - OTROS (278 - 289) ---
const productosMobiliarioOtros = [
  { id: 278, nombre: "CAJA DE ACERO INOXIDABLE PARA INSTRUMENTAL", categoria: "Mobiliario", subcategoria: "Otros", precio: 0.00, imagenes: ["img/productos/mobiliario/otros/CAJA DE ACERO INOXIDABLE PARA INSTRUMENTAL.png"] },
  { id: 279, nombre: "CHATA DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Otros", precio: 100.00, imagenes: ["img/productos/mobiliario/otros/CHATA DE ACERO INOXIDABLE.png"] },
  { id: 280, nombre: "ESTERILIZADOR CALOR SECO MARCA OVENS", categoria: "Mobiliario", subcategoria: "Otros", precio: 0.00, imagenes: ["img/productos/mobiliario/otros/ESTERILIZADOR CALOR SECO MARCA OVENS.png"] },
  { id: 281, nombre: "ESTUCHE DE DISECCION 9 PIEZAS", categoria: "Mobiliario", subcategoria: "Otros", precio: 30.00, imagenes: ["img/productos/mobiliario/otros/ESTUCHE DE DISECCION 9 PIEZAS.png"] },
  { id: 282, nombre: "PAD DE SUTURA 17 CORTES", categoria: "Mobiliario", subcategoria: "Otros", precio: 20.00, imagenes: ["img/productos/mobiliario/otros/PAD DE SUTURA 17 CORTES.png"] },
  { id: 283, nombre: "PAPAGAYO DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Otros", precio: 65.00, imagenes: ["img/productos/mobiliario/otros/PAPAGAYO DE ACERO INOXIDABLE.png"] },
  { id: 284, nombre: "RIÑONERAS DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Otros", precio: 0.00, imagenes: ["img/productos/mobiliario/otros/RIÑONERAS DE ACERO INOXIDABLE.png"] },
  { id: 285, nombre: "TACHO DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Otros", precio: 0.00, imagenes: ["img/productos/mobiliario/otros/TACHO DE ACERO INOXIDABLE.png"] },
  { id: 286, nombre: "TAMBOR DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Otros", precio: 0.00, imagenes: ["img/productos/mobiliario/otros/TAMBOR DE ACERO INOXIDABLE.png"] },
  { id: 287, nombre: "TERMO PORTA VACUNAS BIOBASE DE 12 LITROS", categoria: "Mobiliario", subcategoria: "Otros", precio: 350.00, imagenes: ["img/productos/mobiliario/otros/TERMO PORTA VACUNAS BIOBASE DE 12 LITROS.png"] },
  { id: 288, nombre: "TERMO PORTA VACUNAS BIOBASE DE 20 LITROS", categoria: "Mobiliario", subcategoria: "Otros", precio: 400.00, imagenes: ["img/productos/mobiliario/otros/TERMO PORTA VACUNAS BIOBASE DE 20 LITROS.png"] },
  { id: 289, nombre: "TERMO PORTA VACUNAS BIOBASE DE 6 LITROS", categoria: "Mobiliario", subcategoria: "Otros", precio: 280.00, imagenes: ["img/productos/mobiliario/otros/TERMO PORTA VACUNAS BIOBASE DE 6 LITROS.png"] }
];

// --- UNIFICACIÓN DE BASE DE DATOS ---
const todosLosProductos = [
    ...productosLaboratorioEquipos, 
    ...productosLaboratorioMaterial,
    ...productosLaboratorioReactivos,
    ...productosEquiposMedicosMonitoreo,
    ...productosEquiposMedicosPesaje,
    ...productosEquiposMedicosDescartables,
    ...productosOrtopediaSillas,
    ...productosOrtopediaCamas,
    ...productosOrtopediaAccesorios,
    ...productosMobiliarioEmergencia,
    ...productosMobiliarioMedico,
    ...productosMobiliarioOtros
];

const cart = [];

const productsGrid = document.getElementById("products-grid");
const cartDrawer = document.getElementById("cart-drawer");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutWhatsApp = document.getElementById("checkout-whatsapp");

function formatCurrency(amount) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2
  }).format(amount);
}

function renderizarProductos(lista) {
  if (!productsGrid) return;
  productsGrid.innerHTML = lista
    .map((product) => {
      const pImage = (product.imagenes && product.imagenes.length > 0) ? product.imagenes[0] : "img/productos/placeholder.png";
      const pnombre = product.nombre;
      const pprecio = product.precio;

      return `
      <article class="product-card">
        <div class="product-media" style="padding: 0; overflow: hidden;">
          <img src="${pImage}" alt="${pnombre}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">
        </div>
        <div class="product-tags">
          ${product.discount ? `<span class="tag tag-discount">${product.discount}</span>` : ""}
          ${product.isNew ? '<span class="tag tag-new">Nuevo</span>' : ""}
        </div>
        <h3>${pnombre}</h3>
        <p>${product.description || ""}</p>
        <div class="product-footer">
          <div class="product-precio">
            <small>${product.originalprecio ? formatCurrency(product.originalprecio) : ""}</small>
            <strong>${pprecio ? 'S/ ' + pprecio.toFixed(2) : 'Consultar'}</strong>
          </div>
          <button class="add-to-cart" type="button" data-product-id="${product.id}">Agregar</button>
        </div>
      </article>
      `;
    })
    .join("");

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.productId));
      openCart();
    });
  });
}

function addToCart(productId) {
  const product = todosLosProductos.find((item) => item.id === productId);
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function updateQuantity(productId, delta) {
  const item = cart.find((product) => product.id === productId);
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    const index = cart.findIndex((product) => product.id === productId);
    cart.splice(index, 1);
  }

  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = formatCurrency(totalAmount);

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-state">Aún no agregaste productos. Empieza con uno de los destacados.</p>';
    checkoutWhatsApp.href = "https://wa.me/51943625365?text=Hola%2C%20quiero%20asesor%C3%ADa%20sobre%20equipos%20m%C3%A9dicos.";
    return;
  }

  cartItems.innerHTML = cart
    .map((item) => `
      <article class="cart-item">
        <div>
          <p class="cart-item-title">${item.nombre}</p>
          <p class="cart-item-meta">${formatCurrency(item.precio)} c/u</p>
        </div>
        <div>
          <div class="qty-controls">
            <button type="button" data-qty-id="${item.id}" data-action="decrease">-</button>
            <strong>${item.quantity}</strong>
            <button type="button" data-qty-id="${item.id}" data-action="increase">+</button>
          </div>
        </div>
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-qty-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.qtyId);
      const delta = button.dataset.action === "increase" ? 1 : -1;
      updateQuantity(productId, delta);
    });
  });

  const message = encodeURIComponent(
    `Hola, quiero asesoría sobre este carrito:\n${cart
      .map((item) => `• ${item.nombre} x${item.quantity}`)
      .join("\n")}\nTotal estimado: ${formatCurrency(totalAmount)}`
  );

  checkoutWhatsApp.href = `https://wa.me/51943625365?text=${message}`;
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

document.getElementById("cart-toggle").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
  }
});

renderizarProductos(todosLosProductos.slice(0, 6));
renderCart();

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navLinks = document.getElementById("nav-links");

if (mobileMenuToggle && navLinks) {
  mobileMenuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });
}

// Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach((element) => {
  observer.observe(element);
});
