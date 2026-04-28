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
  { id: 39, nombre: "AGUJA DESCARTABLE 18G X 1 1/2", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 15.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA DESCARTABLE 18G X 1 1/2.png"], etiqueta: "" },
  { id: 40, nombre: "AGUJA DESCARTABLE 21G X 1 1/2", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 15.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA DESCARTABLE 21G X 1 1/2.png"], etiqueta: "" },
  { id: 41, nombre: "AGUJA DESCARTABLE 21G X 1", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 15.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA DESCARTABLE 21G X 1.png"], etiqueta: "" },
  { id: 42, nombre: "AGUJA DESCARTABLE 22G X 1", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 15.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA DESCARTABLE 22G X 1.png"], etiqueta: "" },
  { id: 43, nombre: "AGUJA DESCARTABLE 23G X 1", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 15.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA DESCARTABLE 23G X 1.png"], etiqueta: "" },
  { id: 44, nombre: "AGUJA DESCARTABLE 25G X 5/8", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 15.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA DESCARTABLE 25G X 5/8.png"], etiqueta: "" },
  { id: 45, nombre: "AGUJA DESCARTABLE 26G X 1/2", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 20.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA DESCARTABLE 26G X 1/2.png"], etiqueta: "" },
  { id: 46, nombre: "AGUJA DESCARTABLE 27G X 1/2", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 20.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA DESCARTABLE 27G X 1/2.png"], etiqueta: "" },
  { id: 47, nombre: "AGUJA DESCARTABLE 30G X 1/2", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 25.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA DESCARTABLE 30G X 1/2.png"], etiqueta: "" },
  { id: 48, nombre: "AGUJA TIPO LAPICERO 31G X 5MM (INSULINA)", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 45.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA TIPO LAPICERO 31G X 5MM (INSULINA).png"], etiqueta: "" },
  { id: 49, nombre: "AGUJA TIPO LAPICERO 32G X 4MM (INSULINA)", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 45.00, imagenes: ["img/productos/laboratorio/material-insumos/AGUJA TIPO LAPICERO 32G X 4MM (INSULINA).png"], etiqueta: "" },
  { id: 50, nombre: "ALCOHOL EN GEL X 1 LITRO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 12.00, imagenes: ["img/productos/laboratorio/material-insumos/ALCOHOL EN GEL X 1 LITRO.png"], etiqueta: "" },
  { id: 51, nombre: "ALCOHOL ETILICO 70° X 1 LITRO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 10.00, imagenes: ["img/productos/laboratorio/material-insumos/ALCOHOL ETILICO 70° X 1 LITRO.png"], etiqueta: "" },
  { id: 52, nombre: "ALCOHOL ETILICO 96° X 1 LITRO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 13.00, imagenes: ["img/productos/laboratorio/material-insumos/ALCOHOL ETILICO 96° X 1 LITRO.png"], etiqueta: "" },
  { id: 53, nombre: "ALCOHOL ISOPROPILICO X 1 LITRO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 15.00, imagenes: ["img/productos/laboratorio/material-insumos/ALCOHOL ISOPROPILICO X 1 LITRO.png"], etiqueta: "" },
  { id: 54, nombre: "ALGODON EN ROLLO X 500 GR", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 16.00, imagenes: ["img/productos/laboratorio/material-insumos/ALGODON EN ROLLO X 500 GR.png"], etiqueta: "" },
  { id: 55, nombre: "APLICADORES DE MADERA X 100 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 3.50, imagenes: ["img/productos/laboratorio/material-insumos/APLICADORES DE MADERA X 100 UNID.png"], etiqueta: "" },
  { id: 56, nombre: "AZUL DE METILENO X 100 ML", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 10.00, imagenes: ["img/productos/laboratorio/material-insumos/AZUL DE METILENO X 100 ML.png"], etiqueta: "" },
  { id: 57, nombre: "BAJALENGUA DE MADERA X 100 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 6.00, imagenes: ["img/productos/laboratorio/material-insumos/BAJALENGUA DE MADERA X 100 UNID.png"], etiqueta: "" },
  { id: 58, nombre: "CRIBO PARA COLORACION DE ACERO INOXIDABLE", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 45.00, imagenes: ["img/productos/laboratorio/material-insumos/CRIBO PARA COLORACION DE ACERO INOXIDABLE.png"], etiqueta: "" },
  { id: 59, nombre: "CUBREOBJETOS 22 X 22 MM X 100 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 6.00, imagenes: ["img/productos/laboratorio/material-insumos/CUBREOBJETOS 22 X 22 MM X 100 UNID.png"], etiqueta: "" },
  { id: 60, nombre: "DEPÓSITO PARA PUNZOCORTANTES 1 LT", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 8.00, imagenes: ["img/productos/laboratorio/material-insumos/DEPÓSITO PARA PUNZOCORTANTES 1 LT.png"], etiqueta: "" },
  { id: 61, nombre: "DEPÓSITO PARA PUNZOCORTANTES 3 LT", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 12.00, imagenes: ["img/productos/laboratorio/material-insumos/DEPÓSITO PARA PUNZOCORTANTES 3 LT.png"], etiqueta: "" },
  { id: 62, nombre: "DEPÓSITO PARA PUNZOCORTANTES 5 LT", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 15.00, imagenes: ["img/productos/laboratorio/material-insumos/DEPÓSITO PARA PUNZOCORTANTES 5 LT.png"], etiqueta: "" },
  { id: 63, nombre: "DEPÓSITO PARA PUNZOCORTANTES 10 LT", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 22.00, imagenes: ["img/productos/laboratorio/material-insumos/DEPÓSITO PARA PUNZOCORTANTES 10 LT.png"], etiqueta: "" },
  { id: 64, nombre: "DEPÓSITO PARA PUNZOCORTANTES 20 LT", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 35.00, imagenes: ["img/productos/laboratorio/material-insumos/DEPÓSITO PARA PUNZOCORTANTES 20 LT.png"], etiqueta: "" },
  { id: 65, nombre: "FRASCO PARA ORINA 60 ML ESTERIL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.50, imagenes: ["img/productos/laboratorio/material-insumos/FRASCO PARA ORINA 60 ML ESTERIL.png"], etiqueta: "" },
  { id: 66, nombre: "FRASCO PARA HECES CON PALETA", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.50, imagenes: ["img/productos/laboratorio/material-insumos/FRASCO PARA HECES CON PALETA.png"], etiqueta: "" },
  { id: 67, nombre: "GRADILLA PARA TUBOS DE ENSAYO DE PLASTICO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 15.00, imagenes: ["img/productos/laboratorio/material-insumos/GRADILLA PARA TUBOS DE ENSAYO DE PLASTICO.png"], etiqueta: "" },
  { id: 68, nombre: "GUANTES DE EXAMEN LATEX C/POLVO (CAJA X 100)", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 22.00, imagenes: ["img/productos/laboratorio/material-insumos/GUANTES DE EXAMEN LATEX C/POLVO (CAJA X 100).png"], etiqueta: "" },
  { id: 69, nombre: "GUANTES DE EXAMEN NITRILO (CAJA X 100)", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 28.00, imagenes: ["img/productos/laboratorio/material-insumos/GUANTES DE EXAMEN NITRILO (CAJA X 100).png"], etiqueta: "" },
  { id: 70, nombre: "LANCETAS DESCARTABLES X 100 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 12.00, imagenes: ["img/productos/laboratorio/material-insumos/LANCETAS DESCARTABLES X 100 UNID.png"], etiqueta: "" },
  { id: 71, nombre: "LAMINAS PORTAOBJETOS 26 X 76 MM X 72 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 10.00, imagenes: ["img/productos/laboratorio/material-insumos/LAMINAS PORTAOBJETOS 26 X 76 MM X 72 UNID.png"], etiqueta: "" },
  { id: 72, nombre: "MASCARILLA QUIRURGICA 3 PLIEGUES X 50 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 10.00, imagenes: ["img/productos/laboratorio/material-insumos/MASCARILLA QUIRURGICA 3 PLIEGUES X 50 UNID.png"], etiqueta: "" },
  { id: 73, nombre: "PAPEL FILTRO CUALITATIVO 12.5 CM X 100 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 25.00, imagenes: ["img/productos/laboratorio/material-insumos/PAPEL FILTRO CUALITATIVO 12.5 CM X 100 UNID.png"], etiqueta: "" },
  { id: 74, nombre: "PIPETA PASTEUR DE PLASTICO 3 ML X 100 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 15.00, imagenes: ["img/productos/laboratorio/material-insumos/PIPETA PASTEUR DE PLASTICO 3 ML X 100 UNID.png"], etiqueta: "" },
  { id: 75, nombre: "PUNTAS AZULES PARA MICROPIPETA X 1000 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 45.00, imagenes: ["img/productos/laboratorio/material-insumos/PUNTAS AZULES PARA MICROPIPETA X 1000 UNID.png"], etiqueta: "" },
  { id: 76, nombre: "PUNTAS AMARILLAS PARA MICROPIPETA X 1000 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 40.00, imagenes: ["img/productos/laboratorio/material-insumos/PUNTAS AMARILLAS PARA MICROPIPETA X 1000 UNID.png"], etiqueta: "" },
  { id: 77, nombre: "TUBOS DE ENSAYO 13 X 100 MM X 100 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 35.00, imagenes: ["img/productos/laboratorio/material-insumos/TUBOS DE ENSAYO 13 X 100 MM X 100 UNID.png"], etiqueta: "" },
  { id: 78, nombre: "TUBOS AL VACIO TAPA ROJA X 100 UNID", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 38.00, imagenes: ["img/productos/laboratorio/material-insumos/TUBOS AL VACIO TAPA ROJA X 100 UNID.png"], etiqueta: "" }
];

// --- BLOQUE 3: REACTIVOS ---
const productosLaboratorioReactivos = [
  { id: 79, nombre: "ACEITE DE INMERSION X 100 ML", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 15.00, imagenes: ["img/productos/laboratorio/reactivos/ACEITE DE INMERSION X 100 ML.png"], etiqueta: "" },
  { id: 80, nombre: "AGUA DESTILADA X 1 GALON", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 10.00, imagenes: ["img/productos/laboratorio/reactivos/AGUA DESTILADA X 1 GALON.png"], etiqueta: "" },
  { id: 81, nombre: "AGUA DESTILADA X 20 LITROS", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 45.00, imagenes: ["img/productos/laboratorio/reactivos/AGUA DESTILADA X 20 LITROS.png"], etiqueta: "" },
  { id: 82, nombre: "AGUA DESIONIZADA X 1 GALON", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 15.00, imagenes: ["img/productos/laboratorio/reactivos/AGUA DESIONIZADA X 1 GALON.png"], etiqueta: "" },
  { id: 83, nombre: "AGUA DESIONIZADA X 20 LITROS", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 65.00, imagenes: ["img/productos/laboratorio/reactivos/AGUA DESIONIZADA X 20 LITROS.png"], etiqueta: "" },
  { id: 84, nombre: "COLORACION GIEMSA X 1 LITRO", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 75.00, imagenes: ["img/productos/laboratorio/reactivos/COLORACION GIEMSA X 1 LITRO.png"], etiqueta: "" },
  { id: 85, nombre: "COLORACION GRAM X 250 ML (SET X 4)", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 85.00, imagenes: ["img/productos/laboratorio/reactivos/COLORACION GRAM X 250 ML (SET X 4).png"], etiqueta: "" },
  { id: 86, nombre: "COLORACION WRIGHT X 1 LITRO", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 85.00, imagenes: ["img/productos/laboratorio/reactivos/COLORACION WRIGHT X 1 LITRO.png"], etiqueta: "" },
  { id: 87, nombre: "COLORACION ZIEHL NEELSEN (SET X 3)", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 85.00, imagenes: ["img/productos/laboratorio/reactivos/COLORACION ZIEHL NEELSEN (SET X 3).png"], etiqueta: "" },
  { id: 88, nombre: "DETERGENTE ENZIMATICO X 1 GALON", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 120.00, imagenes: ["img/productos/laboratorio/reactivos/DETERGENTE ENZIMATICO X 1 GALON.png"], etiqueta: "" },
  { id: 89, nombre: "DETERGENTE MULTIENZIMATICO X 1 GALON (BIO-ENZYM)", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 150.00, imagenes: ["img/productos/laboratorio/reactivos/DETERGENTE MULTIENZIMATICO X 1 GALON (BIO-ENZYM).png"], etiqueta: "" },
  { id: 90, nombre: "FORMOL AL 10% X 1 LITRO", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 15.00, imagenes: ["img/productos/laboratorio/reactivos/FORMOL AL 10% X 1 LITRO.png"], etiqueta: "" },
  { id: 91, nombre: "FORMOL AL 40% X 1 LITRO", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 25.00, imagenes: ["img/productos/laboratorio/reactivos/FORMOL AL 40% X 1 LITRO.png"], etiqueta: "" },
  { id: 92, nombre: "HIPOCLORITO DE SODIO AL 5% X 1 GALON", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 15.00, imagenes: ["img/productos/laboratorio/reactivos/HIPOCLORITO DE SODIO AL 5% X 1 GALON.png"], etiqueta: "" },
  { id: 93, nombre: "LUGOL FUERTE X 1 LITRO", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 45.00, imagenes: ["img/productos/laboratorio/reactivos/LUGOL FUERTE X 1 LITRO.png"], etiqueta: "" },
  { id: 94, nombre: "LUGOL PARASITOLOGICO X 100 ML", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 12.00, imagenes: ["img/productos/laboratorio/reactivos/LUGOL PARASITOLOGICO X 100 ML.png"], etiqueta: "" },
  { id: 95, nombre: "REACTIVO DE BENEDICT X 100 ML", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 15.00, imagenes: ["img/productos/laboratorio/reactivos/REACTIVO DE BENEDICT X 100 ML.png"], etiqueta: "" },
  { id: 96, nombre: "REACTIVO DE KOVAC X 100 ML", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 35.00, imagenes: ["img/productos/laboratorio/reactivos/REACTIVO DE KOVAC X 100 ML.png"], etiqueta: "" },
  { id: 97, nombre: "SOLUCION SALINA FISIOLOGICA 0.9% X 1 LITRO", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 12.00, imagenes: ["img/productos/laboratorio/reactivos/SOLUCION SALINA FISIOLOGICA 0.9% X 1 LITRO.png"], etiqueta: "" },
  { id: 98, nombre: "TALCO NACIONAL X 1 KG", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 15.00, imagenes: ["img/productos/laboratorio/reactivos/TALCO NACIONAL X 1 KG.png"], etiqueta: "" },
  { id: 99, nombre: "TEST DE EMBARAZO EN ORINA (TIRA) X 100 UNID", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 80.00, imagenes: ["img/productos/laboratorio/reactivos/TEST DE EMBARAZO EN ORINA (TIRA) X 100 UNID.png"], etiqueta: "" },
  { id: 100, nombre: "TEST DE EMBARAZO EN ORINA (CASSETTE) X 50 UNID", categoria: "Laboratorio", subcategoria: "Reactivos", precio: 75.00, imagenes: ["img/productos/laboratorio/reactivos/TEST DE EMBARAZO EN ORINA (CASSETTE) X 50 UNID.png"], etiqueta: "" }
];

// --- BLOQUE 4: EQUIPOS MÉDICOS - MONITOREO Y DIAGNÓSTICO (101 - 130) ---
const productosEquiposMedicosMonitoreo = [
  { id: 101, nombre: "ASPIRADOR DE SECRECIONES ELECTRICO (BIOSCOPE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 550.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ASPIRADOR DE SECRECIONES ELECTRICO (BIOSCOPE).png"] },
  { id: 102, nombre: "ASPIRADOR DE SECRECIONES ELECTRICO (NUAWAVE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 450.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ASPIRADOR DE SECRECIONES ELECTRICO (NUAWAVE).png"] },
  { id: 103, nombre: "CONCENTRADOR DE OXIGENO 5 LITROS (NUAWAVE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 2200.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/CONCENTRADOR DE OXIGENO 5 LITROS (NUAWAVE).png"] },
  { id: 104, nombre: "CONCENTRADOR DE OXIGENO 10 LITROS (NUAWAVE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 3800.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/CONCENTRADOR DE OXIGENO 10 LITROS (NUAWAVE).png"] },
  { id: 105, nombre: "DETECTOR DE LATIDOS FETALES (BIOSCOPE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 150.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/DETECTOR DE LATIDOS FETALES (BIOSCOPE).png"] },
  { id: 106, nombre: "DETECTOR DE LATIDOS FETALES (CONTEC)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 180.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/DETECTOR DE LATIDOS FETALES (CONTEC).png"] },
  { id: 107, nombre: "ELECTROCARDIOGRAFO DE 3 CANALES (CONTEC)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 1950.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ELECTROCARDIOGRAFO DE 3 CANALES (CONTEC).png"] },
  { id: 108, nombre: "ELECTROCARDIOGRAFO DE 12 CANALES (CONTEC)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 3500.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ELECTROCARDIOGRAFO DE 12 CANALES (CONTEC).png"] },
  { id: 109, nombre: "ESTETOSCOPIO SIMPLE (GENERAL CARE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 25.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ESTETOSCOPIO SIMPLE (GENERAL CARE).png"] },
  { id: 110, nombre: "ESTETOSCOPIO DOBLE (GENERAL CARE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 35.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ESTETOSCOPIO DOBLE (GENERAL CARE).png"] },
  { id: 111, nombre: "ESTETOSCOPIO LITTMANN CLASSIC III", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 450.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ESTETOSCOPIO LITTMANN CLASSIC III.png"] },
  { id: 112, nombre: "GLUCOMETRO ACCU-CHEK INSTANT (KIT)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 85.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/GLUCOMETRO ACCU-CHEK INSTANT (KIT).png"] },
  { id: 113, nombre: "LINTERNA DE DIAGNOSTICO CLINICO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 12.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/LINTERNA DE DIAGNOSTICO CLINICO.png"] },
  { id: 114, nombre: "MALETIN DE REANIMACION ADULTO (AMBU)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 120.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/MALETIN DE REANIMACION ADULTO (AMBU).png"] },
  { id: 115, nombre: "MALETIN DE REANIMACION PEDIATRICO (AMBU)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 120.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/MALETIN DE REANIMACION PEDIATRICO (AMBU).png"] },
  { id: 116, nombre: "MONITOR DE SIGNOS VITALES (CONTEC)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 3200.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/MONITOR DE SIGNOS VITALES (CONTEC).png"] },
  { id: 117, nombre: "NEBULIZADOR A PISTON (BIOSCOPE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 110.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/NEBULIZADOR A PISTON (BIOSCOPE).png"] },
  { id: 118, nombre: "NEBULIZADOR PORTATIL ULTRASONICO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 85.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/NEBULIZADOR PORTATIL ULTRASONICO.png"] },
  { id: 119, nombre: "OFTALMOSCOPIO POCKET (WELCH ALLYN)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 750.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OFTALMOSCOPIO POCKET (WELCH ALLYN).png"] },
  { id: 120, nombre: "OTOSCOPIO POCKET (WELCH ALLYN)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 650.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OTOSCOPIO POCKET (WELCH ALLYN).png"] },
  { id: 121, nombre: "OXIMETRO DE PULSO (CONTEC)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 45.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OXIMETRO DE PULSO (CONTEC).png"] },
  { id: 122, nombre: "OXIMETRO DE PULSO PEDIATRICO (CHOICEMMED)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 85.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OXIMETRO DE PULSO PEDIATRICO (CHOICEMMED).png"] },
  { id: 123, nombre: "SET DE DIAGNOSTICO POCKET (WELCH ALLYN)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 1350.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/SET DE DIAGNOSTICO POCKET (WELCH ALLYN).png"] },
  { id: 124, nombre: "TENSIOMETRO ANEROIDE ADULTO (GENERAL CARE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 55.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO ANEROIDE ADULTO (GENERAL CARE).png"] },
  { id: 125, nombre: "TENSIOMETRO ANEROIDE PEDIATRICO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 65.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO ANEROIDE PEDIATRICO.png"] },
  { id: 126, nombre: "TENSIOMETRO DIGITAL DE BRAZO (BIOSCOPE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 110.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO DIGITAL DE BRAZO (BIOSCOPE).png"] },
  { id: 127, nombre: "TENSIOMETRO DIGITAL DE MUÑECA (BIOSCOPE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 85.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO DIGITAL DE MUÑECA (BIOSCOPE).png"] },
  { id: 128, nombre: "TERMOMETRO DIGITAL PUNTA FLEXIBLE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 10.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TERMOMETRO DIGITAL PUNTA FLEXIBLE.png"] },
  { id: 129, nombre: "TERMOMETRO INFRARROJO SIN CONTACTO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 65.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TERMOMETRO INFRARROJO SIN CONTACTO.png"] },
  { id: 130, nombre: "ASPIRADOR DE SECRECIONES PORTATIL A BATERIA (NUAWAVE)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 850.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/ASPIRADOR DE SECRECIONES PORTATIL A BATERIA (NUAWAVE).png"] },
  { id: 131, nombre: "NEBULIZADOR FOLEE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 130.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/NEBULIZADOR FOLEE.png"] },
  { id: 132, nombre: "OTOSCOPIO ESTUCHE DE LONA RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 250.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/OTOSCOPIO ESTUCHE DE LONA RIESTER.png"] },
  { id: 133, nombre: "PULSO OXIMETRO CHOICEMMED ADULTO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 75.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/PULSO OXIMETRO CHOICEMMED ADULTO.png"] },
  { id: 134, nombre: "PULSO OXIMETRO CHOICEMMED PEDIATRICO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 120.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/PULSO OXIMETRO CHOICEMMED PEDIATRICO.png"] },
  { id: 135, nombre: "PULSO OXIMETRO CONTEC", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 50.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/PULSO OXIMETRO CONTEC.png"] },
  { id: 136, nombre: "PULSO OXIMETRO FINGERTIP ADULTO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 25.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/PULSO OXIMETRO FINGERTIP ADULTO.png"] },
  { id: 137, nombre: "PULSO OXIMETRO RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 380.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/PULSO OXIMETRO RIESTER.png"] },
  { id: 138, nombre: "TENSIOMETRO DE BRAZO DIGITAL APHAGOMED", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 90.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO DE BRAZO DIGITAL APHAGOMED.png"] },
  { id: 139, nombre: "TENSIOMETRO DE BRAZO DIGITAL JUMPER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 100.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO DE BRAZO DIGITAL JUMPER.png"] },
  { id: 140, nombre: "TENSIOMETRO DE BRAZO DIGITAL OLIVE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 70.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO DE BRAZO DIGITAL OLIVE.png"] },
  { id: 141, nombre: "TENSIOMETRO DE BRAZO DIGITAL YUWELL", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 140.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO DE BRAZO DIGITAL YUWELL.png"] },
  { id: 142, nombre: "TENSIOMETRO DIGITAL DE BRAZO OMRON", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 180.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO DIGITAL DE BRAZO OMRON.png"] },
  { id: 143, nombre: "TENSIOMETRO DIGITAL DE BRAZO RI-CHAMPIONS RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 390.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO DIGITAL DE BRAZO RI-CHAMPIONS RIESTER.png"] },
  { id: 144, nombre: "TENSIOMETRO MANUAL ALPK2", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 190.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO MANUAL ALPK2.png"] },
  { id: 145, nombre: "TENSIOMETRO MANUAL BOKANG", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 45.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO MANUAL BOKANG.png"] },
  { id: 146, nombre: "TENSIOMETRO MANUAL OTALI", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 90.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO MANUAL OTALI.png"] },
  { id: 147, nombre: "TENSIOMETRO MANUAL RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 250.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TENSIOMETRO MANUAL RIESTER.png"] },
  { id: 148, nombre: "TIRA REACTIVA 3 EN 1 MARCA MISSION (CAJA X 25 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 350.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA 3 EN 1 MARCA MISSION (CAJA X 25 UND).png"] },
  { id: 149, nombre: "TIRA REACTIVA ACCU-ASWER PARA ACIDO URICO (CAJA X 25 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 80.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA ACCU-ASWER PARA ACIDO URICO (CAJA X 25 UND).png"] },
  { id: 150, nombre: "TIRA REACTIVA ACCU-ASWER PARA COLESTEROL (CAJA X 25 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 100.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA ACCU-ASWER PARA COLESTEROL (CAJA X 25 UND).png"] },
  { id: 151, nombre: "TIRA REACTIVA ACCU-ASWER PARA GLUCOSA (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 60.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA ACCU-ASWER PARA GLUCOSA (CAJA X 50 UND).png"] },
  { id: 152, nombre: "TIRA REACTIVA ACCU-ASWER PARA HEMOGLOBINA (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 80.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA ACCU-ASWER PARA HEMOGLOBINA (CAJA X 50 UND).png"] },
  { id: 153, nombre: "TIRA REACTIVA ACCU-CHEK ACTIVE (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 65.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA ACCU-CHEK ACTIVE (CAJA X 50 UND).png"] },
  { id: 154, nombre: "TIRA REACTIVA ACCU-CHEK GUIDE (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 95.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA ACCU-CHEK GUIDE (CAJA X 50 UND).png"] },
  { id: 155, nombre: "TIRA REACTIVA ACCU-CHEK INSTAT (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 65.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA ACCU-CHEK INSTAT (CAJA X 50 UND).png"] },
  { id: 156, nombre: "TIRA REACTIVA ACCU-CHEK PERFORMA (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 70.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA ACCU-CHEK PERFORMA (CAJA X 50 UND).png"] },
  { id: 157, nombre: "TIRA REACTIVA NIPRO PREMIER (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 55.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA NIPRO PREMIER (CAJA X 50 UND).png"] },
  { id: 158, nombre: "TIRA REACTIVA PARA HEMOGLOBINA MARCA MISSION", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 110.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA PARA HEMOGLOBINA MARCA MISSION.png"] },
  { id: 159, nombre: "TIRA REACTIVA TRUE METRIX (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 70.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA TRUE METRIX (CAJA X 50 UND).png"] },
  { id: 160, nombre: "TIRA REACTIVA YUWEL", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 55.00, imagenes: ["img/productos/equipos-medicos/monitoreo-diagnostico/TIRA REACTIVA YUWEL.png"] }
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
      const pName = product.nombre || product.name;
      const pPrice = product.precio !== undefined ? product.precio : product.price;

      return `
      <article class="product-card">
        <div class="product-media" style="padding: 0; overflow: hidden;">
          <img src="${pImage}" alt="${pName}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">
        </div>
        <div class="product-tags">
          ${product.discount ? `<span class="tag tag-discount">${product.discount}</span>` : ""}
          ${product.isNew ? '<span class="tag tag-new">Nuevo</span>' : ""}
        </div>
        <h3>${pName}</h3>
        <p>${product.description || ""}</p>
        <div class="product-footer">
          <div class="product-price">
            <small>${product.originalPrice ? formatCurrency(product.originalPrice) : ""}</small>
            <strong>${pPrice ? 'S/ ' + pPrice.toFixed(2) : 'Consultar'}</strong>
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
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
          <p class="cart-item-title">${item.name}</p>
          <p class="cart-item-meta">${formatCurrency(item.price)} c/u</p>
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
      .map((item) => `• ${item.name} x${item.quantity}`)
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

renderizarProductos(todosLosProductos);
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
