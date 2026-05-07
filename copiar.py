import os
import shutil

# Configuración
ruta_origen ='D:/galeria/galeria_drive/laboratorio/REACTIVOS'
ruta_destino ='D:/galeria/Zummed'
extensiones_validas = ('.jpg', '.jpeg', '.png', '.webp')

if not os.path.exists(ruta_destino):
    os.makedirs(ruta_destino)

contador = 79

# Recorrer cada subcarpeta dentro de EQUIPOS
for nombre_carpeta in os.listdir(ruta_origen):
    ruta_subcarpeta = os.path.join(ruta_origen, nombre_carpeta)
    
    # Verificar que sea una carpeta
    if os.path.isdir(ruta_subcarpeta):
        # Listar archivos de la subcarpeta y ordenarlos
        archivos = sorted(os.listdir(ruta_subcarpeta))
        
        # Buscar la primera imagen válida
        for archivo in archivos:
            if archivo.lower().endswith(extensiones_validas):
                ruta_original = os.path.join(ruta_subcarpeta, archivo)
                
                # Definir nuevo nombre con ID
                extension = os.path.splitext(archivo)[1]
                nuevo_nombre = f"{contador}{extension}"
                ruta_nueva = os.path.join(ruta_destino, nuevo_nombre)
                
                # Copiar archivo
                shutil.copy2(ruta_original, ruta_nueva)
                print(f"Copiada primera imagen de: {nombre_carpeta} -> {nuevo_nombre}")
                
                contador += 1
                break  # <--- IMPORTANTE: Sale del bucle para no tomar más fotos de esta carpeta

print(f"\nProceso terminado. Se extrajeron {contador - 1} imágenes (una por carpeta).")