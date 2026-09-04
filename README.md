# Perfilados de Acero, S.A. 🇬🇹
Plataforma web moderna y catálogo interactivo de productos de acero y servicios industriales en Guatemala.

---

## 🚀 Características Principales

- **Catálogo Interactivo con Filtros:** Clasificación por *Láminas y Mallas*, *Perfiles y Barras*, *Tubería Estructural* y *Servicios*, con buscador por calibre y producto.
- **Fichas Técnicas Detalladas:** Modales con especificaciones técnicas, normas ASTM, tablas de medidas y aplicaciones industriales.
- **Cotizador Rápido Directo a WhatsApp:** El cliente elige producto, medida/calibre, cantidad y departamento de entrega; el cotizador arma automáticamente el mensaje redactado para WhatsApp (`+502 4125 6062`) o correo electrónico.
- **Servicios Especializados:** Secciones dedicadas a *Ranuración de Tubos (Roll Grooving)* para sistemas contra incendios y *Renta de Montacargas*.
- **Datos 100% Centralizados:** Teléfonos, dirección, horarios y enlaces se modifican en un solo archivo: `src/data/company.ts`.
- **Diseño Ultrarrápido y Responsivo:** Construido con **React 18 + Vite + Tailwind CSS**, optimizado para teléfonos celulares y computadoras.

---

## 🛠️ Cómo Ejecutar el Proyecto en tu Computadora

1. Abre tu terminal en la carpeta del proyecto:
   ```bash
   cd "C:\Users\Eliseo Santos\Documents\Perfilados-de-Acero"
   ```

2. Instala las dependencias (usando pnpm):
   ```bash
   pnpm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```
   Abre en tu navegador el enlace que muestra la consola (usualmente `http://localhost:5173`).

---

## 🌐 Cómo Desplegarlo Gratis para Mostrárselo a tu Jefe

### Opción 1: En Vercel (Recomendado - Toma 1 minuto)
1. Sube los cambios a tu repositorio de GitHub:
   ```bash
   git add .
   git commit -m "feat: nueva web corporativa de Perfilados de Acero"
   git push origin main
   ```
2. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **"Add New"** > **"Project"**.
4. Selecciona tu repositorio `Perfilados-de-Acero`.
5. Vercel detectará automáticamente que es **Vite** y **pnpm**. No tienes que cambiar nada, solo presiona **"Deploy"**.
6. En 20 segundos tendrás un enlace público HTTPS (ej. `perfilados-de-acero.vercel.app`) listo para compartir.

### Opción 2: En GitHub Pages
El proyecto ya cuenta con `base: './'` configurado en `vite.config.ts` para que los enlaces y assets funcionen en cualquier subcarpeta.
1. Ejecuta la compilación de producción:
   ```bash
   pnpm build
   ```
2. La carpeta generada `dist` contiene la versión compilada y lista para publicar.

---

## 📁 Estructura del Código

- `src/data/company.ts` -> Teléfono, WhatsApp, correo, horarios y cobertura.
- `src/data/products.ts` -> Catálogo de productos, calibres y especificaciones.
- `src/data/services.ts` -> Servicios de ranuración, montacargas y corte.
- `src/components/` -> Componentes modulares (Navbar, Hero, ProductCatalog, QuoteCalculator, etc.).
