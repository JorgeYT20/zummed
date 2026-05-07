// --- BLOQUE 1: EQUIPOS ---
const productosLaboratorioEquipos = [
  { id: 1, nombre: "AGITADOR DE VORTICE MOD. XH-D - HINOTEK", categoria: "Laboratorio", subcategoria: "Equipos", precio: 650.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081937/1_nh5rms.png"], etiqueta: "Nuevo" },
  { id: 2, nombre: "AGITADOR MAGNETICO CON PLACA CALIENTE MOD. MSH-300-BIOSAN", categoria: "Laboratorio", subcategoria: "Equipos", precio: 3050.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081937/2_x8lemg.png"], etiqueta: "" },
  { id: 3, nombre: "ANALIZADOR QUIMICO SEMIAUTOMATICO (BIOBASE)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 4500.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081937/3_jlwvhu.png"], etiqueta: "" },
  { id: 4, nombre: "ATOCLAVE VERTICAL PORTATIL ANALOGA 18 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1350.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081938/4_iaxugl.png"], etiqueta: "" },
  { id: 5, nombre: "ATOCLAVE VERTICAL PORTATIL ANALOGA 24 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1650.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081940/5_xa2b7e.png"], etiqueta: "" },
  { id: 6, nombre: "ATOCLAVE VERTICAL PORTATIL DIGITAL 18 LITROS (KYNTEL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2000.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081940/6_rv6n8h.png"], etiqueta: "" },
  { id: 7, nombre: "ATOCLAVE VERTICAL PORTATIL DIGITAL 24 LITROS (KYNTEL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2300.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081942/7_xgo5vq.png"], etiqueta: "" },
  { id: 8, nombre: "BALANZA DIGITAL DE PRECISION 220GR/0.0001G (FA2204)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2500.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081943/8_rvupso.png"], etiqueta: "" },
  { id: 9, nombre: "BALANZA DIGITAL DE PRECISION 3000GR/0.01G (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 550.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081944/9_kmnlke.png"], etiqueta: "" },
  { id: 10, nombre: "BALANZA DIGITAL DE PRECISION 310GR/0.001G (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1250.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081945/10_cjjunr.png"], etiqueta: "" },
  { id: 11, nombre: "BAÑO MARIA DIGITAL 12 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 850.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081946/11_mpyu5r.png"], etiqueta: "" },
  { id: 12, nombre: "BAÑO MARIA DIGITAL 18 LITROS (FAITHFUL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 999.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081947/12_zhpmq2.png"], etiqueta: "" },
  { id: 13, nombre: "BAÑO MARIA DIGITAL 3 LITROS", categoria: "Laboratorio", subcategoria: "Equipos", precio: 350.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081949/13_se3kb2.png"], etiqueta: "" },
  { id: 14, nombre: "BAÑO MARIA DIGITAL 6 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 650.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081950/14_seusbu.png"], etiqueta: "" },
  { id: 15, nombre: "CENTRIFUGA 12 TUBOS ANALOGA (KYNTEL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 580.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081951/15_yuzq8j.png"], etiqueta: "" },
  { id: 16, nombre: "CENTRIFUGA 6 TUBOS ANALOGA MOD. 800D", categoria: "Laboratorio", subcategoria: "Equipos", precio: 220.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081952/16_liw0zd.png"], etiqueta: "" },
  { id: 17, nombre: "CENTRIFUGA CLINICA DIGITAL 12 TUBOS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1250.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081953/17_fvsg7n.png"], etiqueta: "" },
  { id: 18, nombre: "CENTRIFUGA DE HEMATOCRITO 24 CAPILARES ANALOGA MOD. HN-S12A (HINOTEK)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1200.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081955/18_wvlhy9.png"], etiqueta: "" },
  { id: 19, nombre: "CENTRIFUGA DIGITAL 24 TUBOS MOD - 802C (KYNTEL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2300.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081956/19_rutc1s.png"], etiqueta: "" },
  { id: 20, nombre: "CONTADOR DE CELULAS ANALOGA 8 TECLAS", categoria: "Laboratorio", subcategoria: "Equipos", precio: 600.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081957/20_cmu0gh.png"], etiqueta: "" },
  { id: 21, nombre: "CONTADOR DE CELULAS DIGITAL 10 GRUPOS JSQA", categoria: "Laboratorio", subcategoria: "Equipos", precio: 350.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081958/21_yjly2h.png"], etiqueta: "" },
  { id: 22, nombre: "DENSITOMETRO (DETECTOR DE TURBIDEZ POR SUSPENSION) MOD. DEN-1B-BIOSAN", categoria: "Laboratorio", subcategoria: "Equipos", precio: 4500.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081959/22_bx7afy.png"], etiqueta: "" },
  { id: 23, nombre: "DSR-28D ROTADOR SEROLOGICO DIGITAL", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1950.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081960/23_rvaenx.png"], etiqueta: "" },
  { id: 24, nombre: "ES-80 BAÑO MARIA AL SECO", categoria: "Laboratorio", subcategoria: "Equipos", precio: 750.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081962/24_t1p7bs.png"], etiqueta: "" },
  { id: 25, nombre: "FOTOMETRO HI97711 - HANNA", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2500.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081963/25_xkqp21.png"], etiqueta: "" },
  { id: 26, nombre: "HORNO ESTERILIZADOR DE SECADO 65 LITROS (FAITHFUL)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 3150.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081964/26_inmgxi.png"], etiqueta: "" },
  { id: 27, nombre: "INCUBADORA MICROBIOLOGICA 18 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1250.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081965/27_magimz.png"], etiqueta: "" },
  { id: 28, nombre: "INCUBADORA MICROBIOLOGICA PORTATIL 9.2 LITROS (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1000.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081966/28_rwligy.png"], etiqueta: "" },
  { id: 29, nombre: "MEDIDOR DE PH CHECKER (H198103) - HANNA", categoria: "Laboratorio", subcategoria: "Equipos", precio: null, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081968/29_xtrrsx.png"], etiqueta: "" },
  { id: 30, nombre: "MEDIDOR DE PH DIGITAL", categoria: "Laboratorio", subcategoria: "Equipos", precio: 50.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081969/30_uxejd0.png"], etiqueta: "" },
  { id: 31, nombre: "MEDIDOR DE PH/TEMP (H198128) - HANNA", categoria: "Laboratorio", subcategoria: "Equipos", precio: null, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081970/31_os3hxw.png"], etiqueta: "" },
  { id: 32, nombre: "MICROCENTRIFUGA DIGITAL 24 CAPILARES (ACKERMAN)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1800.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081971/32_jzg4mg.png"], etiqueta: "" },
  { id: 33, nombre: "MICROPIPETA AUTOMATICA RANGO FIJO", categoria: "Laboratorio", subcategoria: "Equipos", precio: 150.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081973/33_nxpucq.png"], etiqueta: "" },
  { id: 34, nombre: "MICROPIPETA AUTOMATICA RANGO VARIABLE", categoria: "Laboratorio", subcategoria: "Equipos", precio: 120.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081974/34_gkiptk.jpg"], etiqueta: "" },
  { id: 35, nombre: "MICROSCOPIO BINOCULAR RG-2005B (MICROOS)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 1000.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081975/35_lgkchv.png"], etiqueta: "" },
  { id: 36, nombre: "MICROSCOPIO BINOCULAR RG-216B (MICROOS)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 2700.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081977/36_ai9ljr.png"], etiqueta: "" },
  { id: 37, nombre: "MICROSCOPIO TRINOCULAR BINOCULAR RG - 216T LCD (MICROOS)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 4500.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081977/37_qdg4vw.png"], etiqueta: "" },
  { id: 38, nombre: "ROTADOR SEROLOGICO ANALOGO (EUROTECH)", categoria: "Laboratorio", subcategoria: "Equipos", precio: 700.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778081978/38_uyajie.png"], etiqueta: "" }
];

// --- BLOQUE 2: MATERIAL E INSUMOS ---
const productosLaboratorioMaterial = [
  { id: 39, nombre: "ASA DE SIEMBRA BACTERIOLOGICA (RUNLAB)", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 12.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114760/39_ltrfnk.png"], etiqueta: "" },
  { id: 40, nombre: "BANDEJA DE ALMACENAMIENTO DE LAMINAS X 100, 25, 50 LAMINAS", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114760/40_kwa0v3.jpg"], etiqueta: "" },
  { id: 41, nombre: "BARRA MAGNETICA PLANA", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114760/41_g1flo2.jpg"], etiqueta: "" },
  { id: 42, nombre: "CAMARA DE NEUBAUER DOBLE ESPEJO - MARIENFELD", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 130.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114764/42_mc8bom.png"], etiqueta: "" },
  { id: 43, nombre: "CANASTILLA DE COLORACION 30 LAMINAS", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 60.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114765/43_fqnhim.png"], etiqueta: "" },
  { id: 44, nombre: "FIOLA DE VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114763/44_eiiqzr.png"], etiqueta: "" },
  { id: 45, nombre: "FRASCO TRASPARENTE CON TAPA AZUL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114764/45_tg1h7y.png"], etiqueta: "" },
  { id: 46, nombre: "GRADILLA DE PLASTICO PARA TUBOS", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114761/46_g6hioc.png"], etiqueta: "" },
  { id: 47, nombre: "GRADILLA PARA TUBO DE ENSAYO METAL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114768/47_sgdhgs.png"], etiqueta: "" },
  { id: 48, nombre: "LAMINA CUBRE OBJETO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 3.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114763/48_cv5sx5.png"], etiqueta: "" },
  { id: 49, nombre: "LAMINA PORTA OBJETO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 3.50, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114765/49_la6ge5.png"], etiqueta: "" },
  { id: 50, nombre: "MECHERO BUNSEN", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 50.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114770/50_hopdgm.png"], etiqueta: "" },
  { id: 51, nombre: "PARAFILM ROLLO DE PELÍCULA DE SELLADO 4IN. X 250FT REAL-FILM", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 200.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114768/51_sqbu10.png"], etiqueta: "" },
  { id: 52, nombre: "PINZA DOBLE NUEZ", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778114800/52_xcgqyw.png"], etiqueta: "" },
  { id: 53, nombre: "PIPETA PASTUR", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115020/53_fqqaee.png"], etiqueta: "" },
  { id: 54, nombre: "PIPETA PUMP MANUAL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 35.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115017/54_rmlnt7.png"], etiqueta: "" },
  { id: 55, nombre: "PIPETA SEREOLOGICA DE VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115027/55_polcaz.png"], etiqueta: "" },
  { id: 56, nombre: "PIPETEADOR DE PIPETAS DIGITAL LEVO PLUS DLAB", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 700.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115018/56_czmfpf.png"], etiqueta: "" },
  { id: 57, nombre: "PIPETEADOR DE PIPETAS MANUAL LEVO DLAB HASTA 100ML", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 105.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115020/57_acgimi.png"], etiqueta: "" },
  { id: 58, nombre: "PISETA DE PLASTICO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115023/58_snjjay.png"], etiqueta: "" },
  { id: 59, nombre: "PLACA EXCAVADA X 12 HOYOS", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115021/59_k3rony.png"], etiqueta: "" },
  { id: 60, nombre: "PLACA PETRIC DE PLASTICO - NO ESTERIL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115022/60_v1dalm.png"], etiqueta: "" },
  { id: 61, nombre: "PLACA PETRIC DE VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115025/61_dtvw9y.png"], etiqueta: "" },
  { id: 62, nombre: "PLASTILINA DE HEMATOCRITO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 20.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115025/62_ifsbd7.png"], etiqueta: "" },
  { id: 63, nombre: "PROBETA GRADUABLE DE VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115029/63_jryft6.png"], etiqueta: "" },
  { id: 64, nombre: "PROBETA GRADUABLE DE PLASTICO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115027/64_rwk1bf.png"], etiqueta: "" },
  { id: 65, nombre: "PROPIPETA (BOMBILLA) DE GOMA DE 3 SALIDAS", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 30.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115027/65_u9tfwb.png"], etiqueta: "" },
  { id: 66, nombre: "REFRACTOMETRO BRIX", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 110.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115028/66_uvehnr.png"], etiqueta: "" },
  { id: 67, nombre: "SOPORTE UNIVERSAL C/ BASE Y VARILLA PINTADA", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 60.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115028/67_abbef5.png"], etiqueta: "" },
  { id: 68, nombre: "SOPORTE/ RACK PARA MICROPIPETA", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115028/68_m4hral.png"], etiqueta: "" },
  { id: 69, nombre: "TERMOHIGROMETRO SH-110", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 45.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115029/69_beux8n.png"], etiqueta: "" },
  { id: 70, nombre: "TERMOMETRO DE REFRIGERACION", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 30.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115029/70_a1ms5u.png"], etiqueta: "" },
  { id: 71, nombre: "TIPS PUNTERAS UNIVERSALES", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115029/71_soamtu.png"], etiqueta: "" },
  { id: 72, nombre: "TUBO CONICO ESTERIL Y NO ESTERIL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115030/72_dyhhxp.png"], etiqueta: "" },
  { id: 73, nombre: "TUBO DE ENSAYO CON TAPA ROSCA (PIREX)", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115030/73_qykpqk.png"], etiqueta: "" },
  { id: 74, nombre: "TUBO DE ENSAYO SIN TAPA", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115031/74_t8pc7v.png"], etiqueta: "" },
  { id: 75, nombre: "TUBOS CAPILARES PARA HEMATOCRITO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 12.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115031/75_vkcego.png"], etiqueta: "" },
  { id: 76, nombre: "TUBOS CRIOVIALES ESTERIL Y NO ESTERIL", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115033/76_wwet55.png"], etiqueta: "" },
  { id: 77, nombre: "VAGUETA DE VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115033/77_zcurqv.png"], etiqueta: "" },
  { id: 78, nombre: "VASO PRECIPITADO BEAKER - VIDRIO", categoria: "Laboratorio", subcategoria: "Material e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778115033/78_bgwese.png"], etiqueta: "" }
];

// --- BLOQUE 3: REACTIVOS ---
const productosLaboratorioReactivos = [
  { id: 79, nombre: "ACEITE DE INMERSION", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117292/79_inv3zh.png"], etiqueta: "" },
  { id: 80, nombre: "PRUEBA RAPIDA DUO DENGUE MARCA CTK CAJA X 30 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 380.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117293/80_zgkbot.png"], etiqueta: "" },
  { id: 81, nombre: "PRUEBA RAPIDA DUO SIFILIS/HIV MARCA CTK CAJA X 25 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 140.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117294/81_ukf0mf.png"], etiqueta: "" },
  { id: 82, nombre: "PRUEBA RAPIDA FOB CTK CAJA X 25 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 160.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117296/82_n9o74w.png"], etiqueta: "" },
  { id: 83, nombre: "PRUEBA RAPIDA HELICOBACTER PYLORI CTK CAJA X 30 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 180.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117295/83_ftf8um.png"], etiqueta: "" },
  { id: 84, nombre: "PRUEBA RAPIDA HEPATITIS B MARCAQ CTK X 30 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 100.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117297/84_rp0vgm.png"], etiqueta: "" },
  { id: 85, nombre: "PRUEBA RAPIDA HIV MARCA CTK X 30 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 100.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117295/85_shrxjq.png"], etiqueta: "" },
  { id: 86, nombre: "PRUEBA RAPIDA SIFILIS MARCA CTK X 30 UND", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 100.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117295/86_yqyqof.png"], etiqueta: "" },
  { id: 87, nombre: "COLORANTES DE LABORATORIO", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117298/87_csq3xj.png"], etiqueta: "" },
  { id: 88, nombre: "REACTIVOS QCA", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117296/88_qahxlg.png"], etiqueta: "" },
  { id: 89, nombre: "REACTIVOS WINNER", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 0.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117297/89_tybsaj.jpg"], etiqueta: "" },
  { id: 90, nombre: "TIRA REACTIVA HCG MONTEST", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 30.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117298/90_sdiobe.png"], etiqueta: "" },
  { id: 91, nombre: "TIRA REACTIVA PARA ORINA DE 11 PARAMETROS MEDITEST", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 60.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117299/91_ktwr73.png"], etiqueta: "" },
  { id: 92, nombre: "TIRA REACTIVA PARA ORINA DE 11 PARAMETROS MISSION", categoria: "Laboratorio", subcategoria: "Reactivos e Insumos", precio: 35.00, imagenes: ["https://res.cloudinary.com/dds7iswlk/image/upload/v1778117300/92_x0xtx8.png"], etiqueta: "" }
];

// --- BLOQUE 4: EQUIPOS MÉDICOS - MONITOREO Y DIAGNÓSTICO (101 - 130) ---
const productosEquiposMedicosMonitoreo = [
{ id: 101, nombre: "ASPIRADOR DE SECRECIONES ARMOLINE AL-01", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 290.00, imagenes: [""], etiqueta: "" },
{ id: 102, nombre: "ASPIRADOR DE SECRECIONES C-MI NEW ASPIRET", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 450.00, imagenes: [""], etiqueta: "" },
{ id: 103, nombre: "ASPIRADOR DE SECRECIONES FOLEE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 300.00, imagenes: [""], etiqueta: "" },
{ id: 104, nombre: "DOPLER FETAL CHOICEMMED", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 320.00, imagenes: [""], etiqueta: "" },
{ id: 105, nombre: "DOPLER FETAL EDAN SONOTRAX BASIC A", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 550.00, imagenes: [""], etiqueta: "" },
{ id: 106, nombre: "DOPLER FETAL JUMPER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 220.00, imagenes: [""], etiqueta: "" },
{ id: 107, nombre: "EQUIPO MULTIPARAMETRO 4 EN 1 ACCU-ASWER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 240.00, imagenes: [""], etiqueta: "" },
{ id: 108, nombre: "ESTETOSCOPIO LITMAN CLASSIC III", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 0.00, imagenes: [""], etiqueta: "" },
{ id: 109, nombre: "ESTETOSCOPIO RIESTER DUPLEX 2.0 ACERO INOXIDABLE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 240.00, imagenes: [""], etiqueta: "" },
{ id: 110, nombre: "ESTETOSCOPIO RIESTER DUPLEX ALUMINIO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 140.00, imagenes: [""], etiqueta: "" },
{ id: 111, nombre: "GLUCOMETRO ACCU-CHEK GUIDE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 150.00, imagenes: [""], etiqueta: "" },
{ id: 112, nombre: "GLUCOMETRO ACCU-CHEK INSTANT", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 135.00, imagenes: [""], etiqueta: "" },
{ id: 113, nombre: "GLUCOMETRO NIPRO PREMIERE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 95.00, imagenes: [""], etiqueta: "" },
{ id: 114, nombre: "GLUCOMETRO NIPRO TRUE METRIX", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 0.00, imagenes: [""], etiqueta: "" },
{ id: 115, nombre: "HEMOGLOBINOMETRO HEMOCONTROL EK KIT COMPLETO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 2900.00, imagenes: [""], etiqueta: "" },
{ id: 116, nombre: "HEMOGLOBINOMETRO HEMOCUE HB 201 + MALETIN", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 1800.00, imagenes: [""], etiqueta: "" },
{ id: 117, nombre: "HEMOGLOBINOMETRO PORTATIL MISSION", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 380.00, imagenes: [""], etiqueta: "" },
{ id: 118, nombre: "KIT GLUCOMETRO YUWELL ACCUSURE 582 + 50 LANCETAS + 50 TIRAS REACTIVAS", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 130.00, imagenes: [""], etiqueta: "" },
{ id: 119, nombre: "LANCETA ACCU-CHEK SOFTCLIX (CAJA X 100 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 25.00, imagenes: [""], etiqueta: "" },
{ id: 120, nombre: "LANCETA RETRACTIL ACCU-CHEK SAFE-T-PRO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 105.00, imagenes: [""], etiqueta: "" },
{ id: 121, nombre: "LANCETA RETRACTIL ACCU-CHEK SAFE-T-PRO PLUS (CAJA X 200 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 140.00, imagenes: [""], etiqueta: "" },
{ id: 122, nombre: "LANCETA UNIVERSAL (CAJA X 100 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 15.00, imagenes: [""], etiqueta: "" },
{ id: 123, nombre: "LINTERNA DE DIAGNOSTICO RECARGABLE USB", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 30.00, imagenes: [""], etiqueta: "" },
{ id: 124, nombre: "LINTERNA RIESTER RI-PEN", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 65.00, imagenes: [""], etiqueta: "" },
{ id: 125, nombre: "MEDIDOR DIGITAL DE COLESTEROL TRIGLICERIDOS Y HDL MISSION", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 500.00, imagenes: [""], etiqueta: "" },
{ id: 126, nombre: "MICROCUBETA HEMOCONTROL EK", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 0.00, imagenes: [""], etiqueta: "" },
{ id: 127, nombre: "MICROCUBETA HEMOCUE HB 201", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 0.00, imagenes: [""], etiqueta: "" },
{ id: 128, nombre: "NEBULIZADOR A PISTON ARMOLINE AL-50", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 130.00, imagenes: [""], etiqueta: "" },
{ id: 129, nombre: "NEBULIZADOR BEURER MEDICAL", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 400.00, imagenes: [""], etiqueta: "" },
{ id: 130, nombre: "NEBULIZADOR FLO EOLO CAMI", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 180.00, imagenes: [""], etiqueta: "" },
{ id: 131, nombre: "NEBULIZADOR FOLEE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 130.00, imagenes: [""], etiqueta: "" },
{ id: 132, nombre: "OTOSCOPIO ESTUCHE DE LONA RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 250.00, imagenes: [""], etiqueta: "" },
{ id: 133, nombre: "PULSO OXIMETRO CHOICEMMED ADULTO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 75.00, imagenes: [""], etiqueta: "" },
{ id: 134, nombre: "PULSO OXIMETRO CHOICEMMED PEDIATRICO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 120.00, imagenes: [""], etiqueta: "" },
{ id: 135, nombre: "PULSO OXIMETRO CONTEC", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 50.00, imagenes: [""], etiqueta: "" },
{ id: 136, nombre: "PULSO OXIMETRO FINGERTIP ADULTO", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 25.00, imagenes: [""], etiqueta: "" },
{ id: 137, nombre: "PULSO OXIMETRO RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 380.00, imagenes: [""], etiqueta: "" },
{ id: 138, nombre: "TENSIOMETRO DE BRAZO DIGITAL PHAGOMED", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 90.00, imagenes: [""], etiqueta: "" },
{ id: 139, nombre: "TENSIOMETRO DE BRAZO DIGITAL JUMPER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 100.00, imagenes: [""], etiqueta: "" },
{ id: 140, nombre: "TENSIOMETRO DE BRAZO DIGITAL OLIVE", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 70.00, imagenes: [""], etiqueta: "" },
{ id: 141, nombre: "TENSIOMETRO DE BRAZO DIGITAL YUWELL", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 140.00, imagenes: [""], etiqueta: "" },
{ id: 142, nombre: "TENSIOMETRO DIGITAL DE BRAZO OMRON", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 180.00, imagenes: [""], etiqueta: "" },
{ id: 143, nombre: "TENSIOMETRO DIGITAL DE BRAZO RI-CHAMPIONS RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 390.00, imagenes: [""], etiqueta: "" },
{ id: 144, nombre: "TENSIOMETRO MANUAL ALPK2", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 190.00, imagenes: [""], etiqueta: "" },
{ id: 145, nombre: "TENSIOMETRO MANUAL BOKANG", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 45.00, imagenes: [""], etiqueta: "" },
{ id: 146, nombre: "TENSIOMETRO MANUAL DELTA", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 90.00, imagenes: [""], etiqueta: "" },
{ id: 147, nombre: "TENSIOMETRO MANUAL RIESTER", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 250.00, imagenes: [""], etiqueta: "" },
{ id: 148, nombre: "TIRA REACTIVA 3 EN 1 MARCA MISSION (CAJA X 25 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 350.00, imagenes: [""], etiqueta: "" },
{ id: 149, nombre: "TIRA REACTIVA ACCU-ASWER PARA ACIDO URICO (CAJA X 25 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 80.00, imagenes: [""], etiqueta: "" },
{ id: 150, nombre: "TIRA REACTIVA ACCU-ASWER PARA COLESTEROL (CAJA X 25 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 100.00, imagenes: [""], etiqueta: "" },
{ id: 151, nombre: "TIRA REACTIVA ACCU-ASWER PARA GLUCOSA (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 60.00, imagenes: [""], etiqueta: "" },
{ id: 152, nombre: "TIRA REACTIVA ACCU-ASWER PARA HEMOGLOBINA (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 80.00, imagenes: [""], etiqueta: "" },
{ id: 153, nombre: "TIRA REACTIVA ACCU-CHEK ACTIVE (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 65.00, imagenes: [""], etiqueta: "" },
{ id: 154, nombre: "TIRA REACTIVA ACCU-CHEK GUIDE (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 95.00, imagenes: [""], etiqueta: "" },
{ id: 155, nombre: "TIRA REACTIVA ACCU-CHEK INSTANT (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 65.00, imagenes: [""], etiqueta: "" },
{ id: 156, nombre: "TIRA REACTIVA ACCU-CHEK PERFORMA (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 70.00, imagenes: [""], etiqueta: "" },
{ id: 157, nombre: "TIRA REACTIVA NIPRO PREMIER (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 55.00, imagenes: [""], etiqueta: "" },
{ id: 158, nombre: "TIRA REACTIVA PARA HEMOGLOBINA MARCA MISSION", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 110.00, imagenes: [""], etiqueta: "" },
{ id: 159, nombre: "TIRA REACTIVA TRUE METRIX (CAJA X 50 UND)", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 70.00, imagenes: [""], etiqueta: "" },
{ id: 160, nombre: "TIRA REACTIVA YUWELL", categoria: "Equipos Médicos", subcategoria: "Monitoreo y Diagnóstico", precio: 55.00, imagenes: [""], etiqueta: "" }
];

// --- BLOQUE 5: EQUIPOS MÉDICOS - PESAJE Y MEDICIÓN (161 - 181) ---
const productosEquiposMedicosPesaje = [
  { id: 161, nombre: "BALANZA DIGITAL DE PISO CITIZEN", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 70.00, imagenes: [""] },
  { id: 162, nombre: "BALANZA DIGITAL PEDIATRICA SECA 354", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 780.00, imagenes: [""] },
  { id: 163, nombre: "BALANZA DIGITAL BEURER BF-195", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 300.00, imagenes: [""] },
  { id: 164, nombre: "BALANZA DIGITAL CON TALLIMETRO", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 750.00, imagenes: [""] },
  { id: 165, nombre: "BALANZA DIGITAL OMRON HBF-514C", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 500.00, imagenes: [""] },
  { id: 166, nombre: "BALANZA DIGITAL PEDIATRICA BEURER BY90", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 580.00, imagenes: [""] },
  { id: 167, nombre: "BALANZA MECANICA SECA 700", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 0.00, imagenes: [""] },
  { id: 168, nombre: "BALANZA SECA 874 DIGITAL | MADRE-BEBÉ – DOBLE PANTALLA", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 0.00, imagenes: [""] },
  { id: 169, nombre: "BALANZA DIGITAL DE PISO SECA 803", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 380.00, imagenes: [""] },
  { id: 170, nombre: "BALANZA DIGITAL DE PISO SECA 813", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 580.00, imagenes: [""] },
  { id: 171, nombre: "CINTA METRICA SECA 201", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 40.00, imagenes: [""] },
  { id: 172, nombre: "TALLIMETRO FIJO DE MADERA", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 450.00, imagenes: [""] },
  { id: 173, nombre: "TALLIMETRO PORTATIL SECA 213", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 1300.00, imagenes: [""] },
  { id: 174, nombre: "TALLIMTERO PORTATIL DE MADERA + MOCHILA", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 500.00, imagenes: [""] },
  { id: 175, nombre: "TERMOMETRO DIGITAL ALKHOFAR", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 12.00, imagenes: [""] },
  { id: 176, nombre: "TERMOMETRO DIGITAL CITIZEN", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 35.00, imagenes: [""] },
  { id: 177, nombre: "TERMOMETRO FRENTE Y OIDO CITIZEN CTD-711", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 120.00, imagenes: [""] },
  { id: 178, nombre: "TERMOMETRO INFRARROJO BERRCOM", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 45.00, imagenes: [""] },
  { id: 179, nombre: "TERMOMETRO INFRARROJO DIKANG", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 40.00, imagenes: [""] },
  { id: 180, nombre: "TERMOMETRO INFRARROJO JUMPER", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 80.00, imagenes: [""] },
  { id: 181, nombre: "TERMOMETRO SIN CONTACTO BEURER", categoria: "Equipos Médicos", subcategoria: "Pesaje y Medición", precio: 330.00, imagenes: [""] }
];

// --- BLOQUE 6: EQUIPOS MÉDICOS - DESCARTABLES (182 - 213) ---
const productosEquiposMedicosDescartables = [
  { id: 182, nombre: "AGUJA HIPODERMICA - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 10.00, imagenes: [""] },
  { id: 183, nombre: "ALGODÓN BOLSA X 1000GR", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 35.00, imagenes: [""] },
  { id: 184, nombre: "ALGODÓN BOLSA X 500GR", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 18.00, imagenes: [""] },
  { id: 185, nombre: "ALITA VACUTAINER BD", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: [""] },
  { id: 186, nombre: "BAJALENGUA ESTERIL - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: [""] },
  { id: 187, nombre: "CANULA DE OXIGENO", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: [""] },
  { id: 188, nombre: "CAPUCHON CON EXPULSADOR", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: [""] },
  { id: 189, nombre: "EQUIPO VENOCLISIS", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: [""] },
  { id: 190, nombre: "EQUIPO VOLUTROL", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: [""] },
  { id: 191, nombre: "ESPARADRAPO 3M", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: [""] },
  { id: 192, nombre: "GASA ABSORBENTE 100 YARDAS", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 70.00, imagenes: [""] },
  { id: 193, nombre: "GASA ESTERIL 10*10 - CAJA X 20 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: [""] },
  { id: 194, nombre: "GASA ESTERIL 5*5 - CAJA X 20 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 12.00, imagenes: [""] },
  { id: 195, nombre: "GUANTE DE LATEX (CAJA X 100 UND) - TALLA S-M-L", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: [""] },
  { id: 196, nombre: "GUANTE DE NITRILO (CAJA X 100 UND \"CELESTE\" - S-M-L", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: [""] },
  { id: 197, nombre: "GUANTE DE NITRILO (CAJA X 100 UND \"ROSADO\" - S-M-L", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: [""] },
  { id: 198, nombre: "GUANTE DE NITRILO (CAJA X 100 UND \"NEGRO\" - S-M-L", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: [""] },
  { id: 199, nombre: "HISOPO ESTERIL CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: [""] },
  { id: 200, nombre: "HOJA DE BISTURI ALKHOFAR - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 22.00, imagenes: [""] },
  { id: 201, nombre: "JERINGA DE AGA", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 7.00, imagenes: [""] },
  { id: 202, nombre: "JERINGA DESCARTABLE 10ML - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: [""] },
  { id: 203, nombre: "JERINGA DESCARTABLE 1ML - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: [""] },
  { id: 204, nombre: "JERINGA DESCARTABLE 20 ML - CAJA X 50 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: [""] },
  { id: 205, nombre: "JERINGA DESCARTABLE 3ML - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: [""] },
  { id: 206, nombre: "JERINGA DESCARTABLE 5ML - CAJA X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 15.00, imagenes: [""] },
  { id: 207, nombre: "LLAVE DE TRIPLE VIA", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 0.00, imagenes: [""] },
  { id: 208, nombre: "MASCARILLA 3 PLIEGUES - CAJA X 50 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 8.00, imagenes: [""] },
  { id: 209, nombre: "TUBO TAPA AMARILLA 3.5ML - PAQUETE X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 50.00, imagenes: [""] },
  { id: 210, nombre: "TUBO TAPA AMARILLA 5ML - PAQUETE X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 45.00, imagenes: [""] },
  { id: 211, nombre: "TUBO TAPA CELESTE 3.6ML - PAQUETE X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 30.00, imagenes: [""] },
  { id: 212, nombre: "TUBO TAPA LILA 3ML - PAQUETE X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 30.00, imagenes: [""] },
  { id: 213, nombre: "TUBO TAPA ROJA X 6ML - PAQUETE X 100 UND", categoria: "Equipos Médicos", subcategoria: "Descartables", precio: 30.00, imagenes: [""] }
];

// --- BLOQUE 7: ORTOPEDIA - SILLAS DE RUEDAS (214 - 224) ---
const productosOrtopediaSillas = [
  { id: 214, nombre: "SILLA DE PASEO ALUMINIO", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 480.00, imagenes: [""] },
  { id: 215, nombre: "SILLA DE RUEDAS CROMADA 2 FRENOS", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 330.00, imagenes: [""] },
  { id: 216, nombre: "SILLA DE RUEDAS CROMADA 4 FRENOS", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 350.00, imagenes: [""] },
  { id: 217, nombre: "SILLA DE RUEDAS CROMADA DOBLE FORRO", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 370.00, imagenes: [""] },
  { id: 218, nombre: "SILLA DE RUEDAS ELECTRICA", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 0.00, imagenes: [""] },
  { id: 219, nombre: "SILLA ESTANDAR ALUMINIO", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 580.00, imagenes: [""] },
  { id: 220, nombre: "SILLA TIPO MALETA ALUMINIO", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 530.00, imagenes: [""] },
  { id: 221, nombre: "SILLA TRAUMATOLOGICA 3 EN 1", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 520.00, imagenes: [""] },
  { id: 222, nombre: "SILLA TRAUMATOLOGICA 5 EN 1 CROMADA", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 750.00, imagenes: [""] },
  { id: 223, nombre: "SILLA TRAUMATOLOGICA 5 EN 1 PINTADA", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 580.00, imagenes: [""] },
  { id: 224, nombre: "SLLA DE RUEDAS ECONOMICA", categoria: "Ortopedia", subcategoria: "Sillas de Ruedas", precio: 250.00, imagenes: [""] }
];

// --- BLOQUE 8: ORTOPEDIA - CAMAS CLÍNICAS (225 - 229) ---
const productosOrtopediaCamas = [
  { id: 225, nombre: "CAMA CLINICA 4 FUNCIONES ELECTRICA", categoria: "Ortopedia", subcategoria: "Camas Clínicas", precio: 0.00, imagenes: [""] },
  { id: 226, nombre: "CAMA CLINICA DE 2 FUNCIONES", categoria: "Ortopedia", subcategoria: "Camas Clínicas", precio: 850.00, imagenes: [""] },
  { id: 227, nombre: "CAMA CLINICA DE 3 FUNCIONES", categoria: "Ortopedia", subcategoria: "Camas Clínicas", precio: 1600.00, imagenes: [""] },
  { id: 228, nombre: "CAMA CLINICA MULTIFUNCIONAL", categoria: "Ortopedia", subcategoria: "Camas Clínicas", precio: 1650.00, imagenes: [""] },
  { id: 229, nombre: "CAMILLA DE MASAJES PORTATIL", categoria: "Ortopedia", subcategoria: "Camas Clínicas", precio: 400.00, imagenes: [""] }
];

// --- BLOQUE 9: ORTOPEDIA - PRODUCTOS Y ACCESORIOS (230 - 247) ---
const productosOrtopediaAccesorios = [
  { id: 230, nombre: "ANDADOR DE ALUMINIO CON ASIENTO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 180.00, imagenes: [""] },
  { id: 231, nombre: "ANDADOR DE ALUMINIO CON RUEDA", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 110.00, imagenes: [""] },
  { id: 232, nombre: "ANDADOR DE ALUMINIO SIN RUEDA", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 100.00, imagenes: [""] },
  { id: 233, nombre: "BASTON CANADIENSE", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 50.00, imagenes: [""] },
  { id: 234, nombre: "BASTON DE 1 PATA ALUMINIO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 40.00, imagenes: [""] },
  { id: 235, nombre: "BASTON DE 4 PATAS ALUMINIO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 50.00, imagenes: [""] },
  { id: 236, nombre: "BASTON DE 4 PATAS CROMADA", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 50.00, imagenes: [""] },
  { id: 237, nombre: "BOTA WALKER CAÑA ALTA/BAJA", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 160.00, imagenes: [""] },
  { id: 238, nombre: "CHATA DE PLASTICO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 30.00, imagenes: [""] },
  { id: 239, nombre: "COGIN DE GEL HERRADURA", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 70.00, imagenes: [""] },
  { id: 240, nombre: "COGIN DE GEL RESPALDAR", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 70.00, imagenes: [""] },
  { id: 241, nombre: "COGIN PICARON DE GEL", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 70.00, imagenes: [""] },
  { id: 242, nombre: "COLCHON ATIESCARAS FLUTECH", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 120.00, imagenes: [""] },
  { id: 243, nombre: "COLCHON ATIESCARAS UNICARE", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 150.00, imagenes: [""] },
  { id: 244, nombre: "ELEVADOR DE INODORO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 140.00, imagenes: [""] },
  { id: 245, nombre: "MULETA GRADUABLE ALUMINIO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 70.00, imagenes: [""] },
  { id: 246, nombre: "SANITARIO PORTATIL", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 180.00, imagenes: [""] },
  { id: 247, nombre: "SILLA DE DUCHA ALUMINIO", categoria: "Ortopedia", subcategoria: "Productos y Accesorios", precio: 160.00, imagenes: [""] }
];

// --- BLOQUE 10: MOBILIARIO MÉDICO - EMERGENCIA (TRAUMA) (248 - 258) ---
const productosMobiliarioEmergencia = [
  { id: 248, nombre: "CAMILLA DE LONA AZED ETT-02", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 200.00, imagenes: [""] },
  { id: 249, nombre: "CAMILLA METALICA DE RESCATE TIPO CANASTILLA", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 380.00, imagenes: [""] },
  { id: 250, nombre: "CAMILLA METALICA DE RESCATE TIPO CANASTILLA CON TABLA", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 480.00, imagenes: [""] },
  { id: 251, nombre: "COCHE DE PARO AZED UD7-E5", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 1800.00, imagenes: [""] },
  { id: 252, nombre: "COLLARIN SERVICAL", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 0.00, imagenes: [""] },
  { id: 253, nombre: "CORREA SPIDER", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 50.00, imagenes: [""] },
  { id: 254, nombre: "FERULAS", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 0.00, imagenes: [""] },
  { id: 255, nombre: "INMOVILIZADOR DE CABEZA JHAS YJK-16", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 165.00, imagenes: [""] },
  { id: 256, nombre: "MALETIN DE ABORDAJE", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 0.00, imagenes: [""] },
  { id: 257, nombre: "MANTA TERMICA PLATEADA 160 x 210", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 10.00, imagenes: [""] },
  { id: 258, nombre: "TABLA RIGIDA", categoria: "Mobiliario", subcategoria: "Emergencia (Trauma)", precio: 180.00, imagenes: [""] }
];

// --- BLOQUE 11: MOBILIARIO - MOBILIARIO MÉDICO ---
const productosMobiliarioMedico = [
  { id: 259, nombre: "BIOMBO DE 2 CUERPOS", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 170.00, imagenes: [""] },
  { id: 260, nombre: "BIOMBO DE 3 CUERPOS", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 190.00, imagenes: [""] },
  { id: 261, nombre: "CAMILLA GINECOLOGICA", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 350.00, imagenes: [""] },
  { id: 262, nombre: "CAMILLA PARA EXAMEN MEDICO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 300.00, imagenes: [""] },
  { id: 263, nombre: "COCHE DE CURACIONES DE 1 CAJON", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 150.00, imagenes: [""] },
  { id: 264, nombre: "COCHE DE CURACIONES DE DOS CAJONES", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 180.00, imagenes: [""] },
  { id: 265, nombre: "COCHE DE CURACIONES DE DOS CAJONES AMOBLADO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 330.00, imagenes: [""] },
  { id: 266, nombre: "ESCALINATA DE 1 PELDAÑO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 80.00, imagenes: [""] },
  { id: 267, nombre: "ESCALINATA DE 2 PELDAÑO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 110.00, imagenes: [""] },
  { id: 268, nombre: "INFANTOMETRO CON PLATAFORMA", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 0.00, imagenes: [""] },
  { id: 269, nombre: "LAMPARA CUELLO DE GANSO DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 0.00, imagenes: [""] },
  { id: 270, nombre: "MESA DE MAYO CROMADA", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 180.00, imagenes: [""] },
  { id: 271, nombre: "MESA DE MAYO PINTADA", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 0.00, imagenes: [""] },
  { id: 272, nombre: "PORTA SUERO CROMADO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 130.00, imagenes: [""] },
  { id: 273, nombre: "PORTA SUERO PINTADO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 90.00, imagenes: [""] },
  { id: 274, nombre: "SILLA PARA TOMA DE MUESTRA", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 180.00, imagenes: [""] },
  { id: 275, nombre: "TABURETE HIDRAULICO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 0.00, imagenes: [""] },
  { id: 276, nombre: "VITRINA DE 1 CUERPO", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 350.00, imagenes: [""] },
  { id: 277, nombre: "VITRINA DE 2 CUERPOS", categoria: "Mobiliario", subcategoria: "Mobiliario Médico", precio: 450.00, imagenes: [""] }
];

// --- BLOQUE: MOBILIARIO MÉDICO - OTROS (278 - 289) ---
const productosMobiliarioOtros = [
  { id: 278, nombre: "CAJA DE ACERO INOXIDABLE PARA INSTRUMENTAL", categoria: "Mobiliario", subcategoria: "Otros", precio: 0.00, imagenes: [""] },
  { id: 279, nombre: "CHATA DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Otros", precio: 100.00, imagenes: [""] },
  { id: 280, nombre: "ESTERILIZADOR CALOR SECO MARCA OVENS", categoria: "Mobiliario", subcategoria: "Otros", precio: 0.00, imagenes: [""] },
  { id: 281, nombre: "ESTUCHE DE DISECCION 9 PIEZAS", categoria: "Mobiliario", subcategoria: "Otros", precio: 30.00, imagenes: [""] },
  { id: 282, nombre: "PAD DE SUTURA 17 CORTES", categoria: "Mobiliario", subcategoria: "Otros", precio: 20.00, imagenes: [""] },
  { id: 283, nombre: "PAPAGAYO DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Otros", precio: 65.00, imagenes: [""] },
  { id: 284, nombre: "RIÑONERAS DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Otros", precio: 0.00, imagenes: [""] },
  { id: 285, nombre: "TACHO DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Otros", precio: 0.00, imagenes: [""] },
  { id: 286, nombre: "TAMBOR DE ACERO INOXIDABLE", categoria: "Mobiliario", subcategoria: "Otros", precio: 0.00, imagenes: [""] },
  { id: 287, nombre: "TERMO PORTA VACUNAS BIOBASE DE 12 LITROS", categoria: "Mobiliario", subcategoria: "Otros", precio: 350.00, imagenes: [""] },
  { id: 288, nombre: "TERMO PORTA VACUNAS BIOBASE DE 20 LITROS", categoria: "Mobiliario", subcategoria: "Otros", precio: 400.00, imagenes: [""] },
  { id: 289, nombre: "TERMO PORTA VACUNAS BIOBASE DE 6 LITROS", categoria: "Mobiliario", subcategoria: "Otros", precio: 280.00, imagenes: [""] }
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

// 🔹 Configuración Cloudinary
const CLOUD_NAME = "dds7iswlk";

function getImagen(nombre) {
  // Imagen por defecto
  if (!nombre) return "";
  
  // Detectar URLs completas
  if (nombre.startsWith("http")) return nombre;
  
  // Detectar rutas locales
  if (nombre.startsWith("img/")) return nombre;
  
  // Constructor de Cloudinary
  return `https://res.cloudinary.com/dds7iswlk/image/upload/w_300,f_auto,q_auto/v1/${nombre}`;
}



// 🔹 Render de productos
function renderizarProductos(lista) {
  if (!productsGrid) return;

  productsGrid.innerHTML = lista
    .map((product) => {
      const pImage = (product.imagenes && product.imagenes.length > 0)
        ? getImagen(product.imagenes[0], 300)
        : (product.imagen ? product.imagen : "");

      const pnombre = product.nombre;
      const pprecio = product.precio;

      return `
      <article class="product-card">
        <div class="product-media" style="padding: 0; overflow: hidden;">
          <img 
            src="${pImage}" 
            alt="${pnombre}" 
            loading="lazy"
            onerror="this.src='"
            style="width:100%; aspect-ratio:1/1; object-fit:contain;"
          >
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

          <button 
            class="add-to-cart" 
            type="button" 
            data-product-id="${product.id}">
            Agregar
          </button>
        </div>
      </article>
      `;
    })
    .join("");

  // 🔹 Eventos carrito
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
