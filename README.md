# Perfilados de Acero, S.A. 🇬🇹

Plataforma web corporativa y catálogo digital interactivo para **Perfilados de Acero, S.A.**, empresa guatemalteca especializada en la distribución de acero estructural, láminas industriales, rejillas y servicios de habilitado de materiales para el sector de la construcción y metalmecánica.

---

## 🚀 Características

- **Catálogo Interactivo:** Explorador de productos clasificado por categorías (*Láminas y Mallas*, *Perfiles y Barras*, *Tubería Estructural*) con buscador en tiempo real y filtrado por calibres.
- **Fichas Técnicas ASTM:** Modales con especificaciones detalladas, normas internacionales (ASTM A36, A500, A1011, NAAMM), propiedades mecánicas y aplicaciones sugeridas.
- **Cotizador Inteligente con Integración a WhatsApp:** Generador interactivo de cotizaciones que estructura la solicitud (producto, dimensiones, cantidad y destino en Guatemala) y genera el enlace directo hacia WhatsApp o correo electrónico comercial.
- **Servicios Especializados:** Secciones informativas para *Ranuración de Tubos (Roll Grooving)* para sistemas contra incendios y *Renta de Montacargas Industriales*.
- **Diseño Responsivo y Alto Rendimiento:** Interfaz moderna con tema industrial desarrollada con React y Tailwind CSS, diseñada para carga ultrarrápida en dispositivos móviles y de escritorio.
- **Recursos Gráficos 100% Locales:** Imágenes y multimedia empaquetados localmente con licencias libres para uso comercial (Unsplash / Pexels).

---

## 🛠️ Stack Tecnológico

- **Frontend:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Empaquetador:** [Vite](https://vitejs.dev/)
- **Gestor de Paquetes:** [pnpm](https://pnpm.io/)

---

## 📦 Instalación y Desarrollo Local

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [pnpm](https://pnpm.io/installation)

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/Perfilados-de-Acero.git
   cd Perfilados-de-Acero
   ```

2. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

4. **Compilar para producción:**
   ```bash
   pnpm build
   ```
   Los archivos listos para producción se generarán en el directorio `dist/`.

5. **Previsualizar la compilación de producción:**
   ```bash
   pnpm preview
   ```

---

## 📂 Estructura del Proyecto

```text
├── public/                 # Archivos estáticos y video de portada
├── src/
│   ├── assets/             # Recursos gráficos e imágenes locales
│   ├── components/         # Componentes modulares de interfaz de usuario
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCatalog.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductModal.tsx
│   │   ├── QuoteCalculator.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── data/               # Datos de la empresa, catálogo y servicios
│   │   ├── company.ts      # Configuración de contacto (teléfonos, correos, horarios)
│   │   ├── products.ts     # Catálogo de productos y especificaciones
│   │   └── services.ts     # Servicios y características
│   ├── types/              # Interfaces y tipos de TypeScript
│   ├── App.tsx             # Componente raíz
│   └── main.tsx            # Punto de entrada de la aplicación
├── LEGAL_LICENSES.md       # Certificación de licencias de recursos gráficos
├── vite.config.ts          # Configuración de compilación (rutas relativas)
└── package.json
```

---

## 🌐 Despliegue

La aplicación está configurada con rutas relativas (`base: './'`), lo que permite desplegarla fácilmente en cualquier plataforma de hosting estático:

- **Vercel / Netlify:** Conectar el repositorio de GitHub y la plataforma detectará automáticamente la configuración de Vite y pnpm.
- **GitHub Pages:** La carpeta `dist` resultante de `pnpm build` puede publicarse directamente a través de GitHub Actions o la rama `gh-pages`.

---

## 📄 Licencia

Este proyecto fue desarrollado para Perfilados de Acero, S.A. Consulte el archivo [LEGAL_LICENSES.md](LEGAL_LICENSES.md) para conocer las licencias de las imágenes y recursos multimedia utilizados.
